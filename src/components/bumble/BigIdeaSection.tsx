import { Reveal } from '@/components/ui/Reveal'

export function BigIdeaSection({ idea, brief }: { idea: string; brief: string }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Reveal>
          <span className="kicker">The big idea</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-3xl leading-snug sm:text-4xl md:text-5xl">"{idea}"</p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{brief}</p>
        </Reveal>
      </div>
    </section>
  )
}
