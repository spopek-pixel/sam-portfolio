import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import type { WireframeExplorationData } from '@/data/myoutfrontWireframes'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import './wireframeCanvas.css'

export function WireframeExploration({ data }: { data: WireframeExplorationData }) {
  const slides = data.groups.flatMap((group) => group.options.map((option) => ({ group: group.name, ...option })))
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const current = slides[index]

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  useEffect(() => {
    if (!expanded) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded])

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Wireframes" title={data.title} description={data.subtitle} className="mb-12" />

        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col gap-3">
            <div className="relative">
              <div className="wf-scope max-h-[65vh] overflow-auto rounded-xl border border-line bg-[#f0eee9] [zoom:0.5] sm:[zoom:0.68] lg:[zoom:0.9]">
                <div key={current.id} dangerouslySetInnerHTML={{ __html: current.html }} />
              </div>

              <button
                type="button"
                onClick={() => setExpanded(true)}
                aria-label={`Expand wireframe: ${current.group} ${current.id}`}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/70 text-fg backdrop-blur-sm transition-transform hover:scale-105"
              >
                <ZoomIn size={16} />
              </button>

              <button
                type="button"
                onClick={prev}
                aria-label="Previous screen"
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-fg backdrop-blur-sm transition-transform hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next screen"
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-fg backdrop-blur-sm transition-transform hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="kicker">{current.group}</span>
                  <span className="rounded bg-violet/15 px-1.5 py-0.5 font-mono text-[11px] text-violet-tint">{current.id}</span>
                </div>
                <span className="font-mono text-xs text-fg-muted">
                  {index + 1} / {slides.length}
                </span>
              </div>
              <p className="text-sm text-fg-muted">{current.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to ${slide.group} ${slide.id}`}
                    className={cn(
                      'h-1.5 rounded-full transition-all',
                      i === index ? 'w-4 bg-violet-tint' : 'w-1.5 bg-fg/40 hover:bg-fg/60',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {data.synthesis && (
          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 flex max-w-4xl gap-3 rounded-2xl border border-line bg-violet/10 p-6">
              <ArrowRight size={18} className="mt-0.5 shrink-0 text-violet-tint" />
              <p className="text-sm leading-relaxed text-fg">{data.synthesis}</p>
            </div>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-md"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90vh] max-w-[92vw] overflow-auto rounded-lg bg-[#f0eee9] shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="wf-scope [zoom:0.65] sm:[zoom:0.85] lg:[zoom:1.1]">
                <div key={current.id} dangerouslySetInnerHTML={{ __html: current.html }} />
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                prev()
              }}
              aria-label="Previous screen"
              className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-fg transition-colors hover:border-violet-tint"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                next()
              }}
              aria-label="Next screen"
              className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-fg transition-colors hover:border-violet-tint"
            >
              <ChevronRight size={20} />
            </button>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-fg transition-colors hover:border-violet-tint"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
