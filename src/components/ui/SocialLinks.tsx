import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { socialNav } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

type SocialLinksProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function SocialLinks({ tone = "dark", className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialNav.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${label} (opens in a new tab)`}
              className={cn(
                "flex size-11 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-back)] hover:-translate-y-1 hover:scale-105 active:scale-95",
                tone === "light"
                  ? "border-white/25 text-white/80 hover:border-lime hover:bg-lime hover:text-ink"
                  : "border-ink/15 text-ink/70 hover:border-ink hover:bg-ink hover:text-white"
              )}
            >
              <Icon className="size-[1.05rem]" strokeWidth={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
