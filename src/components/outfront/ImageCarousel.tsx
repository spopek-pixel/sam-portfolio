import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Lightbox } from '@/components/ui/Lightbox'

export interface CarouselImage {
  src: string
  alt: string
  label: string
}

export function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0)
  const current = images[index]

  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-line bg-surface">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Lightbox src={current.src} alt={current.alt} className="h-full" triggerClassName="h-full">
              <img src={current.src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </Lightbox>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            next()
          }}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-fg backdrop-blur-sm transition-transform hover:scale-105"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-3 left-3 z-20 flex gap-1.5">
          {images.map((image, i) => (
            <span
              key={image.src}
              className={i === index ? 'h-1.5 w-4 rounded-full bg-acid' : 'h-1.5 w-1.5 rounded-full bg-fg/40'}
            />
          ))}
        </div>
      </div>

      <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{current.label}</span>
    </div>
  )
}
