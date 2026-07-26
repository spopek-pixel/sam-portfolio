import { ArrowRight, ClipboardCheck, Heart, Lightbulb, MonitorSmartphone, PenLine } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

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

export function Ideation() {
  const { body } = teklo.ideation

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Ideation" title="Fewer sketches, one real decision." className="mb-10 max-w-2xl" />

        <Reveal delay={0.04}>
          <MethodologyStrip />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-fg-muted">{body}</p>
        </Reveal>
      </div>
    </section>
  )
}
