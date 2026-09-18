"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type FaqProps = {
  items: { q: string; a: string }[];
};

export function FaqAccordion({ items }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/12 border-y border-ink/12">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group/row flex w-full min-h-11 items-start gap-4 py-5 text-left sm:gap-5"
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-[var(--dur-base)] ease-[var(--ease-out-back)]",
                    isOpen ? "rotate-45 border-lime bg-lime text-ink" : "border-ink/20 text-ink/60"
                  )}
                >
                  <Plus className="size-4" />
                </span>
                <span
                  className={cn(
                    "font-[family-name:var(--font-display)] text-[length:var(--text-step-1)] font-semibold transition-colors duration-[var(--dur-base)]",
                    isOpen ? "text-ink" : "text-ink/80"
                  )}
                >
                  {item.q}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pb-6 pl-0 leading-relaxed text-ink/70 sm:pl-13">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
