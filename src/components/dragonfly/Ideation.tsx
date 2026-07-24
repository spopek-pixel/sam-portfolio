import { GitBranch, LayoutTemplate, PenTool, Sparkles } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from '@/components/housingkind/ArtifactPlaceholder'

const icons = [PenTool, GitBranch, LayoutTemplate, Sparkles]

export function Ideation() {
  const steps = dragonfly.ideation.steps

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Ideation" title="From loose sketches to real flows." className="mb-10" />

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[88px] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-line)_0,var(--color-line)_8px,transparent_8px,transparent_16px)] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = icons[index]
              return (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <ArtifactPlaceholder
                        label={`${step.title} placeholder`}
                        icon={Icon}
                        className="aspect-[4/3] w-full"
                      />
                      <span className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-ink bg-violet text-xs font-medium text-ink">
                        {index + 1}
                      </span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="mt-1 text-sm text-fg-muted">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
