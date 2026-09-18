/**
 * The block vocabulary every inner page is written in.
 *
 * Pages are data, not markup. A page is a hero plus an ordered list of blocks;
 * `components/page/Blocks.tsx` is the single renderer. Adding a page means
 * adding an entry to `lib/data/pages/index.ts` — no new route, no new component.
 */

export type LinkRef = {
  label: string;
  href: string;
  variant?: "solid" | "lime" | "outline" | "light" | "ghost";
  external?: boolean;
};

export type Block =
  | { type: "prose"; heading?: string; lead?: string; body: string[] }
  | {
      type: "split";
      heading: string;
      body: string[];
      image: string;
      alt?: string;
      reverse?: boolean;
      links?: LinkRef[];
    }
  | {
      type: "cards";
      heading?: string;
      intro?: string;
      tone?: "light" | "dark";
      items: { title: string; body: string; image?: string; href?: string; meta?: string }[];
    }
  | {
      type: "stats";
      heading?: string;
      items: { value: number; suffix?: string; display?: string; label: string }[];
    }
  | { type: "steps"; heading?: string; intro?: string; items: { title: string; body: string }[] }
  | { type: "faq"; heading?: string; items: { q: string; a: string }[] }
  | {
      type: "table";
      heading?: string;
      note?: string;
      columns: string[];
      rows: string[][];
    }
  | { type: "quote"; text: string; attribution: string; role?: string }
  | { type: "list"; heading?: string; intro?: string; items: string[]; columns?: 1 | 2 | 3 }
  | { type: "cta"; heading: string; body?: string; links: LinkRef[] }
  | { type: "contact" }
  | { type: "news-listing" }
  | { type: "events-listing" }
  | { type: "site-map" }
  | { type: "openings" };

export type PageContent = {
  /** Route this page renders at. */
  href: string;
  title: string;
  eyebrow?: string;
  /** Short summary used under the title and as the meta description. */
  intro: string;
  heroImage?: string;
  blocks: Block[];
};
