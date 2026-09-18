#!/usr/bin/env node
/**
 * Checks every colour pairing actually used in the project against WCAG AA.
 * Pure colour maths, no browser needed. See scripts/README.md.
 */
const hex = h => { const n = parseInt(h.slice(1), 16); return [(n>>16)&255, (n>>8)&255, n&255]; };
const lin = c => { c/=255; return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
const L = rgb => 0.2126*lin(rgb[0]) + 0.7152*lin(rgb[1]) + 0.0722*lin(rgb[2]);
const ratio = (a,b) => { const l1=L(hex(a)), l2=L(hex(b)); const [hi,lo]=[Math.max(l1,l2),Math.min(l1,l2)]; return (hi+0.05)/(lo+0.05); };

/** Alpha-composite a foreground over a background — matches text-white/65 etc. */
const over = (fg, bg, alpha) => {
  const f = hex(fg), b = hex(bg);
  const m = f.map((c,i) => Math.round(c*alpha + b[i]*(1-alpha)));
  return '#' + m.map(c => c.toString(16).padStart(2,'0')).join('');
};

// Keep this in sync with the @theme block in src/app/globals.css
const C = {
  ink: '#0b2239', ink700: '#143a5f', ink500: '#24578a',
  lime: '#8cc63f', limeDark: '#547f1b', ember: '#bf3d15',
  mist: '#edf1f5', white: '#ffffff',
};

const tests = [
  ['body text        ink / white',        C.ink, C.white, 4.5],
  ['body 75%         ink@75 / white',     over(C.ink, C.white, 0.75), C.white, 4.5],
  ['body 70%         ink@70 / white',     over(C.ink, C.white, 0.70), C.white, 4.5],
  ['body on mist     ink@75 / mist',      over(C.ink, C.mist, 0.75), C.mist, 4.5],
  ['eyebrow          ink500 / white',     C.ink500, C.white, 4.5],
  ['eyebrow on mist  ink500 / mist',      C.ink500, C.mist, 4.5],
  ['muted 65%        ink@65 / white',     over(C.ink, C.white, 0.65), C.white, 4.5],
  ['white on ink',                        C.white, C.ink, 4.5],
  ['white75 on ink',                      over(C.white, C.ink, 0.75), C.ink, 4.5],
  ['white65 on ink',                      over(C.white, C.ink, 0.65), C.ink, 4.5],
  ['white60 on ink',                      over(C.white, C.ink, 0.60), C.ink, 4.5],
  ['lime on ink      accent text',        C.lime, C.ink, 4.5],
  ['lime on ink700',                      C.lime, C.ink700, 4.5],
  ['ink on lime      button',             C.ink, C.lime, 4.5],
  ['white on limeDark button hover',      C.white, C.limeDark, 4.5],
  ['ember on white   error text',         C.ember, C.white, 4.5],
  ['ember on mist    error text',         C.ember, C.mist, 4.5],
  ['focus ring (ink) ink / white',        C.ink, C.white, 3.0],
  ['focus ring (lime) lime / ink',        C.lime, C.ink, 3.0],
];

let fails = 0;
for (const [label, a, b, min] of tests) {
  const r = ratio(a, b);
  const ok = r >= min;
  if (!ok) fails++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)} : ${min}  ${label}`);
}
console.log(`\n${fails} failing`);
process.exit(fails > 0 ? 1 : 0);
