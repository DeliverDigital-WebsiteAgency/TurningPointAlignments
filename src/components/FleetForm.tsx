'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function FleetForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/fleet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="fleet" className="bg-brand-blue py-20">
      <div className="wrap max-w-2xl mx-auto text-center">
        <span className="font-head font-semibold text-xs tracking-[0.18em] uppercase text-white/50">
          Fleet Services
        </span>
        <h2 className="font-head text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
          Run a Fleet?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Volume pricing, scheduled service, and PO billing available. Drop your email and we&apos;ll reach out about your fleet.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-8 text-white">
            <div className="text-4xl mb-3">✓</div>
            <p className="font-head font-bold text-xl">Thanks, we&apos;ll be in touch.</p>
            <p className="text-white/50 mt-2 text-sm">Expect a call from our fleet desk within 1 business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your work email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/35 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-white/60 transition-colors"
            />
            <button type="submit" disabled={status === 'sending'} className="btn-primary whitespace-nowrap disabled:opacity-60">
              {status === 'sending' ? 'Sending...' : 'Get Fleet Pricing ›'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-white/70 text-sm mt-4">Something went wrong. Please call us directly at (417) 209-5846.</p>
        )}

        <p className="text-white/35 text-sm mt-6">
          Prefer to talk now? Call{' '}
          <strong className="text-white/60">(417) 209-5846</strong> and ask for the fleet desk.
        </p>
      </div>
    </section>
  )
}
