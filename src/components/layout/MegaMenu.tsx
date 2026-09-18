"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ctaNav, mainNav, portalNav } from "@/lib/data/navigation";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

const panel = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.45, ease: [0.65, 0, 0.35, 1] },
  },
};

const listItem = (index: number) => ({
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.18 + index * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
});

export function MegaMenu({ open, onClose }: MegaMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(mainNav[0].label);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }, 260);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          variants={panel}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[90] overflow-y-auto bg-ink text-white scroll-slim"
        >
          {/* Decorative field — a faint grid that echoes the campus map */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "88px 88px",
            }}
          />

          <div className="shell relative flex min-h-dvh flex-col pb-12 pt-5 sm:pb-14 sm:pt-6">
            <div className="flex items-center justify-between">
              <Logo tone="light" />
              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-3 rounded-full border border-white/25 py-2 pl-5 pr-2 text-sm font-medium transition-colors duration-300 hover:border-lime"
              >
                Close
                <span className="relative flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                  <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav
              aria-label="Main"
              className="mt-9 grid flex-1 gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20"
            >
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {mainNav.map((section, index) => {
                  const isActive = activeSection === section.label;
                  return (
                    <motion.li
                      key={section.label}
                      variants={listItem(index)}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="flex items-stretch">
                        <Link
                          href={section.href}
                          onClick={onClose}
                          onMouseEnter={() => section.children && setActiveSection(section.label)}
                          onFocus={() => section.children && setActiveSection(section.label)}
                          className={cn(
                            "flex-1 py-3.5 font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-semibold tracking-tight transition-[color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:translate-x-1 sm:py-4",
                            isActive ? "text-lime" : "text-white hover:text-lime"
                          )}
                        >
                          {section.label}
                        </Link>

                        {section.children && (
                          <button
                            type="button"
                            aria-expanded={isActive}
                            aria-controls={`menu-panel-${section.label}`}
                            onClick={() =>
                              setActiveSection(isActive ? null : section.label)
                            }
                            className="flex w-12 shrink-0 items-center justify-center text-white/50 transition-colors hover:text-lime lg:hidden"
                          >
                            <span className="sr-only">Show {section.label} pages</span>
                            <ChevronDown
                              className={cn(
                                "size-5 transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-soft)]",
                                isActive && "rotate-180"
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile: inline accordion of child links */}
                      <AnimatePresence initial={false}>
                        {section.children && isActive && (
                          <motion.ul
                            id={`menu-panel-${section.label}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden lg:hidden"
                          >
                            {section.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className="block min-h-11 py-2.5 pl-1 text-white/70 transition-colors hover:text-white"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                            <li className="h-4" />
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Desktop: the hovered section's children, cross-faded */}
              <div className="relative hidden lg:block">
                <AnimatePresence mode="wait">
                  {mainNav
                    .filter((s) => s.label === activeSection && s.children)
                    .map((section) => (
                      <motion.div
                        key={section.label}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="sticky top-10"
                      >
                        {section.blurb && (
                          <p className="max-w-sm text-lg text-white/60">{section.blurb}</p>
                        )}
                        <ul className="mt-8 grid gap-x-10 gap-y-1 sm:grid-cols-2">
                          {section.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                target={child.external ? "_blank" : undefined}
                                rel={child.external ? "noreferrer noopener" : undefined}
                                className="link-underline-accent inline-flex min-h-10 items-center gap-1.5 py-2 text-white/80 transition-colors duration-[var(--dur-base)] hover:text-white"
                              >
                                {child.label}
                                {child.external && (
                                  <ArrowUpRight className="size-3.5 opacity-60" />
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </nav>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-white/60">
                {portalNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={onClose} className="link-underline-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <SocialLinks tone="light" />
                {ctaNav.map((cta, i) => (
                  <ButtonLink
                    key={cta.href}
                    href={cta.href}
                    variant={i === 0 ? "light" : "lime"}
                  >
                    {cta.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
