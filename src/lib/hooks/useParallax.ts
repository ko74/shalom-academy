'use client';

import { useEffect, useRef } from 'react';

/**
 * Translates an element vertically as it passes through the viewport.
 *
 * Driven from a single rAF-throttled scroll listener and written straight to a
 * CSS custom property, so React never re-renders on scroll.
 * `speed` is a fraction of the distance travelled: 0.15 is subtle, 0.4 is a lot.
 */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Parallax on a phone costs more than it gives.
    if (window.matchMedia('(max-width: 767px)').matches) return;

    let ticking = false;
    let visible = true;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // -1 when the element is just below the fold, 1 when just above it
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      node.style.setProperty('--parallax-y', `${progress * speed * 100}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking || !visible) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // Only listen while the element is actually on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) update();
      },
      { rootMargin: '20% 0px' },
    );
    observer.observe(node);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed]);

  return ref;
}
