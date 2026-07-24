import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import type { Project } from '@/data/projects'
import { dragonfly } from '@/data/dragonfly'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import dragonHomeCase from '@/assets/images/projects/dragonfly-yoga/dragon-home-case.png'

export function DragonflyHero({ project }: { project: Project }) {
  const { description } = dragonfly.hero
  const reducedMotion = usePrefersReducedMotion()

  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    ...(project.team ? [{ label: 'Team', value: project.team }] : []),
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-14 sm:pt-40 lg:min-h-[720px]">
      <NoiseOverlay />
      <GradientBlob tone="mixed" className="left-[-10%] top-10 h-[420px] w-[420px] opacity-40" />
      <GradientBlob tone="mint" className="right-[-10%] top-40 h-[360px] w-[360px] opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg"
          >
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-6 lg:w-[420px] lg:shrink-0">
            <Reveal delay={0.06}>
              <span className="kicker">Case study</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)]">
                Dragonfly <span className="text-gradient">Hot Yoga.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-md text-lg text-fg-muted">{description}</p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="grid grid-cols-2 gap-6 border-t border-line pt-6">
                {meta.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{item.label}</span>
                    <span className="text-sm sm:text-base">{item.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Mobile / tablet — contained, in-flow image */}
          <Reveal delay={0.26} className="lg:hidden">
            <motion.img
              src={dragonHomeCase}
              alt="Dragonfly Hot Yoga app screens — welcome, home feed, and booking confirmation"
              animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={reducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto w-full max-w-lg drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
        </div>
      </div>

      {/* Desktop — full-bleed image escaping the centered container, anchored to the viewport edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center justify-end pr-0 lg:flex lg:w-[56vw] lg:max-w-[880px]">
        <div className="relative w-full">
          <img
            src={dragonHomeCase}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-105 object-contain opacity-40 blur-3xl"
          />
          <motion.img
            src={dragonHomeCase}
            alt="Dragonfly Hot Yoga app screens — welcome, home feed, and booking confirmation"
            initial={{ opacity: 0, x: 40 }}
            animate={
              reducedMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 1, x: 0, y: [0, -14, 0] }
            }
            transition={
              reducedMotion
                ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                : { opacity: { duration: 0.7 }, x: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 } }
            }
            className="relative w-full -rotate-1 object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  )
}
