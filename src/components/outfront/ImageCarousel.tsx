import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'

export interface CarouselSlide {
  label: string
  images: { src: string; alt: string }[]
}

export function ImageCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = useState(0)
  const current = slides[index]

  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <div key={current.label} className={cn('grid gap-4', current.images.length > 1 && 'sm:grid-cols-2')}>
          {current.images.map((image) => (
            <Lightbox key={image.src} src={image.src} alt={image.alt}>
              <div className="aspect-[3/2] w-full overflow-hidden rounded-xl border border-line bg-surface">
                <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Lightbox>
          ))}
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            next()
          }}
          aria-label="Next colorway"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-fg backdrop-blur-sm transition-transform hover:scale-105"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{current.label}</span>
        <div className="flex gap-1.5">
          {slides.map((slide, i) => (
            <span key={slide.label} className={i === index ? 'h-1.5 w-4 rounded-full bg-acid' : 'h-1.5 w-1.5 rounded-full bg-fg/40'} />
          ))}
        </div>
      </div>
    </div>
  )
}
