'use client'

import { motion } from 'framer-motion'
import {
  Search,
  GitBranch,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  num: string
  title: string
  description: string
  Icon: LucideIcon
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Discovery & Research',
    Icon: Search,
    description:
      'I start by understanding the problem deeply — conducting user interviews, auditing competitors, and aligning with stakeholders to map real needs, pain points, and business goals before touching any design tool.',
  },
  {
    num: '02',
    title: 'Strategy & Information Architecture',
    Icon: GitBranch,
    description:
      'With clear research insights, I define user flows, content hierarchy, and feature scope. This phase turns fuzzy requirements into a concrete product blueprint that keeps design and engineering aligned.',
  },
  {
    num: '03',
    title: 'Design & Prototyping',
    Icon: PenTool,
    description:
      'From low-fidelity wireframes to pixel-precise high-fidelity screens in Figma — complete with component libraries, design tokens, and interactive prototypes ready for real user validation.',
  },
  {
    num: '04',
    title: 'Development & Handoff',
    Icon: Code2,
    description:
      'I bridge the design-to-code gap by building production-ready interfaces in React and Next.js, and by delivering annotated Figma files with spacing specs, tokens, and edge-case documentation that engineers actually use.',
  },
  {
    num: '05',
    title: 'Testing & Iteration',
    Icon: CheckCircle2,
    description:
      'Usability testing, cross-device QA, and accessibility checks (WCAG AA) run in parallel with development. Findings feed directly back into design — nothing ships without validation against real users and real devices.',
  },
  {
    num: '06',
    title: 'Launch & Continuous Improvement',
    Icon: Rocket,
    description:
      'After a smooth production deployment, I monitor analytics and user feedback to identify friction points. Portfolios, SaaS products, and enterprise tools all benefit from a design that learns and improves post-launch.',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export function Process() {
  return (
    <section className="relative px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface border-y border-edge overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,150,90,0.07)_0%,transparent_65%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-amber mb-4">
            My Process
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[60px] leading-tight tracking-tight text-ink">
            How I <em className="not-italic text-amber">Work</em>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-amber/40" />
            <div className="h-1 w-1 rounded-full bg-amber/60" />
            <div className="h-px w-12 bg-amber/40" />
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={cardVariants}
              className="group relative flex flex-col p-7 rounded-2xl border border-edge bg-surface-2 hover:border-amber/30 transition-colors duration-300 overflow-hidden"
            >
              {/* Subtle corner glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_0%_0%,rgba(200,150,90,0.06)_0%,transparent_60%)]" />

              {/* Step number + icon row */}
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  {/* Icon box */}
                  <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/15 transition-colors duration-300">
                    <step.Icon className="h-5 w-5 text-amber" strokeWidth={1.5} />
                  </div>
                </div>
                {/* Step number */}
                <span className="font-display text-[38px] leading-none text-ink/8 select-none group-hover:text-amber/15 transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[20px] lg:text-[22px] leading-snug text-ink mb-3 group-hover:text-amber transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-ink-muted leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-px w-full bg-edge group-hover:bg-amber/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
