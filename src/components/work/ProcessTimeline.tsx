import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { ProcessStep } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.4'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="The process" title="How it came together." className="mb-14" />

        <div ref={containerRef} className="relative flex flex-col gap-12 pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet-tint to-acid"
          />

          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="relative">
                <span className="absolute -left-10 top-1 h-3.5 w-3.5 rounded-full border-2 border-acid bg-ink" />
                <h3 className="text-xl sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-fg-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
