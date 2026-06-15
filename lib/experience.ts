export interface ExperienceEntry {
  id: string
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  description: string
}

export const experience: ExperienceEntry[] = [
  {
    id: '01',
    role: 'Product Designer / UI/UX Designer',
    company: 'Punch Digital Agency',
    location: 'Lagos, Nigeria',
    period: 'Mar 2024 to Present',
    current: true,
    description:
      'Lead design across client products spanning SaaS, AI, and marketing platforms, owning end to end flows from research to developer handoff. Build production ready interfaces in Figma with organized component libraries and tokens that cut handoff friction with engineering.',
  },
  {
    id: '02',
    role: 'UI/UX Instructor',
    company: 'Greenware Academy',
    location: 'Lagos, Nigeria',
    period: 'May 2025 to Jan 2026',
    current: false,
    description:
      'Trained students in UI/UX fundamentals: user research, wireframing, prototyping, and usability testing, through hands on project based learning and mentoring them toward real world portfolios.',
  },
  {
    id: '03',
    role: 'UI/UX Designer / Graphics Designer',
    company: 'Shirewood Technologies',
    location: 'United Kingdom (Remote)',
    period: 'Oct 2024 to Mar 2025',
    description:
      'Designed a multi role LMS dashboard for teachers, parents, administrators, and instructors, tailoring each interface to its user group workflow and simplifying access to performance metrics and class activities. Delivered polished UI components in Figma with organized files for clean developer handoff.',
  },
  {
    id: '04',
    role: 'Graphics Design / UI/UX Designer (Internship)',
    company: 'Flexisaf Edu',
    location: 'Lagos, Nigeria',
    period: 'Mar 2023 to Aug 2023',
    description:
      'Built a cohesive design system used across multiple platforms, reducing design discrepancies by 60%. Ran user research and testing with 250+ participants, generating insights that improved key task completion rates by 50%.',
  },
  {
    id: '05',
    role: 'UI/UX Designer (Internship)',
    company: 'HNG',
    location: 'Lagos, Nigeria',
    period: 'Jan 2022 to Jul 2022',
    description:
      'Created visual and interaction designs for responsive, intuitive experiences, built high-fidelity prototypes in Figma, and collaborated with developers to ensure accurate implementation.',
  },
]
