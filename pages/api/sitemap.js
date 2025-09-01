import { siteConfig } from '@/site.config';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get all course files
    const coursesDir = path.join(process.cwd(), 'content/courses');
    const courseFiles = fs.existsSync(coursesDir) 
      ? fs.readdirSync(coursesDir).filter(file => file.endsWith('.mdx'))
      : [];

    // Get all blog files
    const blogDir = path.join(process.cwd(), 'content/blog');
    const blogFiles = fs.existsSync(blogDir)
      ? fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'))
      : [];

    // Define cities for location pages
    const cities = [
      'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata',
      'pune', 'ahmedabad', 'surat', 'jaipur', 'lucknow', 'kanpur',
      'nagpur', 'indore', 'thane', 'bhopal'
    ];

    const currentDate = new Date().toISOString();

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Home page -->
  <url>
    <loc>${siteConfig.siteUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Static pages -->
  <url>
    <loc>${siteConfig.siteUrl}/courses</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${siteConfig.siteUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${siteConfig.siteUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${siteConfig.siteUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${siteConfig.siteUrl}/pricing</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Course pages -->
  ${courseFiles.map(file => {
    const slug = file.replace('.mdx', '');
    return `  <url>
    <loc>${siteConfig.siteUrl}/courses/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n')}
  
  <!-- Blog pages -->
  ${blogFiles.map(file => {
    const slug = file.replace('.mdx', '');
    return `  <url>
    <loc>${siteConfig.siteUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }).join('\n')}
  
  <!-- City pages -->
  ${cities.map(city => `  <url>
    <loc>${siteConfig.siteUrl}/cities/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ message: 'Error generating sitemap' });
  }
}
