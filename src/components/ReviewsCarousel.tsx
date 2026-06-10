'use client'

import { useState } from 'react'

const reviews = [
  {
    title: "Burned half a set of steers in 30k. Not anymore.",
    body: "Brought my tri-axle in chasing a pull and uneven wear. They had it on the rack, showed me the readout, and had it dialed in within the hour. Steering's dead straight now.",
    name: 'Marcus D.',
    role: 'Owner-Operator · 12 years OTR',
    initials: 'MD',
  },
  {
    title: "Our whole fleet goes here now. No more tire surprises.",
    body: "We run 14 trucks out of this area. After one visit I set up an account. Volume pricing is fair, the readouts give us documentation for drivers, and turnaround is fast enough to keep trucks moving.",
    name: 'Sarah K.',
    role: 'Fleet Manager · Regional Carrier',
    initials: 'SK',
  },
  {
    title: "First place that actually knows tandem axle geometry.",
    body: "Had three shops look at my truck before I came here. The tech walked me through the thrust angle issue on the spot, fixed it, and my fuel bill dropped noticeably the next run.",
    name: 'James R.',
    role: 'Owner-Operator · Flatbed',
    initials: 'JR',
  },
  {
    title: "Drive-in, drive-out is real — no games.",
    body: "Dropped in unannounced on a Wednesday morning. They were busy but got me in within 30 minutes. Before/after printout, no upsell, back on the road by lunch. That's how it should work.",
    name: 'Tony M.',
    role: 'Independent Driver · 8 years',
    initials: 'TM',
  },
]

export default function ReviewsCarousel() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length)
  const next = () => setActive((a) => (a + 1) % reviews.length)
  const r = reviews[active]

  return (
    <section id="reviews" className="bg-surface-2 py-24">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Reviews</span>
          <h2 className="font-head text-4xl md:text-5xl font-bold text-ink mt-3">
            What Drivers &amp; Fleets Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl px-10 py-12 md:px-16 md:py-14 shadow-sm border border-line relative">
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-3 hover:text-ink hover:border-ink transition-colors text-xl leading-none"
              aria-label="Previous review"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-3 hover:text-ink hover:border-ink transition-colors text-xl leading-none"
              aria-label="Next review"
            >
              ›
            </button>

            <div className="text-center">
              <div className="text-accent text-2xl mb-5 tracking-wider">★★★★★</div>
              <h3 className="font-head font-bold text-xl md:text-2xl text-ink mb-4 leading-snug">
                &ldquo;{r.title}&rdquo;
              </h3>
              <p className="text-ink-2 text-base md:text-lg leading-relaxed mb-8">{r.body}</p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-accent text-white font-head font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {r.initials}
                </div>
                <div className="text-left">
                  <div className="font-head font-bold text-ink text-sm">{r.name}</div>
                  <div className="text-ink-3 text-sm">{r.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-accent w-6' : 'bg-line w-2'
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
