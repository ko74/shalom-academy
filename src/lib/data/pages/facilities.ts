import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const facilitiesPages: PageContent[] = [
  {
    href: "/facilities",
    eyebrow: "Facilities & Gallery",
    title: "Facilities & Gallery",
    intro:
      "A look around our campus — the classrooms, playground, laboratories and spaces where learning happens.",
    heroImage: img("photo-1544717305-2782549b5136"),
    blocks: [
      {
        type: "prose",
        lead: "Spaces designed for learning, play and discovery.",
        body: [
          "Our campus provides a safe, stimulating environment where students can learn, play and grow. From bright classrooms to outdoor play areas and specialist laboratories, every space is designed with children in mind.",
          "Explore the facilities below and see what makes our school a great place to be.",
        ],
      },
      {
        type: "cards",
        heading: "Campus facilities",
        items: [
          {
            title: "Classrooms",
            body: "Bright, well-equipped classrooms with resources to support every subject.",
            image: img("photo-1509062522246-3755977927d7", 900),
          },
          {
            title: "Playground",
            body: "Safe outdoor play areas where children can run, play and socialise during breaks.",
            image: img("photo-1461896836934-ffe607ba8211", 900),
          },
          {
            title: "Laboratories",
            body: "Science and computer laboratories equipped for hands-on learning and experiments.",
            image: img("photo-1581092160562-40aa08e78837", 900),
          },
          {
            title: "School activities",
            body: "A range of activities and clubs that enrich school life beyond the classroom.",
            image: img("photo-1514320291840-2e0a9bf2a9ae", 900),
          },
        ],
      },
      {
        type: "cta",
        heading: "Arrange a tour",
        body: "See our facilities in person with a guided campus tour.",
        links: [{ label: "Book a visit", href: "/contact", variant: "solid" }],
      },
    ],
  },
];