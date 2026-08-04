import { cn } from '@/lib/utils'

interface PaintDividerProps {
  align?: 'left' | 'center' | 'right'
  className?: string
}

/** A subtle paint-drip accent used to visually connect sections as the page scrolls. */
export function PaintDivider({ align = 'center', className }: PaintDividerProps) {
  const justify = align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center'

  return (
    <div aria-hidden className={cn('pointer-events-none relative mx-auto flex max-w-6xl px-6 sm:px-10', justify, className)}>
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-40">
        <line x1="4" y1="20" x2="96" y2="20" stroke="url(#paint-divider-line)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 7" />
        <circle cx="102" cy="20" r="5" fill="var(--color-violet)" opacity="0.7" />
        <circle cx="112" cy="20" r="2.5" fill="var(--color-acid)" opacity="0.8" />
        <circle cx="107" cy="27" r="1.5" fill="var(--color-acid)" opacity="0.6" />
        <defs>
          <linearGradient id="paint-divider-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--color-violet)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-violet)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
