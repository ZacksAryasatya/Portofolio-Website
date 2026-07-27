import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PROJECTS_DATA } from '@/data/projects'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS_DATA.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[var(--text-color)]">Project Not Found</h1>
          <p className="text-gray-500 mb-8">The project you are looking for doesn't exist.</p>
          <Button>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-24 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-[var(--color-primary)] transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-color)] mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl">
            {project.shortDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          {project.gallery && project.gallery.length > 0 ? (
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="flex-none w-[90%] md:w-[85%] lg:w-[80%] snap-center rounded-3xl overflow-hidden shadow-xl border border-[var(--border-color)]">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)] max-w-4xl mx-auto">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-color)] mb-4">About the Project</h2>
            <div className="prose dark:prose-invert prose-lg text-gray-600 dark:text-gray-400">
              <p>{project.description}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-[var(--border-color)] h-fit"
          >
            <h3 className="text-lg font-bold text-[var(--text-color)] mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  )
}
