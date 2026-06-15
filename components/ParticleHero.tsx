'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { FaLinkedinIn, FaBehance, FaXTwitter, FaInstagram } from 'react-icons/fa6'

const cn = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(' ')

class Particle {
  x: number
  y: number
  directionX: number
  directionY: number
  size: number
  color: string
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    color: string,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
    this.canvas = canvas
    this.ctx = ctx
  }

  draw(): void {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }

  update(mouse: { x: number | null; y: number | null; radius: number }): void {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY
    }
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouse.radius + this.size) {
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const force = (mouse.radius - distance) / mouse.radius
        this.x -= forceDirectionX * force * 5
        this.y -= forceDirectionY * force * 5
      }
    }
    this.x += this.directionX
    this.y += this.directionY
    this.draw()
  }
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.8,
      ease: 'easeInOut' as const,
    },
  }),
}

export default function ParticleHero() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 200,
    }

    function init(): void {
      particles = []
      const count = (canvas!.height * canvas!.width) / 9000
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1
        const x = Math.random() * (canvas!.width - size * 4) + size * 2
        const y = Math.random() * (canvas!.height - size * 4) + size * 2
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        // #C8965A → rgba(200, 150, 90)
        const color = 'rgba(200, 150, 90, 0.8)'
        particles.push(new Particle(x, y, directionX, directionY, size, color, canvas!, ctx!))
      }
    }

    const resizeCanvas = (): void => {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      init()
    }

    function connect(): void {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2
          if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
            const opacityValue = 1 - distance / 20000
            if (mouse.x !== null && mouse.y !== null) {
              const dxA = particles[a].x - mouse.x
              const dyA = particles[a].y - mouse.y
              const distMouseA = Math.sqrt(dxA * dxA + dyA * dyA)
              ctx!.strokeStyle =
                distMouseA < mouse.radius
                  ? `rgba(255, 255, 255, ${opacityValue})`
                  : `rgba(200, 150, 90, ${opacityValue})`
            } else {
              ctx!.strokeStyle = `rgba(200, 150, 90, ${opacityValue})`
            }
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    function animate(): void {
      animationFrameId = requestAnimationFrame(animate)
      ctx!.fillStyle = '#0B0B0B'
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)
      for (const p of particles) p.update(mouse)
      connect()
    }

    const handleMouseMove = (e: MouseEvent): void => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleMouseOut = (): void => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      id="hero"
      className={cn(
        'relative h-screen w-full flex flex-col items-center justify-center overflow-hidden'
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center px-6">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber/10 border border-amber/20 mb-6 backdrop-blur-sm max-w-[90vw]"
        >
          <Zap className="h-3.5 w-3.5 text-amber shrink-0" />
          <span className="text-[11px] sm:text-sm font-medium text-ink-muted truncate">
            Product Designer | Frontend Developer | 5+ Years Experience
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-[48px] xs:text-[60px] md:text-[76px] lg:text-[100px] leading-[0.92] tracking-tight mb-6"
        >
          Quadri<br />
          <em className="not-italic text-amber">Emmanuel</em>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ink-muted mb-10 px-2"
        >
          AI specialist and product designer building scalable digital products for startups — from UX strategy to production-ready interfaces.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            href="https://www.behance.net/Quadriemmanueldesign"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-surface font-semibold rounded-lg hover:bg-amber/90 transition-colors duration-300"
          >
            Explore Case Studies
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mt-8"
        >
          {[
            { href: 'https://www.linkedin.com/in/emmanuel-quadri-uiux-~-ai-14101b241', label: 'LinkedIn',   icon: <FaLinkedinIn className="h-4 w-4" /> },
            { href: 'https://www.behance.net/Quadriemmanueldesign',                    label: 'Behance',    icon: <FaBehance    className="h-4 w-4" /> },
            { href: 'https://x.com/immalex_83274',                                    label: 'X / Twitter', icon: <FaXTwitter   className="h-4 w-4" /> },
            { href: 'https://www.instagram.com/immalex_art/',                         label: 'Instagram',  icon: <FaInstagram  className="h-4 w-4" /> },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center justify-center w-9 h-9 rounded-full border border-ink/25 text-ink/80 hover:border-amber hover:text-amber hover:bg-amber/10 hover:scale-105 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
