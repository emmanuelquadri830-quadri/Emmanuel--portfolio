'use client'

import { motion } from 'framer-motion'
import { experience, type ExperienceEntry } from '@/lib/experience'

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
        <div>
          {experience.map((entry, i) => (
            <ExperienceRow key={entry.id} entry={entry} index={i} />
          ))}
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

function ExperienceRow({
  entry,
  index,
}: {
  entry: ExperienceEntry
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-t border-edge py-10
                 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 lg:gap-16
                 group"
    >
      {/* ── Left: period + badge ── */}
      <div className="flex lg:flex-col items-start gap-3 pt-0.5">
        <span className="text-[12px] text-ink-muted tracking-wide leading-relaxed">
          {entry.period}
        </span>
        {entry.current && (
          <span
            className="inline-flex items-center gap-1.5
                        text-[10px] tracking-[0.15em] uppercase
                        text-amber border border-amber/40 rounded-full
                        px-2.5 py-0.5"
          >
            {/* Live dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse shrink-0" />
            Present
          </span>
        )}
      </div>

      {/* ── Right: role, company, description ── */}
      <div>
        <h3
          className="font-display text-[26px] lg:text-[30px] leading-tight mb-1
                     group-hover:text-amber transition-colors duration-300"
        >
          {entry.role}
        </h3>

        <p className="text-[12px] tracking-[0.12em] text-ink-muted mb-4">
          {entry.company}
          <span className="mx-2 opacity-30">·</span>
          {entry.location}
        </p>

        <p className="text-ink-muted text-[13px] leading-relaxed max-w-xl">
          {entry.description}
        </p>
      </div>
    </motion.div>
  )
}
