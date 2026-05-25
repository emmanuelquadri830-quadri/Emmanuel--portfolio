// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PROJECTS HERE
//
// image  → Behance CDN URL, or drop a file into public/images/ and use '/images/filename.jpg'
// link   → full URL to your case study (Behance, Figma, live site, etc.)
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  role: string
  year: string
  description: string
  tags: string[]
  image?: string
  link?: string
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'DRIVEME — Car Rental App',
    role: 'UI/UX Design',
    year: '2024',
    description:
      'End-to-end UX case study for a car rental mobile app — from research and user flows through wireframes and high-fidelity prototypes, focusing on a frictionless booking experience.',
    tags: ['Mobile', 'UI/UX', 'Case Study'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/eecd3d215952939.Y3JvcCwxMTYyLDkwOSwxMTcsMA.png',
    link: 'https://www.behance.net/gallery/215952939/DRIVEME-Car-Rental-App-(Case-study)',
  },
  {
    id: '02',
    title: 'BuddyVest — Save & Budget App',
    role: 'UI/UX Design',
    year: '2023',
    description:
      'Designed a fintech mobile app for personal savings and budgeting — intuitive goal-setting flows, spending insights, and a clean, accessible interface that makes money management feel effortless.',
    tags: ['Mobile', 'Fintech', 'UI/UX'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/02fbba202100551.Y3JvcCwxODUxLDE0NDgsNDEsMA.png',
    link: 'https://www.behance.net/gallery/202100551/(BuddyVest)-Save-and-Budget-App-UIUX-Case-study',
  },
  {
    id: '03',
    title: 'Scupay — Website',
    role: 'UI/UX Design',
    year: '2024',
    description:
      'Designed a modern, conversion-focused website for Scupay — clear information architecture, research-backed navigation, and full responsive optimisation across desktop and mobile.',
    tags: ['Web Design', 'UI/UX', 'Responsive'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/288b7c205443583.Y3JvcCwxNDEyLDExMDQsNzYsNjI.jpg',
    link: 'https://www.behance.net/gallery/205443583/Scupay-A-website-Case-study',
  },
  {
    id: '04',
    title: 'Teacher Management Dashboard',
    role: 'UI/UX Design',
    year: '2024–2025',
    description:
      'Role-specific LMS dashboard for teachers, admins, parents, and instructors — structured layouts for performance metrics, class activities, and communications, reducing cognitive load across all user types.',
    tags: ['Dashboard', 'EdTech', 'Design System'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/b46f5d206602791.Y3JvcCwyMTQwLDE2NzMsMCw3OQ.png',
    link: 'https://www.behance.net/gallery/206602791/Teacher-managements-dashboard',
  },
]
