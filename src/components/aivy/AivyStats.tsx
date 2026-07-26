import { aivy } from '@/data/aivy'
import { Reveal } from '@/components/ui/Reveal'

export function AivyStats() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-line bg-surface/60 p-6 sm:grid-cols-4 sm:p-10">
          {aivy.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="font-display text-3xl font-semibold text-mint sm:text-4xl">{stat.value}</span>
                <span className="text-xs text-fg-muted sm:text-sm">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
