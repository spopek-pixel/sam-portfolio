import { cn } from '@/lib/utils'

interface GradientBlobProps {
  className?: string
  tone?: 'violet' | 'acid' | 'mixed'
}

const tones: Record<NonNullable<GradientBlobProps['tone']>, string> = {
  violet: 'from-violet via-violet-deep to-transparent',
  acid: 'from-acid via-mint to-transparent',
  mixed: 'from-violet via-acid to-transparent',
}

export function GradientBlob({ className, tone = 'mixed' }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full bg-gradient-to-br opacity-30 blur-[100px]',
        tones[tone],
        className,
      )}
    />
  )
}

export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay', className)}
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  )
}
