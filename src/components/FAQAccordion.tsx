'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to call before bringing my truck in?',
    a: 'Yes — call ahead before arriving. We schedule alignment appointments so a bay and certified technician are ready when you pull in. Most single and tandem slots are available same-day or next-day.',
  },
  {
    q: 'How much does a semi-truck alignment cost?',
    a: 'Single-axle is $165. Tandem (2-axle) is $200. Tri-axle (3-axle) is $285. Flat-rate pricing — every alignment includes a laser diagnostic printout before and after. No surprises.',
  },
  {
    q: 'How long does the alignment take?',
    a: 'Most alignments are completed in 90 minutes or less once your truck is on the rack. We print a before/after readout for every job so you can see exactly what was corrected and have documentation for your records.',
  },
  {
    q: 'How often should a semi-truck be aligned?',
    a: 'Most fleets check alignment every 50,000–100,000 miles or after any suspension work, hard curb impact, or tire replacement. If you\'re seeing uneven tire wear, a pull to one side, or the steering wheel is off-center — don\'t wait for the mileage mark.',
  },
  {
    q: 'What alignment equipment do you use?',
    a: 'We use a Hunter alignment machine — the same precision equipment trusted by major fleet operations, calibrated and certified to manufacturer spec. General shops use lighter equipment designed for passenger cars. We don\'t.',
  },
  {
    q: 'Where are you located — are you near I-44, Hwy 417, or Hwy 65?',
    a: 'Yes — we\'re located in Springfield, MO, conveniently accessible from I-44, Hwy 417, and Hwy 65. Call ahead before pulling in so we can have a bay ready for your rig.',
  },
  {
    q: 'Do you work with commercial fleets?',
    a: 'Yes. We offer volume pricing, PO billing, and scheduled maintenance programs for fleet accounts. Drop your email in the section below or call us directly to set up an account.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white border-t border-line">
      <div className="wrap max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-head text-4xl font-bold text-ink">Common Questions</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'border-accent' : 'border-line'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-head font-bold text-ink text-base md:text-lg">{faq.q}</span>
                  <span
                    className={`text-accent text-2xl font-bold flex-shrink-0 leading-none transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-ink-2 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
