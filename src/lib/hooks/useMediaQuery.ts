'use client';

import { useEffect, useState } from 'react';

/**
 * SSR-safe media query hook. Starts false on the server, so never gate
 * content on it — only behaviour that can safely start in the "off" state.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);

  return matches;
}
