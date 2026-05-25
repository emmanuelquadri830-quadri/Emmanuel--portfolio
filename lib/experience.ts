// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EXPERIENCE HERE
// Entries are displayed most-recent first.
// ─────────────────────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  location: string
  period: string
  current?: boolean     // shows a live "Present" badge
  description: string
}

export const experience: ExperienceEntry[] = [
  {
    id: '01',
    role: 'Graphics Design / UI/UX Designer',
    company: 'Punch Digital Agency',
    location: 'San Francisco (Remote)',
    period: 'Mar 2024 — Present',
    current: true,
    description:
      'Designing user-centered digital products and polished UI components in Figma, Framer, and WordPress, with organized file structures for clean developer handoff.',
  },
  {
    id: '02',
    role: 'Graphics Design Instructor',
    company: 'Greenware Academy',
    location: 'Lagos',
    period: 'May 2025 — Present',
    current: true,
    description:
      'Teaching UI/UX fundamentals — research, wireframing, prototyping, usability testing — and industry tools like Figma and Adobe XD, mentoring students toward real-world portfolios.',
  },
  {
    id: '03',
    role: 'UI/UX Designer / Graphics Designer',
    company: 'Shirewood Technologies',
    location: 'UK (Remote)',
    period: 'Oct 2024 — Mar 2025',
    description:
      'Designed a Learning Management System dashboard with role-specific interfaces for teachers, parents, admins, and instructors, simplifying access to performance metrics and class activities.',
  },
  {
    id: '04',
    role: 'Graphics Design / UI/UX Designer',
    company: 'Flexisaf Edu',
    location: 'Lagos',
    period: 'Mar 2023 — Aug 2023',
    description:
      'Built a design system that cut design discrepancies 60%, and ran user research with 250+ participants that improved key task completion rates 50%.',
  },
  {
    id: '05',
    role: 'UI/UX Designer',
    company: 'HNG',
    location: 'Lagos',
    period: 'Jan 2022 — Jul 2022',
    description:
      'Created responsive, user-centered interfaces and high-fidelity Figma prototypes, collaborating with developers for accurate implementation.',
  },
]
