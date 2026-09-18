import { stats } from '@/lib/data/home';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';

export function AtAGlance() {
  return (
    <section className="relative overflow-hidden bg-ink-700 py-16 text-white sm:py-20 lg:py-28">
      {/* One decorative flourish, drifting slowly. Hidden from screen readers
          and stopped entirely under prefers-reduced-motion. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 800 800"
        className="pointer-events-none absolute -right-48 -top-48 h-[34rem] w-[34rem] animate-[var(--animate-float)] text-lime opacity-[0.12] sm:h-[42rem] sm:w-[42rem]"
      >
        {[340, 280, 220, 160].map((r) => (
          <circle key={r} cx="400" cy="400" r={r} fill="none" stroke="currentColor" strokeWidth="1.5" />
        ))}
      </svg>

      <div className="shell relative">
        <Reveal className="rule-above">
          <p className="text-sm font-semibold tracking-wide text-lime">More than a school</p>
          <h2 className="mt-3 max-w-[12ch] text-[length:var(--text-step-4)]">
            The campus, in numbers
          </h2>
        </Reveal>

        <Reveal
          as="dl"
          stagger={80}
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] bg-white/15 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative bg-ink-700 p-6 transition-colors duration-[var(--dur-slow)] hover:bg-ink sm:p-7"
            >
              {/* Accent rule drawn on hover, as a pseudo-element */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-lime transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-soft)] group-hover:scale-x-100"
              />
              <dd className="font-[family-name:var(--font-display)] text-[length:var(--text-step-5)] font-semibold leading-none tracking-tight">
                <Counter value={stat.value} display={stat.display} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 font-[family-name:var(--font-display)] text-[length:var(--text-step-1)] font-semibold">
                {stat.label}
              </dt>
              <p className="mt-3 leading-relaxed text-white/60">{stat.note}</p>
            </div>
          ))}

          <div className="flex flex-col justify-center gap-4 bg-lime p-6 text-ink sm:p-7">
            <p className="font-[family-name:var(--font-display)] text-[length:var(--text-step-2)] font-semibold leading-snug">
              There is more where that came from.
            </p>
            <ButtonLink href="/about" variant="solid" className="self-start">
              Discover more facts
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
