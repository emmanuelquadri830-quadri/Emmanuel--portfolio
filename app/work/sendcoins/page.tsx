import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { CaseStudyHeader } from '@/components/CaseStudyHeader'
import { DualPhoneHero } from '@/components/DualPhoneHero'

export const metadata: Metadata = {
  title: 'Sendcoins — Quadri Emmanuel',
  description:
    'A fintech mobile product design case study for Sendcoins — a stablecoin-powered remittance app by Wavetifi Limited.',
}

const architecture = [
  ['01', 'Wallet Architecture', 'Multi-currency wallets across fiat and crypto with clear balances, labels, and one-tap funding'],
  ['02', 'Onboarding & Security', 'Guided account setup, wallet creation, and recovery flows that build confidence before the first transfer'],
  ['03', 'Conversion Engine', 'Live exchange rates with the exact rate and fees visible at the moment of conversion, never after'],
  ['04', 'Transaction Transparency', 'Full activity history with participants, amounts, statuses, and receipts for every send and receive'],
  ['05', 'Global Corridors', 'Country coverage presented with local context so users understand reach, rails, and delivery expectations'],
  ['06', 'Notification System', 'Real-time funds-sent and funds-received events that keep both sides of a transfer informed'],
  ['07', 'Design System', 'A calm fintech system: restrained blue palette, tabular numerals, and reusable money-handling components'],
]

const challenges = [
  {
    problem:
      'Stablecoins are powerful but unfamiliar; most remittance users think in local currency and cash pickup, not blockchain rails.',
    resolution:
      'Kept the interface fiat-first — users choose an amount, a recipient, and a delivery expectation, while USDC and network details stay one level below the surface.',
  },
  {
    problem:
      'Moving real money through crypto rails demands a level of trust a consumer app cannot simply assume.',
    resolution:
      'Designed every transaction as a transparent record — the live rate at conversion, clear status progression, and receipts — so users always know where their money is.',
  },
  {
    problem:
      'Multiple wallets for spending, savings, and assets can create decision paralysis at the exact moment of payment.',
    resolution:
      'A wallet chooser during transfer shows balances, labels, and purpose per wallet, letting users pay from the right source in one confident step.',
  },
]

const stack = [
  'Figma',
  'FigJam',
  'Fintech UX',
  'UX Research',
  'Design System',
  'Interactive Prototyping',
  'Component Library',
  'Variables & Tokens',
  'Wireframing',
  'User Flows',
  'Usability Testing',
  'Accessibility',
  'iOS Design Guidelines',
]

const screens = [
  {
    src: '/images/sendcoins-2.jpg',
    alt: 'Sendcoins dashboard with balance, fund, send, and convert actions, and recent transactions',
    label: 'Dashboard',
    caption: 'A funds-first home with balances, quick fund, send, and convert actions, and recent activity at a glance.',
  },
  {
    src: '/images/sendcoins-3.jpg',
    alt: 'Sendcoins transactions screen listing transfers with amounts and statuses',
    label: 'Activity',
    caption: 'Every transfer presented as a transparent record with participants, amounts, and clear status.',
  },
  {
    src: '/images/sendcoins-4.jpg',
    alt: 'Sendcoins conversion screen showing an ETH to USDC exchange with live rate',
    label: 'Convert',
    caption: 'Live exchange rates between assets with the exact rate shown before the conversion is confirmed.',
  },
  {
    src: '/images/sendcoins-5.jpg',
    alt: 'Sendcoins wallet chooser screen listing USDC, savings, and other wallets',
    label: 'Wallets',
    caption: 'Purposeful wallets for spending, savings, and assets, each with clear balances and context.',
  },
  {
    src: '/images/sendcoins-6.jpg',
    alt: 'Sendcoins global coverage screen with flags for India, Nigeria, Pakistan, Philippines, and Canada',
    label: 'Global reach',
    caption: 'Country coverage that communicates corridor support across Africa, Asia, and North America.',
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
      <div className={lead ? 'text-[22px] leading-[1.18] tracking-[-0.025em] text-ink sm:text-[28px]' : 'text-[15px] leading-[1.65] text-ink-muted sm:text-[17px]'}>
        {children}
      </div>
    </section>
  )
}

function PhoneFrame({ screen }: { screen: (typeof screens)[number] }) {
  return (
    <figure>
      <div className="mx-auto max-w-[320px] rounded-[30px] border border-ink/10 bg-[#171717] p-2 shadow-[0_24px_65px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:-translate-y-1.5 sm:rounded-[38px] sm:p-2.5">
        <div className="overflow-hidden rounded-[22px] bg-white sm:rounded-[30px]">
          <Image
            src={screen.src}
            alt={screen.alt}
            width={800}
            height={1731}
            className="h-auto w-full"
          />
        </div>
      </div>
      <figcaption className="mt-4 grid gap-1">
        <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink">{screen.label}</span>
        <span className="text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">{screen.caption}</span>
      </figcaption>
    </figure>
  )
}

export default function SendcoinsPage() {
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
            Sendcoins
          </h1>
          <p className="mt-10 max-w-[820px] text-[18px] leading-[1.55] tracking-[-0.015em] text-ink-muted sm:text-[23px]">
            A modern remittance app that lets people send and receive money globally using fiat currencies and cryptocurrencies — stablecoin-powered settlement with the familiarity of a banking app.
          </p>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-edge pt-8 sm:mt-28 sm:grid-cols-4">
            {[
              ['Role', 'Product Designer'],
              ['Year', '2026'],
              ['Platform', 'iOS'],
              ['Category', 'Fintech · Remittance'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt><Eyebrow>{term}</Eyebrow></dt>
                <dd className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <DualPhoneHero
          glow="#2563EB"
          left={{
            src: '/images/sendcoins-1.jpg',
            alt: 'Sendcoins brand cover with the tagline Send money with confidence',
            width: 800,
            height: 1731,
          }}
          right={{
            src: '/images/sendcoins-2.jpg',
            alt: 'Sendcoins dashboard with balance, fund, send, and convert actions, and recent transactions',
            width: 800,
            height: 1731,
          }}
        />

        <StorySection label="The situation" lead>
          <p>
            Cross-border money movement is still slow and expensive. Traditional remittance corridors take days, charge layered fees, and offer little visibility between sending and receiving — while the crypto alternatives that could fix this ask users to become crypto experts first.
          </p>
        </StorySection>

        <StorySection label="Product vision">
          <p>
            Sendcoins is a modern remittance app that lets people send and receive money globally using fiat currencies and cryptocurrencies from one simple app. Stablecoin-powered settlement delivers speed and cost advantages, while a wallet-first interface keeps the experience as familiar as any banking app.
          </p>
        </StorySection>

        <StorySection label="Core features">
          <p>
            Multi-currency wallets hold balances across fiat and crypto — including USDC, ETH, and dedicated savings wallets — with one-tap fund, send, and convert actions. Live rates make conversions transparent, activity history records every transfer with status and receipt, and country coverage connects corridors across Africa, Asia, and North America. Real-time notifications tell both sides of a transfer when money moves.
          </p>
        </StorySection>

        <StorySection label="Design architecture">
          <p>
            The experience is organized around wallets. A funds-first dashboard surfaces balances and the three money actions, the conversion flow shows the exact rate before commitment, and every transfer produces a transparent record. Built for Wavetifi Limited on iOS, Sendcoins pairs a restrained blue visual system with tabular numerals for money values and reusable components for amounts, statuses, and wallet states.
          </p>
        </StorySection>

        <section className="border-t border-edge py-16 sm:py-20 lg:py-24">
          <Eyebrow>Screens</Eyebrow>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen) => (
              <PhoneFrame key={screen.src} screen={screen} />
            ))}
          </div>
        </section>

        <section className="border-t border-edge py-16 sm:py-20 lg:py-24">
          <Eyebrow>Architecture</Eyebrow>
          <div className="mt-10 border-t border-edge">
            {architecture.map(([number, title, description]) => (
              <div key={number} className="group grid grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-edge py-5 sm:grid-cols-[52px_180px_1fr_auto] sm:gap-6">
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
                className={`rounded-2xl border border-edge bg-surface p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2F6BE4]/40 hover:shadow-[0_22px_50px_rgba(0,0,0,0.1)] sm:p-8 ${index === 2 ? 'md:col-start-1' : ''}`}
              >
                <p className="[font-family:var(--font-jetbrains-mono)] text-[11px] font-medium uppercase leading-[1.2] tracking-[0.14em] text-[#2F6BE4] sm:text-[12px]">Problem</p>
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
                href="https://apps.apple.com/us/app/sendcoins/id6761408753"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink sm:text-[14px]"
              >
                App Store
                <span className="flex items-center gap-2 font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">View app <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
              <div className="flex items-center justify-between gap-6 border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted sm:text-[14px]">
                Availability <span className="text-right font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">Published on App Store</span>
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