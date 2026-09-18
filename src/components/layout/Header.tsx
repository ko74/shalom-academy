"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { portalNav } from "@/lib/data/navigation";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";
import { Logo } from "@/components/ui/Logo";
import { useChrome } from "@/components/layout/ChromeProvider";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const { scrolled, hidden } = useScrollDirection(40);
  const { overlay, toggle } = useChrome();
  const menuOpen = overlay === "menu";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[92] transition-[transform,background-color,box-shadow,padding] duration-[var(--dur-slow)] ease-[var(--ease-out-soft)]",
        scrolled
          ? "bg-white/92 py-2 shadow-[0_1px_0_rgba(11,34,57,0.08),0_18px_40px_-32px_rgba(11,34,57,0.5)] backdrop-blur-lg supports-[not(backdrop-filter:blur(0))]:bg-white"
          : "bg-transparent py-4",
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0",
        menuOpen && "pointer-events-none opacity-0"
      )}
    >
      <div className="shell flex items-center justify-between gap-4">
        <Logo compact={scrolled} />

        <div className="flex items-center gap-2 sm:gap-4">
          <ul className="hidden items-center gap-5 text-sm font-medium text-ink/70 xl:flex">
            {portalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline-accent hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span aria-hidden="true" className="hidden h-6 w-px bg-ink/15 xl:block" />

          <button
            type="button"
            onClick={() => toggle("search")}
            aria-expanded={overlay === "search"}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink transition-[background-color,border-color,color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white active:scale-95"
          >
            <span className="sr-only">Open search</span>
            <Search className="size-[1.1rem]" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={() => toggle("menu")}
            aria-expanded={menuOpen}
            className="group flex h-11 shrink-0 items-center gap-2.5 rounded-full bg-ink pl-4 pr-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:bg-ink-700 active:scale-95 sm:gap-3 sm:pl-5 sm:pr-4"
          >
            <span className="font-[family-name:var(--font-display)]">Menu</span>
            <span className="flex flex-col items-end gap-[5px]">
              <span className="block h-0.5 w-5 rounded-full bg-lime transition-all duration-[var(--dur-base)] ease-[var(--ease-out-soft)] group-hover:w-3.5" />
              <span className="block h-0.5 w-3.5 rounded-full bg-white transition-all duration-[var(--dur-base)] ease-[var(--ease-out-soft)] group-hover:w-5" />
              <span className="block h-0.5 w-5 rounded-full bg-white transition-all duration-[var(--dur-base)] ease-[var(--ease-out-soft)] group-hover:w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
