import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { CaseStudyHeader } from '@/components/CaseStudyHeader'

export const metadata: Metadata = {
  title: 'Bactose — Quadri Emmanuel',
  description:
    'A product design and e-commerce case study for the Bactose direct-to-consumer wellness experience.',
}

const architecture = [
  ['01', 'Product Story', 'A benefit-led narrative that introduces the seven-day monthly routine before asking users to purchase'],
  ['02', 'Shopping Journey', 'Clear paths from discovery to product detail, purchase choice, cart, and account management'],
  ['03', 'Subscription UX', 'One-time purchase and subscription options presented with visible price, renewal, and cancellation details'],
  ['04', 'Education System', 'Science content, FAQs, comparison language, and editorial articles organized for progressive learning'],
  ['05', 'Trust Architecture', 'Reviews, guarantees, product facts, dosage guidance, and policy access placed near key decisions'],
  ['06', 'Responsive Commerce', 'A consistent hierarchy for navigation, product media, pricing, and calls to action across screen sizes'],
]

const challenges = [
  {
    problem:
      'The product follows an unfamiliar seven-day monthly routine, so visitors need to understand the format before they can evaluate it.',
    resolution:
      'Structured the experience as progressive education: a concise value proposition first, then routine details, product comparison, science content, and FAQs for users who need more depth.',
  },
  {
    problem:
      'One-time purchase and subscription choices can create hesitation when pricing, renewal terms, and cancellation expectations are unclear.',
    resolution:
      'Placed both options in one decision area and surfaced price, savings, renewal cadence, commitment, guarantee, and cancellation information alongside the selection.',
  },
  {
    problem:
      'The expressive pink, peach, and teal brand system needed to remain energetic without competing with product information on smaller screens.',
    resolution:
      'Used strong editorial imagery for discovery, then shifted to restrained white space, repeatable content blocks, and compact interaction patterns during evaluation and purchase.',
  },
]

const stack = [
  'Figma',
  'Product Design',
  'E-commerce UX',
  'Shopify',
  'Information Architecture',
  'Responsive Design',
  'Conversion Design',
  'Content Strategy',
  'Interaction Design',
  'Accessibility',
  'Design System',
  'Prototyping',
]

const screens = [
  {
    src: '/images/bactose-home.png',
    alt: 'Bactose homepage presenting the seven-day monthly probiotic routine',
    label: 'Discovery',
    caption: 'Benefit-led product introduction and clear entry into the shopping journey.',
  },
  {
    src: '/images/bactose-product.png',
    alt: 'Bactose product page with one-time and subscription purchase options',
    label: 'Product decision',
    caption: 'Product media, pricing, subscription terms, and purchase choices in one view.',
  },
  {
    src: '/images/bactose-education.png',
    alt: 'Bactose education page explaining lactose and digestion',
    label: 'Education',
    caption: 'Science-led content that supports users who want to understand the product context.',
  },
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
      <div className={lead ? 'text-[22px] leading-[1.22] tracking-[-0.025em] text-ink sm:text-[28px]' : 'text-[15px] leading-[1.7] text-ink-muted sm:text-[17px]'}>
        {children}
      </div>
    </section>
  )
}

function BrowserFrame({
  screen,
  featured = false,
}: {
  screen: (typeof screens)[number]
  featured?: boolean
}) {
  return (
    <figure className={featured ? 'lg:col-span-2' : ''}>
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-[#141414] p-2 shadow-[0_24px_65px_rgba(0,0,0,0.14)] sm:rounded-3xl sm:p-3">
        <div className="flex h-7 items-center gap-1.5 rounded-t-xl bg-[#F4F1EC] px-3 sm:h-9 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="ml-auto max-w-[62%] truncate rounded-md bg-[#E7E2DA] px-3 py-1 [font-family:var(--font-jetbrains-mono)] text-[8px] tracking-[0.03em] text-black/40 sm:text-[10px]">
            https://bactose.com
          </span>
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-b-xl bg-[#F4F1EC]">
          <Image
            src={screen.src}
            alt={screen.alt}
            width={1440}
            height={900}
            className="h-full w-full object-cover object-top"
            priority={featured}
          />
        </div>
      </div>
      <figcaption className="mt-4 grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-6">
        <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink">{screen.label}</span>
        <span className="text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">{screen.caption}</span>
      </figcaption>
    </figure>
  )
}

export default function BactosePage() {
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
          <div className="mb-9 flex items-center gap-3 text-[#F653AE]">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <Eyebrow>Selected work</Eyebrow>
          </div>
          <h1 className="max-w-5xl font-sans text-[clamp(3.8rem,9vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-ink">
            Bactose
          </h1>
          <p className="mt-10 max-w-[850px] text-[18px] leading-[1.55] tracking-[-0.015em] text-ink-muted sm:text-[23px]">
            A responsive direct-to-consumer wellness storefront that makes a distinctive seven-day monthly probiotic routine easier to discover, understand, compare, and purchase.
          </p>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-edge pt-8 sm:mt-28 sm:grid-cols-4">
            {[
              ['Role', 'Product Designer'],
              ['Year', '2026'],
              ['Platform', 'Responsive Web'],
              ['Category', 'E-commerce'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt><Eyebrow>{term}</Eyebrow></dt>
                <dd className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:py-28">
          {screens.map((screen, index) => (
            <BrowserFrame key={screen.src} screen={screen} featured={index === 0} />
          ))}
        </section>

        <StorySection label="The situation" lead>
          <p>
            Bactose introduces a product format many visitors may not immediately recognize: a probiotic course taken for seven consecutive days as part of a monthly routine. The experience therefore has two jobs at once—build understanding and confidence, then support a clear purchase decision.
          </p>
        </StorySection>

        <StorySection label="Product vision">
          <p>
            Create a vibrant, credible commerce experience for dairy lovers that leads with a simple benefit, explains the routine in layers, and lets users move naturally between product discovery, science education, one-time purchase, and subscription management without losing context.
          </p>
        </StorySection>

        <StorySection label="Experience strategy">
          <p>
            The journey is organized around progressive disclosure. The homepage communicates the routine in seconds through strong imagery and short benefit statements. Product pages bring together media, quantity, pricing, subscription details, guarantees, and supporting facts. Education and editorial content provide deeper explanations for visitors who need more evidence before purchasing.
          </p>
        </StorySection>

        <StorySection label="Visual direction">
          <p>
            The visual system combines warm lifestyle photography with a distinctive pink, peach, and teal palette. Large campaign moments create recognition, while neutral content surfaces, consistent spacing, restrained typography, and reusable commerce patterns protect clarity during detailed product evaluation.
          </p>
        </StorySection>

        <section className="border-t border-edge py-16 sm:py-20 lg:py-24">
          <Eyebrow>Design architecture</Eyebrow>
          <div className="mt-10 border-t border-edge">
            {architecture.map(([number, title, description]) => (
              <div key={number} className="group grid grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-edge py-5 sm:grid-cols-[52px_190px_1fr_auto] sm:gap-6">
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
                className={`rounded-2xl border border-edge bg-surface p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F653AE]/40 hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)] sm:p-8 ${index === 2 ? 'md:col-start-1' : ''}`}
              >
                <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] font-medium uppercase leading-[1.2] tracking-[0.14em] text-[#D44591] sm:text-[12px]">Problem</p>
                <p className="mt-4 text-[18px] leading-[1.55] text-ink sm:text-[20px]">{challenge.problem}</p>
                <div className="my-6 h-px bg-edge" />
                <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] font-medium uppercase leading-[1.2] tracking-[0.14em] text-ink-muted sm:text-[12px]">Resolution</p>
                <p className="mt-4 text-[16px] leading-[1.7] text-ink-muted sm:text-[17px]">{challenge.resolution}</p>
              </article>
            ))}
          </div>
        </section>

        <StorySection label="Design outcome">
          <p>
            The resulting experience gives the brand a coherent path from campaign storytelling to purchase. Users can quickly identify the product format, understand how the monthly routine differs from per-meal options, inspect the offer and subscription terms, and continue into educational content when they need more context.
          </p>
        </StorySection>

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
                href="https://bactose.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink sm:text-[14px]"
              >
                Live site
                <span className="flex items-center gap-2 font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">Open <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
              <a
                href="https://bactose.com/products/bactose-single-pack"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink sm:text-[14px]"
              >
                Product page
                <span className="flex items-center gap-2 font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">View <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
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
