import { Lightbulb, LayoutTemplate, Palette } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { cn } from '@/lib/utils'

const iconMap = { Lightbulb, LayoutTemplate, Palette }

function StageHeader({ index, icon: Icon, title }: { index: number; icon: typeof Lightbulb; title: string }) {
  return (
    <div className="mb-4 flex items-start gap-3.5">
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

        <div className="flex flex-col gap-12">
          {stages.map((stage, index) => {
            const Icon = iconMap[stage.icon as keyof typeof iconMap]
            const imageFirst = index % 2 === 1

            return (
              <Reveal key={stage.title} delay={index * 0.08}>
                <div className={cn('grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-10', imageFirst && 'lg:grid-cols-[0.85fr_1fr]')}>
                  <div className={cn(imageFirst && 'lg:order-2')}>
                    <StageHeader index={index + 1} icon={Icon} title={stage.title} />
                    <p className="max-w-xl text-sm leading-relaxed text-fg-muted">{stage.body}</p>
                  </div>
                  <div className={cn(imageFirst && 'lg:order-1')}>
                    <ProjectVisual title={stage.title} accent="mint" className="aspect-[4/3] w-full" />
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
