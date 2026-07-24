import React, { useState } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SOCIALS } from '@/data/socials'
import { contactFormSchema, type ContactFormValues } from '@/lib/validations'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error("Missing EmailJS credentials in environment variables");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          to_email: 'zack.aryasatya@gmail.com', // Tujuan spesifik
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 scroll-mt-28 bg-white dark:bg-gray-900/20">
      <Container>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something together."
              subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
            />

            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-4">Connect with me directly:</h3>
              <div className="flex flex-col gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors group"
                  >
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-[var(--color-primary)]/10">
                      <social.icon size={20} className="group-hover:text-[var(--color-primary)]" />
                    </div>
                    <span className="font-medium text-lg">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--surface-color)] rounded-3xl p-6 md:p-8 border border-[var(--border-color)] shadow-xl w-full max-w-md mx-auto lg:mr-0 lg:ml-auto"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-color)] mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-[var(--border-color)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow text-[var(--text-color)]"
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-color)] mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-[var(--border-color)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow text-[var(--text-color)]"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-color)] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  {...register('message')}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-[var(--border-color)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow text-[var(--text-color)] resize-y min-h-[100px]"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={18} className="ml-2" />}
              </Button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  <p className="text-sm font-medium">Thanks for reaching out! I'll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">Something went wrong. Please try emailing me directly.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
