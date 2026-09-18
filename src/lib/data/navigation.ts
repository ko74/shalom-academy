export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavSection = NavLink & {
  children?: NavLink[];
  blurb?: string;
};

/** Primary information architecture, mirroring the live site's menu. */
export const mainNav: NavSection[] = [
  {
    label: "About",
    href: "/about",
    blurb: "Seventy-five years of international education in Brussels.",
    children: [
      { label: "Mission & Strategy", href: "/about/mission" },
      { label: "Our Legacy", href: "/about/legacy" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
      { label: "News & Media", href: "/about/news" },
      { label: "School Calendar", href: "/about/calendar" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    blurb: "Rolling admissions from Preschool through Grade 12.",
    children: [
      { label: "Inquire & Visit", href: "/admissions/inquire" },
      { label: "Virtual Tour", href: "/admissions/virtual-tour", external: true },
      { label: "Community Stories", href: "/admissions/stories" },
      { label: "Apply", href: "/admissions/apply" },
      { label: "Tuition & Fees", href: "/admissions/tuition" },
      { label: "Access Programme", href: "/admissions/access-programme" },
      { label: "Financial Aid & Scholarship", href: "/admissions/financial-aid" },
      { label: "Admissions FAQ", href: "/admissions/faq" },
      { label: "Security & Transport", href: "/admissions/security-transport" },
    ],
  },
  {
    label: "Learning",
    href: "/learning",
    blurb: "One curriculum, shaped around each student.",
    children: [
      { label: "Lower School", href: "/learning/lower-school" },
      { label: "Middle School", href: "/learning/middle-school" },
      { label: "High School", href: "/learning/high-school" },
      { label: "Student Support", href: "/learning/student-support" },
      { label: "STEM Learning", href: "/learning/stem-learning" },
      { label: "Language Learning", href: "/learning/language-learning" },
      { label: "Community Engagement", href: "/learning/community-engagement" },
      { label: "Academic Performance", href: "/learning/academic-performance" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    blurb: "Arts, athletics and everything after the last bell.",
    children: [
      { label: "Arts", href: "/student-life/arts" },
      { label: "Athletics", href: "/student-life/athletics" },
      { label: "After-School Activities", href: "/student-life/activities" },
      { label: "Camps", href: "/student-life/camps" },
    ],
  },
  {
    label: "Give",
    href: "/give",
    blurb: "Support the programmes that shape our students.",
    children: [
      { label: "Make a Gift", href: "/give/make-a-gift" },
      { label: "Gift Policy", href: "/give/gift-policy" },
      { label: "Tax Deductibility", href: "/give/tax-deductibility" },
    ],
  },
  {
    label: "Join Us",
    href: "/join",
    blurb: "Teach, lead and live in the capital of Europe.",
    children: [
      { label: "Current Openings", href: "/join/current-openings" },
      { label: "Professional Development", href: "/join/professional-development" },
      { label: "Living in Belgium", href: "/join/living-in-belgium" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Community / portal links shown in the header utility row. */
export const portalNav: NavLink[] = [
  { label: "Community", href: "/community-portal" },
  { label: "Alumni", href: "/alumni" },
  { label: "School Shop", href: "/shop" },
];

export const ctaNav: NavLink[] = [
  { label: "Visit", href: "/admissions/inquire" },
  { label: "Apply", href: "/admissions/apply" },
];

export const socialNav = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" as const },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" as const },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" as const },
];

export const footerUseful: NavLink[] = [
  { label: "Current Openings", href: "/join/current-openings" },
  { label: "Admissions & FAQs", href: "/admissions/faq" },
  { label: "Child Safeguarding", href: "/child-safeguarding" },
];

export const footerUtility: NavLink[] = [
  { label: "Site Map", href: "/site-map" },
  { label: "Accessibility", href: "/accessibility-statement" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
