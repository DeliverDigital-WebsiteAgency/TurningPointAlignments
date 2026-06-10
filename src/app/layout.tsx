import type { Metadata } from 'next'
import { Chakra_Petch, Barlow } from 'next/font/google'
import './globals.css'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-chakra',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Turning Point Alignments — Truck Wheel Alignment',
  description:
    'Laser-guided wheel alignments for 1, 2 & 3-axle semi-trucks. Drive-in, drive-out — no appointment needed. Hunter & Bee Line equipment. 25+ years experience.',
  keywords:
    'semi truck wheel alignment, truck alignment, fleet alignment, commercial truck alignment, 18 wheeler alignment, heavy duty alignment',
  metadataBase: new URL('https://turningpointalignments.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Turning Point Alignments — Truck Wheel Alignment',
    description:
      'Laser-guided alignments that stop premature tire wear, pull, and fuel waste — done right the first time.',
    type: 'website',
    url: 'https://turningpointalignments.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Turning Point Alignments — Semi-Truck Wheel Alignment Specialists' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turning Point Alignments — Truck Wheel Alignment',
    description: 'Laser-guided alignments for 1, 2 & 3-axle semi-trucks. Drive-in, drive-out.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
