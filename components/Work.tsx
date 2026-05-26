'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion'

type Project = {
  name: string
  image: string
  href: string
}

const projects: Project[] = [
  {
    name: 'DRIVEME',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/eecd3d215952939.Y3JvcCwxMTYyLDkwOSwxMTcsMA.png',
    href: 'https://www.behance.net/gallery/215952939/DRIVEME-Car-Rental-App-(Case-study)',
  },
  {
    name: 'BuddyVest',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/02fbba202100551.Y3JvcCwxODUxLDE0NDgsNDEsMA.png',
    href: 'https://www.behance.net/gallery/202100551/(BuddyVest)-Save-and-Budget-App-UIUX-Case-study',
  },
  {
    name: 'Scupay',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/288b7c205443583.Y3JvcCwxNDEyLDExMDQsNzYsNjI.jpg',
    href: 'https://www.behance.net/gallery/205443583/Scupay-A-website-Case-study',
  },
  {
    name: 'Teacher Dashboard',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/b46f5d206602791.Y3JvcCwyMTQwLDE2NzMsMCw3OQ.png',
    href: 'https://www.behance.net/gallery/206602791/Teacher-managements-dashboard',
  },
]

type AnimationPhase = 'scatter' | 'line' | 'circle' | 'arc'

const TOTAL_IMAGES = 20
const MAX_SCROLL = 3000
const IMG_WIDTH = 60
const IMG_HEIGHT = 85

const ITEMS = Array.from({ length: TOTAL_IMAGES }, (_, i) => projects[i % projects.length])

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t

interface FlipCardProps {
  project: Project
  index: number
  phase: AnimationPhase
  target: { x: number; y: number; rotation: number; scale: number; opacity: number }
}

function FlipCard({ project, target }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: 'spring', stiffness: 40, damping: 15 }}
      style={{
        position: 'absolute',
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-surface-2"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back face — clickable link */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-surface-2 flex flex-col items-center justify-center p-3 border border-amber/30"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-[7px] font-bold text-amber uppercase tracking-widest mb-1.5 text-center">
            {project.name}
          </p>
          <p className="text-[9px] font-medium text-ink/80 text-center">View case study →</p>
        </a>
      </motion.div>
    </motion.div>
  )
}

export function Work() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>('scatter')
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setContainerSize({ width, height })
    })
    observer.observe(el)
    setContainerSize({ width: el.offsetWidth, height: el.offsetHeight })
    return () => observer.disconnect()
  }, [])

  const virtualScroll = useMotionValue(0)
  const scrollRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      const atTop = scrollRef.current <= 0 && e.deltaY < 0
      const atBottom = scrollRef.current >= MAX_SCROLL && e.deltaY > 0
      // At boundaries, let the page scroll naturally
      if (atTop || atBottom) return
      e.preventDefault()
      const next = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL)
      scrollRef.current = next
      virtualScroll.set(next)
    }

    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartY - e.touches[0].clientY
      touchStartY = e.touches[0].clientY
      const atTop = scrollRef.current <= 0 && deltaY < 0
      const atBottom = scrollRef.current >= MAX_SCROLL && deltaY > 0
      if (atTop || atBottom) return
      e.preventDefault()
      const next = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL)
      scrollRef.current = next
      virtualScroll.set(next)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [virtualScroll])

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1])
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 })
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360])
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 })

  const mouseX = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseX.set(normalizedX * 100)
    }
    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX])

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase('line'), 500)
    const t2 = setTimeout(() => setIntroPhase('circle'), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const scatterPositions = useMemo(
    () =>
      ITEMS.map(() => ({
        x: (Math.random() - 0.5) * 1500,
        y: (Math.random() - 0.5) * 1000,
        rotation: (Math.random() - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    []
  )

  const [morphValue, setMorphValue] = useState(0)
  const [rotateValue, setRotateValue] = useState(0)
  const [parallaxValue, setParallaxValue] = useState(0)

  useEffect(() => {
    const u1 = smoothMorph.on('change', setMorphValue)
    const u2 = smoothScrollRotate.on('change', setRotateValue)
    const u3 = smoothMouseX.on('change', setParallaxValue)
    return () => { u1(); u2(); u3() }
  }, [smoothMorph, smoothScrollRotate, smoothMouseX])

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1])
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0])

  return (
    <section id="work" className="relative border-y border-edge bg-surface">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,150,90,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

      {/* Interactive scroll container — full viewport height */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: '100svh', touchAction: 'none' }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">

          {/* Headline shown during circle phase, fades as morph begins */}
          <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={
                introPhase === 'circle' && morphValue < 0.5
                  ? { opacity: 1 - morphValue * 2, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, filter: 'blur(10px)' }
              }
              transition={{ duration: 1 }}
              className="font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-none tracking-tight text-ink"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={
                introPhase === 'circle' && morphValue < 0.5
                  ? { opacity: 0.5 - morphValue }
                  : { opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-5 text-[10px] font-medium tracking-[0.3em] uppercase text-amber"
            >
              SCROLL TO EXPLORE
            </motion.p>
          </div>

          {/* Content shown after arc forms */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute top-[7%] z-10 flex flex-col items-center text-center pointer-events-none px-6"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-amber/75 mb-4">
              Selected Projects
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-ink tracking-tight mb-4">
              Things I've designed
            </h2>
            <p className="text-sm text-ink-muted max-w-md leading-relaxed">
              A selection of product and UI/UX work — apps, dashboards, and websites built to be
              clear, usable, and genuinely nice to use. Scroll to explore, hover to flip.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="relative flex items-center justify-center w-full h-full">
            {ITEMS.map((project, i) => {
              let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 }

              if (introPhase === 'scatter') {
                target = scatterPositions[i]
              } else if (introPhase === 'line') {
                const spacing = 70
                const totalW = TOTAL_IMAGES * spacing
                target = { x: i * spacing - totalW / 2, y: 0, rotation: 0, scale: 1, opacity: 1 }
              } else {
                const isMobile = containerSize.width < 768
                const minDim = Math.min(containerSize.width, containerSize.height)

                // Circle position
                const circleRadius = Math.min(minDim * 0.35, 350)
                const circleAngle = (i / TOTAL_IMAGES) * 360
                const circleRad = (circleAngle * Math.PI) / 180
                const circlePos = {
                  x: Math.cos(circleRad) * circleRadius,
                  y: Math.sin(circleRad) * circleRadius,
                  rotation: circleAngle + 90,
                }

                // Arc (rainbow) position
                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5)
                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1)
                const arcApexY = containerSize.height * (isMobile ? 0.2 : 0.1)
                const arcCenterY = arcApexY + arcRadius
                const spreadAngle = isMobile ? 100 : 130
                const startAngle = -90 - spreadAngle / 2
                const step = spreadAngle / (TOTAL_IMAGES - 1)
                const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1)
                const boundedRotation = -scrollProgress * spreadAngle * 0.8
                const currentArcAngle = startAngle + i * step + boundedRotation
                const arcRad = (currentArcAngle * Math.PI) / 180
                const arcPos = {
                  x: Math.cos(arcRad) * arcRadius + parallaxValue,
                  y: Math.sin(arcRad) * arcRadius + arcCenterY,
                  rotation: currentArcAngle + 90,
                  scale: isMobile ? 1.4 : 1.8,
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
                  key={i}
                  project={project}
                  index={i}
                  phase={introPhase}
                  target={target}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer label */}
      <div className="relative z-10 flex items-center justify-center gap-3 py-6 text-[9px] font-medium uppercase tracking-[0.22em] text-ink-muted">
        <span className="h-px w-8 bg-amber/55" />
        Behance case studies
        <span className="h-px w-8 bg-amber/55" />
      </div>
    </section>
  )
}
