import { Compass, ListChecks, MapPinOff } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const icons = [MapPinOff, ListChecks, Compass]

export function Challenge() {
  const { intro, painPoints, supporting } = dragonfly.challenge

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="The challenge" title="Where the old app fell apart." description={intro} className="mb-10" />

        <div className="grid gap-5 sm:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={point.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-line bg-surface p-6 shadow-[0_16px_40px_rgba(59,50,45,0.06)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-raised text-violet-tint">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-medium">{point.title}</h3>
                  <p className="text-sm text-fg-muted">{point.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {supporting.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-fg-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
