import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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
const AUTOPLAY_MS = 3200

const arrowButtonClasses =
  'z-10 rounded-full border border-line bg-surface/70 p-2.5 text-fg backdrop-blur-sm transition-colors hover:border-violet-tint hover:bg-surface-raised'

export function OnboardingCarousel() {
  const { intro, captions } = dragonfly.onboarding
  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current
    const item = container?.children[index] as HTMLElement | undefined
    if (!container || !item) return
    const target = item.offsetLeft - (container.clientWidth - item.clientWidth) / 2
    container.scrollTo({ left: target, behavior: 'smooth' })
  }, [])

  const goTo = useCallback(
    (index: number, pause = true) => {
      const next = (index + screens.length) % screens.length
      setActive(next)
      scrollToIndex(next)
      if (pause) setIsPlaying(false)
    },
    [scrollToIndex],
  )

  useEffect(() => {
    scrollToIndex(active)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isPlaying || reducedMotion) return
    const id = setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % screens.length
        scrollToIndex(next)
        return next
      })
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [isPlaying, reducedMotion, scrollToIndex])

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Onboarding" title="Nine screens, one first impression." description={intro} className="mb-10 max-w-2xl" />

        <Reveal>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Onboarding screens"
            className="relative"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') goTo(active - 1)
              if (event.key === 'ArrowRight') goTo(active + 1)
            }}
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous screen" className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}>
                <ChevronLeft size={20} />
              </button>

              <div
                ref={containerRef}
                className="flex flex-1 gap-5 overflow-x-auto scroll-smooth py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {screens.map((screen, i) => {
                  const distance = Math.abs(i - active)
                  const scale = distance === 0 ? 1 : distance === 1 ? 0.82 : 0.68
                  const opacity = distance === 0 ? 1 : distance === 1 ? 0.55 : 0.28
                  const rotate = reducedMotion ? 0 : (i - active) * 3.5

                  return (
                    <motion.button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to screen ${i + 1}`}
                      aria-current={i === active}
                      animate={{ scale, opacity, rotate }}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                      className="shrink-0 overflow-hidden rounded-[1.75rem] border border-line bg-surface/60 shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
                      style={{ scrollSnapAlign: 'center', width: 'clamp(9.5rem, 22vw, 13rem)' }}
                    >
                      <img src={screen} alt={captions[i]} className="aspect-[9/16] w-full object-cover" loading="lazy" />
                    </motion.button>
                  )
                })}
              </div>

              <button type="button" onClick={() => goTo(active + 1)} aria-label="Next screen" className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}>
                <ChevronRight size={20} />
              </button>
            </div>

            <p className="mt-2 min-h-[2.5rem] text-center text-sm text-fg-muted" aria-live="polite">
              {captions[active]}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:px-8">
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous screen" className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}>
                  <ChevronLeft size={16} />
                </button>
                <span className="font-mono text-xs text-fg-muted">
                  {active + 1} of {screens.length}
                </span>
                <button type="button" onClick={() => goTo(active + 1)} aria-label="Next screen" className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="h-1 flex-1 overflow-hidden rounded-full bg-line sm:max-w-[240px]">
                <motion.div
                  key={`${active}-${isPlaying}`}
                  className="h-full rounded-full bg-violet-tint"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isPlaying && !reducedMotion ? 1 : 0.15 }}
                  transition={isPlaying && !reducedMotion ? { duration: AUTOPLAY_MS / 1000, ease: 'linear' } : { duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
