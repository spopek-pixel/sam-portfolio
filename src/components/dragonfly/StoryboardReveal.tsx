import { Lightbox } from '@/components/ui/Lightbox'

interface StoryboardRevealProps {
  src: string
  alt: string
  className?: string
}

export function StoryboardReveal({ src, alt, className }: StoryboardRevealProps) {
  return (
    <div className={className}>
      <Lightbox src={src} alt={alt} triggerClassName="rounded-2xl border border-line shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
        <div className="overflow-hidden rounded-2xl">
          <img src={src} alt={alt} className="w-full" loading="lazy" />
        </div>
      </Lightbox>
    </div>
  )
}
