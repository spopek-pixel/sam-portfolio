import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { teklo } from '@/data/teklo'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { Lightbox } from '@/components/ui/Lightbox'
import heroImage from '@/assets/images/projects/teklo/teklo_home.png'

export function TekloHero({ project }: { project: Project }) {
  const { description } = teklo.hero

  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    ...(project.team ? [{ label: 'Team', value: project.team }] : []),
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  const readyLinks = project.links?.filter((link) => link.href !== '#') ?? []

  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone={project.accent} className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg">
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
                Teklo<span className="text-gradient">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-lg text-lg text-fg-muted">{description}</p>
            </Reveal>

            {readyLinks.length > 0 && (
              <Reveal delay={0.22}>
                <div className="flex flex-wrap gap-3">
                  {readyLinks.map((link) => (
                    <LinkButton key={link.label} href={link.href} target="_blank" rel="noreferrer" variant="primary" className="px-5 py-2.5 text-sm">
                      {link.label} <ArrowUpRight size={16} />
                    </LinkButton>
                  ))}
                </div>
              </Reveal>
            )}

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
            <Lightbox src={heroImage} alt="Teklo app: splash screen and home screen">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface">
                <img src={heroImage} alt="" className="h-full w-full object-cover" loading="eager" />
              </div>
            </Lightbox>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
