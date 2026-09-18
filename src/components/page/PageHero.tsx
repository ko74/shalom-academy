import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { PageContent } from "@/lib/data/pages";
import type { SectionContext } from "@/lib/data/pages";

type PageHeroProps = {
  page: PageContent;
  section: SectionContext | null;
};

export function PageHero({ page, section }: PageHeroProps) {
  const hasImage = Boolean(page.heroImage);

  return (
    <header
      className={
        hasImage
          ? "relative isolate overflow-hidden bg-ink pb-14 pt-32 text-white sm:pb-16 sm:pt-36 lg:pb-24 lg:pt-44"
          : "bg-mist pb-12 pt-32 sm:pb-14 sm:pt-36 lg:pb-20 lg:pt-44"
      }
    >
      {hasImage && (
        <>
          <Image
            src={page.heroImage!}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/50"
          />
        </>
      )}

      <div className="shell">
        <nav aria-label="Breadcrumb">
          <ol
            className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${
              hasImage ? "text-white/60" : "text-ink/65"
            }`}
          >
            <li>
              <Link href="/" className="link-underline">
                Home
              </Link>
            </li>
            {section && section.sectionHref !== page.href && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={section.sectionHref} className="link-underline">
                    {section.sectionLabel}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">/</li>
            <li aria-current="page" className={hasImage ? "text-white" : "text-ink"}>
              {page.title}
            </li>
          </ol>
        </nav>

        <Reveal variant="fade">
          {page.eyebrow && (
            <p
              className={`mt-8 text-sm font-semibold tracking-wide ${
                hasImage ? "text-lime" : "text-ink-500"
              }`}
            >
              {page.eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-[16ch] text-[length:var(--text-step-5)]">
            {page.title}
          </h1>
          <p
            className={`mt-6 max-w-[58ch] text-lg leading-relaxed ${
              hasImage ? "text-white/75" : "text-ink/70"
            }`}
          >
            {page.intro}
          </p>
        </Reveal>
      </div>
    </header>
  );
}
