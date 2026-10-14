// Single source of truth for FAQ content — used by both the visible
// FAQAccordion component and the FAQPage JSON-LD in page.tsx so the
// two never drift out of sync (Google penalizes schema/visible-content mismatches).
export const faqs = [
  {
    q: 'Do I need to call before bringing my truck in?',
    a: 'Yes, call ahead before arriving. We schedule alignment appointments so a bay and certified technician are ready when you pull in. Most single and tandem slots are available same-day or next-day.',
  },
  {
    q: 'How much does a semi-truck alignment cost?',
    a: 'Single-axle is $165. Tandem (2-axle) is $210. Tri-axle (3-axle) is $285. Flat-rate pricing. Every alignment includes a laser diagnostic printout before and after. No surprises.',
  },
  {
    q: 'How long does the alignment take?',
    a: 'Most alignments are completed in 90 minutes or less once your truck is on the rack. We print a before/after readout for every job so you can see exactly what was corrected and have documentation for your records.',
  },
  {
    q: 'How often should a semi-truck be aligned?',
    a: 'Most fleets check alignment every 50,000–100,000 miles or after any suspension work, hard curb impact, or tire replacement. If you\'re seeing uneven tire wear, a pull to one side, or the steering wheel is off-center, don\'t wait for the mileage mark.',
  },
  {
    q: 'What alignment equipment do you use?',
    a: 'We use a Hunter alignment machine, calibrated and certified to manufacturer spec. General shops use lighter equipment designed for passenger cars. We don\'t.',
  },
  {
    q: 'Where are you located? Are you near I-44 or Hwy 65?',
    a: 'We\'re located at 2305 N Belcrest Ave in Springfield, MO, accessible from I-44 and Hwy 65. Call ahead before pulling in so we can have a bay ready for your rig.',
  },
  {
    q: 'Do you work with commercial fleets?',
    a: 'Yes. We offer volume pricing, PO billing, and scheduled maintenance programs for fleet accounts. Drop your email in the section below or call us directly to set up an account.',
  },
]
