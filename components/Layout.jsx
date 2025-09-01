
import React, { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/site.config'

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-lg font-bold">
            <img src="/images/ais-logo.png" alt="AIS Logo" className="w-10 h-10" />
            <span>{siteConfig.brand}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <a className="btn ml-2" href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20FREE%20demo!`}>WhatsApp</a>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <Link href="/courses" className="py-2">Courses</Link>
              <Link href="/blog" className="py-2">Blog</Link>
              <Link href="/about" className="py-2">About</Link>
              <Link href="/contact" className="py-2">Contact</Link>
              <a className="btn w-full text-center" href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20FREE%20demo!`}>WhatsApp</a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="footer bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-3">
          <div className="small">© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</div>
          <div className="small">Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> • WhatsApp: <a href={`https://wa.me/${siteConfig.whatsapp}`}>+{siteConfig.whatsapp}</a></div>
        </div>
      </footer>
    </>
  )
}
