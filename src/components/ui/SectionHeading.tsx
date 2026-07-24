import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  eyebrow?: string
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, eyebrow, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col space-y-4 mb-12', className)} {...props}>
        {eyebrow && (
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.15em]">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-color)]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)
SectionHeading.displayName = 'SectionHeading'
