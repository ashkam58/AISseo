
import Link from 'next/link'
import { siteConfig } from '@/site.config'

export const Layout = ({ children }) => {
  return (
    <>
      <div className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand">
            <img src="/images/ais-logo.png" alt="AIS Logo" style={{ width: '40px', height: '40px', marginRight: '12px' }} />
            <span className="brand-badge" />
            <span>{siteConfig.brand}</span>
          </Link>
          <nav style={{display:'flex',gap:8,alignItems:'center'}}>
            <Link href="/courses">Courses</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a className="btn" href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20FREE%20demo!`}>WhatsApp</a>
          </nav>
        </div>
      </div>
      <main>{children}</main>
      <footer className="footer">
        <div className="container">
          <div className="small">© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</div>
          <div className="small">Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> • WhatsApp: <a href={`https://wa.me/${siteConfig.whatsapp}`}>+{siteConfig.whatsapp}</a></div>
        </div>
      </footer>
    </>
  )
}
