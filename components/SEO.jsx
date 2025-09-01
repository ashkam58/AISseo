
import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteConfig } from '@/site.config'

export function SEO({ title, description, canonicalPath, jsonLd }) {
  const router = useRouter()
  const url = siteConfig.siteUrl.replace(/\/$/, '') + (canonicalPath || router.asPath || '/')
  const fullTitle = title ? `${title} | ${siteConfig.brand}` : siteConfig.brand
  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteConfig.siteUrl.replace(/\/$/, '')}/og.svg`} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  )
}
