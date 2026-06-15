'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const contactCards = [
  {
    label: 'Email',
    value: 'emmanuelquadri830@gmail.com',
    href: 'mailto:emmanuelquadri830@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+234 903 657 8466',
    href: 'https://wa.me/2349036578466',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/emmanuel-quadri',
    href: 'https://www.linkedin.com/in/emmanuel-quadri-uiux-%7E-ai-14101b241',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    value: 'behance.net/Quadriemmanueldesign',
    href: 'https://www.behance.net/Quadriemmanueldesign',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9h8a3 3 0 0 1 0 6H3V6h7a3 3 0 0 1 0 6" />
        <path d="M15 7h6M16 12h5M15 17h6" />
      </svg>
    ),
  },
]

const services = [
  'UI/UX Design',
  'Frontend Development',
  'Design System',
  'Brand Identity',
  'Prototype & Testing',
  'Consulting',
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const inputClass =
  'w-full bg-surface border border-edge rounded-lg px-4 py-3 text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-amber/50 transition-colors duration-200'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry — ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    )
    window.open(`mailto:emmanuelquadri830@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative border-t border-edge bg-surface flex flex-col overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(200,150,90,0.07)_0%,transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-16 py-28 lg:py-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[11px] tracking-[0.22em] uppercase text-amber block mb-4">
            Available for work
          </span>
          <h2 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] leading-tight tracking-tight text-white">
            Let&apos;s get to<br />
            <em className="not-italic text-amber">know each other.</em>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">

          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-2 border border-edge rounded-2xl p-7 lg:p-9 flex flex-col gap-5"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">Your Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">What do you need?</label>
              <select
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select a service...</option>
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">Tell me more</label>
              <textarea
                rows={5}
                placeholder="Give me a rough idea — what you're building, who it's for, and when you'd like to get started."
                required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-amber text-surface font-bold text-[12px] tracking-[0.18em] uppercase py-4 rounded-lg hover:bg-amber/85 transition-colors duration-300 mt-1"
            >
              {sent ? 'Opening mail client...' : 'Send Message'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </motion.form>

          {/* Right: Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-surface-2 border border-edge rounded-xl px-5 py-4 hover:border-amber/30 transition-all duration-300"
              >
                {/* Icon box */}
                <div className="w-10 h-10 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0 text-amber group-hover:bg-amber/20 transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/35 mb-0.5">{card.label}</p>
                  <p className="text-[13px] text-white truncate group-hover:text-amber transition-colors duration-300">{card.value}</p>
                </div>

                {/* Arrow */}
                <span className="text-white/20 group-hover:text-amber transition-colors duration-300 shrink-0">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="relative border-t border-edge px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-ink-muted">
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/emmanuel-quadri-uiux-%7E-ai-14101b241" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors duration-200">LI</a>
          <a href="https://www.behance.net/Quadriemmanueldesign" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors duration-200">BE</a>
        </div>
        <span className="text-ink-muted">Quadri Emmanuel &mdash; 25&copy;</span>
      </div>
    </section>
  )
}
