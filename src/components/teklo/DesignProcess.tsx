import { ArrowRight, ClipboardCheck, Heart, Lightbulb, LayoutTemplate, MonitorSmartphone, Palette, PenLine } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { cn } from '@/lib/utils'

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

function WireframeKit() {
  const screens = ['Welcome', 'Search', 'Product', 'Checkout']
  return (
    <div className="grid aspect-[4/3] w-full grid-cols-2 gap-2 rounded-2xl border border-line bg-surface p-3">
      {screens.map((screen) => (
        <div key={screen} className="flex flex-col gap-1.5 rounded-lg border border-line/60 bg-ink/40 p-2">
          <span className="font-mono text-[8px] uppercase tracking-wider text-fg-muted/70">{screen}</span>
          <div className="h-2 w-3/4 rounded-full bg-fg-muted/25" />
          <div className="relative mt-1 flex-1 rounded-md border border-dashed border-fg-muted/25">
            <svg className="absolute inset-0 h-full w-full text-fg-muted/15" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-fg-muted/15" />
          <div className="h-1.5 w-2/3 rounded-full bg-fg-muted/15" />
        </div>
      ))}
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
            const imageFirst = index % 2 === 1
            const isWireframeStage = index === 1

            return (
              <Reveal key={stage.title} delay={index * 0.08}>
                <div className={cn('grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-10', imageFirst && 'lg:grid-cols-[0.85fr_1fr]')}>
                  <div className={cn(imageFirst && 'lg:order-2')}>
                    <StageHeader index={index + 1} icon={Icon} title={stage.title} />
                    <p className="max-w-xl text-sm leading-relaxed text-fg-muted">{stage.body}</p>
                  </div>
                  <div className={cn(imageFirst && 'lg:order-1')}>
                    {isWireframeStage ? <WireframeKit /> : <ProjectVisual title={stage.title} accent="mint" className="aspect-[4/3] w-full" />}
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
