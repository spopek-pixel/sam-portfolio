import { GitBranch, Leaf, Link2, Users2 } from 'lucide-react'
import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const traitIcons = [Link2, Leaf, GitBranch, Users2]

export function AivyConcept() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The concept" title="An ecosystem, inspired by ivy." description={aivy.concept.intro} className="mb-12" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aivy.concept.traits.map((trait, index) => {
            const Icon = traitIcons[index % traitIcons.length]
            return (
              <Reveal key={trait.title} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/15 text-mint">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-medium">{trait.title}</h3>
                  <p className="text-sm text-fg-muted">{trait.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-mint/25 bg-mint/5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
            <div className="shrink-0">
              <span className="font-display text-3xl font-semibold text-mint sm:text-4xl">AIVY</span>
              <span className="ml-2 font-mono text-xs uppercase tracking-wider text-fg-muted">{aivy.concept.naming.pronunciation}</span>
            </div>
            <p className="text-sm text-fg-muted sm:text-base">{aivy.concept.naming.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
