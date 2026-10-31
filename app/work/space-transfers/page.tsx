import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { CaseStudyHeader } from '@/components/CaseStudyHeader'

export const metadata: Metadata = {
  title: 'Space Transfers — Quadri Emmanuel',
  description:
    'A product design and full-stack case study for a DTF print-on-demand canvas platform.',
}

const architecture = [
  ['01', 'User Research', 'Workflow interviews, competitor analysis, print-shop pain points, and opportunity mapping'],
  ['02', 'Information Architecture', 'Role-based navigation for customers, operators, and fulfilment partners across one order lifecycle'],
  ['03', 'Interaction Design', 'Direct manipulation, drag-and-drop artwork, selection controls, live feedback, and recoverable actions'],
  ['04', 'Design System', 'Reusable canvas controls, status patterns, tokens, components, and responsive platform guidelines'],
  ['05', 'React + TypeScript', 'Typed component architecture for the editor, commerce flows, and role-specific interfaces'],
  ['06', 'Canvas Rendering', 'Viewport culling, spatial indexing, zoom controls, and responsive artboard performance'],
  ['07', 'Express + MongoDB', 'Shared API, order lifecycle, partner assignment, payouts, and guarded document storage'],
  ['08', 'Gemini + Stripe', 'AI-assisted artwork preparation and secure checkout integrated into the product journey'],
]

const challenges = [
  {
    problem:
      'A professional canvas editor can overwhelm first-time customers with controls, print rules, and unfamiliar production terminology.',
    resolution:
      'Used progressive disclosure, contextual actions, clear empty states, and live DPI, size, piece-count, and price feedback to keep the primary workflow understandable.',
  },
  {
    problem:
      'Auto-nesting degraded as sheets filled up. Testing every new piece against every placed item made large gang sheets feel unresponsive.',
    resolution:
      'Combined a MaxRects-style packer with spatial-grid collision lookups and viewport-culled rendering, preserving immediate visual feedback on complex sheets.',
  },
  {
    problem:
      'Customers, platform operators, and fulfilment partners needed the same order to remain understandable and current across separate applications.',
    resolution:
      'Designed one shared status model and paired it with synchronized services, consistent state language, role-specific actions, and timely notifications.',
  },
]

const stack = [
  'Figma',
  'UX Research',
  'UI Design',
  'Design System',
  'Prototyping',
  'React',
  'TypeScript',
  'Canvas',
  'Express',
  'MongoDB',
  'Gemini',
  'Stripe',
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="[font-family:var(--font-jetbrains-mono)] text-[12px] font-normal uppercase leading-[1.2] tracking-[0.14em] text-ink-muted sm:text-[13px]">
      {children}
    </p>
  )
}

function StorySection({
  label,
  children,
  lead = false,
}: {
  label: string
  children: React.ReactNode
  lead?: boolean
}) {
  return (
    <section className="grid gap-8 border-t border-edge py-14 sm:py-16 lg:grid-cols-[minmax(180px,0.75fr)_minmax(0,1.55fr)] lg:gap-16 lg:py-20">
      <Eyebrow>{label}</Eyebrow>
      <div className={lead ? 'text-[22px] leading-[1.18] tracking-[-0.025em] text-ink sm:text-[28px]' : 'text-[15px] leading-[1.65] text-ink-muted sm:text-[17px]'}>
        {children}
      </div>
    </section>
  )
}

export default function SpaceTransfersPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <a
        href="#case-study"
        className="fixed left-3 top-3 z-[60] -translate-y-20 rounded-full bg-ink px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-surface transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <CaseStudyHeader />

      <main id="case-study" className="mx-auto max-w-[1320px] px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <section>
          <div className="mb-9 flex items-center gap-3 text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <Eyebrow>Selected work</Eyebrow>
          </div>
          <h1 className="max-w-5xl font-sans text-[clamp(3.6rem,8vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-ink">
            Space Transfers
          </h1>
          <p className="mt-10 max-w-[880px] text-[18px] leading-[1.55] tracking-[-0.015em] text-ink-muted sm:text-[23px]">
            A DTF print-on-demand platform that turns complex artwork preparation, sheet packing, checkout, fulfilment, and delivery into one coordinated product experience.
          </p>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-edge pt-8 sm:mt-28 sm:grid-cols-4">
            {[
              ['Role', 'Product Design & Development'],
              ['Year', '2026'],
              ['Duration', 'Ongoing'],
              ['Category', 'Platform'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt><Eyebrow>{term}</Eyebrow></dt>
                <dd className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="py-16 sm:py-24 lg:py-28">
          <div className="overflow-hidden rounded-2xl border border-ink/15 bg-[#070909] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.2)] sm:p-5">
            <div className="overflow-hidden rounded-xl border border-white/15 bg-white shadow-2xl">
              <div className="relative flex h-9 items-center border-b border-black/10 bg-[#F5F3EF] px-3 sm:h-11 sm:px-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                </div>
                <span className="absolute left-1/2 max-w-[65%] -translate-x-1/2 truncate rounded-md bg-[#E8E5DF] px-4 py-1 [font-family:var(--font-jetbrains-mono)] text-[8px] tracking-[0.04em] text-black/45 sm:text-[11px]">
                  https://space-transfer.vercel.app
                </span>
              </div>
              <Image
                src="/images/space-transfers-editor.png"
                alt="Space Transfers gang-sheet canvas editor"
                width={2048}
                height={1158}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <StorySection label="The situation" lead>
          <p>
            DTF printing is sold by the sheet, so profitability depends on how efficiently artwork fits onto film. Shops were arranging sheets manually in general-purpose design tools, wasting production time and material while creating files printers still had to inspect before use.
          </p>
        </StorySection>

        <StorySection label="Product strategy">
          <p>
            Research revealed one connected service rather than a standalone editor: customers need to prepare artwork and understand price, operators need to manage orders and capacity, and fulfilment partners need production-ready files with clear next actions. The product architecture links those needs through one shared order lifecycle while giving each role an interface shaped around its own decisions.
          </p>
        </StorySection>

        <StorySection label="The artboard">
          <p>
            The centrepiece is a direct-manipulation canvas rather than a conventional form. Users drag artwork onto a live sheet, resize and arrange pieces, inspect print DPI, and see dimensions, quantity, and pricing update immediately. Selection controls stay contextual, while background removal, colour removal, crop, and generative edits remain inside the same workspace.
          </p>
        </StorySection>

        <StorySection label="Interaction model">
          <p>
            The editor balances professional control with progressive disclosure. A focused empty state introduces the first action, contextual tools appear only after selection, and system feedback distinguishes loading, processing, validation, success, and recoverable errors. Auto-nesting provides a fast default while preserving manual control for experienced users.
          </p>
        </StorySection>

        <StorySection label="Packing the sheet">
          <p>
            Auto-nesting uses a MaxRects-style free-rectangle packer, supported by spatial-grid collision lookups and viewport-culled rendering. The technical model is translated into visible product feedback: users see pieces settle into place, sheet dimensions and price recalculate, and clear status messaging explains when a large operation is still processing.
          </p>
        </StorySection>

        <StorySection label="Service blueprint">
          <p>
            Customer, operator, and fulfilment experiences run as coordinated applications over a shared Express API. An order moves from quote through payment, partner assignment, printing, label generation, tracking, and delivery. Shared status language and role-specific actions keep every participant aligned without exposing internal complexity.
          </p>
        </StorySection>

        <section className="border-t border-edge py-16 sm:py-20 lg:py-24">
          <Eyebrow>Design &amp; development architecture</Eyebrow>
          <div className="mt-10 border-t border-edge">
            {architecture.map(([number, title, description]) => (
              <div key={number} className="group grid grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-edge py-5 sm:grid-cols-[52px_220px_1fr_auto] sm:gap-6">
                <span className="text-[9px] tracking-[0.2em] text-ink-muted">{number}</span>
                <span className="text-[15px] font-medium text-ink sm:text-[18px]">{title}</span>
                <span className="col-start-2 text-[13px] text-ink-muted sm:col-start-auto sm:text-[15px]">{description}</span>
                <ArrowDown className="h-3.5 w-3.5 text-ink-muted transition-transform duration-300 group-hover:translate-y-1" />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-edge py-16 sm:py-20 lg:py-24">
          <Eyebrow>What was hard</Eyebrow>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.problem}
                className={`rounded-2xl border border-edge bg-surface p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)] sm:p-8 ${index === 2 ? 'md:col-start-1' : ''}`}
              >
                <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] font-medium uppercase leading-[1.2] tracking-[0.14em] text-amber sm:text-[12px]">Problem</p>
                <p className="mt-4 text-[18px] leading-[1.55] text-ink sm:text-[20px]">{challenge.problem}</p>
                <div className="my-6 h-px bg-edge" />
                <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] font-medium uppercase leading-[1.2] tracking-[0.14em] text-ink-muted sm:text-[12px]">Resolution</p>
                <p className="mt-4 text-[16px] leading-[1.7] text-ink-muted sm:text-[17px]">{challenge.resolution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-14 border-t border-edge py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div>
            <Eyebrow>Built with</Eyebrow>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-edge bg-surface px-3.5 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-ink-muted shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Links</Eyebrow>
            <div className="mt-8 border-t border-edge">
              <a
                href="https://space-transfer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink sm:text-[14px]"
              >
                Live platform
                <span className="flex items-center gap-2 font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">Open project <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
              <div className="flex items-center justify-between gap-6 border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted sm:text-[14px]">
                Availability <span className="text-right font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">Live in production</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-edge px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 text-[9px] font-medium uppercase tracking-[0.2em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Quadri Emmanuel</span>
          <a
            href="/?skipIntro=1"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-edge bg-surface-2 px-5 py-3 [font-family:var(--font-jetbrains-mono)] text-[11px] font-medium uppercase tracking-[0.14em] text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/50 hover:bg-amber hover:text-surface hover:shadow-[0_10px_28px_rgba(200,150,90,0.24)] sm:text-[12px]"
          >
            <span aria-hidden="true" className="text-[15px] transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back
          </a>
        </div>
      </footer>
    </div>
  )
}
