import { Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function KeyDecisions({ decisions }: { decisions: string[] }) {
  if (decisions.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Key decisions" title="Choices that mattered." className="mb-12" />
        <div className="grid gap-4 sm:grid-cols-2">
          {decisions.map((decision, index) => (
            <Reveal key={decision} delay={index * 0.08}>
              <div className="flex h-full gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                <Sparkles size={18} className="mt-1 shrink-0 text-acid" />
                <p>{decision}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
