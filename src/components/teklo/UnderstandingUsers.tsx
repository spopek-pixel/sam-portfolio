import { GraduationCap, Wallet } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import personaSheet from '@/assets/images/projects/teklo/persona.png'

const iconMap = { GraduationCap, Wallet }

export function UnderstandingUsers() {
  const { intro, segments, persona } = teklo.understandingUsers

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Understanding the users" title="Who Teklo is actually for." description={intro} className="mb-10 max-w-2xl" />

        <div className="grid gap-4 sm:grid-cols-2">
          {segments.map((segment, index) => {
            const Icon = iconMap[segment.icon as keyof typeof iconMap]
            return (
              <Reveal key={segment.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/10">
                    <Icon size={20} className="text-mint" />
                  </div>
                  <h3 className="text-lg font-medium">{segment.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{segment.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <Lightbox src={personaSheet} alt="User persona: Alex Martinez, the budget-conscious student">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-line bg-white p-2">
                <img src={personaSheet} alt="" className="h-full w-full object-contain" loading="lazy" />
              </div>
            </Lightbox>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3">
            <span className="kicker">{persona.title}</span>
            <p className="text-fg-muted">{persona.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
