'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils/cn';

export type RevealVariant =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'fade'
  | 'scale'
  | 'rise'
  | 'blur'
  | 'line'
  | 'mask-up'
  | 'mask-down'
  | 'mask-left'
  | 'mask-right';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  /** Which entrance to use. See globals.css section 6. */
  variant?: RevealVariant;
  /** Delay in milliseconds before this element starts. */
  delay?: number;
  /** Override the duration in milliseconds. */
  duration?: number;
  /** Fraction of the element that must be visible before it fires. */
  amount?: number;
  /**
   * Stagger direct children instead of animating this element itself.
   * Pass a number to set the gap between children in milliseconds.
   */
  stagger?: boolean | number;
  /** Re-hide and replay when the element leaves and re-enters the viewport. */
  repeat?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Sets `data-reveal` and, once in view, `data-revealed="true"`.
 * All of the actual motion is declared in CSS, which means:
 *   - pseudo-element effects (.img-wipe, .rule-above) can key off the same
 *     state without any extra JavaScript,
 *   - the reduced-motion override in globals.css cancels everything in one
 *     place rather than per component,
 *   - no inline styles, so nothing fights the cascade.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  duration,
  amount = 0.15,
  stagger = false,
  repeat = false,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No IntersectionObserver (or a very old browser): show everything.
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    // Anything already above the fold on load should not wait for a scroll.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
      const raf = requestAnimationFrame(() => setRevealed(true));
      if (!repeat) return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setRevealed(false);
        }
      },
      { threshold: amount, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount, repeat]);

  const staggerStep = typeof stagger === 'number' ? stagger : 70;

  return (
    <Tag
      ref={ref}
      data-reveal={stagger ? undefined : variant}
      data-stagger={stagger ? '' : undefined}
      data-revealed={revealed ? 'true' : 'false'}
      className={cn(className)}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          ...(duration ? { '--reveal-duration': `${duration}ms` } : null),
          ...(stagger ? { '--stagger-step': `${staggerStep}ms` } : null),
          ...style,
        } as CSSProperties
      }
    >
      {stagger ? (
        // Children of a stagger group need their own reveal state to inherit
        children
      ) : variant === 'line' ? (
        <span>{children}</span>
      ) : (
        children
      )}
    </Tag>
  );
}
