import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { upcomingEvents } from '@/lib/data/news';
import { formatDay, formatMonth } from '@/lib/utils/format';

export function EventsListing() {
  return (
    <ul className="divide-y divide-ink/12 border-y border-ink/12">
      {upcomingEvents.map((event) => (
        <li key={event.id}>
          <Link href={event.href} className="group flex min-h-11 items-center gap-4 py-5 sm:gap-6 sm:py-6">
            <span className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-mist leading-none transition-[background-color,transform] duration-[var(--dur-base)] ease-[var(--ease-out-soft)] group-hover:scale-105 group-hover:bg-lime sm:size-[4.5rem]">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                {formatDay(event.date)}
              </span>
              <span className="mt-1 text-xs tracking-widest text-ink/60">
                {formatMonth(event.date)}
              </span>
            </span>

            <span className="min-w-0 flex-1">
              <span className="block font-[family-name:var(--font-display)] text-[length:var(--text-step-1)] font-semibold tracking-tight">
                {event.title}
              </span>
              <span className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-ink/60">
                {event.time && (
                  <span className="inline-flex items-center gap-2">
                    <Clock className="size-4" />
                    {event.time}
                  </span>
                )}
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" />
                  {event.location}
                </span>
              </span>
            </span>

            <ArrowUpRight className="hidden size-5 shrink-0 text-ink/40 transition-[transform,color] duration-[var(--dur-base)] ease-[var(--ease-out-back)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink sm:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
