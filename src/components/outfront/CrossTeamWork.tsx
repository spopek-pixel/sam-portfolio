import { ImageOff } from 'lucide-react'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function CrossTeamWork() {
  const { intro, pieces } = outfront.crossTeam

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Beyond my own projects" title="Helping other teams' campaigns ship." className="mb-8 max-w-2xl" />

        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pieces.map((piece, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line text-fg-muted">
                <ImageOff size={22} className="opacity-50" />
                <span className="text-xs">{piece.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
