import { Reveal } from '@/components/ui/Reveal'

export function ProblemSection({ problem, research }: { problem: string; research: string[] }) {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="kicker">The problem</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-3xl leading-snug text-fg-muted sm:text-4xl md:text-5xl">{problem}</p>
          </Reveal>
        </div>

        {research.length > 0 && (
          <div className="flex flex-col gap-4">
            {research.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="flex gap-4 border-t border-line py-4">
                  <span className="font-mono text-sm text-violet-tint">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-fg">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
