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
    company: 'VivaFemini',
    location: 'Nigeria (Remote)',
    period: 'Aug 2025 to Present',
    current: true,
    description:
      'Designed end-to-end experiences for a live women\'s healthcare platform, including cycle tracking, personalized insights, role-based Admin, Super Admin, and Clinical dashboards, and reusable healthcare product systems.',
  },
  {
    id: '02',
    role: 'UI/UX / Product Design Instructor',
    company: 'GreenWare Tech',
    location: 'Lagos State, Nigeria (Remote)',
    period: 'Apr 2025 to Sep 2026',
    description:
      'Teach UI/UX principles, wireframing, prototyping, and user research while mentoring students through real-world projects, design critique, and professional presentation.',
  },
  {
    id: '03',
    role: 'Product Designer / UI/UX Designer',
    company: 'Punch Group',
    location: 'United States (Remote)',
    period: 'Aug 2024 to Jun 2026',
    description:
      'Designed end-to-end experiences for Prospera AI, Medstantia, and Oravanti Immigration System, building reusable component libraries and design tokens while collaborating closely with project managers and frontend developers.',
  },
  {
    id: '04',
    role: 'Product Designer',
    company: 'Shirewood Technologies',
    location: 'United Kingdom (Remote)',
    period: 'Feb 2025 to Mar 2025',
    description:
      'Designed a multi-role LMS dashboard across teachers, parents, students, and administrators, mapping distinct user flows and delivering organized Figma components and handoff documentation.',
  },
  {
    id: '05',
    role: 'UI/UX Designer',
    company: 'FlexiSAF Edusoft Limited',
    location: 'Lagos, Nigeria',
    period: 'Jan 2024 to Jul 2024',
    description:
      'Designed user-centered digital products with wireframes, prototypes, and high-fidelity UI in Figma, Framer, and WordPress. Built a cohesive design system that reduced discrepancies by 60% and conducted research with 250+ participants.',
  },
  {
    id: '06',
    role: 'UI/UX Designer',
    company: 'HNG Tech',
    location: 'Lagos, Nigeria',
    period: 'Jul 2022 to Dec 2022',
    description:
      'Created visual and interaction designs for responsive, intuitive experiences, built high-fidelity prototypes in Figma, and collaborated with developers to ensure accurate implementation.',
  },
]
