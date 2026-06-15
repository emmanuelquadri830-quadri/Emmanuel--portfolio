'use client'

import { motion } from 'framer-motion'
import { Target, BrainCircuit, Layers, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Card {
  Icon: LucideIcon
  title: string
  body: string
}

const cards: Card[] = [
  {
    Icon: Target,
    title: 'Interfaces that perform',
    body: 'Every screen is designed around how your users actually think and move — not how it looks in a mockup. Conversion, clarity, and retention built in from the start.',
  },
  {
    Icon: BrainCircuit,
    title: 'AI-native by default',
    body: 'I design for AI-powered products — prompt flows, generative outputs, loading states, confidence indicators, and the edge cases most designers skip entirely.',
  },
  {
    Icon: Layers,
    title: 'MVP to scale — no redesign',
    body: 'Components are built to extend. Whether you\'re launching fast or planning version two, the foundation holds without a teardown.',
  },
  {
    Icon: Zap,
    title: 'One person. No friction.',
    body: 'I design and build. No handoff delays, no translation loss between design and code — just faster time from idea to live product.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function ValueProp() {
  return (
    <section className="relative px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface border-y border-edge overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(200,150,90,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] tracking-[0.28em] uppercase text-amber mb-6">
              For Startups &amp; Businesses
            </p>

            <h2 className="font-display text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.0] tracking-tight text-white mb-8">
              Your product deserves a designer who{' '}
              <em className="not-italic text-amber">actually ships.</em>
            </h2>

            <p className="text-[14px] text-white/60 leading-relaxed mb-5 max-w-md">
              Most startups lose time — and money — in the gap between design and production. Miscommunication, endless revisions, interfaces that look great but don't convert.
            </p>

            <p className="text-[14px] text-white/60 leading-relaxed mb-10 max-w-md">
              I close that gap. I bring product thinking, UX craft, and frontend development into one workflow — so your team moves faster and your users get something that actually works.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber text-surface text-[12px] font-bold tracking-[0.15em] uppercase rounded-lg hover:bg-amber/85 transition-colors duration-300"
            >
              Let's build something
            </a>
          </motion.div>

          {/* ── Right: 2×2 cards ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-edge bg-surface-2 hover:border-amber/25 transition-colors duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(200,150,90,0.06)_0%,transparent_70%)]" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0 group-hover:bg-amber/15 transition-colors duration-300">
                  <card.Icon className="h-4 w-4 text-amber" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-2 group-hover:text-amber transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-white/55 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
