import { Reveal } from '@/components/ui/Reveal'

export function ReflectionSection({ reflection }: { reflection: string }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">Reflection</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">"{reflection}"</p>
        </Reveal>
      </div>
    </section>
  )
}
