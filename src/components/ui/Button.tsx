import Link from 'next/link';
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'solid' | 'lime' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

/**
 * The hover fill is a ::before pseudo-element (see .btn-sweep / .btn-bloom in
 * globals.css) rather than a background-colour transition, so the fill has a
 * direction. `--sweep-color` sets what sweeps in.
 */
const base =
  'btn-sweep group/btn relative inline-flex items-center justify-center gap-2 rounded-full ' +
  'font-[family-name:var(--font-display)] font-semibold text-center ' +
  'transition-[color,border-color,transform,box-shadow] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ' +
  // 44px minimum target on every size, for touch
  'min-h-11';

const variants: Record<Variant, { className: string; sweep: string; text?: string }> = {
  solid: {
    className: 'bg-ink text-white hover:text-ink shadow-[0_10px_30px_-16px_rgba(11,34,57,0.8)]',
    sweep: 'var(--color-lime)',
  },
  lime: {
    className: 'bg-lime text-ink hover:text-white',
    sweep: 'var(--color-ink)',
  },
  outline: {
    className: 'border-2 border-ink/25 text-ink hover:border-ink hover:text-white',
    sweep: 'var(--color-ink)',
  },
  ghost: {
    className: 'text-ink hover:text-ink',
    sweep: 'color-mix(in srgb, var(--color-lime) 30%, transparent)',
  },
  light: {
    className: 'border-2 border-white/45 text-white hover:text-ink',
    sweep: 'var(--color-lime)',
  },
};

const sizes: Record<Size, string> = {
  sm: 'h-11 px-4 text-sm sm:h-9',
  md: 'h-11 px-5 text-[0.95rem] sm:px-6',
  lg: 'h-13 px-6 text-base sm:h-14 sm:px-8',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

function useClasses(variant: Variant, size: Size, className?: string) {
  const config = variants[variant];
  return {
    className: cn(base, config.className, sizes[size], className),
    style: { '--sweep-color': config.sweep } as CSSProperties,
  };
}

export function ButtonLink({
  href,
  external,
  variant = 'solid',
  size = 'md',
  className,
  children,
}: CommonProps & { href: string; external?: boolean }) {
  const { className: classes, style } = useClasses(variant, size, className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes} style={style}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
    </Link>
  );
}

export function Button({
  variant = 'solid',
  size = 'md',
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<'button'>) {
  const { className: classes, style } = useClasses(variant, size, className);
  return (
    <button className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}
