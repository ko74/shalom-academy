"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

type CounterProps = {
  value: number;
  /** Rendered instead of the number once counting finishes, e.g. "7:1". */
  display?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function Counter({
  value,
  display,
  suffix,
  duration = 1600,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      setCurrent(value);
      setDone(true);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrent(Math.round(easeOutExpo(progress) * value));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration, reduced]);

  return (
    <span ref={ref} className={className} aria-label={display ?? `${value}${suffix ?? ""}`}>
      <span aria-hidden="true">
        {done && display ? display : current.toLocaleString("en-GB")}
        {!display && suffix ? (
          <span className="text-lime align-super text-[0.55em]">{suffix}</span>
        ) : null}
      </span>
    </span>
  );
}
