'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/10 border border-amber/20 mb-6 backdrop-blur-sm"
        >
          <Zap className="h-4 w-4 text-amber" />
          <span className="text-sm font-medium text-ink-muted">
            Product Designer · Lagos, Nigeria
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Quadri Emmanuel
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg text-ink-muted mb-10"
        >
          I design intuitive, user-centered digital products across SaaS, EdTech, and enterprise
          — turning business goals into clear, accessible experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-surface font-semibold rounded-lg shadow-lg hover:bg-amber/90 transition-colors duration-300"
          >
            View my work
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
