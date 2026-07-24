
import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SKILLS_DATA } from '@/data/skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-28">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Technologies"
          subtitle="The tools and technologies behind every project I build."
        />
        
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {SKILLS_DATA.map((category) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="p-8 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-primary)]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-color)]">{category.title}</h3>
              </div>
              <div className="flex flex-col gap-6">
                {category.subcategories ? (
                  category.subcategories.map((sub) => (
                    <div key={sub.name} className="space-y-3">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{sub.name}</h4>
                      <div className="flex flex-wrap gap-3">
                        {sub.items.map((skill) => (
                          <motion.span
                            key={skill}
                            variants={itemVariants}
                            className="px-4 py-2 bg-[var(--color-primary)]/5 dark:bg-[var(--color-primary)]/10 text-[var(--text-color)] text-sm font-semibold rounded-lg border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {category.skills?.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        className="px-4 py-2 bg-[var(--color-primary)]/5 dark:bg-[var(--color-primary)]/10 text-[var(--text-color)] text-sm font-semibold rounded-lg border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
