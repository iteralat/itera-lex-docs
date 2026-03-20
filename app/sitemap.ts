import type { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://docs.iteralex.com'

function getRoutes(dir: string, prefix = ''): string[] {
  const routes: string[] = []
  const entries = readdirSync(dir)

  for (const entry of entries) {
    if (entry.startsWith('_')) continue
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      routes.push(...getRoutes(fullPath, `${prefix}/${entry}`))
    } else if (entry.endsWith('.mdx')) {
      const slug = entry === 'index.mdx' ? prefix : `${prefix}/${entry.replace('.mdx', '')}`
      routes.push(slug || '/')
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDir = join(process.cwd(), 'content')
  const routes = getRoutes(contentDir)

  return routes.map((route) => {
    const depth = route === '/' ? 0 : route.split('/').filter(Boolean).length
    const priority = depth === 0 ? 1.0 : depth === 1 ? 0.8 : 0.6

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    }
  })
}
