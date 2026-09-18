import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { allHrefs, getPage, getSectionContext } from '@/lib/data/pages';
import { PageHero } from '@/components/page/PageHero';
import { SectionNav } from '@/components/page/SectionNav';
import { Blocks } from '@/components/page/Blocks';

type Params = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return allHrefs().map((href) => ({ slug: href.slice(1).split('/') }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(`/${slug.join('/')}`);
  if (!page) return { title: 'Page not found' };

  return {
    title: page.title,
    description: page.intro,
    openGraph: { title: page.title, description: page.intro },
  };
}

export default async function InnerPage({ params }: Params) {
  const { slug } = await params;
  const href = `/${slug.join('/')}`;
  const page = getPage(href);

  if (!page) notFound();

  const section = getSectionContext(href);
  const showRail = Boolean(section && section.siblings.length > 1);

  return (
    <article>
      <PageHero page={page} section={section} />

      <div className="shell py-14 sm:py-16 lg:py-24">
        <div
          className={
            showRail
              ? 'grid gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16'
              : ''
          }
        >
          {showRail && (
            <aside className="lg:pt-2">
              <SectionNav section={section!} />
            </aside>
          )}

          <div className="min-w-0">
            <Blocks blocks={page.blocks} />

            {(section?.previous || section?.next) && (
              <nav
                aria-label="Section pagination"
                className="mt-16 grid grid-cols-1 gap-4 border-t border-ink/12 pt-8 sm:mt-20 sm:grid-cols-2"
              >
                {section.previous ? (
                  <Link
                    href={section.previous.href}
                    className="group flex flex-col gap-1 rounded-2xl border border-ink/12 p-5 transition-[border-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-ink/35"
                  >
                    <span className="inline-flex items-center gap-2 text-sm text-ink/65">
                      <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                      Previous
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {section.previous.label}
                    </span>
                  </Link>
                ) : (
                  <span className="hidden sm:block" />
                )}

                {section.next && (
                  <Link
                    href={section.next.href}
                    className="group flex flex-col items-end gap-1 rounded-2xl border border-ink/12 p-5 text-right transition-[border-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-ink/35 sm:col-start-2"
                  >
                    <span className="inline-flex items-center gap-2 text-sm text-ink/65">
                      Next
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {section.next.label}
                    </span>
                  </Link>
                )}
              </nav>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
