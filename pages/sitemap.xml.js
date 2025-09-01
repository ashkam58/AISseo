
import { siteConfig } from '@/site.config'
import { posts } from '@/data/posts'

export async function getServerSideProps({ res }){
  const base = siteConfig.siteUrl.replace(/\/$/,'')
  const pages = [
    '/', '/about', '/contact',
    '/courses', '/courses/coding-ai', '/courses/rubiks-cube', '/courses/math-competitions', '/courses/mental-math',
    '/blog'
  ]
  const urls = [
    ...pages.map(p => `${base}${p}`),
    ...posts.map(p => `${base}/blog/${p.slug}`)
  ]
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${u}</loc></url>`).join('')}
  </urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(body)
  res.end()
  return { props: {} }
}

export default function SiteMap(){ return null }
