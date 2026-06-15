'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery & Research',
    tag: 'Foundation',
    description:
      'Before anything is sketched, I listen. User interviews, competitive audits, heuristic reviews. I map the real problem, not the assumed one. Every design decision that follows is traceable back to this phase.',
  },
  {
    num: '02',
    title: 'Strategy & Architecture',
    tag: 'Structure',
    description:
      'Research becomes structure. I define user flows, information hierarchy, and feature scope, building a shared product blueprint that keeps design and engineering speaking the same language from day one.',
  },
  {
    num: '03',
    title: 'Design & Prototyping',
    tag: 'Craft',
    description:
      'Low fi to pixel precise. I work in Figma with organised component libraries, design tokens, and interactive prototypes that feel real enough to test. What ships to engineers is production ready, not directional.',
  },
  {
    num: '04',
    title: 'Development & Handoff',
    tag: 'Execution',
    description:
      'I close the gap between design and code myself. Whether building the interface in React and Next.js or handing off annotated Figma files with spacing specs and edge case documentation, nothing gets lost in translation.',
  },
  {
    num: '05',
    title: 'Testing & Iteration',
    tag: 'Validation',
    description:
      'Real users on real devices. Usability testing, cross browser QA, and WCAG AA accessibility checks run alongside development. Findings feed back into design until the experience is genuinely smooth.',
  },
  {
    num: '06',
    title: 'Launch & Improvement',
    tag: 'Growth',
    description:
      'Launch is the beginning. I monitor analytics and user behaviour post release, surface friction early, and iterate with intention, because the best products are the ones that keep getting better.',
  },
]

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function Process() {
  return (
    <section className="relative px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface-2 border-y border-edge">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-20"
        >
          <span className="text-[13px] tracking-[0.22em] uppercase text-amber shrink-0">
            Process
          </span>
          <div className="h-px flex-1 bg-edge" />
          <span className="font-display text-[13px] tracking-[0.22em] uppercase text-ink-muted shrink-0 hidden sm:block">
            How I Work
          </span>
        </motion.div>

        {/* Intro line */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[36px] sm:text-[48px] lg:text-[60px] leading-tight tracking-tight text-ink max-w-3xl mb-20"
        >
          Six steps from messy brief
          <br />to <em className="not-italic text-amber">shipped product.</em>
        </motion.h2>

        {/* Step rows */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={rowVariants}
              className="group border-t border-edge py-10 lg:py-12
                         grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-4 lg:gap-12
                         hover:border-amber/30 transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-3">
                <span className="font-display text-[15px] text-ink/40 group-hover:text-amber/70 transition-colors duration-300 tracking-widest">
                  {step.num}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-ink/30 lg:mt-1 group-hover:text-amber/50 transition-colors duration-300">
                  {step.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[28px] sm:text-[34px] lg:text-[38px] leading-tight text-ink group-hover:text-amber transition-colors duration-300 self-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-ink/70 leading-relaxed self-center max-w-lg">
                {step.description}
              </p>
            </motion.div>
          ))}

          {/* Cap */}
          <div className="border-t border-edge" />
        </motion.div>

      </div>
    </section>
  )
}
