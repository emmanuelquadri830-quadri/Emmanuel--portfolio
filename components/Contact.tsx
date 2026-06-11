'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const socials = [
  { label: 'LI', href: 'https://www.linkedin.com/in/emmanuel-quadri-uiux-%7E-ai-14101b241' },
  { label: 'BE', href: 'https://www.behance.net/Quadriemmanueldesign' },
]

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopied(email)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="relative border-t border-edge bg-surface flex flex-col">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(200,150,90,0.08)_0%,transparent_65%)]" />

      {/* Main CTA */}
      <div className="flex flex-col items-center justify-center px-6 py-32 lg:py-48 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-medium tracking-[0.3em] uppercase text-amber mb-10"
        >
          Available for work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.88] tracking-tight text-ink mb-14"
        >
          Let&apos;s get to<br />know each other
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={() => copyEmail('emmanuelquadri830@gmail.com')}
            className="group inline-flex items-center gap-2 sm:gap-3 bg-ink text-surface px-5 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.24em] uppercase hover:bg-amber hover:text-ink transition-all duration-300 cursor-pointer select-none max-w-[90vw]"
          >
            EMMANUELQUADRI830@GMAIL.COM
            <span className="text-base leading-none transition-transform duration-200 group-hover:scale-110">
              {copied === 'emmanuelquadri830@gmail.com' ? '✓' : '⧉'}
            </span>
          </button>
        </motion.div>

        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-[10px] tracking-widest uppercase text-amber"
          >
            Copied!
          </motion.p>
        )}
      </div>

      {/* Footer bar */}
      <div className="relative border-t border-edge px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-ink-muted">
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>

        <span className="text-ink-muted">
          Quadri Emmanuel &mdash; 25&copy;
        </span>
      </div>
    </section>
  )
}
