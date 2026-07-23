import { AlertTriangle, ArrowRight, Compass, GraduationCap, Lightbulb, ShieldCheck, Sparkles, Trophy } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'

const stepIcons = [AlertTriangle, Lightbulb, Trophy]
const stepAccents = ['text-violet-tint', 'text-fg', 'text-acid']
const goalIcons = [Lightbulb, ShieldCheck, GraduationCap, Compass]

export function ProductStrategy() {
  const { steps, goals } = housingkind.productStrategy
  const { deliverables } = housingkind.atAGlance

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Product strategy" title="From problem to product." className="mb-8" />

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={step.label} className="contents">
                {index > 0 && (
                  <Reveal delay={index * 0.08} className="hidden lg:flex lg:items-center">
                    <ArrowRight size={20} className="text-fg-muted" />
                  </Reveal>
                )}
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                    <div className="flex items-center gap-2.5">
                      <Icon size={20} className={stepAccents[index]} />
                      <span className="kicker">{step.label}</span>
                    </div>
                    <p className="text-sm text-fg-muted">{step.body}</p>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, index) => {
            const Icon = goalIcons[index]
            return (
              <Reveal key={goal.title} delay={0.1 + index * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-line p-5">
                  <Icon size={20} className="text-violet-tint" />
                  <h3 className="text-sm font-medium">{goal.title}</h3>
                  <p className="text-sm text-fg-muted">{goal.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Sparkles size={16} className="text-fg-muted" />
            {deliverables.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
