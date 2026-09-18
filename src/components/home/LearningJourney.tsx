import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { divisions } from '@/lib/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';

export function LearningJourney() {
  return (
    <section className="relative bg-ink py-16 text-white sm:py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8">
          <Reveal className="rule-above">
            <p className="text-sm font-semibold tracking-wide text-lime">
              Preschool to Grade 12
            </p>
            <h2 className="mt-3 max-w-[12ch] text-[length:var(--text-step-4)]">
              One journey, three chapters
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={140} className="shrink-0">
            <ButtonLink href="/learning" variant="light" size="lg">
              All of our learning
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal
          as="ul"
          stagger={120}
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {divisions.map((division) => (
            <li key={division.id} className="flex">
              {/* .card-scrim supplies both gradient layers via ::before/::after */}
              <Link
                href={division.href}
                className="card-scrim group relative flex min-h-[20rem] w-full flex-col justify-end overflow-hidden rounded-[1.5rem] p-6 sm:min-h-[24rem] sm:rounded-[1.75rem] sm:p-7"
              >
                <Image
                  src={division.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.08]"
                />

                <span className="relative z-[2]">
                  <span className="block text-sm font-semibold tracking-wide text-lime">
                    {division.grades}
                  </span>
                  <span className="mt-2 flex items-center gap-3 font-[family-name:var(--font-display)] text-[length:var(--text-step-2)] font-semibold tracking-tight">
                    {division.name}
                    <ArrowUpRight className="size-5 shrink-0 transition-transform duration-[var(--dur-base)] ease-[var(--ease-out-back)] group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-6" />
                  </span>

                  {/* Height animates from 0fr to 1fr — no hardcoded max-height.
                      On touch devices the (hover: none) rule keeps it open. */}
                  <span className="reveal-on-hover mt-2 grid grid-rows-[0fr] transition-[grid-template-rows] duration-[var(--dur-slow)] ease-[var(--ease-out-soft)] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                    <span className="overflow-hidden">
                      <span className="block max-w-[34ch] pt-1 text-white/75">
                        {division.note}
                      </span>
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
