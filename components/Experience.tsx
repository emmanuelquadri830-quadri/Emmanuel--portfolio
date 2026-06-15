'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { experience, type ExperienceEntry } from '@/lib/experience'

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const reducedItemVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.3 } },
}

export function Experience() {
  return (
    <section id="experience" className="px-8 lg:px-16 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-16"
        >
          <span className="text-[11px] tracking-[0.22em] uppercase text-amber shrink-0">
            Experience
          </span>
          <div className="h-px flex-1 bg-edge" />
        </motion.div>

        {/* Timeline list */}
        <div className="relative">
          {/* Vertical line — draws in from top */}
          <TimelineLine />

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {experience.map((entry) => (
              <ExperienceRow key={entry.id} entry={entry} />
            ))}
          </motion.div>
        </div>

        {/* Cap line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-b border-edge"
        />
      </div>
    </section>
  )
}

function TimelineLine() {
  const shouldReduce = useReducedMotion()
  return (
    <motion.div
      initial={{ scaleY: shouldReduce ? 1 : 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ transformOrigin: 'top' }}
      className="absolute left-0 top-0 bottom-0 w-px bg-edge hidden lg:block"
    />
  )
}

function PresentDot() {
  const shouldReduce = useReducedMotion()
  return (
    <motion.span
      animate={shouldReduce ? {} : {
        opacity: [1, 0.35, 1],
        scale:   [1, 1.25, 1],
      }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"
    />
  )
}

function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  const shouldReduce = useReducedMotion()
  const variants = shouldReduce ? reducedItemVariants : itemVariants

  return (
    <motion.div
      variants={variants}
      className="border-t border-edge py-10
                 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 lg:gap-16
                 group lg:pl-6"
    >
      {/* Left: period + badge */}
      <div className="flex lg:flex-col items-start gap-3 pt-0.5">
        <span className="text-[14px] text-ink-muted tracking-wide leading-relaxed">
          {entry.period}
        </span>
        {entry.current && (
          <span
            className="inline-flex items-center gap-1.5
                        text-[10px] tracking-[0.15em] uppercase
                        text-amber border border-amber/40 rounded-full
                        px-2.5 py-0.5"
          >
            <PresentDot />
            Present
          </span>
        )}
      </div>

      {/* Right: role, company, description */}
      <div>
        <h3
          className="font-display text-[26px] lg:text-[30px] leading-tight mb-1
                     group-hover:text-amber transition-colors duration-300"
        >
          {entry.role}
        </h3>

        <p className="text-[14px] tracking-[0.12em] text-ink-muted mb-4">
          {entry.company}
          <span className="mx-2 opacity-30">/</span>
          {entry.location}
        </p>

        <p className="text-ink-muted text-[15px] leading-relaxed max-w-xl">
          {entry.description}
        </p>
      </div>
    </motion.div>
  )
}
