import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { CaseStudyHeader } from '@/components/CaseStudyHeader'
import { DualPhoneHero } from '@/components/DualPhoneHero'

export const metadata: Metadata = {
  title: 'VivaFemini — Quadri Emmanuel',
  description:
    "A women's health ecosystem mobile app case study — cycle, pregnancy, postpartum, fertility, menopause, and wellness support for African women.",
}

const architecture = [
  ['01', 'Lifecycle IA', 'One information architecture that adapts to the user stage: period, pregnancy, postpartum, fertility, perimenopause, and menopause'],
  ['02', 'Tracker System', 'Six clinically backed trackers with shared logging, reminders, and symptom inputs that stay consistent across life stages'],
  ['03', 'Insight Layer', 'Weekly and monthly wellness reports that turn logged symptoms into scores, patterns, and practical tips'],
  ['04', 'AI Companion', "Nia, an expert-guided assistant that answers questions with context drawn from the user's own logged data"],
  ['05', 'Community', 'Phase-tagged conversation spaces where VivaQueens support each other across cycle, pregnancy, and menopause journeys'],
  ['06', 'Privacy & Discreet Mode', 'Discreet notifications, anonymous participation, and sensitive-data controls designed for stigmatized contexts'],
  ['07', 'Design System', 'Reusable components, phase-aware color coding, and accessible typography tuned for long reading sessions'],
]

const challenges = [
  {
    problem:
      'Supporting six life stages in one app without overwhelming users with features that do not apply to them.',
    resolution:
      'Structured the home experience around the active lifecycle phase, with phase-tagged trackers and content that changes as each user moves between stages.',
  },
  {
    problem:
      'Health data around periods, pregnancy, and menopause is highly sensitive, especially in communities where stigma is real.',
    resolution:
      'Designed discreet mode with neutral notifications, anonymous participation, and privacy controls surfaced during onboarding instead of buried in settings.',
  },
  {
    problem:
      'Health guidance must feel credible and warm at the same time; overly clinical interfaces raise anxiety while playful ones undermine trust.',
    resolution:
      'Paired a soft magenta and deep navy system with expert-reviewed language, calm illustration, and data presented as supportive insights rather than diagnoses.',
  },
]

const stack = [
  'Figma',
  'FigJam',
  'UX Research',
  'Design System',
  'Interactive Prototyping',
  'Component Library',
  'Auto Layout',
  'Variables & Tokens',
  'Wireframing',
  'User Flows',
  'Usability Testing',
  'Accessibility',
  'Content Strategy',
]

const screens = [
  {
    src: '/images/vivafemini-3.png',
    alt: 'VivaFemini cycle tracking screen with calendar view and cycle day insights',
    label: 'Cycle tracking',
    caption: 'Precision cycle and period tracking with symptom logging, PCOS and fibroid support, and phase insights.',
  },
  {
    src: '/images/vivafemini-4.png',
    alt: 'VivaFemini pregnancy screen showing weekly baby development and due date',
    label: 'Pregnancy',
    caption: 'Week-by-week pregnancy guidance with baby development updates and trimester-specific care.',
  },
  {
    src: '/images/vivafemini-6.png',
    alt: 'VivaFemini wellness tracker screen with mood and energy logging for menopause support',
    label: 'Menopause & wellness',
    caption: 'Symptom-first perimenopause and menopause tracking with mood, energy, and hormonal insights.',
  },
  {
    src: '/images/vivafemini-7.png',
    alt: 'VivaFemini home screen listing menstrual, pregnancy, wellness, fertility, menopause, and postpartum phases',
    label: 'Every stage',
    caption: 'One home for menstrual, pregnancy, postpartum, fertility, perimenopause, and general wellness phases.',
  },
  {
    src: '/images/vivafemini-8.png',
    alt: 'VivaFemini community screen showing the VivaQueens health crew conversation space',
    label: 'Community',
    caption: 'Safe conversation spaces where VivaQueens share experiences and support across thousands of members.',
  },
  {
    src: '/images/vivafemini-9.png',
    alt: 'VivaFemini wellness health report screen with wellness score, mood rating, and insights',
    label: 'Health reports',
    caption: 'Full wellness reports that convert logged symptoms into scores, patterns, and next-step tips.',
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
            width={640}
            height={1096}
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

export default function VivaFeminiPage() {
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
            VivaFemini
          </h1>
          <p className="mt-10 max-w-[820px] text-[18px] leading-[1.55] tracking-[-0.015em] text-ink-muted sm:text-[23px]">
            Africa&apos;s first integrated women&apos;s health ecosystem app, guiding women from their first period through pregnancy, postpartum, fertility, menopause, and beyond — with six clinically backed trackers, an AI health companion, and a community of VivaQueens.
          </p>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-edge pt-8 sm:mt-28 sm:grid-cols-4">
            {[
              ['Role', 'Product Designer'],
              ['Year', '2026'],
              ['Platform', 'iOS & Android'],
              ['Category', 'Health Tech'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt><Eyebrow>{term}</Eyebrow></dt>
                <dd className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <DualPhoneHero
          glow="#C026D3"
          left={{
            src: '/images/vivafemini-2.png',
            alt: 'VivaFemini brand cover presenting Your Complete Women’s Health Companion',
            width: 640,
            height: 1096,
          }}
          right={{
            src: '/images/vivafemini-8.png',
            alt: 'VivaFemini community screen inviting VivaQueens to connect, share, and thrive',
            width: 640,
            height: 1096,
          }}
        />

        <StorySection label="The situation" lead>
          <p>
            Women&apos;s health support in Africa is fragmented across disconnected tools. Period trackers stop at pregnancy, pregnancy apps end at birth, and perimenopause is left to search engines. Women juggle generic advice that ignores local realities, while sensitive questions go unasked because there is no safe place to ask them.
          </p>
        </StorySection>

        <StorySection label="Product vision">
          <p>
            VivaFemini is designed as a single lifecycle companion: Africa&apos;s first truly integrated women&apos;s health ecosystem. From the initial period onwards, the app follows each woman through six clinically backed trackers, guided by Nia — an AI health companion that learns from her logged data — and backed by a community where every stage has a voice.
          </p>
        </StorySection>

        <StorySection label="Core features">
          <p>
            Six core trackers cover the full spectrum of women&apos;s health: menstrual health with PCOS and fibroid support, week-by-week pregnancy guidance, postpartum recovery with mental health and newborn care, fertility and TTC insights, symptom-first menopause tracking, and general wellness for mind, mood, and energy. Weekly reports turn logs into wellness scores and patterns, discreet mode protects privacy with neutral notifications, and moderated community circles connect women at the same stage.
          </p>
        </StorySection>

        <StorySection label="Design architecture">
          <p>
            The product is structured around a lifecycle-first information architecture. A shared tracker engine keeps logging consistent while each phase remaps the home experience, content, and reminders. Nia reads the same data to answer questions in context, reports aggregate symptoms into insight scores, and community spaces are phase-tagged so conversations stay relevant. A restrained magenta and deep navy design system keeps clinical credibility without losing warmth.
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
                href="https://play.google.com/store/apps/details?id=com.vivafemini.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink sm:text-[14px]"
              >
                Google Play
                <span className="flex items-center gap-2 font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">View app <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a>
              <div className="flex items-center justify-between gap-6 border-b border-edge py-5 [font-family:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.14em] text-ink-muted sm:text-[14px]">
                Availability <span className="text-right font-sans text-[14px] normal-case tracking-normal text-ink sm:text-[15px]">Published on Google Play</span>
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