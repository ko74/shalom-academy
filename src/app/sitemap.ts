import type { MetadataRoute } from 'next';
import { allHrefs } from '@/lib/data/pages';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...allHrefs().map((href) => ({
      url: `${BASE}${href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: href.split('/').length > 2 ? 0.6 : 0.8,
    })),
  ];
}
