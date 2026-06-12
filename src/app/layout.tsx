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
  title: 'Commercial Truck Alignment Springfield MO | Turning Point Alignments',
  description:
    'Commercial truck and trailer wheel alignment in Springfield, MO. Semi-trucks, heavy-duty rigs, 1 to 3 axles. Hunter machine, 20+ years, 10,000 alignments. Serving I-44. Call to schedule.',
  keywords:
    'commercial wheel alignment Springfield MO, commercial truck alignment Missouri, semi truck wheel alignment Springfield MO, commercial vehicles alignment Springfield, trucks and trailers alignment Springfield MO, truck alignment I-44 Missouri, heavy duty truck alignment Missouri, fleet alignment Springfield MO, 18 wheeler alignment Springfield, wheel alignment Hwy 65',
  metadataBase: new URL('https://turningpointalignments.com'),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'Commercial Truck Alignment Springfield MO | Turning Point Alignments',
    description:
      'Commercial truck and trailer wheel alignment in Springfield, MO. Semi-trucks, heavy-duty rigs, 1 to 3 axles. Hunter machine, 20+ years. Serving I-44.',
    type: 'website',
    url: 'https://turningpointalignments.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Turning Point Alignments · Commercial Truck Alignment Springfield MO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Truck Alignment Springfield MO | Turning Point Alignments',
    description:
      'Commercial truck and trailer wheel alignment in Springfield, MO. Semi-trucks, heavy-duty rigs, 1 to 3 axles. Hunter machine, 20+ years. Serving I-44.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
