import Image from 'next/image'
import Header from '@/components/Header'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FleetForm from '@/components/FleetForm'
import FAQAccordion from '@/components/FAQAccordion'

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
    { '@type': 'Question', name: 'Do I need to call before bringing my truck in?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — please call ahead before arriving. We schedule alignment appointments to ensure a bay and technician are ready for your rig.' } },
    { '@type': 'Question', name: 'How long does a semi-truck wheel alignment take?', acceptedAnswer: { '@type': 'Answer', text: 'Most alignments are completed in 90 minutes or less. You receive a printed before/after readout for every job.' } },
    { '@type': 'Question', name: 'What equipment do you use for truck alignments?', acceptedAnswer: { '@type': 'Answer', text: 'We use Hunter and Bee Line laser alignment systems — calibrated and certified, trusted by major commercial fleets.' } },
    { '@type': 'Question', name: 'Do you offer fleet pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer volume rates and PO billing for fleet customers. Contact us to set up an account with a dedicated maintenance schedule.' } },
  ],
}

/* ── Hero — text left, image right ───────────────────────── */
function Hero() {
  return (
    <section id="top" className="pb-14 pt-24 sm:pt-28 overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.04fr] gap-10 items-center">
          {/* Text column */}
          <div>
            <span className="section-eyebrow">Semi-Truck Wheel Alignment Specialists</span>
            <h1 className="font-head text-[clamp(34px,4.6vw,58px)] font-bold text-ink leading-[1.04] mt-4">
              Precision Alignments for{' '}
              <span className="text-accent">1, 2 &amp; 3-Axle</span> Rigs
            </h1>
            <p className="text-ink-2 text-lg leading-relaxed max-w-[480px] mt-5">
              Laser-guided alignments that stop premature tire wear, pull, and fuel waste — done right the first time, so you&apos;re back on the road fast.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 items-center mt-8">
              <a
                href="tel:5551234567"
                className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-head font-semibold text-[15px] px-[22px] py-[13px] rounded-[40px] transition-all duration-200 whitespace-nowrap"
              >
                Call Now
                <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-white/20 text-[13px] leading-none">›</span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center bg-transparent text-ink font-head font-semibold text-[15px] px-[22px] py-[13px] rounded-[40px] border border-line hover:bg-surface-2 transition-all duration-200 whitespace-nowrap"
              >
                View Pricing
              </a>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {[
                'Drive-in, drive-out',
                'Hunter & Bee Line equipment',
                '25+ years of experience',
              ].map((t) => (
                <span key={t} className="flex items-center gap-2.5 text-[13.5px] text-ink-2 font-medium">
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-accent-soft text-accent-dark text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  {t}
                </span>
              ))}
            </div>

            {/* Slide dots */}
            <div className="flex items-center gap-2 mt-7">
              <span className="w-[22px] h-2 bg-accent rounded-[5px] inline-block" />
              <span className="w-2 h-2 bg-surface-3 rounded-full inline-block" />
              <span className="w-2 h-2 bg-surface-3 rounded-full inline-block" />
            </div>
          </div>

          {/* Image column */}
          <div className="relative h-[260px] sm:h-[360px] lg:h-[430px] rounded-[18px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1721055248349-e398619459cb?fm=jpg&q=70&w=1400&auto=format&fit=crop"
              alt="Semi-truck on the alignment rack"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Services ─────────────────────────────────────────────── */
const services = [
  {
    title: 'Single Axle',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="32" cy="46" r="11" />
        <circle cx="32" cy="46" r="3.5" fill="currentColor" stroke="none" />
        <line x1="32" y1="35" x2="32" y2="14" />
        <line x1="20" y1="14" x2="44" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Tandem (2-Axle)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="22" cy="44" r="9" />
        <circle cx="42" cy="44" r="9" />
        <line x1="22" y1="35" x2="42" y2="35" />
        <line x1="14" y1="35" x2="50" y2="35" />
      </svg>
    ),
  },
  {
    title: 'Tri-Axle (3-Axle)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="16" cy="44" r="8" />
        <circle cx="32" cy="44" r="8" />
        <circle cx="48" cy="44" r="8" />
        <line x1="12" y1="34" x2="52" y2="34" />
      </svg>
    ),
  },
  {
    title: 'Tractor + Trailer',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="20" width="26" height="18" rx="2" />
        <rect x="36" y="14" width="20" height="24" rx="2" />
        <circle cx="18" cy="46" r="5" />
        <circle cx="46" cy="46" r="5" />
      </svg>
    ),
  },
  {
    title: 'Steer Axle & Caster',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="32" cy="32" r="13" />
        <line x1="32" y1="6" x2="32" y2="19" />
        <line x1="32" y1="45" x2="32" y2="58" />
        <line x1="13" y1="42" x2="24" y2="36" />
        <line x1="40" y1="28" x2="51" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Suspension Check',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M14 22h36" />
        <path d="M20 22v8a12 12 0 0 0 24 0v-8" />
        <circle cx="32" cy="46" r="6" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
            What We Align
          </h2>
          <p className="text-ink-2 max-w-xl mx-auto text-lg leading-relaxed">
            Heavy-duty alignments for every configuration on the road — from single-axle day cabs to full tri-axle rigs and trailers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-line bg-white hover:border-accent hover:shadow-sm transition-all duration-200 cursor-default"
            >
              <div className="text-ink-3 group-hover:text-accent transition-colors duration-200 mb-5">
                {s.icon}
              </div>
              <h4 className="font-head font-bold text-xl text-ink">{s.title}</h4>
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
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
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
          <h2 className="font-head text-3xl md:text-4xl font-bold text-white">
            Industry-Leading Alignment Equipment
          </h2>
          <p className="text-white/35 text-sm mt-2">Calibrated and certified — the same systems major fleets trust</p>
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
    { title: 'Call Ahead to Schedule', desc: 'We confirm your bay and tech before you arrive' },
    { title: 'Certified Technicians', desc: 'Trained on Hunter & Bee Line systems' },
    { title: 'Fleet & Owner-Operator', desc: 'Volume rates and PO billing available' },
    { title: 'Printed Readouts', desc: 'Before & after specs, every time' },
  ]

  return (
    <section id="whyus" className="py-24 bg-white">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
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

        <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[460px]">
          <Image
            src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=800&q=80"
            alt="White freight semi-truck"
            fill
            className="object-cover"
          />
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-0 lg:divide-x lg:divide-white/20">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:px-8">
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
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
            Give Us a Call Before Coming In
          </h2>
          <p className="text-ink-2 text-lg mb-8">
            Call ahead and we&apos;ll have a bay and tech ready for your rig. Fleet customers — we can line up multiple trucks in sequence.
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
              <Image src="/logo.png" alt="Turning Point Alignments" width={52} height={52} className="w-12 h-12 object-contain" />
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
                <li key={s}><a href="#pricing" className="hover:text-accent transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-head font-bold text-xs uppercase tracking-widest mb-5 text-white/35">Company</h5>
            <ul className="space-y-2.5 text-sm text-white/55">
              {['About Us', 'Why Turning Point', 'Fleet Services', 'Contact Us'].map((s) => (
                <li key={s}><a href="#" className="hover:text-accent transition-colors">{s}</a></li>
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

/* ── Page export ──────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
        <FAQAccordion />
      </main>
      <Footer />
    </>
  )
}
