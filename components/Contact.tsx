'use client'

import { motion } from 'framer-motion'

// Add your social links here, or leave the array empty to hide the row entirely
const socials: { label: string; href: string }[] = [
  // { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_HANDLE' },
  // { label: 'Behance',  href: 'https://behance.net/YOUR_HANDLE' },
  // { label: 'Dribbble', href: 'https://dribbble.com/YOUR_HANDLE' },
  // { label: 'Figma',    href: 'https://figma.com/@YOUR_HANDLE' },
]

export function Contact() {
  return (
    <section id="contact" className="px-8 lg:px-16 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[11px] tracking-[0.22em] uppercase text-amber block mb-8">
            Get in Touch
          </span>

          <h2 className="font-display text-[52px] xs:text-[64px] lg:text-[88px] leading-[0.92] tracking-tight mb-12">
            Let&apos;s make<br />
            something<br />
            <em className="italic text-amber">great</em> together.
          </h2>

          <a
            href="mailto:immalex02@gmail.com"
            className="inline-block font-display text-[22px] lg:text-[28px] text-amber border-b-2 border-amber pb-1 hover:opacity-60 transition-opacity duration-200"
          >
            immalex02@gmail.com
          </a>
        </motion.div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-edge pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-ink-muted text-[11px] tracking-wide"
        >
          <span>
            Quadri Emmanuel Adetayo · Lagos, Nigeria · +234 903 657 8466
          </span>

          {socials.length > 0 && (
            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-[0.15em] uppercase hover:text-ink transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}

          <span>© 2025 QEA</span>
        </motion.div>
      </div>
    </section>
  )
}
