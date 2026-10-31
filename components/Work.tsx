'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects as portfolioProjects } from '@/lib/projects'

type Project = {
  number: string
  category: string
  title: string
  image: string
  imageFit?: 'cover' | 'contain'
  imageMobileFit?: 'cover' | 'contain'
  imagePosition?: string
  imageBackground?: string
  coverStyle?: 'editorial'
  year: string
  description: string
  tags: string[]
  gallery?: string[]
  galleryUrl?: string
  galleryFit?: 'cover' | 'contain'
  galleryDevice?: 'browser' | 'laptop'
  href?: string
  linkLabel?: string
  caseStudyHref?: string
}

const projectOrder = ['07', '06', '05', '08', '09', '01', '11', '10']

const projects: Project[] = [...portfolioProjects]
  .filter((project) => projectOrder.includes(project.id))
  .sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id))
  .map((project, index) => ({
    number: String(index + 1).padStart(2, '0'),
    category: project.role,
    title: project.title,
    image: project.image ?? '',
    imageFit: project.imageFit,
    imageMobileFit: project.imageMobileFit,
    imagePosition: project.imagePosition,
    imageBackground: project.imageBackground,
    coverStyle: project.coverStyle,
    year: project.year,
    description: project.description,
    tags: project.tags,
    gallery: project.gallery,
    galleryUrl: project.galleryUrl,
    galleryFit: project.galleryFit,
    galleryDevice: project.galleryDevice,
    href: project.link,
    linkLabel: project.linkLabel,
    caseStudyHref: project.caseStudyLink,
  }))

function ProjectLink({ href, children }: { href: string; children: string }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group inline-flex shrink-0 items-center gap-2 border-b border-black/40 pb-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#181818] transition-colors hover:border-black dark:border-[#D7E2EA]/50 dark:text-[#D7E2EA] dark:hover:border-[#D7E2EA] sm:gap-3 sm:text-[12px] sm:tracking-[0.16em]"
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </a>
  )
}

function imageFitClass(fit: 'cover' | 'contain' | undefined, mobileFit: 'cover' | 'contain' | undefined) {
  const desktopClass = fit === 'cover' ? 'object-cover' : 'object-contain'
  const mobileClass = mobileFit === 'cover' ? 'max-sm:object-cover' : mobileFit === 'contain' ? 'max-sm:object-contain' : ''

  return `${desktopClass} ${mobileClass}`
}

function ProjectGallery({ slides, title, url = '', fit = 'cover', device = 'browser' }: { slides: string[]; title: string; url?: string; fit?: 'cover' | 'contain'; device?: 'browser' | 'laptop' }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const hasMultipleSlides = slides.length > 1

  useEffect(() => {
    if (!hasMultipleSlides || paused) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [activeSlide, hasMultipleSlides, paused, slides.length])

  const moveSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <div
      className="relative h-full min-h-[280px] w-full overflow-hidden bg-[radial-gradient(circle_at_70%_100%,rgba(16,185,129,0.34),transparent_46%),linear-gradient(145deg,#070909,#0B1010)] sm:min-h-0 xl:min-h-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slides[activeSlide]}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={
            device === 'laptop'
              ? 'absolute inset-0 flex items-center justify-center'
              : 'absolute inset-3 flex flex-col overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:inset-5 sm:rounded-2xl'
          }
        >
          <div
            className={
              device === 'laptop'
                ? 'flex aspect-[16/10] w-[calc(100%-1.5rem)] max-w-[1100px] flex-col sm:w-[calc(100%-5rem)] xl:w-[calc(100%-3rem)]'
                : 'contents'
            }
          >
            <div
              className={
                device === 'laptop'
                  ? 'relative flex min-h-0 flex-1 flex-col rounded-[14px] border border-white/20 bg-[#101112] p-[5px] shadow-[0_26px_70px_rgba(0,0,0,0.55)] sm:rounded-[20px] sm:border-[2px] sm:p-[7px]'
                  : 'contents'
              }
            >
              {device === 'laptop' && (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-[2px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25 sm:top-[3px]"
                />
              )}

              <div
                className={
                  device === 'laptop'
                    ? 'flex min-h-0 flex-1 flex-col overflow-hidden rounded-[9px] bg-white sm:rounded-[13px]'
                    : 'contents'
                }
              >
                <div
                  className={`relative flex shrink-0 items-center border-b border-black/10 bg-[#F5F3EF] px-3 sm:h-10 sm:px-4 ${
                    device === 'laptop' ? 'h-6' : 'h-8'
                  }`}
                >
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-black/15 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-black/15 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-black/15 sm:h-2.5 sm:w-2.5" />
                  </div>
                  {url && (
                    <span className="absolute left-1/2 max-w-[62%] -translate-x-1/2 truncate rounded-md bg-[#E8E5DF] px-3 py-1 [font-family:var(--font-jetbrains-mono)] text-[8px] tracking-[0.04em] text-black/45 sm:text-[10px]">
                      {url}
                    </span>
                  )}
                </div>

                <img
                  src={slides[activeSlide]}
                  alt={`${title} screen ${activeSlide + 1} of ${slides.length}`}
                  referrerPolicy="no-referrer"
                  className={`h-full min-h-0 w-full flex-1 bg-[#F5F3EF] object-top ${
                    fit === 'cover' ? 'object-cover' : 'object-contain'
                  }`}
                />
              </div>
            </div>

            {device === 'laptop' && (
              <div aria-hidden="true" className="relative h-3 shrink-0 sm:h-4">
                <span className="absolute left-1/2 top-0 h-2.5 w-[112%] -translate-x-1/2 rounded-b-[55%] bg-gradient-to-b from-[#D8D9DA] via-[#929496] to-[#4D4F52] shadow-[0_8px_16px_rgba(0,0,0,0.45)]" />
                <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-lg bg-[#5F6164] sm:w-24" />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {hasMultipleSlides && (
        <>
          <button
            type="button"
            onClick={() => moveSlide(-1)}
            aria-label={`Show previous ${title} screen`}
            className="absolute inset-y-0 left-0 z-10 flex w-16 items-center justify-center text-[22px] text-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => moveSlide(1)}
            aria-label={`Show next ${title} screen`}
            className="absolute inset-y-0 right-0 z-10 flex w-16 items-center justify-center text-[22px] text-white"
          >
            →
          </button>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3 py-2 shadow-lg backdrop-blur-md">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${title} screen ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                className={`h-1.5 rounded-full ${activeSlide === index ? 'w-6 bg-emerald-400' : 'w-1.5 bg-white/45'}`}
              />
            ))}
          </div>
          <span className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] font-medium tracking-[0.16em] text-white backdrop-blur-md">
            {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project, totalCards }: { project: Project; totalCards: number }) {
  return (
    <div className="relative mb-16 last:mb-0 sm:mb-20 lg:mb-28">
      <motion.article
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-auto lg:h-[clamp(620px,calc(100svh-10rem),740px)]"
      >
        <motion.div className="group/card flex h-auto origin-center flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-3 text-[#181818] shadow-[0_18px_55px_rgba(0,0,0,0.11)] dark:border-white/15 dark:bg-[#0C0C0C] dark:text-[#D7E2EA] sm:p-4 md:rounded-3xl lg:h-full">
          <div className="grid grid-cols-1 items-start gap-4 px-2 pb-5 pt-2 sm:grid-cols-[auto_1fr_auto] sm:items-end sm:gap-x-6 sm:gap-y-5 sm:px-3 sm:pb-6 sm:pt-3 md:gap-x-10">
            <p className="text-[10px] font-medium tabular-nums tracking-[0.18em] text-black/50 dark:text-[#D7E2EA]/50 sm:pb-1 sm:text-[11px]">
              {project.number} / {String(totalCards).padStart(2, '0')}
            </p>
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black/50 dark:text-[#D7E2EA]/50 sm:text-[11px]">
                {project.category} · {project.year}
              </p>
              <h3 className="text-[18px] font-medium leading-tight text-[#181818] dark:text-[#D7E2EA] sm:text-[20px] md:text-[24px]">
                {project.title}
              </h3>
            </div>

            {(project.href || project.caseStudyHref) && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:justify-end sm:gap-x-6 sm:pb-1">
                {project.caseStudyHref && <ProjectLink href={project.caseStudyHref}>Read Case Study</ProjectLink>}
                {project.href && (
                  <ProjectLink href={project.href}>{project.linkLabel ?? (project.caseStudyHref ? 'Visit Live' : 'View Project')}</ProjectLink>
                )}
              </div>
            )}
          </div>

          <div className="grid min-h-0 flex-1 gap-3 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 sm:gap-4 md:rounded-2xl lg:grid-cols-[minmax(0,1fr)_clamp(280px,27vw,340px)] lg:gap-0">
            <div
              className={`overflow-hidden rounded-lg bg-neutral-200 dark:bg-black sm:rounded-xl lg:rounded-none ${
                project.gallery?.length
                  ? 'min-h-[clamp(190px,32svh,260px)] sm:aspect-[16/9] sm:min-h-0 lg:aspect-auto'
                  : 'aspect-[4/3] min-h-0 sm:aspect-[16/9] lg:aspect-auto'
              }`}
            >
              {project.gallery?.length ? (
                <ProjectGallery
                  slides={project.gallery}
                  title={project.title}
                  url={project.galleryUrl}
                  fit={project.galleryFit}
                  device={project.galleryDevice}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: project.imagePosition ?? 'center', backgroundColor: project.imageBackground ?? '#EEF0F3' }}
                  className={`h-full w-full ${imageFitClass(project.imageFit, project.imageMobileFit)}`}
                />
              )}
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-black/10 bg-[#F5F5F3] p-4 dark:border-white/10 dark:bg-[#111111] sm:rounded-xl sm:p-5 md:p-7 lg:rounded-none lg:border-l lg:border-t-0">
              <div>
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-black/40 dark:text-[#D7E2EA]/40 sm:text-[11px]">
                  Project overview
                </p>
                <p className="text-[14px] leading-relaxed text-black/70 dark:text-[#D7E2EA]/75 sm:text-[15px]">
                  {project.description}
                </p>
              </div>

              <p className="mt-5 text-[10px] font-medium uppercase leading-6 tracking-[0.16em] text-black/50 dark:text-[#D7E2EA]/50 sm:mt-7 sm:text-[11px]">
                {project.tags.join(' / ')}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="relative overflow-clip border-y border-edge bg-surface px-4 py-24 sm:px-6 md:px-8 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-14 sm:mb-20">
          <p className="mb-4 text-[15px] font-medium uppercase tracking-[0.36em] text-amber/75">Selected Projects</p>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">Things I&apos;ve designed</h2>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} totalCards={projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
