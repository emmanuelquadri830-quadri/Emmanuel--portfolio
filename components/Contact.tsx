'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  'Frontend Dev',
  'Design System',
  'Brand Identity',
  'Prototype & Testing',
  'Consulting',
]

function FloatingInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative">
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
          lifted
            ? 'top-2 text-[9px] tracking-[0.18em] uppercase text-amber'
            : 'top-1/2 -translate-y-1/2 text-[13px] text-ink/30'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={lifted ? placeholder : ''}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-surface border rounded-xl px-4 pt-6 pb-3 text-[15px] text-ink focus:outline-none transition-all duration-200 ${
          focused ? 'border-amber/60 shadow-[0_0_0_3px_rgba(200,150,90,0.08)]' : 'border-edge hover:border-edge/80'
        }`}
      />
    </div>
  )
}

function FloatingTextarea({
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative">
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
          lifted
            ? 'top-3 text-[9px] tracking-[0.18em] uppercase text-amber'
            : 'top-4 text-[13px] text-ink/30'
        }`}
      >
        {label}
      </label>
      <textarea
        rows={5}
        placeholder={lifted ? placeholder : ''}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-surface border rounded-xl px-4 pt-8 pb-3 text-[15px] text-ink focus:outline-none resize-none transition-all duration-200 ${
          focused ? 'border-amber/60 shadow-[0_0_0_3px_rgba(200,150,90,0.08)]' : 'border-edge hover:border-edge/80'
        }`}
      />
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry: ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    )
    window.open(`mailto:emmanuelquadri830@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative border-t border-edge bg-surface flex flex-col overflow-hidden">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgb(var(--color-ink)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ink)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(200,150,90,0.1)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[600px] bg-amber/[0.04] rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-16 py-28 lg:py-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-end gap-6">
            <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-tight text-ink">
              Let&apos;s build<br />
              <em className="not-italic text-amber">something great.</em>
            </h2>
            <span className="hidden lg:block font-display text-[120px] leading-none text-ink/[0.04] select-none mb-1 ml-4">
              04
            </span>
          </div>

          <p className="mt-6 text-[14px] text-ink/50 max-w-md leading-relaxed">
            Got a project in mind? Drop me a message and I&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-14 items-start">

          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-2/60 border border-edge rounded-2xl p-7 lg:p-10 flex flex-col gap-6 backdrop-blur-sm"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FloatingInput
                label="Your Name"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={v => setForm(f => ({ ...f, name: v }))}
              />
              <FloatingInput
                label="Your Email"
                type="email"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={v => setForm(f => ({ ...f, email: v }))}
              />
            </div>

            {/* Service chips */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-ink/35">What do you need?</span>
              <div className="flex flex-wrap gap-2">
                {services.map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, service: f.service === s ? '' : s }))}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] tracking-wide border transition-all duration-200 ${
                      form.service === s
                        ? 'bg-amber text-surface border-amber font-medium'
                        : 'bg-surface border-edge text-ink/60 hover:border-amber/40 hover:text-ink'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <FloatingTextarea
              label="Tell me more"
              placeholder="Give me a rough idea: what you are building, who it is for, and when you would like to get started."
              required
              value={form.message}
              onChange={v => setForm(f => ({ ...f, message: v }))}
            />

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full overflow-hidden flex items-center justify-center gap-3 bg-amber text-surface font-semibold text-[12px] tracking-[0.18em] uppercase py-4 rounded-xl transition-colors duration-300 mt-1 group"
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Opening mail client…
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2"
                  >
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          {/* Right: Contact cards */}
          <div className="flex flex-col gap-3">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(card.label)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex items-center gap-4 bg-surface-2/60 border border-edge rounded-xl px-5 py-4 overflow-hidden transition-all duration-300 hover:border-amber/40 hover:shadow-[0_4px_24px_rgba(200,150,90,0.08)]"
              >
                {/* Amber left accent bar */}
                <span
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-amber rounded-l-xl transition-all duration-300 ${
                    hovered === card.label ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Icon box */}
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  hovered === card.label
                    ? 'bg-amber text-surface border-amber'
                    : 'bg-amber/8 border-amber/20 text-amber'
                }`}>
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-ink/35 mb-0.5">{card.label}</p>
                  <p className={`text-[15px] truncate transition-colors duration-300 ${
                    hovered === card.label ? 'text-amber' : 'text-ink'
                  }`}>
                    {card.value}
                  </p>
                </div>

                {/* Arrow */}
                <span className={`transition-all duration-300 shrink-0 ${
                  hovered === card.label ? 'text-amber translate-x-0.5 -translate-y-0.5' : 'text-ink/20'
                }`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </motion.a>
            ))}

            {/* Decorative tagline */}
            <p className="mt-4 text-[11px] text-ink/25 leading-relaxed px-1">
              Prefer async? Any channel above works. I respond thoughtfully to all of them.
            </p>
          </div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="relative border-t border-edge px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-ink-muted">
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/emmanuel-quadri-uiux-%7E-ai-14101b241" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors duration-200">LI</a>
          <a href="https://www.behance.net/Quadriemmanueldesign" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors duration-200">BE</a>
        </div>
        <span className="text-ink-muted">Quadri Emmanuel &copy; 2025</span>
      </div>
    </section>
  )
}
