"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, X } from "lucide-react";
import { newsPosts, upcomingEvents } from "@/lib/data/news";
import { formatDate, formatDay, formatMonth } from "@/lib/utils/format";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { cn } from "@/lib/utils/cn";

type CanvasProps = {
  open: boolean;
  onClose: () => void;
};

type Tab = "news" | "events";

export function NewsEventsCanvas({ open, onClose }: CanvasProps) {
  const [tab, setTab] = useState<Tab>("news");
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close news and events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[88] cursor-default bg-ink/50 backdrop-blur-[2px]"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="News and events"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="scroll-slim fixed inset-y-0 right-0 z-[89] flex w-full max-w-md flex-col bg-ink text-white shadow-2xl sm:max-w-lg"
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 px-6 pb-5 pt-7 sm:px-8">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-semibold">
                  News &amp; events
                </h2>
                <p className="mt-1 text-sm text-white/50">What is happening on campus</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <span className="sr-only">Hide news and events</span>
                <X className="size-4" />
              </button>
            </header>

            <div
              role="tablist"
              aria-label="News and events"
              className="flex gap-1 border-b border-white/10 px-6 sm:px-8"
            >
              {(
                [
                  ["news", "News stories"],
                  ["events", "Upcoming events"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  role="tab"
                  id={`canvas-tab-${id}`}
                  aria-selected={tab === id}
                  aria-controls={`canvas-panel-${id}`}
                  onClick={() => setTab(id)}
                  className={cn(
                    "relative min-h-11 px-1 py-4 text-sm font-semibold transition-colors duration-[var(--dur-base)]",
                    tab === id ? "text-lime" : "text-white/55 hover:text-white",
                    "mr-6"
                  )}
                >
                  {label}
                  {tab === id && (
                    <motion.span
                      layoutId="canvas-tab-underline"
                      className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-lime"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="scroll-slim flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <AnimatePresence mode="wait">
                {tab === "news" ? (
                  <motion.ul
                    key="news"
                    id="canvas-panel-news"
                    role="tabpanel"
                    aria-labelledby="canvas-tab-news"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1"
                  >
                    {newsPosts.map((post) => (
                      <li key={post.id}>
                        <Link
                          href={post.href}
                          onClick={onClose}
                          className="group flex gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                        >
                          <span className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-white/10">
                            <Image
                              src={post.image}
                              alt=""
                              fill
                              sizes="80px"
                              className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.08]"
                            />
                          </span>
                          <span className="min-w-0 flex-1 py-0.5">
                            <span className="text-[0.7rem] font-semibold tracking-wide text-lime">
                              {post.category}
                            </span>
                            <span className="mt-0.5 block font-[family-name:var(--font-display)] text-[1.02rem] font-medium leading-snug text-white">
                              {post.title}
                            </span>
                            <time
                              dateTime={post.date}
                              className="mt-1 block text-xs text-white/60"
                            >
                              {formatDate(post.date)}
                            </time>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.ul
                    key="events"
                    id="canvas-panel-events"
                    role="tabpanel"
                    aria-labelledby="canvas-tab-events"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {upcomingEvents.map((event) => (
                      <li key={event.id}>
                        <Link
                          href={event.href}
                          onClick={onClose}
                          className="group flex gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                        >
                          <span className="flex size-16 shrink-0 flex-col items-center justify-center rounded-lg border border-white/15 leading-none transition-colors group-hover:border-lime">
                            <span className="font-[family-name:var(--font-display)] text-xl font-semibold">
                              {formatDay(event.date)}
                            </span>
                            <span className="mt-1 text-[0.65rem] tracking-widest text-lime">
                              {formatMonth(event.date)}
                            </span>
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-[family-name:var(--font-display)] text-[1.02rem] font-medium leading-snug">
                              {event.title}
                            </span>
                            <span className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
                              {event.time && (
                                <span className="inline-flex items-center gap-1.5">
                                  <CalendarDays className="size-3.5" />
                                  {event.time}
                                </span>
                              )}
                              <span className="inline-flex items-center gap-1.5">
                                <MapPin className="size-3.5" />
                                {event.location}
                              </span>
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <footer className="border-t border-white/10 px-6 py-5 sm:px-8">
              <Link
                href="/news-events"
                onClick={onClose}
                className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-semibold text-lime"
              >
                View all news & events
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
