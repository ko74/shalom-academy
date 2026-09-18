'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Newspaper,
  Pause,
  Play,
} from 'lucide-react';
import { heroHeadline, heroSlides, heroWords } from '@/lib/data/home';
import { usePrefersReducedMotion } from '@/lib/hooks/usePrefersReducedMotion';
import { useChrome } from '@/components/layout/ChromeProvider';
import { cn } from '@/lib/utils/cn';

const SLIDE_DURATION = 6500;
const WORD_DURATION = 2200;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [word, setWord] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const reduced = usePrefersReducedMotion();
  const { open } = useChrome();
  const touchStart = useRef<number | null>(null);

  const go = useCallback((delta: number) => {
    setIndex((prev) => (prev + delta + heroSlides.length) % heroSlides.length);
  }, []);

  /* Slide advance — pauses on hover, on focus, and when the tab is hidden */
  useEffect(() => {
    if (!playing || reduced || interacting) return;
    const timer = window.setInterval(() => go(1), SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, [playing, reduced, interacting, go]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(
      () => setWord((prev) => (prev + 1) % heroWords.length),
      WORD_DURATION,
    );
    return () => window.clearInterval(timer);
  }, [reduced]);

  useEffect(() => {
    const onVisibility = () => document.hidden && setPlaying(false);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  /* Arrow keys move the carousel when it has focus */
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); go(1); }
  };

  /* Swipe on touch */
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 48) go(delta < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const control =
    'flex size-11 items-center justify-center rounded-full border border-white/30 ' +
    'transition-[background-color,border-color,color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] ' +
    'hover:border-lime hover:bg-lime hover:text-ink hover:scale-105 active:scale-95';

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Life at the school"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={() => setInteracting(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-8 pt-28 text-white sm:pb-10 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={heroSlides[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[index].image}
              alt={heroSlides[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={cn('object-cover', !reduced && 'animate-[var(--animate-ken-burns)]')}
            />
          </motion.div>
        </AnimatePresence>

        {/* Two scrims: one lifting the text off the bottom, one off the left */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/10 to-transparent" />
      </div>

      <div className="shell relative w-full">
        {/* Word rotator */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-[family-name:var(--font-display)] text-[length:var(--text-step-2)] font-medium text-white/70">
            Everyone
          </span>
          <span className="relative block h-[1.5em] overflow-hidden text-[length:var(--text-step-2)]">
            <AnimatePresence mode="wait">
              <motion.span
                key={heroWords[word]}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-110%', opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="block font-[family-name:var(--font-display)] font-semibold italic text-lime"
              >
                {heroWords[word]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="sr-only">
            Everyone {heroWords.join(', ')}
          </span>
        </div>

        <h1 className="mt-4 max-w-[16ch] text-[length:var(--text-step-6)] font-semibold leading-[0.98] tracking-tight sm:mt-5">
          {heroHeadline}
        </h1>

        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/admissions/virtual-tour"
            style={{ ['--sweep-color' as string]: 'var(--color-lime)' }}
            className="btn-sweep group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white pl-5 pr-2.5 font-[family-name:var(--font-display)] font-semibold text-ink transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-soft)] active:scale-[0.98] sm:h-14 sm:pl-6 sm:pr-3"
          >
            <Compass className="size-5 shrink-0" strokeWidth={1.75} />
            <span className="whitespace-nowrap">Take the virtual tour</span>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-back)] group-hover:translate-x-1">
              <ArrowRight className="size-4" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => open('news')}
            style={{ ['--sweep-color' as string]: 'var(--color-lime)' }}
            className="btn-sweep inline-flex h-13 items-center justify-center gap-3 rounded-full border-2 border-white/35 px-5 font-[family-name:var(--font-display)] font-semibold text-white transition-[color,border-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:border-lime hover:text-ink active:scale-[0.98] sm:h-14 sm:px-6"
          >
            <Newspaper className="size-5 shrink-0" strokeWidth={1.75} />
            <span className="whitespace-nowrap">Latest news &amp; events</span>
          </button>
        </div>

        {/* Controls — stack under 400px, sit on one row above it */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/15 pt-5 sm:mt-12">
          <div className="flex items-center gap-2" role="group" aria-label="Slideshow controls">
            <button type="button" onClick={() => go(-1)} className={control}>
              <span className="sr-only">Previous slide</span>
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-pressed={!playing}
              className={control}
            >
              <span className="sr-only">{playing ? 'Pause slideshow' : 'Play slideshow'}</span>
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button type="button" onClick={() => go(1)} className={control}>
              <span className="sr-only">Next slide</span>
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Progress pips. The active one carries a fill that runs the length
              of the slide interval, so the bar is also a timer. */}
          <ol className="flex items-center gap-2">
            {heroSlides.map((slide, i) => (
              <li key={slide.id}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className="group flex h-11 items-center px-0.5"
                >
                  <span className="sr-only">Go to slide {i + 1}</span>
                  <span
                    className={cn(
                      'relative block h-1 overflow-hidden rounded-full transition-[width,background-color] duration-[var(--dur-slow)] ease-[var(--ease-out-soft)]',
                      i === index ? 'w-10 bg-white/25 sm:w-12' : 'w-5 bg-white/35 group-hover:bg-white/70 sm:w-6',
                    )}
                  >
                    {i === index && (
                      <motion.span
                        key={`${index}-${playing}-${interacting}`}
                        className="absolute inset-y-0 left-0 block rounded-full bg-lime"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                          duration: reduced || !playing || interacting ? 0 : SLIDE_DURATION / 1000,
                          ease: 'linear',
                        }}
                      />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <p aria-live="polite" className="sr-only">
          Slide {index + 1} of {heroSlides.length}: {heroSlides[index].alt}
        </p>
      </div>
    </section>
  );
}
