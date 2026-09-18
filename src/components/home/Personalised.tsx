'use client';

import Image from 'next/image';
import { focusAreas, personalised } from '@/lib/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { useParallax } from '@/lib/hooks/useParallax';

export function Personalised() {
  const parallax = useParallax<HTMLDivElement>(0.18);

  return (
    <section className="bg-mist py-16 sm:py-20 lg:py-28">
      <div className="shell">
        {/* Lead statement + image */}
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="right" className="order-2 lg:order-1">
            <div className="rule-above">
              <p className="text-sm font-semibold tracking-wide text-ink-500">
                {personalised.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[14ch] text-[length:var(--text-step-4)]">
                {personalised.title}
              </h2>
              <p className="mt-6 max-w-[58ch] text-[length:var(--text-step-1)] leading-relaxed text-ink/75">
                {personalised.body}
              </p>
            </div>
          </Reveal>

          {/* The wipe panel is .img-wipe's ::after; it slides off once revealed */}
          <Reveal
            variant="fade"
            delay={80}
            className="img-wipe order-1 aspect-[5/4] rounded-[1.5rem] sm:rounded-[2rem] lg:order-2"
            style={{ ['--wipe-color' as string]: 'var(--color-mist)' }}
          >
            <div
              ref={parallax}
              className="absolute inset-[-8%] translate-y-[var(--parallax-y,0)] will-change-transform"
            >
              <Image
                src={personalised.image}
                alt={personalised.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Notch + tick badge, both pseudo-free so they can carry content */}
            <span
              aria-hidden="true"
              className="absolute -bottom-px left-0 z-[3] h-16 w-32 rounded-tr-[1.5rem] bg-mist sm:h-20 sm:w-40 sm:rounded-tr-[2rem]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-4 z-[3] flex size-12 items-center justify-center rounded-full bg-lime sm:bottom-5 sm:left-5 sm:size-14"
            >
              <svg viewBox="0 0 24 24" className="size-5 text-ink sm:size-6">
                <path
                  d="M4 12.5l5 5L20 6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Reveal>
        </div>

        {/* Four areas of focus */}
        <div className="mt-20 lg:mt-32">
          <Reveal variant="line">
            <h3 className="text-[length:var(--text-step-3)]">Four things we build it on</h3>
          </Reveal>

          <Reveal
            as="ol"
            stagger={90}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {focusAreas.map((area) => (
              <li key={area.id} className="flex">
                <article className="card-rule group flex w-full flex-col overflow-hidden rounded-[1.25rem] bg-white transition-[box-shadow,transform] duration-[var(--dur-slow)] ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(11,34,57,0.55)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={area.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 pb-6 sm:p-6 sm:pb-7">
                    <h4 className="text-[length:var(--text-step-1)]">{area.title}</h4>
                    <p className="mt-3 leading-relaxed text-ink/70">{area.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
