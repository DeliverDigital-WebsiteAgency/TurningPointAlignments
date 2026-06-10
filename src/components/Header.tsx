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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize past md breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Orange info strip — desktop only, collapses on scroll */}
      <div
        className={`hidden sm:block bg-accent text-white text-xs font-body overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="wrap flex items-center justify-between h-9">
          <span>Mon–Fri 7:00a–6:00p · Sat 8:00a–2:00p</span>
          <div className="flex items-center gap-5">
            <span className="hidden md:inline">Springfield, MO &nbsp;·&nbsp; I-44 &nbsp;·&nbsp; Hwy 417 &nbsp;·&nbsp; Hwy 65</span>
            <span className="font-semibold">(555) 123-4567</span>
          </div>
        </div>
      </div>

      {/* Main nav bar — always white */}
      <div className={`bg-white border-b border-line transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="wrap flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="Turning Point Alignments home" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Turning Point Alignments"
              width={72}
              height={72}
              className="w-[68px] h-[68px] object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-head font-semibold text-xs tracking-[0.14em] uppercase text-ink-2 hover:text-accent transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <div className="text-right hidden lg:block">
              <div className="text-ink-3 text-xs leading-none mb-0.5">Call Now</div>
              <div className="text-ink font-head font-bold text-sm">(555) 123-4567</div>
            </div>
            <a href="tel:5551234567" className="btn-primary py-3 px-5 text-xs">
              Call ›
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg hover:bg-surface-2 transition-colors flex-shrink-0"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[2px] bg-ink rounded-full transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-ink rounded-full transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-ink rounded-full transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu — animated */}
      <div
        className={`md:hidden bg-white border-b border-line overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-7 pt-2 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between font-head font-semibold text-sm tracking-[0.1em] uppercase text-ink-2 hover:text-accent py-3.5 border-b border-line last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <span className="text-ink-3 text-lg leading-none">›</span>
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="tel:5551234567"
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Call (555) 123-4567 ›
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
