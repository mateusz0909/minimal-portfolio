import type { MetadataRoute } from 'next'
import { projects } from '@/app/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const urls = ['/', '/projects', '/process', '/contact', ...projects.map(({ slug }) => `/projects/${slug}`)]
  const now = new Date()
  return urls.map((u) => ({ url: new URL(u, base).toString(), lastModified: now }))
}
