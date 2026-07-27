import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Award, X, Eye, ChevronRight, ChevronLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CERTIFICATES_DATA, type Certificate } from '@/data/certificates'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const selectedImages = selectedCert?.galleryImageUrls ?? (selectedCert ? [selectedCert.imageUrl] : [])
  const canGoNext = selectedImages.length > 1 && activeImageIndex < selectedImages.length - 1
  const canGoPrev = selectedImages.length > 1 && activeImageIndex > 0

  return (
    <section id="certificates" className="py-24 scroll-mt-28 bg-gray-50/50 dark:bg-gray-900/10">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Certificates & Awards."
          subtitle="Recognitions, courses, and competitions I have participated in."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                hoverable 
                className="h-full flex flex-col group cursor-pointer overflow-hidden border border-[var(--border-color)] bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => {
                  setSelectedCert(cert)
                  setActiveImageIndex(0)
                }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-b border-[var(--border-color)]">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium">
                    <Eye size={20} />
                    <span>View Certificate</span>
                  </div>
                </div>
                
                <CardHeader className="flex flex-col flex-grow p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs font-medium border-[var(--color-primary)]/40 text-[var(--color-primary)]">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <Award size={15} className="text-amber-500 shrink-0" />
                    <span>Issued by {cert.issuer}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-color)] flex flex-col cursor-default"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative overflow-auto max-h-[75vh] bg-black/5 flex items-center justify-center p-2">
                {canGoPrev && (
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Previous certificate image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                <img
                  src={selectedImages[activeImageIndex]}
                  alt={`${selectedCert.title} ${activeImageIndex + 1}`}
                  className="w-auto max-h-[70vh] object-contain rounded-lg"
                />

                {canGoNext && (
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Next certificate image"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-color)]">{selectedCert.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                    <Award size={15} className="text-amber-500" /> Issued by {selectedCert.issuer}
                  </p>
                </div>
                <Badge variant="outline" className="self-start sm:self-center text-xs px-3 py-1">
                  {selectedCert.category}
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
