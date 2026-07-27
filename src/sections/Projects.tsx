
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PROJECTS_DATA } from '@/data/projects'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-28 bg-white dark:bg-gray-900/20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Some of my recent projects."
          subtitle="A selection of recent projects I've built."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <Card hoverable className="h-full flex flex-col group">
                <Link to={`/project/${project.slug}`} className="block overflow-hidden relative bg-gray-50 dark:bg-gray-900/50 border-b border-[var(--border-color)]">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/project/${project.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                        <CardTitle>{project.title}</CardTitle>
                      </Link>
                    </div>
                    <CardDescription>{project.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
