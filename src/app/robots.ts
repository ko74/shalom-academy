import type { MetadataRoute } from 'next';

/**
 * This rebuild is blocked from indexing on purpose — see the note in README.
 * Remove the disallow (and the `robots` key in layout metadata) for a real site.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', disallow: '/' }],
  };
}
