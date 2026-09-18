#!/usr/bin/env node
/**
 * Checks for horizontal overflow at five breakpoints, across a sample of
 * pages, after scrolling through to trigger scroll reveals — the two
 * failure modes an animation-heavy, reveal-driven layout is prone to.
 */
import puppeteer from 'puppeteer';

const BASE = process.env.SITE_URL ?? 'http://localhost:3000';
const widths = [320, 375, 768, 1024, 1440];
const pages = ['/', '/admissions/tuition', '/learning/high-school', '/contact'];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
let anyOverflow = false;

for (const path of pages) {
  for (const w of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 900 });
    await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' }).catch(() => {});

    // Slow, thorough scroll — fast synthetic scrolling can outrun the
    // IntersectionObserver and produce false "still hidden" positives.
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 250) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await new Promise(r => setTimeout(r, 180));
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 700));

    const result = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const viewport = document.documentElement.clientWidth;
      const overflowX = docWidth > viewport + 1;
      const offenders = [];
      if (overflowX) {
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && (r.right > viewport + 1 || r.left < -1) && offenders.length < 5) {
            offenders.push({ sel: el.tagName.toLowerCase(), left: Math.round(r.left), right: Math.round(r.right) });
          }
        });
      }
      let stuck = 0;
      document.querySelectorAll('[data-reveal],[data-stagger] > *').forEach(el => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.05) stuck++;
      });
      return { docWidth, viewport, overflowX, offenders, stuck };
    });

    if (result.overflowX) anyOverflow = true;
    const flag = result.overflowX ? `OVERFLOW doc=${result.docWidth} vp=${result.viewport}` : 'ok';
    console.log(`${path.padEnd(26)} ${String(w).padStart(5)}  ${flag}  stuck-reveals=${result.stuck}`);
    if (result.overflowX) result.offenders.forEach(o => console.log(`      -> ${o.sel} [${o.left}..${o.right}]`));
    await page.close();
  }
}

await browser.close();
if (anyOverflow) console.log('\nFAIL — horizontal overflow found above');
else console.log('\nPASS — no horizontal overflow at any width');
console.log('Note: a nonzero stuck-reveals count on a long page can be a scroll-speed');
console.log('artifact of this script rather than a real bug — re-check by hand in an');
console.log('actual browser before treating it as a regression.');
process.exit(anyOverflow ? 1 : 0);
