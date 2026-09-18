'use client';

import { useEffect, useState } from 'react';

type ScrollState = { scrolled: boolean; hidden: boolean };

/**
 * Tracks whether the page has been scrolled past a threshold and whether the
 * user is scrolling down — used to condense and auto-hide the header.
 */
export function useScrollDirection(threshold = 24): ScrollState {
  const [state, setState] = useState<ScrollState>({ scrolled: false, hidden: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      setState((prev) => {
        const scrolled = y > threshold;
        let hidden = prev.hidden;
        if (delta > 6 && y > 320) hidden = true;
        else if (delta < -6) hidden = false;
        if (scrolled === prev.scrolled && hidden === prev.hidden) return prev;
        return { scrolled, hidden };
      });
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return state;
}
