import React from 'react'
import { motion } from 'motion/react'
import { Briefcase, GraduationCap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EXPERIENCE_DATA } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-28">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & Education"
          subtitle="My education and experience journey."
        />

        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-8">
          {EXPERIENCE_DATA.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[25px] top-0 bg-[var(--color-primary)] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-[var(--color-primary)]/30 ring-4 ring-white dark:ring-[#0a0a0a]">
                {item.id.startsWith('edu') ? <GraduationCap size={22} /> : <Briefcase size={20} />}
              </div>
              <div className="pl-10 md:pl-12 pt-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-color)]">{item.role}</h3>
                  <span className="text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{item.company}</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
