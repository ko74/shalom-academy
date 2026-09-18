"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { newsPosts } from "@/lib/data/news";
import { formatDate } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

export function NewsListing() {
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(newsPosts.map((p) => p.category)))],
    []
  );

  const visible = useMemo(
    () => (filter === "All" ? newsPosts : newsPosts.filter((p) => p.category === filter)),
    [filter]
  );

  const [lead, ...rest] = visible;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter news by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              "relative min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-[var(--dur-base)]",
              filter === category ? "text-white" : "bg-mist text-ink/65 hover:text-ink"
            )}
          >
            {filter === category && (
              <motion.span
                layoutId="news-filter-pill"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-full bg-ink"
              />
            )}
            <span className="relative">{category}</span>
          </button>
        ))}
      </div>

      {lead && (
        <Link
          href={lead.href}
          className="card-rule group mt-8 grid overflow-hidden rounded-[1.25rem] bg-mist transition-shadow duration-[var(--dur-slow)] hover:shadow-[0_30px_60px_-42px_rgba(11,34,57,0.6)] sm:rounded-[1.5rem] md:grid-cols-2"
        >
          <span className="relative aspect-[16/10] md:aspect-auto md:min-h-[22rem]">
            <Image
              src={lead.image}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
            />
          </span>
          <span className="flex flex-col justify-center p-7 sm:p-10">
            <span className="text-sm font-semibold tracking-wide text-ink-500">
              {lead.category}
            </span>
            <span className="mt-3 font-[family-name:var(--font-display)] text-[length:var(--text-step-3)] font-semibold leading-tight tracking-tight">
              {lead.title}
            </span>
            <time dateTime={lead.date} className="mt-4 text-sm text-ink/65">
              {formatDate(lead.date)}
            </time>
          </span>
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.id}>
              <Link href={post.href} className="group flex h-full flex-col">
                <span className="img-wipe relative block aspect-[16/10] rounded-2xl">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[var(--dur-slower)] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
                  />
                </span>
                <span className="mt-4 text-sm font-semibold tracking-wide text-ink-500">
                  {post.category}
                </span>
                <span className="mt-1.5 font-[family-name:var(--font-display)] text-[length:var(--text-step-1)] font-semibold leading-snug tracking-tight transition-colors duration-[var(--dur-base)] group-hover:text-ink-500">
                  {post.title}
                </span>
                <time dateTime={post.date} className="mt-auto pt-3 text-sm text-ink/65">
                  {formatDate(post.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {visible.length === 0 && (
        <p className="mt-10 text-ink/60">
          Nothing filed under {filter} yet. Try another category.
        </p>
      )}
    </div>
  );
}
