import { siteConfig } from '@/site.config';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const robots = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow search engines to crawl important pages
Allow: /courses/
Allow: /blog/
Allow: /cities/

# Sitemap location
Sitemap: ${siteConfig.siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.status(200).send(robots);
}
