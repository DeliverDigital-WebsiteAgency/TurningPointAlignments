'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to call before bringing my truck in?',
    a: 'Yes — please call ahead before arriving. We schedule alignment appointments to ensure a bay and technician are ready for your rig. Single and tandem jobs typically get same-day or next-day slots.',
  },
  {
    q: 'How long does a semi-truck wheel alignment take?',
    a: 'Most alignments are completed in 90 minutes or less once your truck is on the rack. Every job includes a printed before/after readout so you can see exactly what was corrected.',
  },
  {
    q: 'What alignment equipment do you use?',
    a: 'We run Hunter and Bee Line laser alignment systems — calibrated, certified, and trusted by major commercial fleets. These are the same precision tools the industry\'s top shops rely on.',
  },
  {
    q: 'Do you offer fleet pricing or accounts?',
    a: 'Yes. We offer volume rates, PO billing, and dedicated maintenance schedules for fleet customers. Call us or drop your email in the fleet section below and we\'ll get a plan together.',
  },
  {
    q: 'What configurations do you align?',
    a: 'We align single-axle day cabs, tandem (2-axle) tractors, tri-axle (3-axle) rigs, tractor-trailer combinations, steer axles with caster correction, and full suspension checks.',
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
                className={`border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-accent' : 'border-line'}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-head font-bold text-ink text-base md:text-lg">{faq.q}</span>
                  <span
                    className={`text-accent text-2xl font-bold flex-shrink-0 leading-none transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-ink-2 leading-relaxed">{faq.a}</p>
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
