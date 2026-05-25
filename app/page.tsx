import { Nav } from '@/components/Nav'
import ParticleHero from '@/components/ParticleHero'
import { Work } from '@/components/Work'
import { Experience } from '@/components/Experience'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <ParticleHero />
      <Work />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}
