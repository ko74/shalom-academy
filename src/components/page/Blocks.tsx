import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote as QuoteIcon } from "lucide-react";
import type { Block } from "@/lib/data/pages";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { ButtonLink } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/page/FaqAccordion";
import { ContactForm } from "@/components/page/ContactForm";
import { NewsListing } from "@/components/page/NewsListing";
import { EventsListing } from "@/components/page/EventsListing";
import { SiteMapBlock } from "@/components/page/SiteMapBlock";
import { OpeningsList } from "@/components/page/OpeningsList";
import { cn } from "@/lib/utils/cn";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="rule-above max-w-[20ch] text-[length:var(--text-step-3)]">{children}</h2>
  );
}

/** Different kinds of block earn different entrances. */
function revealFor(block: Block) {
  switch (block.type) {
    case 'quote':
    case 'cta':
      return 'mask-up' as const;
    case 'split':
      return 'fade' as const;
    case 'stats':
      return 'rise' as const;
    default:
      return 'up' as const;
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {blocks.map((block, i) => (
        <Reveal key={i} as="section" amount={0.08} variant={revealFor(block)}>
          <BlockBody block={block} />
        </Reveal>
      ))}
    </div>
  );
}

function BlockBody({ block }: { block: Block }) {
  switch (block.type) {
    /* ------------------------------------------------------------ prose */
    case "prose":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.lead && (
            <p
              className={cn(
                "max-w-[42ch] font-[family-name:var(--font-display)] text-[length:var(--text-step-2)] font-medium leading-snug tracking-tight text-ink",
                block.heading && "mt-6"
              )}
            >
              {block.lead}
            </p>
          )}
          <div
            className={cn(
              "max-w-[66ch] space-y-5 leading-relaxed text-ink/75",
              (block.heading || block.lead) && "mt-6"
            )}
          >
            {block.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      );

    /* ------------------------------------------------------------ split */
    case "split":
      return (
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={cn(block.reverse && "lg:order-2")}>
            <Heading>{block.heading}</Heading>
            <div className="mt-5 max-w-[56ch] space-y-4 leading-relaxed text-ink/75">
              {block.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {block.links && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {block.links.map((link) => (
                  <ButtonLink
                    key={link.href}
                    href={link.href}
                    variant={link.variant ?? "outline"}
                    external={link.external}
                  >
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>

          <Reveal
            variant="fade"
            className={cn(
              "img-wipe aspect-[5/4] rounded-[1.5rem] sm:rounded-[2rem]",
              block.reverse && "lg:order-1"
            )}
            style={{ ["--wipe-color" as string]: "var(--color-mist)" }}
          >
            <Image
              src={block.image}
              alt={block.alt ?? ""}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      );

    /* ------------------------------------------------------------ cards */
    case "cards":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="mt-4 max-w-[62ch] text-[length:var(--text-step-1)] leading-relaxed text-ink/70">{block.intro}</p>
          )}

          <Reveal
            as="ul"
            stagger={70}
            className={cn(
              "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
              (block.heading || block.intro) && "mt-10"
            )}
          >
            {block.items.map((item) => {
              const inner = (
                <>
                  {item.image && (
                    <span className="relative block aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                      />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col p-6">
                    {item.meta && (
                      <span className="text-sm font-semibold tracking-wide text-ink-500">
                        {item.meta}
                      </span>
                    )}
                    <span className="mt-1 flex items-start gap-2 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                      {item.title}
                      {item.href && (
                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-ink/40 transition-[transform,color] duration-[var(--dur-base)] ease-[var(--ease-out-back)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                      )}
                    </span>
                    <span className="mt-3 text-[0.98rem] leading-relaxed text-ink/70">
                      {item.body}
                    </span>
                  </span>
                </>
              );

              const shell =
                "card-rule group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-mist " +
                "transition-[box-shadow,transform] duration-[var(--dur-slow)] ease-[var(--ease-out-soft)] " +
                "hover:-translate-y-1 hover:shadow-[0_30px_60px_-42px_rgba(11,34,57,0.6)]";

              return (
                <li key={item.title} className="flex">
                  {item.href ? (
                    <Link href={item.href} className={cn(shell, "w-full")}>
                      {inner}
                    </Link>
                  ) : (
                    <div className={cn(shell, "w-full")}>{inner}</div>
                  )}
                </li>
              );
            })}
          </Reveal>
        </div>
      );

    /* ------------------------------------------------------------ stats */
    case "stats":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          <dl
            className={cn(
              "grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] bg-ink/12 sm:grid-cols-2 lg:grid-cols-4",
              block.heading && "mt-9"
            )}
          >
            {block.items.map((stat) => (
              <div key={stat.label} className="bg-white p-7">
                <dd className="font-[family-name:var(--font-display)] text-[length:var(--text-step-4)] font-semibold leading-none tracking-tight text-ink">
                  <Counter value={stat.value} display={stat.display} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 text-[0.98rem] leading-snug text-ink/65">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      );

    /* ------------------------------------------------------------ steps */
    case "steps":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="mt-4 max-w-[62ch] text-[length:var(--text-step-1)] leading-relaxed text-ink/70">{block.intro}</p>
          )}
          <ol className={cn("mt-10 space-y-0", block.heading && "border-t border-ink/12")}>
            {block.items.map((item, i) => (
              <li
                key={item.title}
                className="grid gap-x-5 gap-y-1 border-b border-ink/12 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-6 sm:py-7"
              >
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold text-lime-dark"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[length:var(--text-step-1)]">{item.title}</h3>
                  <p className="mt-2 max-w-[60ch] leading-relaxed text-ink/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    /* -------------------------------------------------------------- faq */
    case "faq":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className={cn(block.heading && "mt-8")}>
            <FaqAccordion items={block.items} />
          </div>
        </div>
      );

    /* ------------------------------------------------------------ table */
    case "table":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          <div
            className={cn(
              "scroll-x rounded-[1.25rem] border border-ink/12",
              block.heading && "mt-8"
            )}
            tabIndex={0}
            role="region"
            aria-label={block.heading ?? "Table"}
          >
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <thead>
                <tr className="bg-ink text-white">
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-4 font-[family-name:var(--font-display)] text-sm font-semibold"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-mist/60" : undefined}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={cn(
                          "px-5 py-4 align-top text-[0.97rem]",
                          j === 0 ? "font-semibold text-ink" : "text-ink/75"
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className="mt-3 text-sm text-ink/65">{block.note}</p>}
        </div>
      );

    /* ------------------------------------------------------------ quote */
    case "quote":
      return (
        <figure className="relative overflow-hidden rounded-[1.5rem] bg-ink px-6 py-10 text-white sm:rounded-[2rem] sm:px-14 sm:py-16">
          <QuoteIcon className="size-9 text-lime" strokeWidth={1.5} />
          <blockquote className="mt-5 max-w-[26ch] font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-semibold leading-tight tracking-tight">
            {block.text}
          </blockquote>
          <figcaption className="mt-7 text-white/60">
            {block.attribution}
            {block.role && <span className="block text-sm text-white/60">{block.role}</span>}
          </figcaption>
        </figure>
      );

    /* ------------------------------------------------------------- list */
    case "list":
      return (
        <div>
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="mt-4 max-w-[62ch] text-[length:var(--text-step-1)] leading-relaxed text-ink/70">{block.intro}</p>
          )}
          <ul
            className={cn(
              "mt-8 grid gap-x-10 gap-y-0",
              block.columns === 3
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : block.columns === 2
                  ? "sm:grid-cols-2"
                  : ""
            )}
          >
            {block.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-ink/10 py-3.5 leading-relaxed text-ink/75"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-lime"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    /* -------------------------------------------------------------- cta */
    case "cta":
      return (
        <div className="rounded-[1.5rem] bg-lime px-6 py-10 text-ink sm:rounded-[2rem] sm:px-12 sm:py-12">
          <h2 className="max-w-[20ch] text-[length:var(--text-step-3)]">{block.heading}</h2>
          {block.body && <p className="mt-4 max-w-[52ch] text-lg text-ink/75">{block.body}</p>}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {block.links.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                size="lg"
                variant={link.variant ?? "solid"}
                external={link.external}
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      );

    /* ---------------------------------------------------------- bespoke */
    case "contact":
      return <ContactForm />;
    case "news-listing":
      return <NewsListing />;
    case "events-listing":
      return <EventsListing />;
    case "site-map":
      return <SiteMapBlock />;
    case "openings":
      return <OpeningsList />;
  }
}
