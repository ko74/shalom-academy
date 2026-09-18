"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { programmes } from "@/lib/data/home";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

/**
 * Accordion on small screens; a media panel that cross-fades with the open
 * item on large screens. One component, two behaviours, no duplicated markup.
 */
export function Programmes() {
  const [openId, setOpenId] = useState(programmes[0].id);
  const open = programmes.find((p) => p.id === openId) ?? programmes[0];

  return (
    <section className="bg-mist py-16 sm:py-20 lg:py-28">
      <div className="shell">
        <Reveal className="rule-above">
          <p className="text-sm font-semibold tracking-wide text-ink-500">Programme highlights</p>
          <h2 className="mt-3 max-w-[14ch] text-[length:var(--text-step-4)]">
            Discover and experience
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Media panel — desktop only */}
          <Reveal variant="right" className="hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
              <AnimatePresence mode="wait">
                <motion.div
                  key={open.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={open.image}
                    alt=""
                    fill
                    sizes="45vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                  {open.title}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Accordion */}
          <div className="divide-y divide-ink/12 border-y border-ink/12">
            {programmes.map((programme, i) => {
              const isOpen = programme.id === openId;
              return (
                <Reveal key={programme.id} delay={i * 60}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`programme-${programme.id}`}
                      onClick={() => setOpenId(isOpen ? "" : programme.id)}
                      className="group/row flex w-full min-h-11 items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
                    >
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-[var(--dur-base)] ease-[var(--ease-out-back)]",
                          isOpen
                            ? "rotate-45 border-lime bg-lime text-ink"
                            : "border-ink/20 text-ink/60"
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold tracking-wide text-ink-500">
                          {programme.kicker}
                        </span>
                        <span
                          className={cn(
                            "mt-1 block font-[family-name:var(--font-display)] text-[length:var(--text-step-2)] font-semibold tracking-tight transition-colors duration-[var(--dur-base)]",
                            isOpen ? "text-ink" : "text-ink/75"
                          )}
                        >
                          {programme.title}
                        </span>
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`programme-${programme.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-0 sm:pb-8 sm:pl-14">
                          {/* Image inline on small screens, where the media panel is hidden */}
                          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
                            <Image
                              src={programme.image}
                              alt=""
                              fill
                              sizes="90vw"
                              className="object-cover"
                            />
                          </div>

                          <p className="max-w-[60ch] leading-relaxed text-ink/75">
                            {programme.body}
                          </p>

                          <ButtonLink
                            href={programme.href}
                            variant="ghost"
                            className="-ml-4 mt-4 text-ink"
                          >
                            {programme.cta}
                            <ArrowRight className="size-4" />
                          </ButtonLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
