import { mainNav, portalNav } from "@/lib/data/navigation";
import type { PageContent } from "./types";
import { aboutPages } from "./about";
import { academicsPages } from "./academics";
import { admissionsPages } from "./admissions";
import { facilitiesPages } from "./facilities";
import { newsEventsPages } from "./news-events";
import { contactPages } from "./contact";

export type { PageContent, Block, LinkRef } from "./types";

export const allPages: PageContent[] = [
  ...aboutPages,
  ...academicsPages,
  ...admissionsPages,
  ...facilitiesPages,
  ...newsEventsPages,
  ...contactPages,
];

const byHref = new Map(allPages.map((page) => [page.href, page]));

export function getPage(href: string): PageContent | undefined {
  return byHref.get(href);
}

export function allHrefs(): string[] {
  return [...byHref.keys()];
}

/**
 * The section a page belongs to, plus its siblings — used for the
 * "In this section" rail and for previous/next paging.
 */
export type SectionContext = {
  sectionLabel: string;
  sectionHref: string;
  siblings: { label: string; href: string }[];
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
};

export function getSectionContext(href: string): SectionContext | null {
  for (const section of mainNav) {
    if (!section.children) continue;

    const inSection =
      href === section.href || section.children.some((child) => child.href === href);
    if (!inSection) continue;

    const siblings = section.children.map((child) => ({
      label: child.label,
      href: child.href,
    }));

    const index = siblings.findIndex((s) => s.href === href);

    return {
      sectionLabel: section.label,
      sectionHref: section.href,
      siblings,
      previous: index > 0 ? siblings[index - 1] : undefined,
      next: index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined,
    };
  }

  const portal = portalNav.find((item) => item.href === href);
  if (portal) {
    return {
      sectionLabel: "My school",
      sectionHref: href,
      siblings: portalNav.map((item) => ({ label: item.label, href: item.href })),
    };
  }

  return null;
}
