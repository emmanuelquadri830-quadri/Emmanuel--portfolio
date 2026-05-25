'use client'

import { motion } from 'framer-motion'
import { projects, type Project } from '@/lib/projects'

export function Work() {
  return (
    <section id="work" className="px-8 lg:px-16 py-28 lg:py-36">
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
            Selected Work
          </span>
          <div className="h-px flex-1 bg-edge" />
        </motion.div>

        {/* 2-column card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-edge py-10 first:border-t"
    >
      <a
        href={project.link ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} case study`}
        className="block"
      >
        {/* ── Cover image ── */}
        {project.image && (
          <div
            className="relative w-full mb-6 overflow-hidden bg-surface-2"
            style={{ aspectRatio: '4 / 3' }}
          >
            {/* Plain <img> — external Behance CDN, no Next.js optimisation needed */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover
                         transition-transform duration-700 ease-out
                         group-hover:scale-[1.04]"
            />

            {/* Subtle amber tint on hover */}
            <div
              className="absolute inset-0 pointer-events-none
                          bg-amber opacity-0 mix-blend-overlay
                          transition-opacity duration-500
                          group-hover:opacity-[0.12]"
            />

            {/* "View Case Study" pill — slides up on hover */}
            <div
              className="absolute bottom-4 right-4
                          translate-y-2 opacity-0
                          group-hover:translate-y-0 group-hover:opacity-100
                          transition-all duration-300 ease-out"
            >
              <span
                className="inline-flex items-center gap-1.5
                            text-[10px] tracking-[0.18em] uppercase
                            text-ink bg-surface/85 backdrop-blur-sm
                            px-3 py-1.5 rounded-full border border-edge"
              >
                View Case Study →
              </span>
            </div>
          </div>
        )}

        {/* ── Metadata ── */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-baseline gap-2.5 min-w-0">
            <span className="font-display text-xs text-ink-muted shrink-0">
              {project.id}
            </span>
            <h3
              className="font-display text-[22px] lg:text-[26px] leading-tight
                          group-hover:text-amber transition-colors duration-300
                          truncate"
            >
              {project.title}
            </h3>
          </div>
          <span className="text-ink-muted text-[11px] tracking-wider shrink-0 pt-0.5">
            {project.year}
          </span>
        </div>

        <p className="text-ink-muted text-[13px] leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 border border-edge
                          rounded-full text-ink-muted tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  )
}
