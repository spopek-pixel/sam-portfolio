import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Project } from '@/data/projects'
import { outfront } from '@/data/outfront'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { Lightbox } from '@/components/ui/Lightbox'
import { Tag } from '@/components/ui/Tag'
import heroImage from '@/assets/images/projects/outfront-media-graphics/outfront.jpg'

export function OutfrontHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-14 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone={project.accent} className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg">
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <Tag key={cat}>{cat}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-[clamp(2.25rem,5.5vw,4rem)]">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl text-lg text-fg-muted">{project.tagline}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <Lightbox src={heroImage} alt="An OUTFRONT Media billboard in the wild" triggerClassName="rounded-3xl">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line shadow-[0_40px_90px_rgba(0,0,0,0.5)] sm:aspect-[21/9]">
                <img src={heroImage} alt="" className="h-full w-full object-cover" loading="eager" />
              </div>
            </Lightbox>
            <p className="mt-4 text-sm text-fg-muted">{outfront.hero.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
