"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { mainNav } from "@/lib/data/navigation";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

/** Flattened site index. In production, point this at a real search endpoint. */
const index = mainNav.flatMap((section) => [
  { label: section.label, href: section.href, parent: null as string | null },
  ...(section.children ?? []).map((child) => ({
    label: child.label,
    href: child.href,
    parent: section.label,
  })),
]);

const suggestions = ["Tuition & Fees", "Apply", "School Calendar", "Current Openings"];

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 220);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search this site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[95] bg-ink/95 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="absolute inset-0 cursor-default"
          />

          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="shell relative pt-24 sm:pt-28"
          >
            <div className="mx-auto max-w-3xl">
              <label htmlFor="site-search" className="sr-only">
                Search this site
              </label>
              <div className="flex items-center gap-4 border-b-2 border-white/25 pb-4 focus-within:border-lime">
                <Search className="size-6 shrink-0 text-lime" strokeWidth={2} />
                <input
                  ref={inputRef}
                  id="site-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="What are you looking for?"
                  autoComplete="off"
                  className="w-full bg-transparent font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <span className="sr-only">Close search</span>
                  <X className="size-5" />
                </button>
              </div>

              <div aria-live="polite" className="mt-8">
                {query.trim().length < 2 ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-white/60">Popular:</span>
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="min-h-10 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/75 transition-[color,border-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:scale-105 hover:border-lime hover:text-lime"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                ) : results.length === 0 ? (
                  <p className="text-white/60">
                    Nothing matched “{query}”. Try a shorter word, or browse the menu.
                  </p>
                ) : (
                  <ul className="divide-y divide-white/10">
                    {results.map((result) => (
                      <li key={result.href}>
                        <Link
                          href={result.href}
                          onClick={onClose}
                          className="group flex min-h-11 items-baseline justify-between gap-4 py-4 text-white transition-colors hover:text-lime sm:gap-6"
                        >
                          <span className="font-[family-name:var(--font-display)] text-lg font-medium transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-soft)] group-hover:translate-x-1 sm:text-xl">
                            {result.label}
                          </span>
                          {result.parent && (
                            <span className="shrink-0 text-sm text-white/60">
                              {result.parent}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
