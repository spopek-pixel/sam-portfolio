import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Project } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'

export function AihpHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-14 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone="violet" className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg">
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="mt-8 block kicker">{project.role}</span>
        </Reveal>
        <Reveal delay={0.14}>
          <h1 className="mt-4 text-[clamp(2.25rem,5.5vw,4.25rem)]">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">{aihp.hero.subtitle}</p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-8 flex flex-wrap gap-6 border-t border-line pt-6">
            {aihp.hero.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{item.label}</span>
                <span className="text-sm sm:text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
