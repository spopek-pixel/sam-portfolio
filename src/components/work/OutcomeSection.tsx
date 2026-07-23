import { Reveal } from '@/components/ui/Reveal'

export function OutcomeSection({ outcome }: { outcome: string }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-line bg-surface/60 p-8 sm:p-12">
          <Reveal>
            <span className="kicker">The outcome</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-2xl leading-snug sm:text-3xl">{outcome}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
