import Image from 'next/image'
import Header from '@/components/Header'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FleetForm from '@/components/FleetForm'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Turning Point Alignments',
  description:
    'Semi-truck wheel alignment specialists. Laser-guided alignments for 1, 2 & 3-axle rigs, trailers, and fleets.',
  url: 'https://turningpointalignments.com',
  telephone: '+15551234567',
  email: 'service@turningpointalignments.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Frontage Rd',
    addressLocality: 'Your City',
    addressRegion: 'ST',
    postalCode: '00000',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Alignment Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Single-Axle Alignment' }, price: '129', priceCurrency: 'USD' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tandem (2-Axle) Alignment' }, price: '199', priceCurrency: 'USD' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tri-Axle (3-Axle) Alignment' }, price: '269', priceCurrency: 'USD' },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need an appointment for a semi-truck alignment?', acceptedAnswer: { '@type': 'Answer', text: 'No appointment is needed for most single and tandem axle jobs. Just drive in during business hours. Fleet customers should call ahead so we can line up the bays.' } },
    { '@type': 'Question', name: 'How long does a semi-truck wheel alignment take?', acceptedAnswer: { '@type': 'Answer', text: 'Most alignments are completed in 90 minutes or less. You receive a printed before/after readout for every job.' } },
    { '@type': 'Question', name: 'What equipment do you use for truck alignments?', acceptedAnswer: { '@type': 'Answer', text: 'We use Hunter and Bee Line laser alignment systems — the same precision equipment trusted by major commercial fleets, calibrated and certified.' } },
    { '@type': 'Question', name: 'Do you offer fleet pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer volume rates and PO billing for fleet customers. Contact us to set up an account with a dedicated maintenance schedule.' } },
  ],
}

/* ── Top info bar ─────────────────────────────────────────── */
function TopBar() {
  return (
    <div className="bg-accent text-white text-xs font-body">
      <div className="wrap flex items-center justify-between h-9">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Mon–Fri 7:00a–6:00p · Sat 8:00a–2:00p</span>
          <span className="hidden lg:inline text-white/70">Drive-in · Drive-out · No appointment needed</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">1234 Frontage Rd, Your City, ST</span>
          <span className="font-semibold">(555) 123-4567</span>
        </div>
      </div>
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-ink overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1721055248349-e398619459cb?fm=jpg&q=70&w=1600&auto=format&fit=crop"
          alt="Semi-truck on an alignment rack"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/30" />
        {/* Subtle orange glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 wrap pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <span className="section-eyebrow block mb-4">Semi-Truck Wheel Alignment Specialists</span>
          <h1 className="font-head text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.04] mb-6">
            Precision Alignments for{' '}
            <span className="text-accent">1, 2 &amp; 3-Axle</span> Rigs
          </h1>
          <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Laser-guided alignments that stop premature tire wear, pull, and fuel waste — done right the first time, so you&apos;re back on the road fast.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="tel:5551234567" className="btn-primary">Call Now ›</a>
            <a href="#pricing" className="btn-ghost">View Pricing</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
            {['Drive-in, drive-out', 'Hunter & Bee Line equipment', '25+ years of experience'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs font-body pointer-events-none">
        <span className="tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}

/* ── Services ─────────────────────────────────────────────── */
const services = [
  {
    title: 'Single Axle',
    desc: 'Day cabs and single-drive axle configurations',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <circle cx="32" cy="46" r="11" />
        <circle cx="32" cy="46" r="3.5" fill="currentColor" stroke="none" />
        <line x1="32" y1="35" x2="32" y2="14" />
        <line x1="20" y1="14" x2="44" y2="14" />
      </svg>
    ),
    featured: true,
  },
  {
    title: 'Tandem (2-Axle)',
    desc: 'Standard tractor with dual drive axles',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <circle cx="22" cy="44" r="9" />
        <circle cx="42" cy="44" r="9" />
        <line x1="22" y1="35" x2="42" y2="35" />
        <line x1="14" y1="35" x2="50" y2="35" />
      </svg>
    ),
    featured: false,
  },
  {
    title: 'Tri-Axle (3-Axle)',
    desc: 'Heavy haul and multi-axle configurations',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <circle cx="16" cy="44" r="8" />
        <circle cx="32" cy="44" r="8" />
        <circle cx="48" cy="44" r="8" />
        <line x1="12" y1="34" x2="52" y2="34" />
      </svg>
    ),
    featured: false,
  },
  {
    title: 'Tractor + Trailer',
    desc: 'Full combination unit alignment',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <rect x="8" y="20" width="26" height="18" rx="2" />
        <rect x="36" y="14" width="20" height="24" rx="2" />
        <circle cx="18" cy="46" r="5" />
        <circle cx="46" cy="46" r="5" />
      </svg>
    ),
    featured: false,
  },
  {
    title: 'Steer Axle & Caster',
    desc: 'Front axle, toe, camber, and caster correction',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <circle cx="32" cy="32" r="13" />
        <line x1="32" y1="6" x2="32" y2="19" />
        <line x1="32" y1="45" x2="32" y2="58" />
        <line x1="13" y1="42" x2="24" y2="36" />
        <line x1="40" y1="28" x2="51" y2="22" />
      </svg>
    ),
    featured: false,
  },
  {
    title: 'Suspension Check',
    desc: 'Full geometry and wear inspection',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
        <path d="M14 22h36" />
        <path d="M20 22v8a12 12 0 0 0 24 0v-8" />
        <circle cx="32" cy="46" r="6" />
      </svg>
    ),
    featured: false,
  },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Services</span>
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mt-3 mb-4">
            What We Align
          </h2>
          <p className="text-ink-2 max-w-xl mx-auto text-lg leading-relaxed">
            Heavy-duty alignments for every configuration on the road — from single-axle day cabs to full tri-axle rigs and trailers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group p-8 rounded-2xl border transition-all duration-200 hover:shadow-md cursor-default ${
                s.featured
                  ? 'border-accent bg-accent-soft'
                  : 'border-line bg-white hover:border-accent/50 hover:bg-accent-soft/30'
              }`}
            >
              <div className={`mb-5 transition-colors ${s.featured ? 'text-accent' : 'text-ink-3 group-hover:text-accent'}`}>
                {s.icon}
              </div>
              <h4 className="font-head font-bold text-xl text-ink mb-2">{s.title}</h4>
              <p className="text-ink-3 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Pricing ──────────────────────────────────────────────── */
const pricingCards = [
  {
    axles: 1,
    title: 'Single-Axle',
    sub: 'Day cabs · single drive axle',
    price: '$129',
    features: ['Full toe, camber & caster set', 'Before/after laser readout', 'Tire wear inspection'],
    highlight: false,
    badge: null,
  },
  {
    axles: 2,
    title: 'Tandem (2-Axle)',
    sub: 'Tractor with dual drive axles',
    price: '$199',
    features: [
      'Steer + both drive axles set',
      'Thrust-angle correction',
      'Before/after laser readout',
      'Tire wear inspection',
    ],
    highlight: true,
    badge: 'Most Common',
  },
  {
    axles: 3,
    title: 'Tri-Axle (3-Axle)',
    sub: 'Heavy haul & multi-axle rigs',
    price: '$269',
    features: [
      'All three axles aligned to spec',
      'Full thrust & geometry check',
      'Before/after laser readout',
      'Tire wear inspection',
    ],
    highlight: false,
    badge: null,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-2">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mt-3 mb-4">
            Straightforward Pricing
          </h2>
          <p className="text-ink-2 max-w-xl mx-auto text-lg leading-relaxed">
            Flat-rate pricing by axle count. No surprises — every alignment includes a full diagnostic readout before and after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                card.highlight
                  ? 'bg-ink text-white shadow-2xl md:-translate-y-2'
                  : 'bg-white border border-line'
              }`}
            >
              {card.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-head font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {card.badge}
                </span>
              )}

              <div className="flex gap-1.5 mb-5">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`w-3 h-3 rounded-full ${
                      n <= card.axles ? 'bg-accent' : card.highlight ? 'bg-white/15' : 'bg-line'
                    }`}
                  />
                ))}
              </div>

              <h3 className={`font-head font-bold text-2xl mb-1 ${card.highlight ? 'text-white' : 'text-ink'}`}>
                {card.title}
              </h3>
              <p className={`text-sm mb-6 ${card.highlight ? 'text-white/50' : 'text-ink-3'}`}>{card.sub}</p>

              <div className={`font-head font-bold text-5xl mb-1 ${card.highlight ? 'text-white' : 'text-ink'}`}>
                {card.price}
                <span className={`text-base font-normal ml-1 ${card.highlight ? 'text-white/40' : 'text-ink-3'}`}>
                  / flat
                </span>
              </div>
              <p className={`text-xs mb-8 ${card.highlight ? 'text-white/30' : 'text-ink-3'}`}>
                Placeholder — contact us for your rate
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {card.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${card.highlight ? 'text-white/75' : 'text-ink-2'}`}>
                    <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="tel:5551234567"
                className={`text-center font-head font-semibold text-xs tracking-[0.14em] uppercase py-3.5 px-6 rounded-xl transition-all ${
                  card.highlight
                    ? 'bg-accent hover:bg-accent-dark text-white'
                    : 'border-2 border-ink text-ink hover:bg-ink hover:text-white'
                }`}
              >
                Call to Book
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Equipment ────────────────────────────────────────────── */
function Equipment() {
  const brands = ['HUNTER', 'BEE LINE', 'JOSAM', 'HOFMANN', 'BENDIX', 'MERITOR']
  return (
    <section className="py-20 bg-ink">
      <div className="wrap">
        <div className="text-center mb-10">
          <span className="font-head font-semibold text-xs tracking-[0.18em] uppercase text-white/30">
            Equipment
          </span>
          <h2 className="font-head text-3xl md:text-4xl font-bold text-white mt-3">
            Industry-Leading Alignment Equipment
          </h2>
          <p className="text-white/40 text-sm mt-2">Calibrated and certified — the same systems major fleets trust</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center justify-center py-8 px-4 bg-ink hover:bg-white/5 transition-colors">
              <span className="font-head font-bold text-white/35 hover:text-accent text-xs tracking-[0.2em] text-center transition-colors uppercase">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why Us ───────────────────────────────────────────────── */
function WhyUs() {
  const points = [
    { title: 'Drive-In, Drive-Out', desc: 'No appointment needed for most jobs' },
    { title: 'Certified Technicians', desc: 'Trained on Hunter & Bee Line systems' },
    { title: 'Fleet & Owner-Operator', desc: 'Volume rates and PO billing available' },
    { title: 'Printed Readouts', desc: 'Before & after specs, every time' },
  ]

  return (
    <section id="whyus" className="py-24 bg-white">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-eyebrow block mb-4">Why Turning Point</span>
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
            Decades of Precision.{' '}
            <span className="text-accent">Trucks Back</span> on the Road Faster.
          </h2>
          <p className="text-ink-2 text-lg leading-relaxed mb-8">
            We do one thing and do it exceptionally well: align heavy-duty trucks. With over 25 years specializing solely in semi-truck alignments, our technicians read tire wear and chassis geometry the way few shops can — saving you thousands in tires and fuel.
          </p>
          <div className="space-y-4 mb-10">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-xs">✓</span>
                </div>
                <div>
                  <span className="font-head font-bold text-ink">{p.title}</span>
                  <span className="text-ink-3 text-sm ml-2">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary">
            About Our Shop ›
          </a>
        </div>

        {/* Photo placeholder — replace with your shop/tech photo */}
        <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[460px] bg-surface-3 flex flex-col items-center justify-center border border-line">
          <div className="text-center text-ink-3 pointer-events-none select-none">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 mx-auto mb-3 opacity-40">
              <rect x="4" y="14" width="56" height="40" rx="4" />
              <circle cx="32" cy="34" r="10" />
              <circle cx="32" cy="34" r="4" fill="currentColor" stroke="none" opacity=".4" />
              <path d="M22 14l4-6h12l4 6" />
            </svg>
            <p className="text-sm opacity-50">Add shop or technician photo</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
        </div>
      </div>
    </section>
  )
}

/* ── Stats ────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { n: '25+', label: 'Years aligning trucks' },
    { n: '40k+', label: 'Rigs aligned' },
    { n: '90 min', label: 'Typical turnaround' },
    { n: '1–3', label: 'Axles, every config' },
  ]
  return (
    <section className="bg-accent py-16">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((s) => (
            <div key={s.label} className="text-center pl-8 first:pl-0">
              <div className="font-head font-bold text-5xl md:text-6xl text-white mb-2">{s.n}</div>
              <div className="text-white/65 text-xs uppercase tracking-widest font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Contact ──────────────────────────────────────────────── */
function Contact() {
  const hours = [
    { day: 'Monday – Friday', hrs: '7:00a – 6:00p' },
    { day: 'Saturday', hrs: '8:00a – 2:00p' },
    { day: 'Sunday', hrs: 'Closed' },
  ]
  const info = [
    { icon: '📍', label: 'ADDRESS', detail: '1234 Frontage Rd\nYour City, ST 00000' },
    { icon: '📞', label: 'PHONE', detail: '(555) 123-4567' },
    { icon: '✉', label: 'EMAIL', detail: 'service@turningpointalignments.com' },
    { icon: '🕑', label: 'HOURS', detail: 'Mon–Fri 7–6 · Sat 8–2' },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="section-eyebrow block mb-4">Contact</span>
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
            Bring It In or Give Us a Call
          </h2>
          <p className="text-ink-2 text-lg mb-8">
            No appointment needed for most single and tandem jobs. Fleets — call ahead and we&apos;ll line up the bays.
          </p>

          <div className="mb-8 border border-line rounded-xl overflow-hidden">
            {hours.map((h, i) => (
              <div key={h.day} className={`flex justify-between items-center px-5 py-4 ${i !== hours.length - 1 ? 'border-b border-line' : ''}`}>
                <span className="text-ink-2">{h.day}</span>
                <span className="font-head font-bold text-ink">{h.hrs}</span>
              </div>
            ))}
          </div>

          <a href="tel:5551234567" className="btn-blue">
            Call (555) 123-4567 ›
          </a>
        </div>

        <div className="bg-surface-2 rounded-2xl p-8 border border-line">
          <h3 className="font-head font-bold text-2xl text-ink mb-6">Visit the Shop</h3>
          <div className="space-y-5">
            {info.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <span className="text-xl mt-0.5">{row.icon}</span>
                <div>
                  <div className="font-head font-bold text-xs tracking-widest uppercase text-ink-3 mb-1">
                    {row.label}
                  </div>
                  <div className="text-ink text-sm whitespace-pre-line">{row.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-6 rounded-xl h-32 bg-surface-3 border border-line flex items-center justify-center">
            <span className="text-ink-3 text-sm opacity-60">📍 Map — add a screenshot here</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="Turning Point Alignments" width={52} height={52} className="w-13 h-13 object-contain" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-4 max-w-xs">
              Semi-truck wheel alignment specialists. One focus, done right — 1, 2 &amp; 3-axle rigs, trailers, and fleets.
            </p>
            <div className="text-sm space-y-1 text-white/45">
              <div className="font-bold text-white/65">(555) 123-4567</div>
              <div>1234 Frontage Rd, Your City, ST</div>
              <div>service@turningpointalignments.com</div>
            </div>
          </div>

          <div>
            <h5 className="font-head font-bold text-xs uppercase tracking-widest mb-5 text-white/35">Services</h5>
            <ul className="space-y-2.5 text-sm text-white/55">
              {['Single-Axle Alignment', 'Tandem (2-Axle)', 'Tri-Axle (3-Axle)', 'Trailer Alignment', 'Suspension Check'].map((s) => (
                <li key={s}>
                  <a href="#pricing" className="hover:text-accent transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-head font-bold text-xs uppercase tracking-widest mb-5 text-white/35">Company</h5>
            <ul className="space-y-2.5 text-sm text-white/55">
              {['About Us', 'Why Turning Point', 'Fleet Services', 'Contact Us'].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-accent transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Turning Point Alignments. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── FAQ ──────────────────────────────────────────────────── */
const faqs = [
  { q: 'Do I need an appointment for a semi-truck alignment?', a: 'No appointment needed for most single and tandem axle jobs. Just drive in during business hours. Fleet customers should call ahead so we can line up the bays.' },
  { q: 'How long does a semi-truck wheel alignment take?', a: 'Most alignments are completed in 90 minutes or less. Every job includes a printed before/after readout so you can see exactly what was corrected.' },
  { q: 'What alignment equipment do you use?', a: 'We run Hunter and Bee Line laser alignment systems — calibrated, certified, and trusted by major commercial fleets.' },
  { q: 'Do you offer fleet pricing?', a: 'Yes. Volume rates, PO billing, and dedicated maintenance schedules are available for fleet accounts. Call us or submit your email above to get started.' },
]

function FAQ() {
  return (
    <section className="py-20 bg-white border-t border-line">
      <div className="wrap max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="font-head text-4xl font-bold text-ink mt-3">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-line rounded-xl p-6">
              <h3 className="font-head font-bold text-ink text-lg mb-2">{faq.q}</h3>
              <p className="text-ink-2 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Page export ──────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Equipment />
        <WhyUs />
        <Stats />
        <ReviewsCarousel />
        <Contact />
        <FleetForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
