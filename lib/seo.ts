import { siteConfig } from '@/site.config';

// Base SEO configuration
export const baseSEO = {
  title: siteConfig.brand,
  description: siteConfig.description,
  canonical: siteConfig.siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    images: [
      {
        url: `${siteConfig.siteUrl}/og.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.brand,
      },
    ],
  },
  twitter: {
    handle: siteConfig.twitter,
    site: siteConfig.twitter,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#6366f1',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
};

// Generate SEO props for pages
export function generateSEO({
  title,
  description,
  canonical,
  noindex = false,
  type = 'website',
  images = [],
}) {
  const fullTitle = title ? `${title} | ${siteConfig.brand}` : siteConfig.brand;
  const fullCanonical = canonical ? `${siteConfig.siteUrl}${canonical}` : siteConfig.siteUrl;
  
  return {
    title: fullTitle,
    description: description || siteConfig.description,
    canonical: fullCanonical,
    noindex,
    openGraph: {
      ...baseSEO.openGraph,
      title: fullTitle,
      description: description || siteConfig.description,
      url: fullCanonical,
      type,
      images: images.length > 0 ? images : baseSEO.openGraph.images,
    },
    twitter: {
      ...baseSEO.twitter,
      title: fullTitle,
      description: description || siteConfig.description,
    },
    additionalMetaTags: [
      ...baseSEO.additionalMetaTags,
      {
        name: 'robots',
        content: noindex ? 'noindex, nofollow' : 'index, follow',
      },
    ],
  };
}

// JSON-LD Schema Builders
export const jsonLdBuilders = {
  // Organization schema (sitewide)
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.brand,
    "description": siteConfig.description,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/og.svg`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": `+91${siteConfig.whatsapp}`,
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      siteConfig.social?.facebook,
      siteConfig.social?.instagram,
      siteConfig.social?.linkedin,
    ].filter(Boolean)
  }),

  // Person schema (Instructor)
  person: (name, description, image, sameAs = []) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "description": description,
    "image": image,
    "url": siteConfig.siteUrl,
    "sameAs": sameAs,
    "worksFor": {
      "@type": "Organization",
      "name": siteConfig.brand
    }
  }),

  // Course schema
  course: (courseData) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.title,
    "description": courseData.short,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.brand,
      "url": siteConfig.siteUrl
    },
    "courseMode": "online",
    "educationalLevel": courseData.level,
    "timeRequired": courseData.duration,
    "offers": [
      {
        "@type": "Offer",
        "price": courseData.priceINR.toString(),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "price": courseData.priceAED.toString(),
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock"
      }
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": courseData.audience.join(", ")
    },
    "keywords": courseData.tags?.join(", "),
    "url": `${siteConfig.siteUrl}/courses/${courseData.slug}`
  }),

  // Article schema
  article: (articleData) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.seo.description,
    "author": {
      "@type": "Person",
      "name": "Ashkam",
      "url": siteConfig.siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.brand,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.siteUrl}/og.svg`
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/blog/${articleData.slug}`
    },
    "keywords": articleData.tags?.join(", "),
    "articleSection": "Education"
  }),

  // FAQ schema
  faqPage: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  // BreadcrumbList schema
  breadcrumbs: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${siteConfig.siteUrl}${item.url}` : undefined
    }))
  }),

  // ItemList schema (for course listings)
  itemList: (items, type = "Course") => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": type,
        "name": item.title,
        "url": `${siteConfig.siteUrl}${item.url}`,
        "description": item.short || item.description
      }
    }))
  }),

  // LocalBusiness schema (for city pages)
  localBusiness: (city) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": `${siteConfig.brand} - ${city}`,
    "description": `Online coding, AI, and math classes for kids in ${city}`,
    "url": `${siteConfig.siteUrl}/cities/${city.toLowerCase()}`,
    "telephone": `+91${siteConfig.whatsapp}`,
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressCountry": "IN"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": siteConfig.brand,
      "url": siteConfig.siteUrl
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Courses",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Coding Classes",
          "itemListElement": {
            "@type": "Course",
            "name": "Kids Coding Adventures"
          }
        }
      ]
    }
  }),

  // Review schema
  review: (reviewData) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": reviewData.rating,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": reviewData.author
    },
    "reviewBody": reviewData.text,
    "itemReviewed": {
      "@type": "Organization",
      "name": siteConfig.brand
    }
  }),

  // Course Collection schema
  courseCollection: (courses) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Educational Courses",
    "description": "Comprehensive online courses for kids and students",
    "numberOfItems": courses.length,
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.short,
        "url": `${siteConfig.siteUrl}/courses/${course.slug}`,
        "provider": {
          "@type": "Organization",
          "name": siteConfig.brand
        },
        "educationalLevel": course.level,
        "timeRequired": course.duration
      }
    }))
  }),

  // Blog Collection schema
  blogCollection: (posts) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Educational Blog Posts",
    "description": "Expert guides and tips for children's education",
    "numberOfItems": posts.length,
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": post.title,
        "description": post.seo?.description || post.short,
        "url": `${siteConfig.siteUrl}/blog/${post.slug}`,
        "author": {
          "@type": "Person",
          "name": post.author || siteConfig.brand
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.brand
        },
        "datePublished": post.date,
        "dateModified": post.date
      }
    }))
  })
};

// Generate breadcrumb items
export function generateBreadcrumbs(path) {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({
      name,
      url: index === segments.length - 1 ? undefined : currentPath
    });
  });
  
  return breadcrumbs;
}

// Generate meta tags
export function generateMetaTags(seoData) {
  return [
    { name: 'description', content: seoData.description },
    { name: 'keywords', content: seoData.keywords || '' },
    { property: 'og:title', content: seoData.title },
    { property: 'og:description', content: seoData.description },
    { property: 'og:type', content: seoData.type || 'website' },
    { property: 'og:url', content: seoData.canonical },
    { property: 'og:image', content: seoData.image || `${siteConfig.siteUrl}/og.svg` },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: seoData.title },
    { property: 'twitter:description', content: seoData.description },
    { property: 'twitter:image', content: seoData.image || `${siteConfig.siteUrl}/og.svg` },
    { name: 'robots', content: seoData.noindex ? 'noindex, nofollow' : 'index, follow' },
    { rel: 'canonical', href: seoData.canonical }
  ].filter(tag => tag.content || tag.href);
}
