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
  title: 'Turning Point Alignments | Truck Alignment Springfield MO',
  description:
    'Semi-truck wheel alignment specialists in Springfield, MO. Serving I-44, Hwy 417 & Hwy 65 corridors. Laser-guided, 1–3 axle rigs. Call to schedule.',
  keywords:
    'semi truck wheel alignment Springfield MO, truck alignment I-44 Missouri, wheel alignment Hwy 417, wheel alignment Hwy 65, commercial truck alignment Springfield Missouri, fleet alignment Springfield MO, heavy duty truck alignment Missouri, 18 wheeler alignment Springfield',
  metadataBase: new URL('https://turningpointalignments.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Turning Point Alignments | Truck Alignment Springfield MO',
    description:
      'Semi-truck wheel alignment in Springfield, MO — I-44, Hwy 417 & Hwy 65. Laser-guided, 1–3 axle rigs. 25+ years. Call to schedule.',
    type: 'website',
    url: 'https://turningpointalignments.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Turning Point Alignments — Semi-Truck Wheel Alignment Springfield MO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turning Point Alignments | Truck Alignment Springfield MO',
    description: 'Semi-truck wheel alignment in Springfield, MO. I-44, Hwy 417 & Hwy 65. Call to schedule.',
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
