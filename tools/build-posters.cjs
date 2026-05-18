#!/usr/bin/env node
/**
 * tools/build-posters.cjs
 * --------------------------------
 * Variant 式 feed 录制脚本：批量为 34 张 Design DNA 卡片产出
 *   - posters/<slug>.webm  （6 秒静音 loop，VP9，浏览器原生 video 即可循环）
 *   - posters/<slug>.jpg   （首帧 poster，作为 video 的占位 + 静态 fallback）
 *
 * 设计原则（对齐 SOUL.md 的「不再靠 33 个 live iframe 撑」）：
 *   1. 用 Playwright + 本机 Chrome 通道（避免下载完整 Chromium）。
 *   2. 1100×720 视图，等待 1.5s 暖机 + 跳过开屏入场动画后开始录。
 *   3. 录 6 秒，再用 Page.screenshot 截 jpg 首帧 poster。
 *   4. 输出体积控制：每张 ≤ ~600KB（webm vp9 默认 + 6s + 1100×720）。
 *
 * 用法：
 *   node tools/build-posters.cjs            # 录全部（缺什么补什么）
 *   node tools/build-posters.cjs --force    # 全量覆盖
 *   node tools/build-posters.cjs slug1 slug2  # 仅录指定 slug
 *
 * 依赖：本机 Google Chrome（macOS）+ playwright 包（来自 agent-browser 或自行安装）。
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

// 解析 playwright 模块路径：优先用工作区，回退 agent-browser CLI 自带的
function resolvePlaywright() {
  try { return require('playwright'); } catch (_) {}
  const fallback = '/Users/karo/.workbuddy/binaries/node/versions/22.12.0/lib/node_modules/@playwright/cli/node_modules/playwright';
  if (fs.existsSync(fallback)) return require(fallback);
  throw new Error('playwright not installed');
}

const ROOT = path.resolve(__dirname, '..');
const POSTERS = path.join(ROOT, 'posters');
const VIDEO_TMP = path.join(POSTERS, '_tmp_video');
fs.mkdirSync(POSTERS, { recursive: true });
fs.mkdirSync(VIDEO_TMP, { recursive: true });

// slug → cards/<slug>.html，与 index.html 的 externalUrl 一一对应
const TARGETS = [
  ['a-record', 'a-record.html'],
  ['vercel-deploy', 'vercel-deploy.html'],
  ['book-gallery-3d', 'book-gallery-3d.html'],
  ['delphi-three', 'delphi-three.html'],
  ['webgl-magazine', 'webgl-magazine.html'],
  ['pixel-gooey-tooltip', 'pixel-gooey-tooltip.html'],
  ['skeleton-fluid-reveal', 'skeleton-fluid-reveal.html'],
  ['card-beam-animation', 'card-beam-animation.html'],
  ['pixel-transition', 'pixel-transition.html'],
  ['makeway-grid-effect', 'makeway-grid-effect.html'],
  ['text-repetition-effect', 'text-repetition-effect.html'],
  ['cinematic-3d-scroll', 'cinematic-3d-scroll.html'],
  ['scroll-3d-grid', 'scroll-3d-grid.html'],
  ['gpu-io-fluid', 'gpu-io-fluid.html'],
  ['glitch-perspective', 'glitch-perspective.html'],
  ['marginalia', 'marginalia.html'],
  ['lucid-drift', 'lucid-drift.html'],
  ['chronicles', 'chronicles-solitude.html'],
  ['hardware-console', 'hardware-console.html'],
  ['weaverine', 'weaverine-textiles.html'],
  ['pocket-terminal', 'pocket-terminal.html'],
  ['anomaly-signal', 'anomaly-signal.html'],
  ['dmx-controller', 'dmx-controller.html'],
  ['symmetry-ticket', 'symmetry-ticket.html'],
  ['notion-knowledge', 'notion-knowledge.html'],
  ['chainx-dashboard', 'chainx-dashboard.html'],
  ['nathan-smith', 'nathan-smith.html'],
  ['lorenzo-daldosso', 'lorenzo-daldosso.html'],
  ['carrot-tech', 'carrot-tech.html'],
  ['architecture-overview', 'architecture-overview.html'],
  // buildPinnedFor 系列（nothing / retro-ascii / linear / nothing-mobile / mercury）
  // 没有独立 HTML，由 index.html 内联模板渲染。这 5 张保持「常驻 live iframe」即可：
  // 5 张 live iframe 仍在 ≤6 的安全 CPU 预算内，剩下 29 张走 video poster。
];

const BASE = process.env.POSTER_BASE || 'http://localhost:8765/';
const RECORD_MS = 6200;     // 录 6.2 秒，前端 video loop 自动接缝
const WARMUP_MS = 1500;     // 暖机，等卡片首屏 layout/font/asset
const VIEWPORT = { width: 1100, height: 720 };

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const onlySlugs = args.filter(a => !a.startsWith('--'));

function chromeExec() {
  // 仅 macOS：用本机 Chrome 通道，避免下载 ~300MB Chromium
  return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
}

async function recordOne(browser, slug, urlSuffix) {
  const webmOut = path.join(POSTERS, `${slug}.webm`);
  const jpgOut = path.join(POSTERS, `${slug}.jpg`);
  if (!FORCE && fs.existsSync(webmOut) && fs.existsSync(jpgOut)) {
    console.log(`  · skip ${slug} (already recorded)`);
    return;
  }
  const url = urlSuffix.startsWith('?') ? BASE.replace(/\/$/, '/') + urlSuffix : BASE + urlSuffix;

  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    recordVideo: { dir: VIDEO_TMP, size: VIEWPORT },
  });
  const page = await ctx.newPage();
  let ok = true;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
    await page.waitForTimeout(WARMUP_MS);
    // 截 jpg 首帧 poster（在录制中也能截，不影响 video 输出）
    await page.screenshot({ path: jpgOut, type: 'jpeg', quality: 82, fullPage: false });
    await page.waitForTimeout(RECORD_MS);
  } catch (e) {
    console.warn(`  ! ${slug} navigate/wait failed: ${e.message.slice(0, 140)}`);
    ok = false;
  }
  await page.close();
  await ctx.close();

  // 找出本次会话产生的 webm 文件，rename 到目标
  const files = fs.readdirSync(VIDEO_TMP)
    .filter(f => f.endsWith('.webm'))
    .map(f => ({ f, t: fs.statSync(path.join(VIDEO_TMP, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);
  if (files.length) {
    const newest = path.join(VIDEO_TMP, files[0].f);
    if (ok) {
      try { fs.renameSync(newest, webmOut); }
      catch (_) { fs.copyFileSync(newest, webmOut); fs.unlinkSync(newest); }
      const size = fs.statSync(webmOut).size;
      console.log(`  ✓ ${slug}: ${(size/1024).toFixed(0)}KB`);
    } else {
      try { fs.unlinkSync(newest); } catch(_){}
    }
  } else {
    console.warn(`  ! ${slug}: no video produced`);
  }
}

(async () => {
  // 健康检查
  try {
    require('http').get(BASE, r => { r.resume(); }).on('error', () => {
      console.error(`✗ local server not reachable at ${BASE}; start it first:\n    python3 -m http.server 8765 --directory ${ROOT}`);
      process.exit(2);
    });
  } catch(_){}

  const playwright = resolvePlaywright();
  console.log(`Launching Chrome via Playwright (channel=chrome)…`);
  const browser = await playwright.chromium.launch({
    channel: 'chrome',
    executablePath: chromeExec(),
    headless: true,
  });

  const list = onlySlugs.length
    ? TARGETS.filter(([s]) => onlySlugs.includes(s))
    : TARGETS;
  console.log(`Will record ${list.length} cards (FORCE=${FORCE}).`);
  for (const [slug, suffix] of list) {
    try { await recordOne(browser, slug, suffix); }
    catch (e) { console.warn(`  ! ${slug}: ${e.message.slice(0,140)}`); }
  }
  await browser.close();

  // 清空 tmp 目录
  try { for (const f of fs.readdirSync(VIDEO_TMP)) fs.unlinkSync(path.join(VIDEO_TMP, f)); } catch(_){}

  // 概览
  const out = fs.readdirSync(POSTERS).filter(f => /\.(webm|jpg)$/.test(f));
  console.log(`\nPosters dir contents (${out.length} files):`);
  out.sort().forEach(f => {
    const s = fs.statSync(path.join(POSTERS, f)).size;
    console.log(`  ${f.padEnd(40)} ${(s/1024).toFixed(0)}KB`);
  });
})().catch(e => {
  console.error('FATAL', e);
  process.exit(1);
});
