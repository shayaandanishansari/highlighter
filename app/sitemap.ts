import type { MetadataRoute } from 'next'
import { entries } from '@/content/entries'

export const dynamic = 'force-static'

const SITE_URL = 'https://highlighter.world'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...entries.map((entry) => ({
      url: `${SITE_URL}/e/${entry.slug}`,
      lastModified: entry.date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
