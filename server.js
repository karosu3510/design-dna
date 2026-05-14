// Variant Clone — local dev server with Anthropic proxy
// 启动：node server.js  →  http://localhost:5173
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
try {
  await import('dotenv/config');
} catch (_) {
  // dotenv is optional: static preview should still boot without node_modules.
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5173;
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5';
const BATCH_SIZE = Number(process.env.BATCH_SIZE || 3);

let client = null;
if (process.env.ANTHROPIC_API_KEY) {
  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  } catch (_) {
    console.warn('\n⚠️  @anthropic-ai/sdk 未安装 —— /api/generate 将返回 503。');
    console.warn('   运行 npm install 后可启用 AI 生成；静态灵感库预览不受影响。\n');
  }
} else {
  console.warn('\n⚠️  ANTHROPIC_API_KEY 未设置 —— /api/generate 将返回 503。');
  console.warn('   把 key 写入 .env：echo "ANTHROPIC_API_KEY=sk-ant-xxx" > .env；静态灵感库预览不受影响。\n');
}

// ───── 静态文件 ─────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
};
function serveStatic(req, res) {
  const url = req.url.split('?')[0];
  let rel = url === '/' ? '/index.html' : url;
  const fp = path.join(__dirname, rel);
  if (!fp.startsWith(__dirname)) { res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(fp, (err, buf) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    });
    res.end(buf);
  });
}

// ───── prompt builder ─────
const STYLE_HINTS = {
  notion:    'Notion warmth — cream #FAF7F2, ink #37352F, accent rust #C84A1B, IBM Plex Serif headings, generous spacing, soft borders.',
  linear:    'Linear precision — near-black #0A0B0D, indigo #5E6AD2, Inter, sharp 8px radius, technical density, subtle grid lines.',
  stripe:    'Stripe gradient — white base, electric purple→blue gradients (#635BFF), Söhne/Inter, rounded 12px, lots of whitespace, code samples.',
  vercel:    'Vercel mono — pure black & white, geometric sans, ultra-tight letter spacing, monospaced accents, minimal color (one neon).',
  brutal:    'Neo-brutalist — flat #FFEB3B/#FF6B35/#000, 4px hard borders, no shadows, blocky type, uppercase, asymmetric layout.',
  pastel:    'Soft pastel — #FFE5EC #E8F5E9 #FFF9C4, rounded 24px, gentle shadows, hand-drawn feel, playful microinteractions.',
  editorial: 'Editorial — serif display (Playfair-style), cream paper #F4EDE0, large drop caps, magazine columns, photography-driven.',
  cyber:     'Cyber neon — pitch black, neon green #39FF14 / magenta, monospaced, scanline overlays, glitchy hover states.',
};

function systemPrompt() {
  return `You are a senior UI engineer generating self-contained, scrollable, ANIMATED web design previews for an inspiration gallery (like Variant.com).

OUTPUT FORMAT — return ONLY a JSON array, no prose, no markdown fences:
[
  {
    "title": "Short human-readable design title (max 50 chars)",
    "height": 380,
    "doc": "<!doctype html><html>...full self-contained HTML...</html>"
  },
  ...
]

HARD REQUIREMENTS for each "doc":
1. A single complete HTML document with inline <style> and <script>. No external requests, no fonts CDNs, no images (use SVG/CSS/emoji).
2. Width 100%, height ~360–620px (set body min-height accordingly and put it in the "height" field).
3. MUST include at least ONE genuine interaction or animation: hover state with transform, marquee/scroll, typewriter, counter, cursor parallax, click ripple, draggable card, animated chart, etc. Cards should feel alive when scrolled past.
4. Use the style tokens provided (colors, fonts, radius). Avoid the default "purple gradient + Inter" trap.
5. Reflect the user's prompt in the headline/copy — don't render generic lorem ipsum.
6. Keep doc size under ~6KB. Use CSS variables. Inline-everything.
7. Sandbox-safe: no top-level navigation, no localStorage, no fetch.

VARY the layout types across the batch: hero, dashboard fragment, pricing card, feature grid, testimonial, stats counter, kanban, chat UI, mobile mockup, sidebar nav, etc. Don't repeat the same archetype.`;
}

function userPrompt(promptText, n) {
  const styles = Object.entries(STYLE_HINTS)
    .map(([id, hint]) => `- ${id}: ${hint}`)
    .join('\n');
  return `User prompt: """${promptText}"""

Generate ${n} DIFFERENT design variants. For each one, pick a DIFFERENT style from this palette and a DIFFERENT layout archetype:

${styles}

Return the JSON array now.`;
}

// ───── /api/generate ─────
async function handleGenerate(req, res) {
  if (!client) {
    res.writeHead(503, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured on server.' }));
  }
  let body = '';
  req.on('data', c => body += c);
  req.on('end', async () => {
    try {
      const { prompt = '', n = BATCH_SIZE } = JSON.parse(body || '{}');
      const count = Math.max(1, Math.min(6, Number(n) || BATCH_SIZE));
      const t0 = Date.now();
      console.log(`[gen] prompt="${prompt.slice(0,60)}" n=${count} model=${MODEL}`);

      const msg = await client.messages.create({
        model: MODEL,
        max_tokens: 16000,
        system: systemPrompt(),
        messages: [{ role: 'user', content: userPrompt(prompt, count) }],
      });

      const text = msg.content
        .filter(b => b.type === 'text')
        .map(b => b.text)
        .join('');

      // 容错：模型偶尔会包 ```json
      const cleaned = text.replace(/^```(?:json)?/m, '').replace(/```$/m, '').trim();
      let arr;
      try {
        arr = JSON.parse(cleaned);
      } catch (e) {
        const start = cleaned.indexOf('[');
        const end = cleaned.lastIndexOf(']');
        if (start >= 0 && end > start) arr = JSON.parse(cleaned.slice(start, end + 1));
        else throw new Error('Model did not return JSON: ' + cleaned.slice(0, 200));
      }

      const ms = Date.now() - t0;
      const usage = msg.usage || {};
      console.log(`[gen] ✓ ${arr.length} designs in ${ms}ms · in=${usage.input_tokens} out=${usage.output_tokens}`);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ designs: arr, ms, usage }));
    } catch (err) {
      console.error('[gen] ✗', err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  });
}

// ───── server ─────
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/generate') return handleGenerate(req, res);
  if (req.method === 'GET'  && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      ok: true,
      hasKey: !!process.env.ANTHROPIC_API_KEY,
      model: MODEL,
      batchSize: BATCH_SIZE,
    }));
  }
  if (req.method === 'GET') return serveStatic(req, res);
  res.writeHead(405); res.end();
});

server.listen(PORT, () => {
  console.log(`\n  Variant Clone  →  http://localhost:${PORT}`);
  console.log(`  model: ${MODEL}  ·  batch: ${BATCH_SIZE}  ·  key: ${process.env.ANTHROPIC_API_KEY ? '✓' : '✗ (set .env)'}\n`);
});
