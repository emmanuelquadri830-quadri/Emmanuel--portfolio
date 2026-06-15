'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamic import keeps Three.js out of the initial bundle — renders client-side only
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.25,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 lg:px-16 pt-24 pb-16"
    >
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* — Text column — */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-8 z-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.22em] uppercase text-amber"
          >
            AI-Enhanced Product Designer & Front-end Developer · 5+ years crafting intuitive digital experiences
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[64px] xs:text-[76px] lg:text-[100px] leading-[0.92] tracking-tight"
          >
            Design<br />
            that{' '}
            <em className="italic text-amber">earns</em>
            <br />
            a second<br />
            look.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-ink-muted text-sm leading-relaxed max-w-xs"
          >
            Turning business goals into clear, accessible experiences across SaaS, EdTech, and enterprise platforms.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-6 items-center pt-2">
            <a
              href="#work"
              className="text-[11px] tracking-[0.2em] uppercase border-b border-amber pb-1 hover:text-amber transition-colors duration-200"
            >
              Selected Work
            </a>
            <a
              href="#contact"
              className="text-[11px] tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors duration-200"
            >
              Get in touch →
            </a>
          </motion.div>
        </motion.div>

        {/* — 3D column — */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
          className="relative h-72 xs:h-80 lg:h-[540px] lg:-mr-8"
          aria-hidden="true"
        >
          <HeroScene />
          {/* Radial glow behind the orb */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(40% 40% at 50% 50%, rgba(200,150,90,0.08) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-8 lg:left-16 text-[10px] tracking-[0.25em] uppercase text-ink-muted"
      >
        Scroll
      </motion.span>

      {/* Subtle horizontal rule at base */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-8 right-8 lg:left-16 lg:right-16 h-px bg-edge origin-left"
      />
    </section>
  )
}
