export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavSection = NavLink & {
  children?: NavLink[];
  blurb?: string;
};

/** Primary information architecture — seven top-level pages, flat. */
export const mainNav: NavSection[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities & Gallery", href: "/facilities" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact Us", href: "/contact" },
];

/** Community / portal links shown in the header utility row. */
export const portalNav: NavLink[] = [];

export const ctaNav: NavLink[] = [
  { label: "Visit", href: "/admissions" },
  { label: "Apply", href: "/admissions" },
];

export const socialNav = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" as const },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" as const },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" as const },
];

export const footerUseful: NavLink[] = [
  { label: "Admissions", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

export const footerUtility: NavLink[] = [];
