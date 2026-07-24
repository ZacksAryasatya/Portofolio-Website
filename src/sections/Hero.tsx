import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SOCIALS } from '@/data/socials'
import { PERSONAL_INFO } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-[var(--color-primary)]/15 rounded-full blur-[120px]" />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] text-[var(--text-color)]"
          >
            Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}.<br />
            <span className="text-[var(--color-primary)]">
              {PERSONAL_INFO.title}.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            I build responsive, user-friendly, and modern web applications with a focus on clean interfaces and maintainable code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto p-0">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full h-full px-6 py-3 text-sm md:text-base">
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors p-2"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
