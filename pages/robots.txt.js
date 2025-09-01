
import { siteConfig } from '@/site.config'

export async function getServerSideProps({ res }){
  const base = siteConfig.siteUrl.replace(/\/$/,'')
  const body = `User-agent: *
Allow: /
Sitemap: ${base}/sitemap.xml`
  res.setHeader('Content-Type','text/plain')
  res.write(body)
  res.end()
  return { props: {} }
}

export default function Robots(){ return null }
