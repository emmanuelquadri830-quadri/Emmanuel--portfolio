'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Interfaces that perform',
    body: 'Every screen is designed around how your users actually think and move, not how it looks in a mockup. Conversion, clarity, and retention built in from the start.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2a5 5 0 0 1 5 5c0 1.6-.8 3.1-2 4l-.7 1.3H9.7L9 11A5 5 0 0 1 12 2z" />
        <path d="M9 17h6M10 20h4" />
        <circle cx="19" cy="5" r="2" /><circle cx="5" cy="5" r="2" />
        <path d="M17 5h2M5 5H7" />
      </svg>
    ),
    title: 'AI native by default',
    body: 'I design for AI powered products. Prompt flows, generative outputs, loading states, confidence indicators, and the edge cases most designers skip entirely.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    ),
    title: 'Built to scale',
    body: 'Components are built to extend. Whether launching fast or planning version two, the foundation holds without a teardown.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'One person. No friction.',
    body: 'I design and build. No handoff delays, no translation loss between design and code. Just faster time from idea to live product.',
  },
]

const rowVariants = {
  hidden: { opacity: 0, x: 16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ValueCard({ card }: { card: typeof cards[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={rowVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex items-start gap-5 rounded-xl border border-edge bg-surface-2/40 px-6 py-6 overflow-hidden transition-all duration-300 cursor-default"
      style={{
        borderColor: hovered ? 'rgba(200,150,90,0.35)' : undefined,
        backgroundColor: hovered ? 'rgba(200,150,90,0.03)' : undefined,
        boxShadow: hovered ? '0 4px 24px rgba(200,150,90,0.07)' : 'none',
      }}
    >
      {/* Amber left accent bar */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber rounded-l-xl transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Number + icon */}
      <div className="shrink-0 flex flex-col items-center gap-2 pt-0.5">
        <span className="text-[9px] tracking-[0.22em] uppercase text-amber/60 group-hover:text-amber transition-colors duration-300">
          {card.num}
        </span>
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center border border-edge text-ink/40 transition-all duration-300"
          style={{
            background: hovered ? 'rgba(200,150,90,0.12)' : undefined,
            borderColor: hovered ? 'rgba(200,150,90,0.3)' : undefined,
            color: hovered ? '#C8965A' : undefined,
          }}
        >
          {card.icon}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3
          className="font-display text-[20px] sm:text-[22px] leading-tight tracking-tight mb-2 transition-colors duration-300"
          style={{ color: hovered ? '#C8965A' : 'rgb(var(--color-ink))' }}
        >
          {card.title}
        </h3>
        <p className="text-[15px] text-ink/50 leading-relaxed">
          {card.body}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="shrink-0 self-center transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(0, 0)' : 'translate(-4px, 4px)',
          color: '#C8965A',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </motion.div>
  )
}

export function ValueProp() {
  return (
    <section className="relative px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface border-y border-edge overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(200,150,90,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: sticky text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase text-amber mb-6">
              For Startups &amp; Businesses
            </p>

            <h2 className="font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] tracking-tight text-ink mb-8">
              Your product deserves a designer who{' '}
              <em className="not-italic text-amber">actually ships.</em>
            </h2>

            <p className="text-base text-ink/55 leading-relaxed mb-5 max-w-md">
              Most startups lose time and money in the gap between design and production. Miscommunication, endless revisions, interfaces that look great but do not convert.
            </p>

            <p className="text-base text-ink/55 leading-relaxed mb-10 max-w-md">
              I close that gap. Product thinking, UX craft, and frontend development in one workflow so your team moves faster and your users get something that actually works.
            </p>

            {/* Premium CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-amber text-surface text-[11px] font-bold tracking-[0.18em] uppercase rounded-xl overflow-hidden transition-colors duration-300 hover:bg-amber/90"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
              Let's build something
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: card stack */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-3"
          >
            {cards.map(card => <ValueCard key={card.num} card={card} />)}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
