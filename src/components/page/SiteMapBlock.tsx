import Link from 'next/link';
import { footerUtility, mainNav, portalNav } from '@/lib/data/navigation';

export function SiteMapBlock() {
  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {mainNav.map((section) => (
        <nav key={section.href} aria-labelledby={`sitemap-${section.label}`}>
          <h2 id={`sitemap-${section.label}`} className="text-xl">
            {/* A heading link's hit area is its text line-box by default,
                which can land under 24px at this size — pad it out. */}
            <Link
              href={section.href}
              className="link-underline-accent -ml-1 inline-flex min-h-6 items-center rounded px-1"
            >
              {section.label}
            </Link>
          </h2>
          {section.children && (
            <ul className="mt-4 space-y-2 text-ink/70">
              {section.children.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="link-underline hover:text-ink">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      ))}

      <nav aria-labelledby="sitemap-portal">
        <h2 id="sitemap-portal" className="text-xl">My school</h2>
        <ul className="mt-4 space-y-2 text-ink/70">
          {portalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-underline hover:text-ink">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-labelledby="sitemap-utility">
        <h2 id="sitemap-utility" className="text-xl">Utility</h2>
        <ul className="mt-4 space-y-2 text-ink/70">
          {footerUtility.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-underline hover:text-ink">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
