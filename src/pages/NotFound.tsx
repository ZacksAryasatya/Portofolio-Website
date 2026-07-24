import React from 'react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pt-20">
      <Container className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-[var(--color-primary)] mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-color)] mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button className="p-0">
          <Link to="/" className="inline-flex items-center justify-center w-full h-full px-6 py-3 md:px-8 md:py-4">
            Return Home
          </Link>
        </Button>
      </Container>
    </main>
  )
}
