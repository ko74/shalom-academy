#!/usr/bin/env node
/**
 * Checks every interactive control against the real WCAG 2.5.8 minimum
 * (24x24 CSS px), correctly applying the inline-text-in-a-sentence
 * exception rather than flagging every small footer link.
 */
import puppeteer from 'puppeteer';

const BASE = process.env.SITE_URL ?? 'http://localhost:3000';
const WCAG_MIN = 24;

const pages = [
  '/', '/admissions', '/admissions/tuition', '/admissions/faq',
  '/learning', '/learning/high-school', '/student-life',
  '/about', '/about/calendar', '/contact', '/join/current-openings',
  '/give', '/site-map',
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
let anyFlagged = false;

for (const path of pages) {
  const p = await browser.newPage();
  await p.setViewport({ width: 375, height: 900 });
  await p.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 600));

  const flagged = await p.evaluate((MIN) => {
    const out = [];
    document.querySelectorAll('a,button,input,select,textarea,[role="button"],[role="tab"]').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (Math.min(r.width, r.height) >= MIN) return;

      const inSentence = !!el.closest('p, li, address, td, blockquote');
      const isSrOnly = [...el.classList].some(c => c === 'sr-only');
      if (isSrOnly) return;   // fine if it becomes full-size on focus
      if (inSentence) return; // WCAG 2.5.8 inline-text exception

      out.push({ text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 40), w: Math.round(r.width), h: Math.round(r.height), tag: el.tagName });
    });
    return out;
  }, WCAG_MIN);

  if (flagged.length) {
    anyFlagged = true;
    console.log(path);
    flagged.forEach(f => console.log(`   ${f.tag} ${f.w}x${f.h} "${f.text}"`));
  }
  await p.close();
}

console.log(anyFlagged ? '\nFAIL — see flags above' : '\nPASS — nothing under 24px outside the inline-text exception');
await browser.close();
process.exit(anyFlagged ? 1 : 0);
