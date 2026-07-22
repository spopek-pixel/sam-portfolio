import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

export function CaseStudyHero({ project }: { project: Project }) {
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    ...(project.team ? [{ label: 'Team', value: project.team }] : []),
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone={project.accent === 'violet' ? 'violet' : project.accent === 'acid' ? 'acid' : 'mint'} className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg">
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <Tag key={cat}>{cat}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)]">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-2xl text-xl text-fg-muted">{project.tagline}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{item.label}</span>
                <span className="text-sm sm:text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <ProjectVisual
            image={project.images[0]}
            title={project.title}
            accent={project.accent}
            className="aspect-[16/9] w-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
