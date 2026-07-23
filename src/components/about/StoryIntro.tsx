import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'

export function StoryIntro() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone="mixed" className="right-[-10%] top-0 h-[420px] w-[420px]" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-8">
        <Reveal>
          <span className="kicker">How it started</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)]">
            I've always been the <span className="text-gradient">translator</span> between people and technology.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-lg text-fg-muted sm:text-xl">
            I was a bit of a computer kid before I knew that meant anything — and as a first-generation kid, I became my
            family's tech support long before I had a job title for it. I spent an unreasonable number of hours as a
            teenager rearranging game menus and settings screens for no reason anyone asked me to. Looking back, that
            was the first time I cared about how something felt to use — design just gave it a name.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
