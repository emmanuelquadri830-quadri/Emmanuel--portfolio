'use client'

import { motion } from 'framer-motion'

const strengths = [
  {
    num: '01',
    accent: '#FF6B4A',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Pixel Perfect',
    description:
      'Every pixel has a reason. Good design isn\'t just how something looks. It\'s how it feels when someone actually uses it. I obsess over details so you don\'t have to.',
  },
  {
    num: '02',
    accent: '#2DD4BF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'High Quality',
    description:
      'Clean code, fast load times, and no shortcuts. Whether it\'s a marketing site or a full web app, what I ship holds up well after handoff, not just on launch day.',
  },
  {
    num: '03',
    accent: '#C8965A',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="10" y1="17" x2="10" y2="21" />
        <line x1="14" y1="17" x2="14" y2="21" />
      </svg>
    ),
    title: 'Creative Ideas',
    description:
      'I listen before I design. Every project gets a fresh approach built around who it\'s actually for, not a recycled template. The goal is always something that feels right and works well.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export function CoreStrengths() {
  return (
    <section className="relative px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface border-b border-edge overflow-hidden">

      {/* Faint background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--color-ink)/0.5) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ink)/0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="text-[11px] tracking-[0.22em] uppercase text-amber block mb-4">
              What I Do
            </span>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-tight tracking-tight text-ink">
              My Core Strengths
            </h2>
          </div>
          <p className="hidden lg:block text-[13px] text-ink/40 max-w-[220px] leading-relaxed text-right shrink-0">
            The three pillars behind every project I take on.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          {strengths.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group relative flex flex-col rounded-xl overflow-hidden cursor-default border border-edge"
            >
              {/* Card fill — dark with slight tint */}
              <div className="absolute inset-0 bg-surface-2 group-hover:bg-surface transition-colors duration-500" />

              {/* Oversized number watermark */}
              <div
                className="absolute -right-4 -bottom-6 font-display text-[130px] leading-none font-bold select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500"
                style={{ color: s.accent }}
              >
                {s.num}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">

                {/* Top row */}
                <div className="flex items-center justify-between mb-12">
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-medium"
                    style={{ color: s.accent }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: s.accent }}
                  >
                    {s.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[28px] sm:text-[32px] leading-tight tracking-tight text-ink mb-5">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.75] text-ink/55 mb-10">
                  {s.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-auto">
                  <div
                    className="h-[1px] w-10 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ background: s.accent, opacity: 0.5 }}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
