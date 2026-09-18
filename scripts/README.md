# Audit scripts

These are the scripts used to verify this build — not part of the app itself,
and not run by `npm run build`. They're included so you can re-run the same
checks after making changes, rather than trusting them blind.

## Setup

They need a headless Chrome and Puppeteer, neither of which is a project
dependency (no reason to ship them in the app bundle):

```bash
npm install --no-save puppeteer
```

Then, in one terminal:

```bash
npm run build && npm run start   # serves on http://localhost:3000
```

And in another:

```bash
node scripts/a11y.mjs
node scripts/contrast.mjs
node scripts/target-audit.mjs
node scripts/shot.mjs
```

Pass a different base URL with `SITE_URL`, e.g. `SITE_URL=http://localhost:4000 node scripts/a11y.mjs`.

## What each one checks

- **a11y.mjs** — no-JS visibility, reduced-motion visibility, skip link, mega
  menu focus trap, Escape handling, scroll-lock release, heading order, alt
  text, form labels, landmark structure
- **contrast.mjs** — every colour pairing actually used in the project against
  WCAG AA (4.5:1 text, 3:1 non-text UI). No browser needed — pure colour maths.
- **target-audit.mjs** — every interactive control against the real WCAG 2.5.8
  minimum (24px), correctly applying the inline-text-in-a-sentence exception
  rather than flagging every small footer link
- **shot.mjs** — horizontal overflow at five breakpoints (320–1440px), across
  a sample of pages, after scrolling through to trigger scroll reveals

None of these are exhaustive automated accessibility testing (that needs
axe-core or similar, plus a manual pass with a screen reader). They catch the
specific failure modes this kind of animation-heavy, reveal-driven layout is
prone to.
