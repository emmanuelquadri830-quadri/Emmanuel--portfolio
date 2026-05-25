'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6 flex items-center justify-between"
      style={{
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <a
        href="#hero"
        className="font-display text-sm tracking-[0.25em] uppercase text-ink-muted hover:text-ink transition-colors duration-200"
      >
        QE
      </a>

      <nav className="flex items-center gap-6 lg:gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
