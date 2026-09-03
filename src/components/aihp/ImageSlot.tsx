import { ImagePlus } from 'lucide-react'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'

type Tone = 'violet' | 'acid' | 'mint'

const toneGradients: Record<Tone, string> = {
  violet: 'from-violet/25 via-violet-deep/15 to-transparent',
  acid: 'from-acid/25 via-mint/10 to-transparent',
  mint: 'from-mint/20 via-violet/15 to-transparent',
}

interface ImageSlotProps {
  src?: string
  alt: string
  label?: string
  hint: string
  tone?: Tone
  aspect?: string
  className?: string
}

/**
 * A single image "slot" for a project that's still waiting on real artwork.
 * Drop a file named per `hint` into src/assets/images/projects/aihp/ and it
 * picks it up automatically, no code changes needed.
 */
export function ImageSlot({ src, alt, label, hint, tone = 'violet', aspect = 'aspect-[4/5]', className }: ImageSlotProps) {
  if (src) {
    return (
      <figure className={cn('flex flex-col gap-2.5', className)}>
        <Lightbox src={src} alt={alt} triggerClassName="rounded-2xl block h-full">
          <div className={cn('h-full w-full overflow-hidden rounded-2xl border border-line bg-surface', aspect)}>
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Lightbox>
        {label && <figcaption className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">{label}</figcaption>}
      </figure>
    )
  }

  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      <div
        className={cn(
          'relative flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-dashed border-line bg-gradient-to-br px-4 text-center',
          toneGradients[tone],
          aspect,
        )}
      >
        <ImagePlus size={18} className="text-fg-muted/60" />
        {label && <span className="text-xs font-medium text-fg-muted">{label}</span>}
        <span className="rounded-full bg-ink/40 px-2.5 py-1 font-mono text-[10px] text-fg-muted/70">{hint}</span>
      </div>
    </div>
  )
}
