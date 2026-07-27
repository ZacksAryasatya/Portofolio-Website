import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import { useTheme } from '@/context/ThemeContext'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  
  const sectionIds = NAV_LINKS.map(link => link.href.substring(1))
  const activeSection = useScrollSpy(sectionIds, 100)
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-[var(--bg-color)]/80 backdrop-blur-lg border-b border-[var(--border-color)] py-4 shadow-sm'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[var(--text-color)] group flex items-center gap-1">
            <span>Z's Portofolio</span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block transition-transform group-hover:scale-150" />
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = isHomePage && activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'text-sm font-semibold transition-colors relative py-1',
                  isActive ? 'text-[var(--color-primary)]' : 'text-gray-600 dark:text-gray-300 hover:text-[var(--text-color)]'
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-primary)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--text-color)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white dark:bg-gray-900 border border-[var(--border-color)] shadow-xl rounded-2xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {NAV_LINKS.map((link) => {
                const isActive = isHomePage && activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'px-4 py-3 text-lg font-semibold rounded-lg mb-1',
                      isActive
                        ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                        : 'text-[var(--text-color)] hover:bg-gray-50 dark:hover:bg-gray-800'
                    )}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
