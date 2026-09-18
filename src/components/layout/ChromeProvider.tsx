"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Overlay = "menu" | "search" | "news" | null;

type ChromeContextValue = {
  overlay: Overlay;
  open: (overlay: Exclude<Overlay, null>) => void;
  close: () => void;
  toggle: (overlay: Exclude<Overlay, null>) => void;
};

const ChromeContext = createContext<ChromeContextValue | null>(null);

/**
 * One overlay at a time. Keeping this in a single provider stops the menu,
 * the search panel and the news drawer from ever stacking on top of each other.
 */
export function ChromeProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<Overlay>(null);

  const open = useCallback((next: Exclude<Overlay, null>) => setOverlay(next), []);
  const close = useCallback(() => setOverlay(null), []);
  const toggle = useCallback(
    (next: Exclude<Overlay, null>) => setOverlay((prev) => (prev === next ? null : next)),
    []
  );

  const value = useMemo(() => ({ overlay, open, close, toggle }), [overlay, open, close, toggle]);

  return <ChromeContext.Provider value={value}>{children}</ChromeContext.Provider>;
}

export function useChrome() {
  const context = useContext(ChromeContext);
  if (!context) throw new Error("useChrome must be used inside <ChromeProvider>");
  return context;
}
