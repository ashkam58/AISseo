
# AIS — Ashkam Intelligence Studio (SEO-Ready Next.js)

Fun, cartoonish, soothing site to rank for Coding, AI, Rubik’s Cube, Mental Math, and Competition Math (Olympiad, Kangaroo, NJSLA).

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Configure

- Edit `site.config.js`:
  - `siteUrl` → your real domain (e.g. https://ashkam.in)
  - `whatsapp` → your full number without + (e.g. 918002416363)
  - `email` → contact email

## SEO Features

- Unique meta `<title>` & descriptions per page (see `components/SEO.jsx`).
- Canonical URLs, OpenGraph, JSON-LD for Organization, Course, BlogPosting.
- XML sitemap at `/sitemap.xml` and robots at `/robots.txt` (dynamic; also a static fallback robots.txt in /public).
- Semantic HTML, fast, mobile-first layout.
- Blog system (`data/posts.js`) with static generation for posts.

## Customize

- Add or edit courses in `pages/courses/`.
- Add blog posts in `data/posts.js` (or switch to Markdown later).
- Update visuals in `styles/globals.css` and images in `public/`.
