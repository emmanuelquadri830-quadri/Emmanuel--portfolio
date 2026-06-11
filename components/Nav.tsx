'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work',       href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-5 flex items-center justify-between"
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1 text-ink-muted hover:text-ink transition-colors duration-200"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 md:hidden px-6 pb-6 pt-4 flex flex-col gap-4"
            style={{
              backgroundColor: 'rgba(11,11,11,0.97)',
              backdropFilter: 'blur(14px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[13px] tracking-[0.2em] uppercase text-ink-muted hover:text-amber transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
