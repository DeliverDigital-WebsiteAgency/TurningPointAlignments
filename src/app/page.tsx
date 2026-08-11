import Image from 'next/image'
import Header from '@/components/Header'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FleetForm from '@/components/FleetForm'
import FAQAccordion from '@/components/FAQAccordion'
import AnimateIn from '@/components/AnimateIn'
import ContactForm from '@/components/ContactForm'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Semi Alignments',
  description:
    'Semi-truck and heavy-duty truck wheel alignment specialists. Laser-guided alignments for steer axle, 2-axle, and 3-axle trucks, school buses, and fleets.',
  url: 'https://semialignments.com',
  telephone: '+14172095846',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2305 N Belcrest Ave',
    addressLocality: 'Springfield',
    addressRegion: 'MO',
    postalCode: '65803',
  },
  areaServed: [
    { '@type': 'City', name: 'Springfield, MO' },
    { '@type': 'Road', name: 'I-44' },
    { '@type': 'Road', name: 'US-65' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Alignment Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Steer Axle Alignment' }, price: '165', priceCurrency: 'USD' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Two-Axle Alignment' }, price: '210', priceCurrency: 'USD' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Three-Axle Alignment' }, price: '285', priceCurrency: 'USD' },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need to call before bringing my truck in?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, call ahead before arriving. We schedule alignment appointments so a bay and certified technician are ready when you pull in.' } },
    { '@type': 'Question', name: 'How much does a semi-truck alignment cost?', acceptedAnswer: { '@type': 'Answer', text: 'Steer axle alignment is $165. Two-axle trucks (box trucks and delivery trucks) are $210. Three-axle semis are $285. Flat-rate pricing. Every alignment includes a laser diagnostic printout before and after.' } },
    { '@type': 'Question', name: 'How long does a semi-truck wheel alignment take?', acceptedAnswer: { '@type': 'Answer', text: 'Most alignments complete in 90 minutes or less. You receive a printed before/after readout for every job.' } },
    { '@type': 'Question', name: 'How often should a semi-truck be aligned?', acceptedAnswer: { '@type': 'Answer', text: 'Most fleets check alignment every 50,000–100,000 miles or after suspension work, a hard impact, or tire replacement.' } },
    { '@type': 'Question', name: 'What equipment do you use for truck alignments?', acceptedAnswer: { '@type': 'Answer', text: 'We use a Hunter alignment machine, calibrated and certified to manufacturer spec.' } },
  ],
}

/* ── Divider ──────────────────────────────────────────────── */
function Divider() {
  return (
    <div className="wrap" aria-hidden="true">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-line" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
        <div className="flex-1 h-px bg-line" />
      </div>
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="pb-14 pt-28 sm:pt-36 overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.04fr] gap-10 items-center">

          {/* Text column — hero-anim staggers each direct child on load */}
          <div className="hero-anim">
            <span className="section-eyebrow">Springfield, MO · Semi-Truck & Heavy-Duty Truck Alignment Specialists</span>

            <h1 className="font-head text-[clamp(34px,4.6vw,58px)] font-bold text-ink leading-[1.04] mt-4">
              Semi Alignments —{' '}
              <span className="text-accent">Precision for Every Axle</span>
            </h1>

            <p className="text-ink-2 text-lg leading-relaxed max-w-[480px] mt-5">
              At Semi Alignments, we've completed over 10,000 heavy-duty truck alignments in 20-plus years in Springfield, MO. Hunter alignment machine on every job. Printed before-and-after diagnostic on every truck. Steer axle, two-axle, and three-axle semis and school buses. Appointments within 2 business days. Call to schedule.
            </p>

            <div className="flex flex-wrap gap-3.5 items-center mt-8">
              <a
                href="tel:4172095846"
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

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {[
                'Call ahead to schedule',
                'Hunter alignment equipment',
                '20+ years of experience',
              ].map((t) => (
                <span key={t} className="flex items-center gap-2.5 text-[13.5px] text-ink-2 font-medium">
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-accent-soft text-accent text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* Image column — subtle scale-in on load */}
          <div className="relative h-[260px] sm:h-[360px] lg:h-[430px] rounded-[18px] overflow-hidden hero-img-anim">
            <Image
              src="https://images.unsplash.com/photo-1721055248349-e398619459cb?fm=jpg&q=70&w=1400&auto=format&fit=crop"
              alt="Semi-truck on the alignment rack at Turning Point Alignments"
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
    title: 'Steer Axle',
    desc: 'Steer axle alignment only. Day cabs and straight trucks pulling left or right, steering wander, or feathering tires.',
    sub: 'Includes caster adjustment',
    badge: null,
  },
  {
    title: 'Two Axle',
    desc: 'Box trucks and delivery trucks. Steer axle plus drive axle set in one visit.',
    sub: null,
    badge: null,
  },
  {
    title: 'Three Axle',
    desc: 'All semis. One steer axle and two drive axles aligned to spec.',
    sub: null,
    badge: null,
  },
  {
    title: 'School Buses',
    desc: 'We align school buses. Call ahead to confirm your bus type before scheduling.',
    sub: null,
    badge: null,
  },
  {
    title: 'Suspension Inspection',
    desc: 'We check for worn bushings, bent tie rods, and loose components before they knock your alignment off again.',
    sub: null,
    badge: null,
  },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="wrap">
        <AnimateIn>
          <div className="text-center mb-14">
            <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
              What We Align at Semi Alignments
            </h2>
            <p className="text-ink-2 max-w-xl mx-auto text-lg leading-relaxed">
              Semi Alignments works on heavy-duty trucks only — no passenger cars, no light trucks. Hunter alignment machine on every job.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 70}>
              <div className="relative group p-7 rounded-2xl border border-line bg-white hover:border-accent hover:shadow-sm transition-all duration-200 cursor-default h-full">
                {s.badge && (
                  <span className="absolute -top-3 left-5 bg-accent text-white text-[10px] font-head font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {s.badge}
                  </span>
                )}
                <h4 className="font-head font-bold text-lg text-ink mb-2">{s.title}</h4>
                <p className="text-ink-2 text-sm leading-relaxed">{s.desc}</p>
                {s.sub && (
                  <p className="text-accent text-xs font-semibold mt-3">↳ {s.sub}</p>
                )}
              </div>
            </AnimateIn>
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
    title: 'Steer Axle',
    sub: 'Steer axle alignment only',
    price: '$165',
    features: [
      'Full toe, camber & caster set',
      'Before/after laser readout',
      'Tire wear inspection',
      'Suspension inspection included',
    ],
    highlight: false,
    badge: null,
  },
  {
    axles: 2,
    title: 'Two Axle',
    sub: 'Box trucks & delivery trucks',
    price: '$210',
    features: [
      'Steer axle + drive axle set',
      'Before/after laser readout',
      'Tire wear inspection',
      'Suspension inspection included',
    ],
    highlight: false,
    badge: null,
  },
  {
    axles: 3,
    title: 'Three Axle',
    sub: 'All semis — 1 steer + 2 drive axles',
    price: '$285',
    features: [
      'All three axles aligned to spec',
      'Full thrust & geometry check',
      'Before/after laser readout',
      'Tire wear inspection',
      'Suspension inspection included',
    ],
    highlight: true,
    badge: null,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-2">
      <div className="wrap">
        <AnimateIn>
          <div className="text-center mb-14">
            <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
              Straightforward Pricing
            </h2>
            <p className="text-ink-2 max-w-xl mx-auto text-lg leading-relaxed">
              Flat-rate pricing by axle count. Every alignment at Semi Alignments includes a full diagnostic readout before and after the job.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingCards.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-8 flex flex-col h-full transition-all ${
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
                  Flat rate · no hidden fees
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
                  href="tel:4172095846"
                  className={`text-center font-head font-semibold text-xs tracking-[0.14em] uppercase py-3.5 px-6 rounded-xl transition-all ${
                    card.highlight
                      ? 'bg-accent hover:bg-accent-dark text-white'
                      : 'border-2 border-ink text-ink hover:bg-ink hover:text-white'
                  }`}
                >
                  Call to Book
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Equipment ────────────────────────────────────────────── */
function Equipment() {
  const details = [
    { label: 'Before & after printout', desc: 'Every job produces a printed report showing specs before and after. Keep it for your records.' },
    { label: 'Calibrated to spec', desc: 'The machine is maintained and calibrated. You get accurate numbers, not approximations.' },
    { label: 'Built for commercial trucks', desc: "Hunter's commercial system handles the geometry of heavy-duty trucks, not adapted from a car alignment tool." },
  ]
  return (
    <section className="py-20 bg-ink">
      <div className="wrap">
        <AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
            <div>
              <span className="font-head font-semibold text-xs tracking-[0.18em] uppercase text-accent mb-3 block">Equipment</span>
              <h2 className="font-head text-3xl md:text-4xl font-bold text-white mb-4">
                Hunter Alignment System
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                We run one machine and we run it well. The Hunter commercial alignment system is the standard in truck alignment. Every reading is documented and handed to you when the job is done.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {details.map((d) => (
                <AnimateIn key={d.label} delay={100}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="font-head font-bold text-white text-sm mb-2">{d.label}</div>
                    <div className="text-white/45 text-xs leading-relaxed">{d.desc}</div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

/* ── Tires Nearby ─────────────────────────────────────────── */
function TiresNearby() {
  return (
    <section className="py-14 bg-white border-y border-line">
      <div className="wrap">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="sm:max-w-lg text-center sm:text-left">
              <span className="font-head font-semibold text-xs tracking-[0.18em] uppercase text-accent mb-3 block">
                Need Tires?
              </span>
              <h3 className="font-head text-2xl md:text-3xl font-bold text-ink mb-3">
                Ozarko Tire Is Right Next Door
              </h3>
              <p className="text-ink-2 text-base leading-relaxed">
                After your alignment at Semi Alignments, tires are available right next door at Ozarko Tire Centers — 2301 N Belcrest Ave. Get your truck aligned, then roll straight to new rubber.
              </p>
            </div>
            <a
              href="tel:4178668013"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-head font-semibold text-[15px] px-[22px] py-[13px] rounded-[40px] transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              Call Ozarko Tire
              <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-white/20 text-[13px] leading-none">›</span>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

/* ── Why Us ───────────────────────────────────────────────── */
function WhyUs() {
  const points = [
    { title: 'Call Ahead to Schedule', desc: 'We confirm your bay and tech before you arrive' },
    { title: 'Trucks Only, No Light Duty', desc: 'Specialists in heavy-duty, not a general shop' },
    { title: 'Fleet & Owner-Operator', desc: 'Volume rates and PO billing available' },
    { title: 'Printed Readouts Every Time', desc: 'Before & after specs for your records' },
  ]

  return (
    <section id="whyus" className="py-24 bg-surface-2">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimateIn>
          <div>
            <h2 className="font-head text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              20+ Years Doing{' '}
              <span className="text-accent">One Thing</span> Well.
            </h2>
            <p className="text-ink-2 text-lg leading-relaxed mb-8">
              General shops align passenger cars. Semi Alignments aligns semi-trucks. Our technicians know what uneven tire wear, thrust-angle drift, and caster pull look like on a heavy truck, because that is all they work on.
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
        </AnimateIn>

        <AnimateIn delay={120}>
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=800&q=80"
              alt="White freight semi-truck"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

/* ── Stats ────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { n: '20+', label: 'Years specializing' },
    { n: '10,000+', label: 'Alignments completed' },
    { n: '90 min', label: 'Avg turnaround' },
    { n: '~3%', label: 'Fuel savings from alignment' },
  ]
  return (
    <section className="bg-accent py-16">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-0 lg:divide-x lg:divide-white/20">
          {stats.map((s) => (
            <AnimateIn key={s.label}>
              <div className="text-center lg:px-8">
                <div className="font-head font-bold text-5xl md:text-6xl text-white mb-2">{s.n}</div>
                <div className="text-white/65 text-xs uppercase tracking-widest font-body">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Finding the Family ───────────────────────────────────── */
function FindingTheFamily() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: '#f6f1ea' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/ftf-texture.png')", backgroundRepeat: 'repeat', backgroundSize: '400px' }}
      />

      <div className="relative wrap">
        <AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Logo column */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://findingthefamily.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-[340px] transition-opacity duration-200 hover:opacity-85"
              >
                <Image
                  src="/cropped-FindingtheFamily-2.png"
                  alt="Finding the Family"
                  width={340}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>

            {/* Text column */}
            <div>
              <span className="font-head font-semibold text-xs tracking-[0.18em] uppercase text-[#4d7a6c] mb-4 block">
                Driven by Purpose
              </span>
              <h2 className="font-head text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Every Alignment Supports{' '}
                <span className="text-[#4d7a6c]">Families in Recovery</span>
              </h2>
              <p className="text-ink-2 text-lg leading-relaxed mb-4">
                When you bring your truck to Semi Alignments, your service directly funds{' '}
                <a
                  href="https://findingthefamily.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4d7a6c] hover:text-ink transition-colors font-semibold"
                >
                  Finding the Family
                </a>,{' '}
                a nonprofit helping families navigate addiction and find a path to healing.
              </p>
              <p className="text-ink-3 text-base leading-relaxed mb-8">
                This is not a side donation. It is the reason we show up every day. Over 10,000 alignments completed, and every one has made a difference beyond the shop floor.
              </p>
              <a
                href="https://findingthefamily.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-head font-bold text-sm tracking-[0.22em] uppercase text-white rounded transition-opacity duration-200 hover:opacity-85 px-10 py-4"
                style={{ backgroundColor: '#4d7a6c', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.55)' }}
              >
                Give Today
              </a>
            </div>

          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

/* ── Contact ──────────────────────────────────────────────── */
function Contact() {
  const hours = [
    { day: 'Monday – Friday', hrs: '8:00a – 5:00p' },
    { day: 'Saturday – Sunday', hrs: 'Closed' },
  ]
  const info = [
    { icon: '📍', label: 'ADDRESS', detail: '2305 N Belcrest Ave\nSpringfield, MO 65803' },
    { icon: '📞', label: 'PHONE', detail: '(417) 209-5846' },
    { icon: '🕑', label: 'HOURS', detail: 'Mon–Fri 8–5' },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <AnimateIn>
          <div>
            <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mb-4">
              Call Ahead. We&apos;ll Have a Bay Ready.
            </h2>
            <p className="text-ink-2 text-lg mb-2">
              Call first and your truck goes straight on the rack at Semi Alignments. No waiting for a bay to open. Most jobs finish the same day. Fleet managers: call to schedule multiple units.
            </p>
            <p className="text-ink-3 text-sm mb-8">
              Located in Springfield, MO. Convenient to I-44 and Hwy 65.
            </p>

            <div className="mb-8 border border-line rounded-xl overflow-hidden">
              {hours.map((h, i) => (
                <div key={h.day} className={`flex justify-between items-center px-5 py-4 ${i !== hours.length - 1 ? 'border-b border-line' : ''}`}>
                  <span className="text-ink-2">{h.day}</span>
                  <span className="font-head font-bold text-ink">{h.hrs}</span>
                </div>
              ))}
            </div>

            <a href="tel:4172095846" className="btn-blue">
              Call (417) 209-5846 ›
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="space-y-6">
            <div className="bg-surface-2 rounded-2xl p-6 border border-line">
              <div className="space-y-4">
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
            </div>

            <div className="bg-white rounded-2xl p-6 border border-line">
              <h3 className="font-head font-bold text-xl text-ink mb-5">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </AnimateIn>
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
              <Image src="/logo.png" alt="Semi Alignments" width={96} height={96} className="w-[84px] h-[84px] object-contain" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-4 max-w-xs">
              Semi Alignments — semi-truck and heavy-duty truck wheel alignment specialists. Steer axle, 2-axle, and 3-axle trucks, school buses, and fleets.
            </p>
            <div className="text-sm space-y-1 text-white/45">
              <div className="font-bold text-white/65">(417) 209-5846</div>
              <div>2305 N Belcrest Ave, Springfield, MO 65803</div>
              <div>service@semialignments.com</div>
              <div className="text-white/30 text-xs pt-1">I-44 · Hwy 65</div>
            </div>
          </div>

          <div>
            <h5 className="font-head font-bold text-xs uppercase tracking-widest mb-5 text-white/35">Services</h5>
            <ul className="space-y-2.5 text-sm text-white/55">
              {['Steer Axle Alignment', 'Two-Axle Alignment', 'Three-Axle Alignment', 'School Bus Alignment', 'Suspension Inspection'].map((s) => (
                <li key={s}><a href="#pricing" className="hover:text-accent transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-head font-bold text-xs uppercase tracking-widest mb-5 text-white/35">Company</h5>
            <ul className="space-y-2.5 text-sm text-white/55">
              {[
                { label: 'About Us', href: '#whyus' },
                { label: 'Why Semi Alignments', href: '#whyus' },
                { label: 'Fleet Services', href: '#contact' },
                { label: 'Contact Us', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}><a href={href} className="hover:text-accent transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Semi Alignments. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://deliverdigital.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-white/50 transition-colors"
            >
              Built by{' '}
              <span className="font-semibold text-white/40 group-hover:text-accent transition-colors ml-1">
                Deliver Digital
              </span>
            </a>
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
        <Divider />
        <Services />
        <Pricing />
        <TiresNearby />
        <Equipment />
        <WhyUs />
        <Stats />
        <FindingTheFamily />
        <ReviewsCarousel />
        <Contact />
        <FleetForm />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  )
}
