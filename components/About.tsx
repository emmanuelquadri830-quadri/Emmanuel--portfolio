'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '5+',
    label: 'Years of Experience',
    sub: 'SaaS, EdTech, marketing & enterprise platforms',
  },
  {
    value: '60%',
    label: 'Reduction in design discrepancies',
    sub: 'via unified design system at Flexisaf',
  },
  {
    value: '500+',
    label: 'Research participants',
    sub: '+25% usability · +30% customer satisfaction',
  },
]

const tools = ['Figma', 'Framer', 'Webflow', 'WordPress', 'Adobe XD']

export function About() {
  return (
    <section
      id="about"
      className="px-8 lg:px-16 py-28 lg:py-36 bg-surface-2"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* — Bio column — */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] tracking-[0.22em] uppercase text-amber block mb-8">
              About
            </span>

            <h2 className="font-display text-[48px] lg:text-[60px] leading-tight mb-8">
              Designing with<br />
              <em className="italic">purpose</em>{' '}
              and clarity.
            </h2>

            <p className="text-ink-muted text-sm leading-relaxed mb-5">
              My name is Quadri Emmanuel Adetayo, and I’m a Senior Product Designer with 5+ years creating intuitive, user-centered
              digital products across SaaS, EdTech, marketing, and enterprise platforms.
            </p>
            <p className="text-ink-muted text-sm leading-relaxed mb-10">
              Skilled in user research, wireframing, prototyping, usability
              testing, interaction design, and design systems. I work closely
              with cross-functional teams to turn business goals into clear,
              accessible, effective experiences.
            </p>

            {/* Tool tags */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] px-3 py-1 border border-edge rounded-full text-ink-muted tracking-wide hover:border-amber hover:text-amber transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* — Stats column — */}
          <div className="space-y-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-edge py-8 last:border-none"
              >
                <div className="font-display text-[64px] lg:text-[72px] leading-none text-amber mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-ink mb-1">{stat.label}</p>
                <p className="text-[12px] text-ink-muted">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
