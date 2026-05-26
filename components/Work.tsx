'use client'

import { useEffect, useMemo, useRef } from 'react'

type Project = {
  name: string
  image: string
  href: string
}

const projects: Project[] = [
  {
    name: 'DRIVEME',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/eecd3d215952939.Y3JvcCwxMTYyLDkwOSwxMTcsMA.png',
    href: 'https://www.behance.net/gallery/215952939/DRIVEME-Car-Rental-App-(Case-study)',
  },
  {
    name: 'BuddyVest',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/02fbba202100551.Y3JvcCwxODUxLDE0NDgsNDEsMA.png',
    href: 'https://www.behance.net/gallery/202100551/(BuddyVest)-Save-and-Budget-App-UIUX-Case-study',
  },
  {
    name: 'Scupay',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/288b7c205443583.Y3JvcCwxNDEyLDExMDQsNzYsNjI.jpg',
    href: 'https://www.behance.net/gallery/205443583/Scupay-A-website-Case-study',
  },
  {
    name: 'Teacher Dashboard',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/b46f5d206602791.Y3JvcCwyMTQwLDE2NzMsMCw3OQ.png',
    href: 'https://www.behance.net/gallery/206602791/Teacher-managements-dashboard',
  },
]

const galleryItems = Array.from({ length: 12 }, (_, index) => projects[index % projects.length])

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max)
const lerp = (start: number, end: number, progress: number) => start + (end - start) * progress

export function Work() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([])

  const cardLayout = useMemo(
    () =>
      galleryItems.map((_, index) => {
        const center = (galleryItems.length - 1) / 2
        const offset = index - center
        return {
          ringAngle: -118 + index * (236 / (galleryItems.length - 1)),
          stripX: offset * 138,
          stripY: Math.abs(offset) * 4 + (index % 2 === 0 ? 12 : -8),
          stripRotate: offset * 2.2,
        }
      }),
    []
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frameId = 0

    const update = () => {
      frameId = 0
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const sectionProgress = clamp((viewportHeight * 0.82 - rect.top) / (rect.height + viewportHeight * 0.35))
      const morph = clamp(sectionProgress * 1.25)
      const sweep = lerp(0, -245, clamp((sectionProgress - 0.28) / 0.72))
      const width = section.clientWidth
      const isCompact = width < 768
      const radiusX = isCompact ? Math.min(width * 0.42, 210) : Math.min(width * 0.24, 360)
      const radiusY = isCompact ? 150 : 225
      const baseScale = isCompact ? 0.86 : 1

      cardRefs.current.forEach((card, index) => {
        if (!card) return

        const layout = cardLayout[index]
        const angle = ((layout.ringAngle + sweep) * Math.PI) / 180
        const ringX = Math.cos(angle) * radiusX
        const ringY = Math.sin(angle) * radiusY + 56
        const ringRotate = layout.ringAngle + sweep + 90
        const x = lerp(ringX, layout.stripX, morph)
        const y = lerp(ringY, layout.stripY + 112, morph)
        const rotate = lerp(ringRotate, layout.stripRotate, morph)
        const scale = baseScale * lerp(isCompact ? 0.82 : 0.9, isCompact ? 1.02 : 1.08, morph)
        const opacity = lerp(0.72, 1, morph)

        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`
        card.style.opacity = String(opacity)
      })
    }

    const requestUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [cardLayout])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-y border-edge bg-surface text-ink"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,150,90,0.18)_0%,rgba(200,150,90,0.045)_32%,transparent_62%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[800px] max-w-7xl flex-col items-center px-6 pb-24 pt-32 text-center sm:px-8 lg:min-h-[860px] lg:px-16 lg:pt-36">
        <div className="relative z-10 max-w-3xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-amber/75">
            Selected Projects
          </p>
          <h2 className="mt-6 font-display text-[clamp(3.6rem,8.4vw,7rem)] uppercase leading-[0.86] tracking-tight text-ink">
            Selected Work
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-[1.8] text-ink-muted md:text-base">
            A selection of product and UI/UX work - apps, dashboards, and websites built to be clear,
            usable, and genuinely nice to use.
          </p>
        </div>

        <div className="relative mt-8 h-[480px] w-full max-w-[1180px]">
          <div className="absolute left-1/2 top-[44%] h-px w-[min(760px,82vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-amber/35 to-transparent" />
          <div className="absolute left-1/2 top-[44%] h-[360px] w-[min(760px,82vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/10" />

          {galleryItems.map((project, index) => (
            <a
              key={`${project.name}-${index}`}
              ref={(node) => {
                cardRefs.current[index] = node
              }}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} case study on Behance`}
              className="group absolute left-1/2 top-[44%] block h-[156px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border border-white/10 bg-surface-2/75 p-1.5 shadow-[0_22px_55px_rgba(0,0,0,0.38)] outline-none backdrop-blur will-change-transform focus-visible:ring-2 focus-visible:ring-amber/70 sm:h-[180px] sm:w-[128px]"
            >
              <span className="relative block h-full w-full overflow-hidden rounded-[14px] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.name} project cover`}
                  referrerPolicy="no-referrer"
                  loading={index < 4 ? 'eager' : 'lazy'}
                  onError={(event) => {
                    event.currentTarget.style.opacity = '0'
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                <span className="absolute inset-x-3 bottom-3 text-left">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-amber">
                    {project.name}
                  </span>
                  <span className="mt-1 block text-[10px] font-medium text-ink/80">
                    View case study -&gt;
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="relative z-10 mt-auto flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-ink-muted">
          <span className="h-px w-8 bg-amber/55" />
          Behance case studies
          <span className="h-px w-8 bg-amber/55" />
        </div>
      </div>
    </section>
  )
}
