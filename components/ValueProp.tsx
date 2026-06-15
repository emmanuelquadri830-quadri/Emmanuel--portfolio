'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    num: '01',
    title: 'Interfaces that perform',
    body: 'Every screen is designed around how your users actually think and move. Not how it looks in a mockup. Conversion, clarity, and retention built in from the start.',
  },
  {
    num: '02',
    title: 'AI-native by default',
    body: 'I design for AI-powered products. Prompt flows, generative outputs, loading states, confidence indicators, and the edge cases most designers skip entirely.',
  },
  {
    num: '03',
    title: 'Built to scale',
    body: 'Components are built to extend. Whether launching fast or planning version two, the foundation holds without a teardown.',
  },
  {
    num: '04',
    title: 'One person. No friction.',
    body: 'I design and build. No handoff delays, no translation loss between design and code. Just faster time from idea to live product.',
  },
]

const rowVariants = {
  hidden: { opacity: 0, x: 16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function ValueProp() {
  return (
    <section className="relative px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface border-y border-edge overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(200,150,90,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
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

            <h2 className="font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] tracking-tight text-white mb-8">
              Your product deserves a designer who{' '}
              <em className="not-italic text-amber">actually ships.</em>
            </h2>

            <p className="text-[14px] text-white/55 leading-relaxed mb-5 max-w-md">
              Most startups lose time and money in the gap between design and production. Miscommunication, endless revisions, interfaces that look great but don't convert.
            </p>

            <p className="text-[14px] text-white/55 leading-relaxed mb-10 max-w-md">
              I close that gap. Product thinking, UX craft, and frontend development in one workflow so your team moves faster and your users get something that actually works.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-amber text-surface text-[11px] font-bold tracking-[0.18em] uppercase rounded-lg hover:bg-amber/85 transition-colors duration-300"
            >
              Let's build something
            </a>
          </motion.div>

          {/* Right: list-style cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col"
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.num}
                variants={rowVariants}
                className="group relative"
              >
                {/* Top border */}
                <div className="h-px bg-edge group-hover:bg-amber/30 transition-colors duration-500" />

                {/* Row content */}
                <div className="grid grid-cols-[40px_1fr] gap-6 py-8 lg:py-9">

                  {/* Number */}
                  <span className="text-[10px] tracking-[0.2em] uppercase text-amber/60 group-hover:text-amber transition-colors duration-300 pt-1">
                    {card.num}
                  </span>

                  {/* Text */}
                  <div>
                    <h3 className="font-display text-[20px] sm:text-[22px] text-white leading-tight tracking-tight mb-3 group-hover:text-amber transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </div>

                {/* Bottom border on last item */}
                {i === cards.length - 1 && (
                  <div className="h-px bg-edge" />
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
