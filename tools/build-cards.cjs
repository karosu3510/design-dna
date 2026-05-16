#!/usr/bin/env node
/**
 * Build cards manifest from *-doc.js files.
 *
 * Why: 33 个 *-doc.js 同步 <script src> 在首屏 parse 阶段阻塞 ~534KB JS，
 * 把首屏 TTFB→Interactive 拖到 1.5-3s。Tier 1 manifest 化把这些字符串拆成
 * 静态 cards/<slug>.html 文件 + 一份 cards/manifest.json 索引；前端在卡片
 * 真正进入视口时才 fetch HTML 文本写入 iframe.srcdoc。
 *
 * Behavior:
 *   - 从所有 *-doc.js 中抽取 `*_DOC` 字符串（支持 `window.X_DOC = \`...\`` 与
 *     `var X_DOC = "..."` 两种写法）。
 *   - slug = 去掉 `-doc.js` 的文件名（保持与现有 fileMap 一致）。
 *   - 把 HTML 写到 cards/<slug>.html，并生成 cards/manifest.json
 *     （`{ slug: "X_DOC", ... }` 用于把旧的 KEY 映射到新的文件名）。
 *
 * Run: node tools/build-cards.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'cards');
fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('-doc.js'));
const manifest = {};
const sizes = [];

for (const file of files) {
  const slug = file.replace(/-doc\.js$/, '');
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');

  let key, html;
  // 1) template literal: window.X_DOC = `...`
  let m = src.match(/(?:window\.|var\s+)([A-Z0-9_]+_DOC)\s*=\s*`([\s\S]*?)`\s*;?\s*$/m);
  if (m) {
    key = m[1];
    html = m[2];
  } else {
    // 2) double-quoted: var X_DOC = "..."
    m = src.match(/(?:window\.|var\s+)([A-Z0-9_]+_DOC)\s*=\s*"((?:\\.|[^"\\])*)"\s*;?\s*$/m);
    if (m) {
      key = m[1];
      html = JSON.parse('"' + m[2] + '"');
    } else {
      // 3) single-quoted: window.X_DOC = '...'
      m = src.match(/(?:window\.|var\s+)([A-Z0-9_]+_DOC)\s*=\s*'((?:\\.|[^'\\])*)'\s*;?\s*$/m);
      if (!m) {
        console.warn('[skip]', file, '— could not extract DOC string');
        continue;
      }
      key = m[1];
      // 单引号 → 转双引号字符串再 JSON.parse；先把内容里裸的 " 转义，把 \' 还原
      const inner = m[2].replace(/\\'/g, "'").replace(/(?<!\\)"/g, '\\"');
      html = JSON.parse('"' + inner + '"');
    }
  }

  const outFile = path.join(OUT_DIR, slug + '.html');
  fs.writeFileSync(outFile, html, 'utf8');
  manifest[key] = slug; // KEY → slug（前端用 KEY 找文件名）
  sizes.push([slug, html.length]);
}

// 收集 KEY → html 全量内容（顺序：file 解析时同步收集，避免再读盘）
const allHtml = {};
sizes.forEach(([slug]) => {
  const k = Object.keys(manifest).find((x) => manifest[x] === slug);
  if (k) allHtml[k] = fs.readFileSync(path.join(OUT_DIR, slug + '.html'), 'utf8');
});

fs.writeFileSync(
  path.join(OUT_DIR, 'manifest.json'),
  JSON.stringify({ generated: new Date().toISOString(), keys: manifest }, null, 2),
  'utf8'
);

// 同时打一个 bundle：cards/all.json (KEY → html string)，用于首屏一次 fetch 全部预热。
// 30+ 张卡 HTTP/1.1 上并发会被卡到 6 → 串行排队。一次 bundle ~470KB raw / ~120KB gzip
// 比 33 个分开 fetch 快 2-4 倍（少 32 次握手 + 串行排队）。
fs.writeFileSync(path.join(OUT_DIR, 'all.json'), JSON.stringify(allHtml), 'utf8');
const bundleBytes = fs.statSync(path.join(OUT_DIR, 'all.json')).size;
console.log(`✓ Bundle: cards/all.json (${(bundleBytes / 1024).toFixed(1)} KB raw)`);

const total = sizes.reduce((s, [, n]) => s + n, 0);
console.log(`✓ Wrote ${sizes.length} card HTML files (${(total / 1024).toFixed(1)} KB total)`);
console.log(`✓ Manifest: ${Object.keys(manifest).length} keys`);
console.log('Largest 5:');
sizes
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .forEach(([slug, n]) => console.log(`  ${slug}: ${(n / 1024).toFixed(1)} KB`));
