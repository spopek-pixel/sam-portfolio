import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { PixelAccent } from '@/components/ui/PixelAccent'

const taughtMyself = ['React & TypeScript', 'AI tooling & prompt engineering', 'Production deployment', 'Whatever comes next']

export function AlwaysLearning() {
  return (
    <section className="relative px-6 py-10 sm:px-14 sm:py-16">
      <PixelAccent icon="sparkle" color="#a6ff4d" size={20} className="absolute left-[10%] top-6 hidden sm:block" />
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="How I learn"
          title="Curious first, expert eventually."
          description="I've never waited for a class or a job description to teach me something new."
          className="mb-10"
        />
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg text-fg-muted">
            I taught myself to code because I wanted to ship what I designed, not just hand it off. I got into AI
            tooling early because I wanted to know how it actually worked, not because a role required it. That same
            instinct is why I'm usually in the middle of learning something that has nothing to do with my day job.
            If I don't know how to do something yet, my first move is figuring out how, not waiting for someone to
            show me.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-3">
            {taughtMyself.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-fg-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
