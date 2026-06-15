'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Geometry ─────────────────────────────────────────────────────────────────

class Vector2D {
  constructor(public x: number, public y: number) {}
}

class Vector3D {
  constructor(public x: number, public y: number, public z: number) {}
}

// ─── Seeded RNG (no global Math.random mutation) ──────────────────────────────

function makeSeededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

// ─── Star ─────────────────────────────────────────────────────────────────────

class Star {
  private readonly dx: number
  private readonly dy: number
  private readonly spiralLocation: number
  private readonly strokeWeightFactor: number
  private readonly z: number
  private readonly angle: number
  private readonly distance: number
  private readonly rotationDirection: number
  private readonly expansionRate: number
  private readonly finalScale: number

  constructor(cameraZ: number, cameraTravelDistance: number, rng: () => number) {
    this.angle = rng() * Math.PI * 2
    this.distance = 30 * rng() + 15
    this.rotationDirection = rng() > 0.5 ? 1 : -1
    this.expansionRate = 1.2 + rng() * 0.8
    this.finalScale = 0.7 + rng() * 0.6
    this.dx = this.distance * Math.cos(this.angle)
    this.dy = this.distance * Math.sin(this.angle)
    this.spiralLocation = (1 - Math.pow(1 - rng(), 3.0)) / 1.3
    const minZ = 0.5 * cameraZ
    const maxZ = cameraTravelDistance + cameraZ
    this.z = minZ + rng() * (maxZ - minZ)
    const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t
    this.z = lerp(this.z, cameraTravelDistance / 2, 0.3 * this.spiralLocation)
    this.strokeWeightFactor = Math.pow(rng(), 2.0)
  }

  render(p: number, ctrl: AnimationController): void {
    const spiralPos = ctrl.spiralPath(this.spiralLocation)
    const q = p - this.spiralLocation
    if (q <= 0) return

    const disp = ctrl.constrain(4 * q, 0, 1)
    const linearE = disp
    const elasticE = ctrl.easeOutElastic(disp)
    const powerE = Math.pow(disp, 2)

    let easing: number
    if (disp < 0.3) {
      easing = ctrl.lerp(linearE, powerE, disp / 0.3)
    } else if (disp < 0.7) {
      easing = ctrl.lerp(powerE, elasticE, (disp - 0.3) / 0.4)
    } else {
      easing = elasticE
    }

    let screenX: number
    let screenY: number

    if (disp < 0.3) {
      screenX = ctrl.lerp(spiralPos.x, spiralPos.x + this.dx * 0.3, easing / 0.3)
      screenY = ctrl.lerp(spiralPos.y, spiralPos.y + this.dy * 0.3, easing / 0.3)
    } else if (disp < 0.7) {
      const mid = (disp - 0.3) / 0.4
      const curve = Math.sin(mid * Math.PI) * this.rotationDirection * 1.5
      const bx = spiralPos.x + this.dx * 0.3
      const by = spiralPos.y + this.dy * 0.3
      const tx = spiralPos.x + this.dx * 0.7
      const ty = spiralPos.y + this.dy * 0.7
      screenX = ctrl.lerp(bx, tx, mid) + (-this.dy * 0.4 * curve) * mid
      screenY = ctrl.lerp(by, ty, mid) + (this.dx * 0.4 * curve) * mid
    } else {
      const fin = (disp - 0.7) / 0.3
      const bx = spiralPos.x + this.dx * 0.7
      const by = spiralPos.y + this.dy * 0.7
      const td = this.distance * this.expansionRate * 1.5
      const sa = this.angle + 1.2 * this.rotationDirection * fin * Math.PI
      screenX = ctrl.lerp(bx, spiralPos.x + td * Math.cos(sa), fin)
      screenY = ctrl.lerp(by, spiralPos.y + td * Math.sin(sa), fin)
    }

    const vx = (this.z - ctrl.cameraZ) * screenX / ctrl.viewZoom
    const vy = (this.z - ctrl.cameraZ) * screenY / ctrl.viewZoom

    let sizeMul: number
    if (disp < 0.6) {
      sizeMul = 1.0 + disp * 0.2
    } else {
      sizeMul = ctrl.lerp(1.2, this.finalScale, (disp - 0.6) / 0.4)
    }

    ctrl.showProjectedDot(new Vector3D(vx, vy, this.z), 8.5 * this.strokeWeightFactor * sizeMul)
  }
}

// ─── AnimationController ──────────────────────────────────────────────────────

class AnimationController {
  private timeline: gsap.core.Timeline
  private time = 0
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private size: number
  private stars: Star[] = []

  private readonly changeEventTime = 0.32
  private readonly startDotYOffset = 28
  private readonly numberOfStars = 900
  private readonly trailLength = 80

  // Public so Star.render() can read them without bracket-notation hacks
  readonly cameraZ = -400
  readonly cameraTravelDistance = 3400
  readonly viewZoom = 100

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    _dpr: number,
    size: number
  ) {
    this.canvas = canvas
    this.ctx = ctx
    this.size = size
    this.timeline = gsap.timeline()
    this.createStars()
    this.setupTimeline()
  }

  private createStars(): void {
    // Seeded RNG — deterministic, beautiful pattern, no global mutation
    const rng = makeSeededRandom(1234)
    for (let i = 0; i < this.numberOfStars; i++) {
      this.stars.push(new Star(this.cameraZ, this.cameraTravelDistance, rng))
    }
  }

  private setupTimeline(): void {
    this.timeline.to(this, {
      time: 1,
      duration: 15,
      repeat: -1,
      ease: 'none',
      onUpdate: () => this.render(),
    })
  }

  ease(p: number, g: number): number {
    return p < 0.5 ? 0.5 * Math.pow(2 * p, g) : 1 - 0.5 * Math.pow(2 * (1 - p), g)
  }

  easeOutElastic(x: number): number {
    if (x <= 0) return 0
    if (x >= 1) return 1
    const c4 = (2 * Math.PI) / 4.5
    return Math.pow(2, -8 * x) * Math.sin((x * 8 - 0.75) * c4) + 1
  }

  map(v: number, s1: number, e1: number, s2: number, e2: number): number {
    return s2 + (e2 - s2) * ((v - s1) / (e1 - s1))
  }

  constrain(v: number, lo: number, hi: number): number {
    return Math.min(Math.max(v, lo), hi)
  }

  lerp(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t
  }

  spiralPath(p: number): Vector2D {
    p = this.constrain(1.2 * p, 0, 1)
    p = this.ease(p, 1.8)
    const theta = 2 * Math.PI * 6 * Math.sqrt(p)
    const r = 170 * Math.sqrt(p)
    return new Vector2D(r * Math.cos(theta), r * Math.sin(theta) + this.startDotYOffset)
  }

  rotate(v1: Vector2D, v2: Vector2D, p: number, flip: boolean): Vector2D {
    const mx = (v1.x + v2.x) / 2
    const my = (v1.y + v2.y) / 2
    const dx = v1.x - mx
    const dy = v1.y - my
    const angle = Math.atan2(dy, dx)
    const o = flip ? -1 : 1
    const r = Math.sqrt(dx * dx + dy * dy)
    const bounce = Math.sin(p * Math.PI) * 0.05 * (1 - p)
    const a = angle + o * Math.PI * this.easeOutElastic(p)
    return new Vector2D(mx + r * (1 + bounce) * Math.cos(a), my + r * (1 + bounce) * Math.sin(a))
  }

  showProjectedDot(position: Vector3D, sizeFactor: number): void {
    const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1)
    const camZ = this.cameraZ + this.ease(Math.pow(t2, 1.2), 1.8) * this.cameraTravelDistance
    if (position.z <= camZ) return
    const depth = position.z - camZ
    const x = this.viewZoom * position.x / depth
    const y = this.viewZoom * position.y / depth
    const sw = 400 * sizeFactor / depth
    this.ctx.lineWidth = sw
    this.ctx.beginPath()
    this.ctx.arc(x, y, 0.5, 0, Math.PI * 2)
    this.ctx.fill()
  }

  private drawStartDot(): void {
    if (this.time <= this.changeEventTime) return
    const dy = this.cameraZ * this.startDotYOffset / this.viewZoom
    this.showProjectedDot(new Vector3D(0, dy, this.cameraTravelDistance), 2.5)
  }

  render(): void {
    const { ctx, size } = this
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#0B0B0B' : '#F7F4EF'
    ctx.fillRect(0, 0, size, size)
    ctx.save()
    ctx.translate(size / 2, size / 2)
    const t1 = this.constrain(this.map(this.time, 0, this.changeEventTime + 0.25, 0, 1), 0, 1)
    const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1)
    ctx.rotate(-Math.PI * this.ease(t2, 2.7))
    this.drawTrail(t1)
    ctx.fillStyle = 'white'
    for (const star of this.stars) star.render(t1, this)
    this.drawStartDot()
    ctx.restore()
  }

  private drawTrail(t1: number): void {
    for (let i = 0; i < this.trailLength; i++) {
      const f = this.map(i, 0, this.trailLength, 1.1, 0.1)
      const sw = (1.3 * (1 - t1) + 3.0 * Math.sin(Math.PI * t1)) * f
      this.ctx.fillStyle = 'white'
      this.ctx.lineWidth = sw
      const pos = this.spiralPath(t1 - 0.00015 * i)
      const rotated = this.rotate(
        pos,
        new Vector2D(pos.x + 5, pos.y + 5),
        Math.sin(this.time * Math.PI * 2) * 0.5 + 0.5,
        i % 2 === 0
      )
      this.ctx.beginPath()
      this.ctx.arc(rotated.x, rotated.y, sw / 2, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }

  destroy(): void {
    this.timeline.kill()
  }
}

// ─── Words ────────────────────────────────────────────────────────────────────

const WORDS = ['Design', 'Build', 'Problem Solver', 'Clarity', 'Intent'] as const
const WORD_DURATION = 650 // ms between word changes

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpiralIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<AnimationController | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [wordIndex, setWordIndex] = useState(0)
  const [shown, setShown] = useState(true)

  const dismiss = useCallback(() => setShown(false), [])

  // Window dimensions — only ever read inside useEffect (SSR safe)
  useEffect(() => {
    const handle = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    handle()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  // Canvas + animation — reinitialise when dimensions change
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const size = Math.max(dimensions.width, dimensions.height)
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${dimensions.width}px`
    canvas.style.height = `${dimensions.height}px`
    ctx.scale(dpr, dpr)

    animRef.current?.destroy()
    animRef.current = new AnimationController(canvas, ctx, dpr, size)

    return () => {
      animRef.current?.destroy()
      animRef.current = null
    }
  }, [dimensions])

  // Word cycling — schedule all five transitions upfront
  useEffect(() => {
    const timers = WORDS.slice(1).map((_, i) =>
      window.setTimeout(() => setWordIndex(i + 1), (i + 1) * WORD_DURATION)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  // Auto-dismiss quickly so the intro cannot block the portfolio if canvas work lags.
  useEffect(() => {
    const t = window.setTimeout(dismiss, WORDS.length * WORD_DURATION + 450)
    return () => clearTimeout(t)
  }, [dismiss])

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-surface cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          onClick={dismiss}
          role="presentation"
          aria-label="Intro — click to skip"
        >
          {/* Spiral canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Cycling words */}
          <div
            className="relative z-10 pointer-events-none select-none text-center"
            aria-hidden="true"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="block text-ink text-[11px] md:text-[13px] tracking-[0.55em] uppercase font-light"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Skip hint */}
          <motion.p
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/25 text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-light pointer-events-none select-none whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            aria-hidden="true"
          >
            Click to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
