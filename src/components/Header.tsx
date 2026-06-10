'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="wrap flex items-center justify-between h-16 py-3">
        <Link href="/" aria-label="Turning Point Alignments home">
          <Image
            src="/logo.png"
            alt="Turning Point Alignments"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-head font-semibold text-xs tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <div className="text-white/40 text-xs font-body leading-none mb-1">Call Now</div>
            <div className="text-white font-head font-bold text-sm">(555) 123-4567</div>
          </div>
          <a href="tel:5551234567" className="btn-primary py-3 px-5">
            Call ›
          </a>
        </div>

        <button
          className="md:hidden p-2 space-y-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink/98 backdrop-blur-md border-t border-white/10 px-7 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block font-head font-semibold text-sm tracking-[0.14em] uppercase text-white/60 hover:text-white py-3 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:5551234567" className="btn-primary w-full text-center mt-4 block">
            Call (555) 123-4567 ›
          </a>
        </div>
      )}
    </header>
  )
}
