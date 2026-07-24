import { useState, useEffect } from 'react'

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      
      // Find the first element whose top is below the scroll position
      for (const id of [...ids].reverse()) {
        const element = document.getElementById(id)
        if (element) {
          const { top } = element.getBoundingClientRect()
          // top is relative to viewport, so we add window.scrollY
          const elementTop = top + window.scrollY
          if (scrollPosition >= elementTop - 100) {
            setActiveId(id)
            return
          }
        }
      }
      setActiveId('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}
