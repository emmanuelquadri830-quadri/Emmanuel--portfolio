import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { CaseStudyHeader } from '@/components/CaseStudyHeader'

export const metadata: Metadata = {
  title: 'Looking to Hire — Quadri Emmanuel',
  description:
    'A mobile product design case study for a cross-platform job search and recruitment application.',
}

const architecture = [
  ['01', 'User Research', 'User interviews, competitor analysis, personas, pain points, and opportunity mapping'],
  ['02', 'Information Architecture', 'Sitemaps, content hierarchy, navigation models, and candidate-employer task flows'],
  ['03', 'Interaction Design', 'Wireframes, user flows, interaction patterns, feedback states, and high-fidelity prototypes'],
  ['04', 'Design System', 'Design tokens, reusable components, variants, accessibility rules, and platform guidelines'],
  ['05', 'Usability Testing', 'Task-based testing, usability findings, design iterations, and validated experience improvements'],
  ['06', 'Component-Based UI', 'Reusable Flutter widgets, shared layouts, component variants, and consistent interface behavior'],
  ['07', 'State Management', 'Predictable loading, success, empty, error, authentication, and real-time messaging states'],
  ['08', 'API Integration', 'REST endpoints, Firebase synchronization, data mapping, validation, and resilient error handling'],
]

const challenges = [
  {
    problem:
      'Designing a single experience that feels native on both iOS and Android without compromising clarity or platform expectations.',
    resolution:
      'Created a shared interaction system with platform-aware patterns for navigation, input, feedback, and critical application flows.',
  },
  {
    problem:
      'Real-time messaging in markets with unreliable connections required users to understand message status without added anxiety.',
    resolution:
      'Designed clear queued, sent, delivered, and retry states so conversations remain understandable during offline-to-online transitions.',
  },
  {
    problem:
      'Job matching relevance depends on candidate data, but requiring a long profile setup creates early abandonment.',
    resolution:
      'Used progressive profiling to unlock stronger recommendations as users add information, balancing speed with match quality.',
  },
]

const stack = [
  'Figma',
  'FigJam',
  'Claude',
  'Design System',
  'Interactive Prototyping',
  'Component Library',
  'Auto Layout',
  'Variables & Tokens',
  'Wireframing',
  'User Flows',
  'Usability Testing',
  'Accessibility',
  'Responsive Design',
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

export default function LookingToHirePage() {
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
            Looking to Hire
          </h1>
          <p className="mt-10 max-w-[820px] text-[18px] leading-[1.55] tracking-[-0.015em] text-ink-muted sm:text-[23px]">
            A modern cross-platform job search and recruitment app connecting job seekers and employers. Available on iOS and Android with personalized recommendations, one-tap applications, secure in-app messaging, and profile management.
          </p>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-edge pt-8 sm:mt-28 sm:grid-cols-4">
            {[
              ['Role', 'Mobile Designer'],
              ['Year', '2026'],
              ['Duration', 'Ongoing'],
              ['Category', 'Mobile'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt><Eyebrow>{term}</Eyebrow></dt>
                <dd className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex justify-center py-16 sm:py-24 lg:py-28">
          <div className="relative rounded-[38px] border border-ink/15 bg-[#171717] p-[9px] shadow-[0_25px_65px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:-translate-y-2 hover:scale-[1.015]">
            <div className="overflow-hidden rounded-[30px] bg-white">
              <Image
                src="/images/looking-to-hire-screen.png"
                alt="Looking to Hire candidate account screen"
                width={568}
                height={1231}
                priority
                className="h-auto w-[250px] sm:w-[310px]"
              />
            </div>
          </div>
        </section>

        <StorySection label="The situation" lead>
          <p>
            The job market in Nigeria and across Africa is fragmented, with job seekers struggling to find the right opportunities and employers unable to discover qualified talent. Traditional job boards lack personalization and real-time communication, creating friction in both hiring and application workflows.
          </p>
        </StorySection>

        <StorySection label="Product vision">
          <p>
            Build a mobile-first job platform that modernizes talent discovery and recruitment across iOS and Android. The platform balances two user needs: job seekers seeking personalized opportunities with one-tap applications, and employers looking to hire qualified talent efficiently. Real-time messaging replaces email delays, while profile visibility creates mutual discovery.
          </p>
        </StorySection>

        <StorySection label="Core features">
          <p>
            Job seekers build professional profiles and upload resumes in minutes, discover personalized opportunities based on skills and experience, apply in one tap, track applications, message employers securely, and save jobs for later. Employers browse qualified candidates, post roles targeting specific skills, and communicate directly with applicants. Cross-platform consistency ensures the same experience on iOS and Android.
          </p>
        </StorySection>

        <StorySection label="Design architecture">
          <p>
            The product is structured around two connected ecosystems: a candidate journey for discovery, applications, messaging, and profile growth, and an employer journey for posting roles, evaluating talent, and managing conversations. Shared navigation rules, reusable interaction patterns, scalable components, and explicit system states keep both sides coherent. Flutter carries that system across iOS and Android, while Firebase powers the real-time events that the interface communicates to users.
          </p>
        </StorySection>

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
                href="https://apps.apple.com/ng/app/looking-to-hire-job-search/id6752956415"
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
