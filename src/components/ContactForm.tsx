'use client'

import { useState } from 'react'

const services = [
  'Single Axle ($165)',
  'Tandem 2-Axle ($210)',
  'Tri-Axle ($285)',
  'Tractor + Trailer',
  'Steer Axle & Caster',
  'Suspension Inspection',
  'Not sure / General inquiry',
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', phone: '', company: '', service: '', message: '' })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', phone: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white border border-line rounded-xl px-4 py-3.5 text-sm text-ink placeholder-ink-3 focus:outline-none focus:border-accent transition-colors'

  if (status === 'success') {
    return (
      <div className="bg-accent-soft border border-accent/20 rounded-2xl px-8 py-10 text-center">
        <div className="font-head font-bold text-2xl text-ink mb-2">Message received.</div>
        <p className="text-ink-2 text-sm">We will call you back within 2 business days to confirm your appointment.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-head font-bold text-xs uppercase tracking-widest text-ink-3 mb-1.5">Name *</label>
          <input type="text" required placeholder="Your name" value={form.name} onChange={set('name')} className={inputClass} />
        </div>
        <div>
          <label className="block font-head font-bold text-xs uppercase tracking-widest text-ink-3 mb-1.5">Phone *</label>
          <input type="tel" required placeholder="(417) 000-0000" value={form.phone} onChange={set('phone')} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-head font-bold text-xs uppercase tracking-widest text-ink-3 mb-1.5">Company / Fleet</label>
          <input type="text" placeholder="Optional" value={form.company} onChange={set('company')} className={inputClass} />
        </div>
        <div>
          <label className="block font-head font-bold text-xs uppercase tracking-widest text-ink-3 mb-1.5">Service needed</label>
          <select value={form.service} onChange={set('service')} className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-head font-bold text-xs uppercase tracking-widest text-ink-3 mb-1.5">Message *</label>
        <textarea
          required
          rows={4}
          placeholder="Describe your rig, what you're seeing, and the best time to reach you."
          value={form.message}
          onChange={set('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please call us directly at (417) 209-5846.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message ›'}
      </button>

      <p className="text-ink-3 text-xs text-center pt-1">
        Prefer to call? <a href="tel:4172095846" className="font-semibold text-accent hover:underline">(417) 209-5846</a>
      </p>
    </form>
  )
}
