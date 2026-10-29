import type { MetadataRoute } from 'next';

/**
 * Robots for the live site — allow indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
  };
}
