import { Reveal } from '@/components/ui/Reveal'

export function ReflectionSection({ reflection }: { reflection: string }) {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="kicker">Reflection</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">"{reflection}"</p>
        </Reveal>
      </div>
    </section>
  )
}
