import { introText } from '@/lib/data/home';
import { Reveal } from '@/components/ui/Reveal';

export function Intro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="shell">
        {/* Each line rises out of its own overflow box, one after the other */}
        <p className="max-w-4xl font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-medium leading-[1.3] tracking-tight text-ink">
          {introText.split('. ').map((sentence, i, all) => (
            <Reveal
              key={i}
              as="span"
              variant="line"
              delay={i * 110}
              className="block"
            >
              {sentence}
              {i < all.length - 1 ? '.' : ''}
            </Reveal>
          ))}
        </p>
      </div>
    </section>
  );
}
