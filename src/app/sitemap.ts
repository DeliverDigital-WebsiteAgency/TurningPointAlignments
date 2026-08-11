import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://semialignments.com',
      lastModified: new Date('2026-08-11'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
