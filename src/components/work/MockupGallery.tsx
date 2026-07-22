import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export function MockupGallery({ images, title }: { images: string[]; title: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion || images.length < 2) return
    if (!sectionRef.current || !trackRef.current) return

    const ctx = gsap.context(() => {
      const track = trackRef.current!
      const distance = track.scrollWidth - window.innerWidth

      if (distance <= 0) return

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${distance}`,
        pin: true,
        scrub: 1,
        animation: gsap.to(track, { x: -distance, ease: 'none' }),
      })

      return () => trigger.kill()
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion, images.length])

  if (images.length === 0) return null

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-28">
      <div className="px-6 sm:px-10">
        <SectionHeading kicker="A closer look" title="Inside the interface." className="mx-auto mb-12 max-w-6xl" />
      </div>
      <div
        ref={trackRef}
        className={cn(
          'flex gap-6 px-6 sm:px-10',
          reducedMotion || images.length < 2 ? 'flex-wrap' : 'w-max flex-nowrap',
        )}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className="aspect-[3/4] w-[80vw] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface sm:w-[420px]"
          >
            <img
              src={image}
              alt={`${title} screen ${index + 1}`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
