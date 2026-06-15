import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quadri Emmanuel — Product Designer',
  description:
    'Product Designer with 3+ years creating intuitive, user-centered digital products across SaaS, EdTech, and enterprise platforms. Based in Lagos, Nigeria.',
  keywords: ['Product Designer', 'UI/UX', 'Figma', 'Design Systems', 'Lagos', 'Nigeria'],
  authors: [{ name: 'Quadri Emmanuel Adetayo' }],
  openGraph: {
    title: 'Quadri Emmanuel — Product Designer',
    description: 'Turning business goals into clear, accessible digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
