import React from 'react'
import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import profilePhoto from '@/assets/images/Pict.jpg'

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-28 bg-white dark:bg-gray-900/20">
      <Container>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Learn. Build. Improve."
            />
            <div className="prose dark:prose-invert prose-lg text-gray-600 dark:text-gray-400">
              <p>
                A frontend developer who understands how to build responsive, user-friendly, and modern web applications. 
                Experienced in React.js and Tailwind CSS, with basic knowledge of Flutter and Vue.js.
              </p>
              <p>
                Passionate about creating clean interfaces, writing maintainable code, and continuously learning new technologies.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Zaky Aryasatya Adinata" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-primary)]/20 rounded-full blur-[40px] -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--color-highlight)]/20 rounded-full blur-[40px] -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
