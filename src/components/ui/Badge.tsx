import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'primary'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100': variant === 'default',
            'border border-[var(--border-color)] text-[var(--text-color)]': variant === 'outline',
            'bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] border border-[var(--color-primary)]/20':
              variant === 'primary',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'
