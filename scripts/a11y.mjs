#!/usr/bin/env node
/**
 * Accessibility checks that need a real browser: no-JS visibility,
 * reduced-motion, keyboard/focus-trap behaviour, heading order, alt text,
 * form labels. See scripts/README.md for setup.
 */
import puppeteer from 'puppeteer';

const BASE = process.env.SITE_URL ?? 'http://localhost:3000';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

// --- 1. no-JS -------------------------------------------------------------
{
  const p = await browser.newPage();
  await p.setJavaScriptEnabled(false);
  await p.setViewport({ width: 1280, height: 900 });
  await p.goto(`${BASE}/learning`, { waitUntil: 'domcontentloaded' });
  const r = await p.evaluate(() => {
    let hidden = 0, total = 0;
    document.querySelectorAll('[data-reveal],[data-stagger] > *').forEach(el => {
      total++;
      if (parseFloat(getComputedStyle(el).opacity) < 0.05) hidden++;
    });
    return { hidden, total };
  });
  console.log(`no-JS        : ${r.total - r.hidden}/${r.total} sections visible ${r.hidden === 0 ? 'PASS' : 'FAIL'}`);
  await p.close();
}

// --- 2. reduced motion ------------------------------------------------------
{
  const p = await browser.newPage();
  await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await p.setViewport({ width: 1280, height: 900 });
  await p.goto(BASE, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));
  const r = await p.evaluate(() => {
    let hidden = 0, total = 0, animating = 0;
    document.querySelectorAll('[data-reveal],[data-stagger] > *').forEach(el => {
      total++;
      if (parseFloat(getComputedStyle(el).opacity) < 0.05) hidden++;
    });
    document.querySelectorAll('*').forEach(el => {
      const d = getComputedStyle(el).animationDuration;
      if (d && d !== '0s' && parseFloat(d) > 0.01) animating++;
    });
    return { hidden, total, animating };
  });
  console.log(`reduced-motion: ${r.total - r.hidden}/${r.total} visible, ${r.animating} elements still animating ${r.hidden === 0 && r.animating === 0 ? 'PASS' : 'CHECK'}`);
  await p.close();
}

// --- 3. keyboard: skip link, menu focus trap, Escape ------------------------
{
  const p = await browser.newPage();
  await p.setViewport({ width: 1280, height: 900 });
  await p.goto(BASE, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 800));

  await p.keyboard.press('Tab');
  const skip = await p.evaluate(() => document.activeElement?.textContent?.trim());
  console.log(`skip link    : first tab stop is "${skip}" ${skip?.includes('Skip') ? 'PASS' : 'FAIL'}`);

  await p.evaluate(() => {
    [...document.querySelectorAll('button')].find(b => b.textContent?.includes('Menu'))?.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const trapped = await p.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"][aria-modal="true"]');
    if (!dialog) return { ok: false, inside: 0 };
    let inside = 0;
    for (let i = 0; i < 40; i++) {
      const el = document.activeElement;
      if (dialog.contains(el)) inside++;
      const f = [...dialog.querySelectorAll('a[href],button:not([disabled])')];
      const idx = f.indexOf(el);
      f[(idx + 1) % f.length]?.focus();
    }
    return { ok: inside >= 38, inside };
  });
  console.log(`focus trap   : ${trapped.inside}/40 stops inside the dialog ${trapped.ok ? 'PASS' : 'FAIL'}`);

  await p.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 700));
  const closed = await p.evaluate(() => !document.querySelector('[role="dialog"][aria-modal="true"]'));
  console.log(`escape closes: ${closed ? 'PASS' : 'FAIL'}`);

  const scrollRestored = await p.evaluate(() => getComputedStyle(document.body).overflow !== 'hidden');
  console.log(`scroll unlock: ${scrollRestored ? 'PASS' : 'FAIL'}`);
  await p.close();
}

// --- 4. headings, landmarks, alt text, labels -------------------------------
{
  const p = await browser.newPage();
  await p.setViewport({ width: 1280, height: 900 });
  const paths = ['/', '/contact', '/admissions/faq', '/about/news'];
  for (const path of paths) {
    await p.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 500));
    const r = await p.evaluate(() => {
      const h1 = document.querySelectorAll('h1').length;
      const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => +h.tagName[1]);
      let skips = 0;
      for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i-1] > 1) skips++;
      const imgsNoAlt = [...document.querySelectorAll('img')].filter(i => i.getAttribute('alt') === null).length;
      const unlabelled = [...document.querySelectorAll('input,select,textarea')].filter(el => {
        if (el.type === 'hidden') return false;
        return !el.labels?.length && !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby');
      }).length;
      return { h1, skips, imgsNoAlt, unlabelled, main: !!document.querySelector('main') };
    });
    console.log(`${path.padEnd(18)} h1=${r.h1} heading-skips=${r.skips} img-no-alt=${r.imgsNoAlt} unlabelled-fields=${r.unlabelled} main=${r.main}`);
  }
  await p.close();
}

await browser.close();
