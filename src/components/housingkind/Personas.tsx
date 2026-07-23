import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import persona1 from '@/assets/images/projects/housingkind/persona1.png'
import persona2 from '@/assets/images/projects/housingkind/persona2.png'
import persona3 from '@/assets/images/projects/housingkind/persona3.png'

const personaImages = [persona1, persona2, persona3]

const arrowButtonClasses =
  'rounded-full border border-line bg-surface/60 p-2.5 text-fg transition-colors hover:border-violet-tint hover:bg-surface-raised'

export function Personas() {
  const { intro, roles } = housingkind.personas
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const reducedMotion = usePrefersReducedMotion()

  const goTo = (next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + roles.length) % roles.length)
  }
  const goPrev = () => goTo(index - 1, -1)
  const goNext = () => goTo(index + 1, 1)

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Who this is for" title="User personas." className="mb-5" />
        <Reveal delay={0.1}>
          <p className="mb-8 text-lg text-fg-muted">{intro}</p>
        </Reveal>

        <Reveal>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="User personas"
            className="mx-auto max-w-4xl"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') goPrev()
              if (event.key === 'ArrowRight') goNext()
            }}
          >
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous persona"
                className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-line bg-surface/60">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={roles[index]}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${roles.length}: ${roles[index]}`}
                    initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 48 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -48 }}
                    transition={{ duration: reducedMotion ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={personaImages[index]}
                      alt={`Persona — ${roles[index]}`}
                      className="aspect-video w-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next persona"
                className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 sm:px-14">
              <span className="kicker" aria-live="polite">
                {roles[index]}
              </span>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous persona"
                  className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex items-center gap-2">
                  {roles.map((role, dotIndex) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                      aria-label={`Go to persona ${dotIndex + 1}: ${role}`}
                      aria-current={dotIndex === index}
                      className={cn(
                        'h-2 w-2 rounded-full transition-colors',
                        dotIndex === index ? 'bg-violet-tint' : 'bg-line hover:bg-fg-muted/50',
                      )}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-fg-muted">
                  {index + 1} of {roles.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next persona"
                  className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
