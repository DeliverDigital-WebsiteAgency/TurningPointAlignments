'use client'

import { useState } from 'react'
import { faqs } from '@/lib/faqs'

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
                <h3 className="m-0">
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
                </h3>
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
