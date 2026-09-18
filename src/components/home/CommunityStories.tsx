"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { storyGroups, type Story } from "@/lib/data/home";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

const arrow =
  'flex size-12 items-center justify-center rounded-full border border-ink/15 text-ink ' +
  'transition-[background-color,border-color,color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] ' +
  'hover:border-ink hover:bg-ink hover:text-white hover:scale-105 active:scale-95 ' +
  'disabled:pointer-events-none disabled:opacity-30';

export function CommunityStories() {
  const [groupId, setGroupId] = useState(storyGroups[0].id);
  const [active, setActive] = useState<Story | null>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const group = storyGroups.find((g) => g.id === groupId)!;

  useLockBodyScroll(active !== null);

  const [edges, setEdges] = useState({ start: true, end: false });

  /* Disable an arrow when the track cannot move any further that way */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setEdges({
        start: scrollLeft <= 2,
        end: scrollLeft + clientWidth >= scrollWidth - 2,
      });
    };

    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [groupId]);

  const scrollBy = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8">
          <Reveal className="rule-above">
            <p className="text-sm font-semibold tracking-wide text-ink-500">Community stories</p>
            <h2 className="mt-3 max-w-[13ch] text-[length:var(--text-step-4)]">
              The stories that connect us
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div
              role="tablist"
              aria-label="Choose a community group"
              className="flex w-full max-w-full overflow-x-auto rounded-full bg-mist p-1.5 scroll-slim sm:w-auto"
            >
              {storyGroups.map((g) => (
                <button
                  key={g.id}
                  role="tab"
                  id={`stories-tab-${g.id}`}
                  aria-selected={g.id === groupId}
                  aria-controls={`stories-panel-${g.id}`}
                  onClick={() => setGroupId(g.id)}
                  className={cn(
                    "relative min-h-10 shrink-0 rounded-full px-4 py-2.5 font-[family-name:var(--font-display)] text-sm font-semibold transition-colors duration-[var(--dur-base)] sm:px-5",
                    g.id === groupId ? "text-white" : "text-ink/65 hover:text-ink"
                  )}
                >
                  {g.id === groupId && (
                    <motion.span
                      layoutId="stories-pill"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 rounded-full bg-ink"
                    />
                  )}
                  <span className="relative">{g.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            id={`stories-panel-${group.id}`}
            role="tabpanel"
            aria-labelledby={`stories-tab-${group.id}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <p className="max-w-[62ch] text-[length:var(--text-step-1)] leading-relaxed text-ink/70">{group.intro}</p>

            <ul
              ref={trackRef}
              className="scroll-slim mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
            >
              {group.stories.map((story) => (
                <li
                  key={story.id}
                  className="w-[min(82vw,20rem)] shrink-0 snap-start lg:w-[21.5rem]"
                >
                  <button
                    type="button"
                    onClick={() => setActive(story)}
                    className="card-rule group flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-mist text-left transition-[box-shadow,transform] duration-[var(--dur-slow)] ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-42px_rgba(11,34,57,0.6)]"
                  >
                    <span className="relative block aspect-[4/5] overflow-hidden">
                      <Image
                        src={story.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 22vw, 78vw"
                        className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-16">
                        <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                          {story.name}
                        </span>
                        <span className="block text-sm text-lime">{story.role}</span>
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-[0.98rem] leading-relaxed text-ink/75">
                        {story.excerpt}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-semibold text-ink">
                        Read the story
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-5">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={edges.start}
              className={arrow}
            >
              <span className="sr-only">Scroll stories left</span>
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={edges.end}
              className={arrow}
            >
              <span className="sr-only">Scroll stories right</span>
              <ArrowRight className="size-5" />
            </button>
          </div>

          <ButtonLink href="/admissions/stories" variant="outline" size="lg">
            More community stories
          </ButtonLink>
        </div>
      </div>

      {/* Story dialog */}
      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name}, ${active.role}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[96] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <button
              type="button"
              aria-label="Close story"
              onClick={() => setActive(null)}
              className="absolute inset-0 cursor-default"
            />

            <motion.article
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid max-h-[92svh] w-full max-w-3xl overflow-hidden rounded-t-[1.5rem] bg-white sm:rounded-[1.75rem] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]"
            >
              <div className="relative hidden md:block">
                <Image
                  src={active.image}
                  alt=""
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>

              <div className="scroll-slim overflow-y-auto p-7 sm:p-9">
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-lime hover:text-ink"
                >
                  <span className="sr-only">Close story</span>
                  <X className="size-4" />
                </button>

                <p className="text-sm font-semibold tracking-wide text-ink-500">{active.role}</p>
                <h3 className="mt-2 text-3xl">{active.name}</h3>

                <Quote className="mt-6 size-8 text-lime" strokeWidth={1.5} />
                <blockquote className="mt-3 font-[family-name:var(--font-display)] text-[length:var(--text-step-2)] font-medium leading-snug tracking-tight text-ink">
                  {active.quote}
                </blockquote>

                <p className="mt-6 leading-relaxed text-ink/70">{active.excerpt}</p>

                <ButtonLink
                  href="/admissions/stories"
                  variant="solid"
                  className="mt-8"
                >
                  Read the full interview
                </ButtonLink>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
