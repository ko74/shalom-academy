import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function VisitBand() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-20 lg:pb-28">
      <div className="shell">
        <Reveal
          variant="mask-up"
          className="relative overflow-hidden rounded-[1.5rem] bg-lime px-6 py-12 text-ink sm:rounded-[2rem] sm:px-14 sm:py-16 lg:py-20"
        >
          <div className="relative z-[1] max-w-[46ch]">
            <h2 className="text-[length:var(--text-step-4)]">
              Come and see the place for yourself
            </h2>
            <p className="mt-5 text-[length:var(--text-step-1)] leading-relaxed text-ink/75">
              Campus visits run through the week, and admissions is open all year. Tell us a
              little about your family and we will find a morning that works.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/admissions/inquire" variant="solid" size="lg">
                Book a visit
              </ButtonLink>
              <ButtonLink href="/admissions/apply" variant="outline" size="lg">
                Start an application
              </ButtonLink>
            </div>
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -bottom-32 -right-24 h-[22rem] w-[22rem] text-ink/10 sm:-bottom-24 sm:-right-16 sm:h-[26rem] sm:w-[26rem]"
          >
            <path d="M200 20 L380 200 L200 380 L20 200 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M200 80 L320 200 L200 320 L80 200 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M200 140 L260 200 L200 260 L140 200 Z" fill="currentColor" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
