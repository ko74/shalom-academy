# Shalom Academy — Next.js 15 + Tailwind CSS 4 build

A production-quality rebuild of the International School of Brussels website
(`isb.be`) as a Next.js 15 App Router project styled with Tailwind CSS 4:
the full homepage plus all 48 inner pages.

Built as a learning exercise. Read the note at the bottom before you deploy it
anywhere public.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
npm run typecheck
```

Node 18.18+ is required. The first build pulls Outfit and Inter from Google
Fonts, so the machine needs network access; both have local fallback stacks if
the fetch fails at runtime.

## What is in here

```
src/
  app/
    layout.tsx           fonts, metadata, chrome, skip link
    page.tsx             the homepage — section components in order
    [...slug]/page.tsx   renders every inner page from the content registry
    not-found.tsx
    sitemap.ts           generated from the page registry
    robots.ts
    globals.css          design tokens, keyframes, base styles, utilities
  components/
    layout/              header, mega menu, search, news drawer, sticky CTA, footer
    home/                the eight homepage sections
    page/                inner-page hero, section rail, block renderer, forms, listings
    ui/                  logo, buttons, reveal, counter, social links
  lib/
    data/
      pages/             48 inner pages, written as content blocks
      home.ts            homepage content
      navigation.ts      the information architecture
      news.ts            posts and events
      openings.ts        job vacancies
    hooks/               scroll direction, body-scroll lock, reduced motion
    utils/               className joiner, date formatting
```

### Sections, in page order

| Component | What it does |
| --- | --- |
| `Hero` | Five-slide crossfading slideshow with Ken Burns drift, a vertical word rotator, play/pause and prev/next, pips, and both hero CTAs |
| `Intro` | Single large statement, revealed on scroll |
| `Personalised` | Lead statement with image, then the four areas of focus as cards |
| `LearningJourney` | Lower / Middle / High School cards with a grid-rows reveal on hover |
| `CommunityStories` | Students / Parents / Alumni tabs, snap-scrolling carousel, story dialog |
| `AtAGlance` | Five statistics that count up when they enter the viewport |
| `Programmes` | Accordion on mobile; accordion plus a cross-fading media panel on desktop |
| `VisitBand` | Closing call to action |


## Inner pages

All 48 inner routes are real pages, not placeholders. They are served by a single
catch-all route that looks the path up in a content registry and renders it.

A page is a hero plus an ordered list of **blocks**:

```ts
{
  href: '/admissions/tuition',
  eyebrow: 'Admissions',
  title: 'Tuition & fees',
  intro: 'Published in full, in euro, for the 2026–27 school year.',
  heroImage: '…',
  blocks: [
    { type: 'table', heading: 'Annual tuition 2026–27', columns: [...], rows: [...] },
    { type: 'faq', items: [{ q: '…', a: '…' }] },
    { type: 'cta', heading: '…', links: [...] },
  ],
}
```

`components/page/Blocks.tsx` is the only renderer. Adding a page means adding an
object to `lib/data/pages/` — no new route file, no new component, and it picks
up breadcrumbs, the "In this section" rail, previous/next paging, `generateMetadata`
and the sitemap entry automatically.

### The block vocabulary

| Block | Renders as |
| --- | --- |
| `prose` | Heading, optional large lead, body paragraphs at a readable measure |
| `split` | Text and image side by side, `reverse` to flip |
| `cards` | Responsive card grid; linked cards get a hover arrow and image scale |
| `stats` | Figures that count up when scrolled into view |
| `steps` | Numbered sequence — used only where the content really is a sequence |
| `faq` | Accordion, one panel open at a time |
| `table` | Scrolls horizontally on narrow screens rather than breaking the layout |
| `quote` | Full-width pull quote on the dark ground |
| `list` | One, two or three columns of rule-separated items |
| `cta` | The lime band |
| `contact` | Validated enquiry form plus the direct-contact card |
| `news-listing` | Filterable news index with a lead story |
| `events-listing` | Date-blocked event list |
| `site-map` | Generated from the navigation data |
| `openings` | Job vacancies with division and contract tags |

### Pages built out

- **About** — overview, mission & strategy, legacy (as a timeline), leadership, governance, news index, calendar with term dates
- **Admissions** — overview, inquire & visit, virtual tour, community stories, apply, tuition & fees, Access Programme, financial aid, a three-part FAQ, security & transport
- **Learning** — overview, the three divisions, student support, STEM, languages, community engagement, academic performance
- **Student life** — overview, arts, athletics, activities, camps
- **Give** — overview, make a gift, gift policy, tax deductibility
- **Join us** — overview, current openings, professional development, living in Belgium
- **Contact**, the three portal pages, and five utility pages including a real accessibility statement

The contact form validates in the browser and never sends anything — wire
`handleSubmit` in `components/page/ContactForm.tsx` to a route handler or a form
service.

## Design system

Tokens live in one place — the `@theme` block at the top of `globals.css`.
Tailwind 4 turns each into a utility automatically, so `--color-lime` gives you
`bg-lime`, `text-lime`, `border-lime` and so on.

| Token | Value | Used for |
| --- | --- | --- |
| `--color-ink` | `#0b2239` | Body text, dark sections, primary buttons |
| `--color-ink-700` | `#143a5f` | Statistics band, button hover |
| `--color-ink-500` | `#24578a` | Section kickers, secondary text |
| `--color-sky` | `#2f7fc0` | Footer rule |
| `--color-lime` | `#8cc63f` | The single accent: focus rings, CTAs, active states |
| `--color-lime-dark` | `#547f1b` | Darkened from a first pass so white button text clears 4.5:1 |
| `--color-mist` | `#edf1f5` | Alternating section backgrounds |
| `--color-ember` | `#bf3d15` | Darkened from a first pass so error text clears 4.5:1 on white and mist |

Every colour pairing actually used in the project (body text, muted text,
buttons, error text, both focus-ring layers) is checked against WCAG's 4.5:1 —
or 3:1 for non-text UI — in `contrast.mjs` at the repo root. Run `node
contrast.mjs` after changing a token to catch a regression before it ships.

Type is Outfit for display and Inter for body, loaded through `next/font` so
there is no layout shift and no render-blocking request to Google.

Motion runs on four shared durations and three easing curves — `--dur-fast`
through `--dur-slower`, `--ease-out-soft` / `--ease-in-out-soft` / `--ease-out-back`
— so every transition in the project decelerates the same way. Change a value
once in the `@theme` block in `globals.css` and it propagates everywhere.

## Animation inventory

**Pseudo-elements** (`globals.css` section 5) — real `::before`/`::after`,
not wrapper spans:
- `.link-underline` / `.link-underline-accent` — underline wipes in from the
  left, out to the right, via two `transform-origin` swaps
- `.btn-sweep` / `.btn-bloom` — a fill that sweeps up from the bottom edge or
  blooms from a circle at the left; every `<Button>` variant uses one instead
  of a background-colour fade
- `.rule-above` — the accent bar that grows above section headings, keyed off
  the same `data-revealed` state as scroll reveals
- `.img-wipe` — a panel that slides off an image as it enters view
- `.card-rule` / `.card-scrim` — the hover rule and the two-layer gradient
  scrim on cards and division tiles

**Scroll reveal** (`globals.css` section 6, driven by `<Reveal>`) — thirteen
variants (`up`, `down`, `left`, `right`, `fade`, `scale`, `rise`, `blur`, four
`mask-*` clip-path wipes, and `line` for text that rises out of its own line
box), plus `data-stagger` for staggering direct children. All declared in CSS
so pseudo-element effects can key off the same state with no extra JS, and one
media query cancels everything under reduced motion.

**Bespoke, per component:**
- Hero: crossfade between slides, a 14s Ken Burns scale, an independent word
  rotator, swipe on touch, arrow-key navigation, and a progress pip that fills
  over the slide duration (so it doubles as a timer)
- Header: condenses on scroll, hides on scroll-down, returns on scroll-up
- Mega menu: `clip-path` wipe in, staggered link entrance, cross-fading child
  panel on desktop and a height accordion on mobile, full focus trap
- Community stories carousel: edge-aware arrows that disable at either end
- Counters: `requestAnimationFrame` with an ease-out-expo curve
- Division cards: `grid-template-rows: 0fr → 1fr` reveal that animates height
  without a hardcoded max, plus a `(hover: none)` override so touch devices
  never lose content behind a hover they can't trigger

`prefers-reduced-motion` collapses every animation and transition to 1ms in one
media query; `<Reveal>` also short-circuits its own timers in JS so nothing
sits mid-animation. A `<noscript>` block in `layout.tsx` does the same for
JavaScript-disabled browsers, since the reveal state would otherwise never
flip and the page would stay invisible. Both are covered by the automated
audit described below.

## Verification

This build was checked with a headless-Chrome audit (`a11y.mjs`, `shot.mjs`,
`contrast.mjs`, `target-audit.mjs` at the repo root — not shipped as app code,
just the scripts used to check it) rather than by inspection:

- **Responsive**: zero horizontal overflow at 320/375/768/1024/1440px, across
  the homepage and a sample of inner pages, including with every accordion
  and menu section open at once
- **Keyboard**: skip link is the first tab stop; the mega menu traps focus
  (40/40 tab stops land inside it); Escape closes every overlay and restores
  body scroll
- **No-JS**: every section renders visible with JavaScript disabled
- **Reduced motion**: every section renders visible and nothing is still
  animating
- **Contrast**: 21 colour pairings actually used in the project checked
  against WCAG AA; six failures caught this way (`lime-dark` at 2.97:1 with
  white text, `ember` at 3.68:1, a couple of low-contrast text opacities, and
  the single-colour lime focus ring at 2.05:1 against white) and fixed —
  `lime-dark` and `ember` darkened, the focus ring made two-tone
- **Target size**: every interactive control checked against the real WCAG
  2.5.8 minimum (24px, with the inline-text-in-a-sentence exception applied
  correctly) rather than an arbitrary threshold; two standalone links that
  were under 24px (the footer map link, the site-map section headings) were
  padded to meet it

## Accessibility

Skip link, focus trap and Escape handling in every overlay, `aria-modal`
dialogs, proper `role="tablist"` wiring on both tab groups, a live region
announcing the hero slide, visible focus rings on the accent colour, and body
scroll lock that compensates for the scrollbar so the layout does not jump.

## Swapping in real content

Everything renders from `src/lib/data/`. Replace those three modules with
`fetch` calls or a CMS client and no component needs to change — the types
(`Slide`, `Story`, `Programme`, `Stat`, `NewsPost`) are the contract.

Remote images are allowed from `images.unsplash.com` only; add your own host to
`remotePatterns` in `next.config.mjs`.

## Note on the original

The layout, information architecture, component behaviour and interaction
patterns follow the live site closely, which is the point of the exercise. Three
things are deliberately not copied:

- **Copy.** All text was written for this build rather than lifted from the
  original, which is the school's copyrighted content.
- **Logo.** `components/ui/Logo.tsx` is an original mark, not the school's
  trademark.
- **Photography.** Placeholder images come from Unsplash.

`robots` is set to `noindex, nofollow` in `layout.tsx` for the same reason. If
you want to publish something based on this, replace the branding and content
with your own.
