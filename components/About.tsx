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
    sub: 'SaaS, AI, EdTech, marketing & enterprise platforms',
  },
  {
    value: '60%',
    label: 'Reduction in design discrepancies',
    sub: 'via unified design systems across projects',
  },
  {
    value: '250+',
    label: 'Research participants',
    sub: '+25% usability   +30% customer satisfaction',
  },
]

const companies = [
  'Punch Digital Agency',
  'Greenware Academy',
  'Shirewood Technologies',
  'Flexisaf Edu',
  'HNG',
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

function Flourish({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={`w-12 h-8 lg:w-16 lg:h-10 text-amber/50 ${flip ? 'scale-x-[-1]' : ''}`}
    >
      <path d="M2 20c12 0 18-14 30-14s18 14 28 14" />
      <circle cx="56" cy="20" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-8 lg:px-16 py-28 lg:py-36 bg-surface-2"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Hero intro ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-20 lg:mb-28"
        >
          <span className="text-[11px] tracking-[0.22em] uppercase text-amber block mb-6">
            About
          </span>

          <div className="flex items-center justify-center gap-2 lg:gap-6">
            <span className="hidden sm:block shrink-0">
              <Flourish />
            </span>
            <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-tight text-ink">
              The mind behind<br />
              <em className="not-italic text-amber">every pixel.</em>
            </h2>
            <span className="hidden sm:block shrink-0">
              <Flourish flip />
            </span>
          </div>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-ink-muted leading-relaxed">
            Hi, I am <strong className="text-ink font-medium">Quadri Emmanuel</strong>, a Senior Product Designer and Frontend Developer.
            I design and build digital products with clarity, intention, and care.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-10 inline-flex items-center gap-3 px-7 py-3.5 bg-amber text-surface text-[11px] font-bold tracking-[0.18em] uppercase rounded-xl overflow-hidden transition-colors duration-300 hover:bg-amber/90"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
            Let&apos;s Talk
          </motion.a>
        </motion.div>

        {/* ── About Me card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-edge rounded-2xl bg-surface px-7 sm:px-10 lg:px-14 py-10 lg:py-14"
        >
          <p className="text-ink-muted text-base leading-relaxed mb-5">
            I have always loved how design can turn an idea into something people can actually use and enjoy.
            Over the past 5+ years, I have worked across SaaS, AI, EdTech, marketing, and enterprise platforms,
            helping teams create products that are clear, functional, and built to grow.
          </p>
          <p className="text-ink-muted text-base leading-relaxed mb-5">
            As a <strong className="text-ink font-medium">Product Designer and Frontend Developer</strong>, I focus on simplifying
            complex ideas and shaping them into intuitive interfaces. Whether it is designing a SaaS dashboard, building a high
            converting landing page, or creating a scalable design system, I enjoy bringing structure and clarity to every project.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            I close the gap between design and code myself, working closely with cross functional teams to turn business goals into
            clear, accessible, effective experiences, from research through to production ready interfaces.
          </p>
        </motion.div>

        {/* ── Companies worked with ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 lg:mt-16"
        >
          <p className="text-[11px] tracking-[0.22em] uppercase text-ink-muted text-center mb-6">
            Companies I&apos;ve worked with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full border border-edge text-[13px] text-ink-muted hover:border-amber/40 hover:text-ink transition-colors duration-200 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 mt-20 lg:mt-28">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-edge pt-8"
            >
              <div className="font-display text-[52px] lg:text-[64px] leading-none text-amber mb-2">
                {stat.value}
              </div>
              <p className="text-base text-ink mb-1">{stat.label}</p>
              <p className="text-[14px] text-ink-muted">{stat.sub}</p>
            </motion.div>
          ))}
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
          <h3 className="font-display text-3xl lg:text-4xl text-ink mb-16">
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
                {/* Row: number, divider, category label */}
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
                        <span className="text-[15px] sm:text-[17px] text-ink-muted">{tool.name}</span>
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
