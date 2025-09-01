
import '@/styles/globals.css'
import Head from 'next/head'
import { Layout } from '@/components/Layout'
import { siteConfig } from '@/site.config'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={siteConfig.themeColor} />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:image" content="/og.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
