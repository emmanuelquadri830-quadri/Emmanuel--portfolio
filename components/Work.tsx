'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type AnimationPhase = 'scatter' | 'line' | 'circle'

type Project = {
  name: string
  image: string
  href: string
}

type FlipCardProps = {
  project: Project
  target: {
    x: number
    y: number
    rotation: number
    scale: number
    opacity: number
  }
}

const IMG_WIDTH = 60
const IMG_HEIGHT = 85
const TOTAL_IMAGES = 20
const MAX_SCROLL = 3000

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

const galleryProjects = Array.from(
  { length: TOTAL_IMAGES },
  (_, index) => projects[index % projects.length]
)

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t

function FlipCard({ project, target }: FlipCardProps) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} case study on Behance`}
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: 'absolute',
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/70"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
        whileFocus={{ rotateY: 180 }}
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} project cover`}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
        </div>

        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-amber/40 bg-[#0B0B0B] p-3 text-center shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="max-w-full text-[8px] font-bold uppercase leading-tight tracking-[0.14em] text-amber">
            {project.name}
          </p>
          <p className="mt-2 text-[9px] font-semibold leading-tight text-ink/85">
            View case study -&gt;
          </p>
        </div>
      </motion.div>
    </motion.a>
  )
}

export function Work() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>('scatter')
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [morphValue, setMorphValue] = useState(0)
  const [rotateValue, setRotateValue] = useState(0)
  const [parallaxValue, setParallaxValue] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const virtualScroll = useMotionValue(0)
  const scrollRef = useRef(0)
  const mouseX = useMotionValue(0)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return
      setContainerSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })

    observer.observe(containerRef.current)
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const setScroll = (deltaY: number) => {
      const nextScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL)
      const consumed = nextScroll !== scrollRef.current
      scrollRef.current = nextScroll
      virtualScroll.set(nextScroll)
      return consumed
    }

    const handleWheel = (event: WheelEvent) => {
      if (setScroll(event.deltaY)) {
        event.preventDefault()
      }
    }

    let touchStartY = 0

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0
    }

    const handleTouchMove = (event: TouchEvent) => {
      const touchY = event.touches[0]?.clientY ?? touchStartY
      const deltaY = touchStartY - touchY
      touchStartY = touchY

      if (setScroll(deltaY)) {
        event.preventDefault()
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [virtualScroll])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const relativeX = event.clientX - rect.left
      mouseX.set((relativeX / rect.width) * 200 - 100)
    }

    const handleMouseLeave = () => mouseX.set(0)

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX])

  useEffect(() => {
    const lineTimer = window.setTimeout(() => setIntroPhase('line'), 500)
    const circleTimer = window.setTimeout(() => setIntroPhase('circle'), 2500)

    return () => {
      window.clearTimeout(lineTimer)
      window.clearTimeout(circleTimer)
    }
  }, [])

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1])
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 })
  const scrollRotate = useTransform(virtualScroll, [600, MAX_SCROLL], [0, 360])
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 })
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 })
  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1])
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0])

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on('change', setMorphValue)
    const unsubscribeRotate = smoothScrollRotate.on('change', setRotateValue)
    const unsubscribeParallax = smoothMouseX.on('change', setParallaxValue)

    return () => {
      unsubscribeMorph()
      unsubscribeRotate()
      unsubscribeParallax()
    }
  }, [smoothMorph, smoothScrollRotate, smoothMouseX])

  const scatterPositions = useMemo(
    () =>
      galleryProjects.map(() => ({
        x: (Math.random() - 0.5) * 1500,
        y: (Math.random() - 0.5) * 1000,
        rotation: (Math.random() - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    []
  )

  return (
    <section id="work" className="relative bg-surface text-ink">
      <div
        ref={containerRef}
        className="relative h-[86vh] min-h-[680px] w-full overflow-hidden border-y border-edge bg-surface"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(200,150,90,0.18)_0%,rgba(200,150,90,0.04)_30%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_26%,rgba(0,0,0,0.35)_100%)]" />

        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <div className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center px-5 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={
                introPhase === 'circle' && morphValue < 0.5
                  ? { opacity: 1 - morphValue * 2, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, filter: 'blur(10px)' }
              }
              transition={{ duration: 1 }}
              className="font-display text-5xl uppercase leading-[0.9] tracking-tight text-ink md:text-7xl"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={
                introPhase === 'circle' && morphValue < 0.5
                  ? { opacity: 0.55 - morphValue }
                  : { opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-amber/80"
            >
              SCROLL TO EXPLORE
            </motion.p>
          </div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="pointer-events-none absolute top-[9%] z-10 flex max-w-[760px] flex-col items-center justify-center px-5 text-center"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-amber/75">
              Selected Projects
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-[0.9] tracking-tight text-ink">
              Things I&apos;ve designed
            </h2>
            <p className="mt-6 max-w-[620px] text-sm font-light leading-[1.8] text-ink-muted md:text-base">
              A selection of product and UI/UX work - apps, dashboards, and websites built to be clear,
              usable, and genuinely nice to use. Scroll to explore, hover to flip.
            </p>
          </motion.div>

          <div className="relative flex h-full w-full items-center justify-center">
            {galleryProjects.map((project, index) => {
              let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 }

              if (introPhase === 'scatter') {
                target = scatterPositions[index]
              } else if (introPhase === 'line') {
                const lineSpacing = 70
                const lineTotalWidth = TOTAL_IMAGES * lineSpacing
                target = {
                  x: index * lineSpacing - lineTotalWidth / 2,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                }
              } else {
                const isMobile = containerSize.width < 768
                const minDimension = Math.min(containerSize.width, containerSize.height)
                const circleRadius = Math.min(minDimension * 0.35, 350)
                const circleAngle = (index / TOTAL_IMAGES) * 360
                const circleRad = (circleAngle * Math.PI) / 180
                const circlePos = {
                  x: Math.cos(circleRad) * circleRadius,
                  y: Math.sin(circleRad) * circleRadius,
                  rotation: circleAngle + 90,
                }

                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5)
                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1)
                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25)
                const arcCenterY = arcApexY + arcRadius
                const spreadAngle = isMobile ? 100 : 130
                const startAngle = -90 - spreadAngle / 2
                const step = spreadAngle / (TOTAL_IMAGES - 1)
                const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1)
                const boundedRotation = -scrollProgress * spreadAngle * 0.8
                const currentArcAngle = startAngle + index * step + boundedRotation
                const arcRad = (currentArcAngle * Math.PI) / 180
                const arcPos = {
                  x: Math.cos(arcRad) * arcRadius + parallaxValue,
                  y: Math.sin(arcRad) * arcRadius + arcCenterY,
                  rotation: currentArcAngle + 90,
                  scale: isMobile ? 1.35 : 1.8,
                }

                target = {
                  x: lerp(circlePos.x, arcPos.x, morphValue),
                  y: lerp(circlePos.y, arcPos.y, morphValue),
                  rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                  scale: lerp(1, arcPos.scale, morphValue),
                  opacity: 1,
                }
              }

              return (
                <FlipCard
                  key={`${project.name}-${index}`}
                  project={project}
                  target={target}
                />
              )
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-ink-muted">
          <span className="h-px w-8 bg-amber/55" />
          Behance case studies
          <span className="h-px w-8 bg-amber/55" />
        </div>
      </div>
    </section>
  )
}
