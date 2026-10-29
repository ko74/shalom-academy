import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const admissionsPages: PageContent[] = [
  {
    href: "/admissions",
    eyebrow: "Admissions",
    title: "Admissions",
    intro: "We welcome applications throughout the year. Here is what you need to know to apply.",
    heroImage: img("photo-1523240795612-9a054b0db644"),
    blocks: [
      {
        type: "prose",
        lead: "Admission requirements",
        body: [
          "The Mickbess School welcomes applications from families who share our values and ethos. Places are offered subject to availability in the relevant year group.",
          "Applicants are asked to provide previous school reports (where available), a copy of the child's birth certificate or passport, and any relevant educational or medical reports.",
        ],
      },
      {
        type: "steps",
        heading: "Application process",
        intro: "Applying is straightforward. We are here to help at every stage.",
        items: [
          {
            title: "Enquire",
            body: "Get in touch to request a prospectus or arrange a campus visit.",
          },
          {
            title: "Visit",
            body: "Come and see the school in action, meet our team, and ask any questions.",
          },
          {
            title: "Apply",
            body: "Complete the application form and submit the required documents.",
          },
          {
            title: "Assessment",
            body: "Your child may be invited for an age-appropriate assessment or interview.",
          },
          {
            title: "Offer",
            body: "If a place is available, we will send a formal offer letter for you to accept.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Fees",
        lead: "Tuition fees are published annually and cover tuition, books and most learning materials.",
        body: [
          "Fees vary by year group. Payment options include termly and annual plans. For a full schedule of fees, including any registration or deposit requirements, please contact our admissions office.",
          "We aim to keep our fees transparent and competitive, with no hidden charges.",
        ],
      },
      {
        type: "cta",
        heading: "Start your application",
        body: "The best first step is to visit us or send us an enquiry.",
        links: [
          { label: "Book a visit", href: "/contact", variant: "solid" },
          { label: "Ask a question", href: "/contact", variant: "outline" },
        ],
      },
    ],
  },
];
