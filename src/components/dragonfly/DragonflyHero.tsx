import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Project } from '@/data/projects'
import { dragonfly } from '@/data/dragonfly'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import dragonHome1 from '@/assets/images/projects/dragonfly-yoga/dragon_home_1.png'

export function DragonflyHero({ project }: { project: Project }) {
  const { description } = dragonfly.hero

  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    ...(project.team ? [{ label: 'Team', value: project.team }] : []),
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone={project.accent} className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg"
          >
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="kicker">Case study</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-[clamp(2.25rem,5.5vw,4rem)]">
                Dragonfly <span className="text-gradient">Hot Yoga.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-lg text-lg text-fg-muted">{description}</p>
            </Reveal>

            <Reveal delay={0.28}>
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

          <Reveal delay={0.24}>
            <ProjectVisual image={dragonHome1} title={project.title} accent={project.accent} className="aspect-[4/3] w-full" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
