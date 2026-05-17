// 录 vortex-gallery 首帧 poster：1100×720 jpg
const fs = require('fs');
const path = require('path');
const PW = '/Users/karo/.workbuddy/binaries/node/versions/22.12.0/lib/node_modules/@playwright/cli/node_modules/playwright';
const { chromium } = require(PW);

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 720 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  page.on('console', m => console.log('[page]', m.type(), m.text()));
  page.on('pageerror', e => console.log('[err]', e.message));

  const url = process.argv[2] || 'http://localhost:5173/vortex-gallery.html';
  await page.goto(url, { waitUntil: 'load', timeout: 25000 });

  // 等待 vortex-ready 自定义事件 + 暖机 4s 让旋涡转起来
  await page.waitForFunction(() => !!document.querySelector('canvas#webgl'), { timeout: 15000 });
  await new Promise(r => setTimeout(r, 4000));

  // 给一点 wheel 模拟，让中心 plane 有内容、旋涡有动量
  await page.mouse.wheel(0, 800);
  await new Promise(r => setTimeout(r, 1200));
  await page.mouse.wheel(0, 600);
  await new Promise(r => setTimeout(r, 1200));

  const out = process.argv[3] || path.resolve(__dirname, '..', 'posters', 'vortex-gallery.jpg');
  await page.screenshot({ path: out, type: 'jpeg', quality: 85, fullPage: false });
  console.log('saved', out);

  await browser.close();
})();
