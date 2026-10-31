'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function CaseStudyHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 border-b border-edge/80 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Quadri Emmanuel, home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-ink bg-amber text-[12px] font-semibold text-surface shadow-[0_3px_0_rgb(var(--color-ink))] transition-transform duration-300 group-hover:-translate-y-0.5">
            QE
          </span>
          <span className="inline text-[15px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[27px]">
            Quadri <span className="text-amber">Emmanuel</span>
          </span>
        </Link>

        <Link
          href="/#work"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ink-muted transition-colors hover:text-ink sm:flex"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All work
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-surface text-ink-muted shadow-sm transition-all hover:border-ink/30 hover:text-ink"
          >
            {mounted && theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}
