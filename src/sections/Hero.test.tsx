import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from '@/context/ThemeContext'
import { PERSONAL_INFO } from '@/lib/constants'

describe('Hero Section', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </ThemeProvider>
    )
    expect(screen.getByText(new RegExp(`Hi, I'm ${PERSONAL_INFO.name.split(' ')[0]}`))).toBeInTheDocument()
  })
})
