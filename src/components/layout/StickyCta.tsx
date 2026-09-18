"use client";

import Link from "next/link";
import { ctaNav } from "@/lib/data/navigation";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";
import { useChrome } from "@/components/layout/ChromeProvider";
import { cn } from "@/lib/utils/cn";

/**
 * Vertical rail pinned to the right edge on desktop; on small screens it
 * becomes a fixed bar along the bottom of the viewport.
 */
export function StickyCta() {
  const { scrolled } = useScrollDirection(320);
  const { overlay } = useChrome();
  const muted = overlay !== null;

  return (
    <>
      {/* Desktop rail */}
      <div
        className={cn(
          "fixed right-0 top-1/2 z-[80] hidden -translate-y-1/2 flex-col transition-all duration-500 ease-[var(--ease-out-soft)] lg:flex",
          muted ? "pointer-events-none translate-x-full opacity-0" : "opacity-100"
        )}
      >
        {ctaNav.map((cta, index) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={cn(
              "group relative flex items-center justify-center py-7 transition-[width,background-color] duration-[var(--dur-base)] ease-[var(--ease-out-soft)]",
              "w-12 hover:w-14",
              index === 0
                ? "rounded-l-xl bg-ink text-white hover:bg-ink-700"
                : "rounded-bl-xl bg-lime text-ink hover:bg-lime-dark hover:text-white"
            )}
          >
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.14em] [writing-mode:vertical-rl]">
              {cta.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-[80] flex pb-[env(safe-area-inset-bottom)] transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out-soft)] lg:hidden",
          scrolled && !muted ? "translate-y-0" : "translate-y-full"
        )}
      >
        {ctaNav.map((cta, index) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={cn(
              "flex-1 py-4 text-center font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide min-h-13 flex items-center justify-center",
              index === 0 ? "bg-ink text-white" : "bg-lime text-ink"
            )}
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </>
  );
}
