import { Users, SearchCheck, UserCircle, Map, Lightbulb } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const icons = [Users, SearchCheck, UserCircle, Map, Lightbulb]

export function ResearchDiscovery() {
  const { cards, insight } = dragonfly.research

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Research & discovery" title="Getting under the friction." className="mb-10" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={card.title} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <Icon size={22} className="text-acid" />
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-sm text-fg-muted">{card.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">
            "{insight}"
          </p>
        </Reveal>
      </div>
    </section>
  )
}
