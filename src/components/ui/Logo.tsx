import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  /** "dark" renders navy type for light backgrounds. */
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
};

/**
 * Wordmark. Deliberately an original mark rather than the school's own
 * trademarked logo — swap the SVG for a real asset in a licensed build.
 */
export function Logo({ tone = "dark", compact = false, className }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/70" : "text-ink/65";

  return (
    <Link
      href="/"
      aria-label="The Mickbess School - Appolonia — home"
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative block shrink-0">
        <svg
          viewBox="0 0 48 48"
          role="presentation"
          className={cn(
            "transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out-back)] group-hover:-rotate-6 group-hover:scale-105",
            compact ? "h-9 w-9" : "h-11 w-11"
          )}
        >
          <rect width="48" height="48" rx="12" className="fill-ink" />
          <path
            d="M13 33V15h4.6v18H13Zm9.4 0V15h6.9c4.6 0 7.4 2.3 7.4 6.1 0 2.4-1.2 4.1-3.2 5 2.5.8 3.9 2.7 3.9 5.3 0 1  .5 1.9 1.1 2.6H22.4Z"
            className="fill-white"
          />
          <circle
            cx="35.5"
            cy="15.5"
            r="4.5"
            className="fill-lime origin-[35.5px_15.5px] transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-back)] group-hover:scale-125"
          />
        </svg>
      </span>

      <span className={cn("leading-tight", compact ? "hidden sm:block" : "hidden min-[400px]:block")}>
        <span
          className={cn(
            "block font-[family-name:var(--font-display)] font-semibold tracking-tight",
            compact ? "text-sm sm:text-base" : "text-base sm:text-lg",
            text
          )}
        >
          The Mickbess School
        </span>
        <span className={cn("block text-[0.72rem] font-medium tracking-[0.18em]", sub)}>
          - Appolonia
        </span>
      </span>
    </Link>
  );
}
