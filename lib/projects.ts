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
  imageFit?: 'cover' | 'contain'
  imageMobileFit?: 'cover' | 'contain'
  imagePosition?: string
  imageBackground?: string
  coverStyle?: 'editorial'
  gallery?: string[]
  galleryUrl?: string
  galleryFit?: 'cover' | 'contain'
  galleryDevice?: 'browser' | 'laptop'
  link?: string
  linkLabel?: string
  caseStudyLink?: string
}

export const projects: Project[] = [
  {
    id: '07',
    title: 'Looking to Hire',
    role: 'Mobile Designer',
    year: '2026 · Featured',
    description: 'A modern cross-platform job search and recruitment app connecting job seekers and employers through personalized recommendations, one-tap applications, secure in-app messaging, and profile management.',
    tags: ['Figma', 'User Research', 'UX/UI Design', 'Prototyping', 'Design System', 'Usability Testing'],
    image: '/images/looking-to-hire-cover-v2.png',
    imageFit: 'cover',
    imagePosition: 'center',
    imageBackground: '#101016',
    link: 'https://apps.apple.com/ng/app/looking-to-hire-job-search/id6752956415',
    caseStudyLink: '/work/looking-to-hire',
  },
  {
    id: '10',
    title: 'Travel Pride',
    role: 'Product & Web Design',
    year: '2024',
    description: 'A responsive travel agency website designed to make destination discovery and trip planning feel clear, engaging, and effortless through strong visual hierarchy and intuitive booking journeys.',
    tags: ['Product Design', 'Web Design', 'Interaction Design', 'UX/UI', 'Figma', 'Prototyping'],
    image: '/images/travel-pride-1.webp',
    imageFit: 'contain',
    imageBackground: '#E9F0FE',
    link: 'https://www.behance.net/gallery/216630617/Travel-Pride-Travel-Agency-Website',
  },
  {
    id: '08',
    title: 'Space Transfers',
    role: 'Product Design & Development',
    year: '2026 · Ongoing',
    description: 'A DTF print-on-demand platform built as four coordinated applications over one API. Customers arrange artwork on a canvas, an auto-nesting engine packs it onto standard sheets with minimal waste, and each job is routed through fulfilment, printing, shipping, and delivery.',
    tags: ['Figma', 'UX Research', 'UI Design', 'Design System', 'Prototyping', 'React', 'TypeScript', 'Canvas', 'Gemini'],
    image: '/images/space-transfers-cover.png',
    gallery: ['/images/space-transfers-empty-screen.png', '/images/space-transfers-editor.png', '/images/space-transfers-sign-in-screen.png', '/images/space-transfers-create-account-screen.png'],
    galleryUrl: 'https://space-transfer.vercel.app',
    link: 'https://space-transfer.vercel.app',
    caseStudyLink: '/work/space-transfers',
  },
  {
    id: '09',
    title: 'Space Transfers Admin',
    role: 'Product Design & Frontend Development',
    year: '2026 · Live',
    description: 'A role-based operations portal for onboarding fulfilment partners and giving administrators secure access to the Space Transfers network. The experience brings account setup, partner management, order oversight, and operational workflows into one clear dashboard system.',
    tags: ['Figma', 'Admin UX', 'Dashboard Design', 'Design System', 'User Flows', 'React', 'TypeScript', 'Responsive UI'],
    image: '/images/space-transfers-admin-auth.png',
    gallery: ['/images/space-transfers-admin-auth.png', '/images/space-transfers-admin-dashboard.png', '/images/space-transfers-admin-partners.png', '/images/space-transfers-admin-profile.png', '/images/space-transfers-admin-settings.png'],
    galleryUrl: 'https://space-transfer-admin.vercel.app/auth',
    galleryFit: 'contain',
    galleryDevice: 'laptop',
    link: 'https://space-transfer-admin.vercel.app/auth',
    linkLabel: 'Visit Live',
  },
  {
    id: '11',
    title: 'Bactose',
    role: 'Product Design & E-commerce',
    year: '2026 · Live',
    description: 'A responsive direct-to-consumer wellness storefront that turns an unfamiliar seven-day monthly probiotic routine into a clear journey across product discovery, education, subscription selection, and purchase.',
    tags: ['Product Design', 'E-commerce UX', 'Responsive Design', 'Information Architecture', 'Conversion Design', 'Shopify'],
    image: '/images/bactose-home.png',
    imageFit: 'cover',
    imagePosition: 'center top',
    imageBackground: '#EEB991',
    gallery: ['/images/bactose-home.png', '/images/bactose-product.png', '/images/bactose-education.png'],
    galleryUrl: 'https://bactose.com',
    galleryFit: 'cover',
    link: 'https://bactose.com',
    linkLabel: 'Visit Live',
    caseStudyLink: '/work/bactose',
  },
  {
    id: '01',
    title: 'DRIVEME Car Rental App',
    role: 'UI/UX Design',
    year: '2024',
    description:
      'End to end UX case study for a car rental mobile app, from research and user flows through wireframes and high fidelity prototypes, focusing on a frictionless booking experience.',
    tags: ['Mobile', 'UI/UX', 'Case Study'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/eecd3d215952939.Y3JvcCwxMTYyLDkwOSwxMTcsMA.png',
    imageFit: 'contain',
    imageBackground: '#000000',
    link: 'https://www.behance.net/gallery/215952939/DRIVEME-Car-Rental-App-(Case-study)',
  },
  {
    id: '02',
    title: 'BuddyVest Save & Budget App',
    role: 'UI/UX Design',
    year: '2023',
    description:
      'Designed a fintech mobile app for personal savings and budgeting with intuitive goal setting flows, spending insights, and a clean accessible interface that makes money management feel effortless.',
    tags: ['Mobile', 'Fintech', 'UI/UX'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/02fbba202100551.Y3JvcCwxODUxLDE0NDgsNDEsMA.png',
    link: 'https://www.behance.net/gallery/202100551/(BuddyVest)-Save-and-Budget-App-UIUX-Case-study',
  },
  {
    id: '03',
    title: 'Scupay Website',
    role: 'UI/UX Design',
    year: '2024',
    description:
      'Designed a modern, conversion focused website for Scupay with clear information architecture, research backed navigation, and full responsive optimisation across desktop and mobile.',
    tags: ['Web Design', 'UI/UX', 'Responsive'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/288b7c205443583.Y3JvcCwxNDEyLDExMDQsNzYsNjI.jpg',
    link: 'https://www.behance.net/gallery/205443583/Scupay-A-website-Case-study',
  },
  {
    id: '04',
    title: 'Teacher Management Dashboard',
    role: 'UI/UX Design',
    year: '2024 to 2025',
    description:
      'Role specific LMS dashboard for teachers, admins, parents, and instructors with structured layouts for performance metrics, class activities, and communications, reducing cognitive load across all user types.',
    tags: ['Dashboard', 'EdTech', 'Design System'],
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/b46f5d206602791.Y3JvcCwyMTQwLDE2NzMsMCw3OQ.png',
    link: 'https://www.behance.net/gallery/206602791/Teacher-managements-dashboard',
  },
  {
    id: '06',
    title: 'VivaFemini',
    role: 'Product Designer',
    year: '2026 · Live',
    description:
      "Africa's first integrated women's health ecosystem app, guiding women from their first period through pregnancy, postpartum, fertility, menopause, and beyond with six clinically backed trackers, an AI health companion, and a supportive community.",
    tags: ['Figma', 'UX Research', 'Mobile Design', 'Health Tech', 'Design System', 'Prototyping'],
    image: '/images/vivafemini-cover.png',
    imageFit: 'cover',
    imagePosition: 'center',
    imageMobileFit: 'contain',
    imageBackground: '#0A0509',
    coverStyle: 'editorial',
    link: 'https://play.google.com/store/apps/details?id=com.vivafemini.app',
    linkLabel: 'View on Play',
    caseStudyLink: '/work/vivafemini',
  },
  {
    id: '05',
    title: 'Sendcoins',
    role: 'Product Designer',
    year: '2026 · Live',
    description:
      'A stablecoin-powered remittance and payments app that lets users send, receive, and convert money globally through multi-currency fiat and crypto wallets, pairing bank-grade clarity with on-chain speed.',
    tags: ['Figma', 'Fintech', 'Mobile Design', 'UX Research', 'Design System', 'Prototyping'],
    image: '/images/sendcoins-cover.png',
    imageFit: 'contain',
    imagePosition: 'center',
    imageBackground: '#050408',
    link: 'https://apps.apple.com/us/app/sendcoins/id6761408753',
    linkLabel: 'View on App Store',
    caseStudyLink: '/work/sendcoins',
  },
]
