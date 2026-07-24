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
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-14 sm:pt-40">
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

        <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-10">
          <div className="flex flex-col gap-6">
            <Reveal delay={0.06}>
              <span className="kicker">Case study</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)]">
                Dragonfly <span className="text-gradient">Hot Yoga.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-lg text-lg text-fg-muted">{description}</p>
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

          <Reveal delay={0.26}>
            <motion.img
              src={dragonHomeCase}
              alt="Dragonfly Hot Yoga app screens — welcome, home feed, and booking confirmation"
              animate={reducedMotion ? undefined : { y: [0, -12, 0] }}
              transition={reducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
