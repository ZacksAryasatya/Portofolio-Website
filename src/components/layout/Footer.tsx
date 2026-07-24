import React from 'react'
import { ArrowUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PERSONAL_INFO } from '@/lib/constants'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-[#070c13] border-t border-[var(--border-color)] py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-extrabold tracking-tighter text-[var(--text-color)] group flex items-center gap-1">
            <span>Z's Portofolio</span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block" />
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-[var(--border-color)] text-[var(--text-color)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </Container>
    </footer>
  )
}
