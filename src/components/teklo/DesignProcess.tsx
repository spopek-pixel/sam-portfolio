import { ArrowRight, ClipboardCheck, Heart, Lightbulb, LayoutTemplate, MonitorSmartphone, Palette, PenLine } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import wireframeImage from '@/assets/images/projects/teklo/wireframe_teklo.png'

const iconMap = { Lightbulb, LayoutTemplate, Palette }

const methodologyStages = [
  { icon: Heart, label: 'Empathize' },
  { icon: PenLine, label: 'Define' },
  { icon: Lightbulb, label: 'Ideate' },
  { icon: MonitorSmartphone, label: 'Design' },
  { icon: ClipboardCheck, label: 'Test' },
]

function MethodologyStrip() {
  return (
    <div className="mb-12 flex flex-wrap items-start justify-center gap-x-1 gap-y-6 sm:gap-x-2">
      {methodologyStages.map((stage, index) => (
        <div key={stage.label} className="flex items-start gap-1 sm:gap-2">
          <div className="flex flex-col items-center gap-2">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint">
              <stage.icon size={22} />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">{stage.label}</span>
          </div>
          {index < methodologyStages.length - 1 && <ArrowRight size={16} className="mt-5 shrink-0 text-fg-muted/30" />}
        </div>
      ))}
    </div>
  )
}

function StageHeader({ index, icon: Icon, title }: { index: number; icon: typeof Lightbulb; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-mint">
        <Icon size={16} />
      </span>
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-fg-muted">0{index}</span>
        <h3 className="font-medium">{title}</h3>
      </div>
    </div>
  )
}

export function DesignProcess() {
  const { stages } = teklo.process

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design process" title="From a blank board to a shipped flow." className="mb-10" />

        <Reveal delay={0.04}>
          <MethodologyStrip />
        </Reveal>

        <div className="flex flex-col gap-12">
          {stages.map((stage, index) => {
            const Icon = iconMap[stage.icon as keyof typeof iconMap]

            if (index === 0) {
              return (
                <Reveal key={stage.title} delay={index * 0.08}>
                  <div className="max-w-2xl">
                    <StageHeader index={index + 1} icon={Icon} title={stage.title} />
                    <p className="text-sm leading-relaxed text-fg-muted">{stage.body}</p>
                  </div>
                </Reveal>
              )
            }

            const imageFirst = index % 2 === 1

            return (
              <Reveal key={stage.title} delay={index * 0.08}>
                <div className={cn('grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-10', imageFirst && 'lg:grid-cols-[0.85fr_1fr]')}>
                  <div className={cn(imageFirst && 'lg:order-2')}>
                    <StageHeader index={index + 1} icon={Icon} title={stage.title} />
                    <p className="max-w-xl text-sm leading-relaxed text-fg-muted">{stage.body}</p>
                  </div>
                  <div className={cn(imageFirst && 'lg:order-1')}>
                    {index === 1 ? (
                      <Lightbox src={wireframeImage} alt="Teklo low-fidelity wireframe kit">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-ink p-2">
                          <img src={wireframeImage} alt="" className="h-full w-full object-contain" loading="lazy" />
                        </div>
                      </Lightbox>
                    ) : (
                      <ProjectVisual title={stage.title} accent="mint" className="aspect-[4/3] w-full" />
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
