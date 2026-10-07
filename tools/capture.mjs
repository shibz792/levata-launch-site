// Capture website screenshots for a prospect deck.
//
//   cd tools && npm install            (first time only)
//   node tools/capture.mjs <prospect-slug> site=https://client.co.nz comp1=https://competitor.co.nz
//
// Writes assets/prospects/<slug>/<name>.jpg (desktop, 1440 wide, up to 2600px tall)
// and <name>-mobile.jpg (390 wide). Reference them from prospects/<slug>.js.

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [slug, ...pairs] = process.argv.slice(2);
if (!slug || !pairs.length) {
  console.error('usage: node tools/capture.mjs <slug> name=url [name=url ...]');
  process.exit(1);
}
const outDir = resolve(root, 'assets/prospects', slug);
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const pair of pairs) {
  const i = pair.indexOf('=');
  const name = pair.slice(0, i);
  let url = pair.slice(i + 1);
  if (!/^(https?|file):/.test(url)) url = pathToFileURL(resolve(url)).href;

  for (const [suffix, viewport, maxH] of [['', { width: 1440, height: 900 }, 2600], ['-mobile', { width: 390, height: 844 }, 2400]]) {
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2, isMobile: suffix === '-mobile' });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
    // scroll through once so scroll-triggered reveals and lazy images fire
    await page.evaluate(async (maxH) => {
      for (let y = 0; y < maxH; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
    }, maxH);
    await page.waitForTimeout(1500);
    const h = Math.min(maxH, await page.evaluate(() => document.documentElement.scrollHeight));
    const file = resolve(outDir, `${name}${suffix}.jpg`);
    await page.screenshot({ path: file, type: 'jpeg', quality: 82, clip: { x: 0, y: 0, width: viewport.width, height: h }, fullPage: true });
    console.log('saved', file.replace(root + '/', ''));
    await ctx.close();
  }
}
await browser.close();
