import React from 'react'
import { Outlet } from 'react-router'
import { MotionConfig } from 'motion/react'
import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen flex flex-col font-sans selection:bg-[var(--color-primary)] selection:text-white">
          <Navbar />
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
