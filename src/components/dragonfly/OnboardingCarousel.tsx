import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import onboarding1 from '@/assets/images/projects/dragonfly-yoga/onboarding1.png'
import onboarding2 from '@/assets/images/projects/dragonfly-yoga/obnoarding2.png'
import onboarding3 from '@/assets/images/projects/dragonfly-yoga/onboarding3.png'
import onboarding4 from '@/assets/images/projects/dragonfly-yoga/onboarding4.png'
import onboarding5 from '@/assets/images/projects/dragonfly-yoga/onboarding5.png'
import onboarding6 from '@/assets/images/projects/dragonfly-yoga/onboarding6.png'
import onboarding7 from '@/assets/images/projects/dragonfly-yoga/onboarding8.png'
import onboarding8 from '@/assets/images/projects/dragonfly-yoga/onboarding9.png'
import onboarding9 from '@/assets/images/projects/dragonfly-yoga/onbarding10.png'

const screens = [onboarding1, onboarding2, onboarding3, onboarding4, onboarding5, onboarding6, onboarding7, onboarding8, onboarding9]

const arrowButtonClasses =
  'rounded-full border border-line bg-surface/60 p-2.5 text-fg transition-colors hover:border-violet-tint hover:bg-surface-raised'

export function OnboardingCarousel() {
  const { intro, captions } = dragonfly.onboarding
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const reducedMotion = usePrefersReducedMotion()

  const goTo = (next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + screens.length) % screens.length)
  }
  const goPrev = () => goTo(index - 1, -1)
  const goNext = () => goTo(index + 1, 1)

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Onboarding" title="Nine screens, one first impression." description={intro} className="mb-10 max-w-2xl" />

        <Reveal>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Onboarding screens"
            className="mx-auto max-w-sm"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') goPrev()
              if (event.key === 'ArrowRight') goNext()
            }}
          >
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous screen"
                className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-line bg-surface/60">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={index}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${screens.length}`}
                    initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 48 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -48 }}
                    transition={{ duration: reducedMotion ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img src={screens[index]} alt={captions[index]} className="aspect-[9/16] w-full object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next screen"
                className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <p className="mt-4 min-h-[2.5rem] text-center text-sm text-fg-muted" aria-live="polite">
              {captions[index]}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:px-8">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous screen"
                  className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {screens.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      type="button"
                      onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                      aria-label={`Go to screen ${dotIndex + 1}`}
                      aria-current={dotIndex === index}
                      className={cn(
                        'h-2 w-2 rounded-full transition-colors',
                        dotIndex === index ? 'bg-violet-tint' : 'bg-line hover:bg-fg-muted/50',
                      )}
                    />
                  ))}
                </div>
              </div>
              <span className="font-mono text-xs text-fg-muted">
                {index + 1} of {screens.length}
              </span>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next screen"
                className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
