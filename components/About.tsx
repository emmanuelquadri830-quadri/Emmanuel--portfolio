'use client'

import { motion } from 'framer-motion'
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiFramer, SiTailwindcss,
  SiFigma, SiClaude,
  SiGit, SiGithub, SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import type { IconType } from 'react-icons'

const stats = [
  {
    value: '5+',
    label: 'Years of Experience',
    sub: 'SaaS, EdTech, marketing & enterprise platforms',
  },
  {
    value: '60%',
    label: 'Reduction in design discrepancies',
    sub: 'via unified design system at Flexisaf',
  },
  {
    value: '500+',
    label: 'Research participants',
    sub: '+25% usability · +30% customer satisfaction',
  },
]

interface Tool { name: string; icon: IconType; color: string }

const stack: { num: string; category: string; tools: Tool[] }[] = [
  {
    num: '01',
    category: 'LANGUAGES',
    tools: [
      { name: 'TypeScript',  icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript',  icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'HTML',        icon: SiHtml5,        color: '#E34F26' },
      { name: 'CSS',         icon: SiCss,          color: '#1572B6' },
    ],
  },
  {
    num: '02',
    category: 'FRAMEWORKS & LIBRARIES',
    tools: [
      { name: 'React',         icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',       icon: SiNextdotjs,   color: 'currentColor' },
      { name: 'Framer Motion', icon: SiFramer,      color: '#8B5CF6' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    num: '03',
    category: 'DESIGN TOOLS',
    tools: [
      { name: 'Figma',   icon: SiFigma,   color: '#F24E1E' },
      { name: 'Framer',  icon: SiFramer,  color: '#8B5CF6' },
      { name: 'Claude',  icon: SiClaude,  color: '#D97757' },
    ],
  },
  {
    num: '04',
    category: 'TOOLING & PLATFORMS',
    tools: [
      { name: 'Git',     icon: SiGit,    color: '#F05032' },
      { name: 'GitHub',  icon: SiGithub, color: 'currentColor' },
      { name: 'Vercel',  icon: SiVercel, color: 'currentColor' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ],
  },
]

export function About() {
  return (
    <section
      id="about"
      className="px-8 lg:px-16 py-28 lg:py-36 bg-surface-2"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Bio + Stats grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] tracking-[0.22em] uppercase text-amber block mb-8">
              About
            </span>

            <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[60px] leading-tight mb-8">
              Designing with<br />
              <em className="italic">purpose</em>{' '}
              and clarity.
            </h2>

            <p className="text-ink-muted text-sm leading-relaxed mb-5">
              My name is Quadri Emmanuel Adetayo, and I'm a Senior Product Designer with 5+ years creating intuitive, user-centered
              digital products across SaaS, EdTech, marketing, and enterprise platforms.
            </p>
            <p className="text-ink-muted text-sm leading-relaxed">
              Skilled in user research, wireframing, prototyping, usability
              testing, interaction design, and design systems. I work closely
              with cross-functional teams to turn business goals into clear,
              accessible, effective experiences.
            </p>
          </motion.div>

          {/* Stats column */}
          <div className="space-y-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-edge py-8 last:border-none"
              >
                <div className="font-display text-[52px] lg:text-[72px] leading-none text-amber mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-ink mb-1">{stat.label}</p>
                <p className="text-[12px] text-ink-muted">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Tools & Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32"
        >
          <p className="text-[11px] tracking-[0.22em] uppercase text-amber mb-4">
            Stack
          </p>
          <h3 className="font-display text-2xl lg:text-3xl text-ink mb-16">
            Languages, frameworks, and tools I work with.
          </h3>

          <div className="space-y-16">
            {stack.map((group, gi) => (
              <motion.div
                key={group.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Row: number — divider — category label */}
                <div className="flex items-center gap-5 mb-8">
                  <span className="font-display text-3xl text-ink-muted shrink-0">
                    {group.num}
                  </span>
                  <div className="flex-1 h-px bg-edge" />
                  <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-ink-muted shrink-0">
                    {group.category}
                  </span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-4">
                  {group.tools.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <div
                        key={tool.name}
                        className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-edge bg-surface hover:border-amber/40 transition-colors duration-200 cursor-default"
                      >
                        <Icon style={{ color: tool.color }} className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                        <span className="text-[13px] sm:text-[15px] text-ink-muted">{tool.name}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
