import type { PageContent } from "./types";

export const newsEventsPages: PageContent[] = [
  {
    href: "/news-events",
    eyebrow: "News & Events",
    title: "News & Events",
    intro: "Latest announcements, upcoming events and updates from The Mickbess School.",
    blocks: [{ type: "news-listing" }, { type: "events-listing" }],
  },
];