"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SectionContext } from "@/lib/data/pages";
import { cn } from "@/lib/utils/cn";

export function SectionNav({ section }: { section: SectionContext }) {
  const pathname = usePathname();

  return (
    <nav aria-label={`${section.sectionLabel} pages`} className="lg:sticky lg:top-28">
      <h2 className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-ink/65">
        In this section
      </h2>
      <ul className="mt-4 border-l border-ink/12">
        {section.siblings.map((item) => {
          const current = item.href === pathname;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "-ml-px block min-h-11 border-l-2 py-2.5 pl-4 text-[0.95rem] transition-[color,border-color,padding] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:pl-5",
                  current
                    ? "border-lime font-semibold text-ink"
                    : "border-transparent text-ink/65 hover:border-ink/30 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
