import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Certificates } from '@/sections/Certificates'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
    </main>
  )
}
