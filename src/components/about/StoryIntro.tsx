import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import momPhoto from '@/assets/images/about/mom.jpg'
import grandparentsPhoto from '@/assets/images/about/grandparents.jpg'

export function StoryIntro() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone="mixed" className="right-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="flex max-w-2xl flex-col gap-8">
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

        <div className="mx-auto flex w-[300px] shrink-0 flex-col items-center gap-4 sm:w-[380px] lg:mx-0 lg:w-[440px] lg:items-start">
          <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[500px]">
            <Reveal delay={0.24} className="absolute left-0 top-0 z-10 w-[64%]">
              <div className="-rotate-6 overflow-hidden rounded-2xl border border-line shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:rotate-0">
                <img
                  src={grandparentsPhoto}
                  alt="My grandparents"
                  className="aspect-[3/4] w-full object-cover"
                  loading="eager"
                />
              </div>
            </Reveal>
            <Reveal delay={0.36} className="absolute bottom-0 right-0 z-20 w-[64%]">
              <div className="rotate-6 overflow-hidden rounded-2xl border border-line shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:rotate-0">
                <img src={momPhoto} alt="My mom" className="aspect-[3/4] w-full object-cover" loading="eager" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.46}>
            <p className="text-center font-mono text-xs text-fg-muted sm:text-left">
              The two people who made "family tech support" feel like an honor, not a chore.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
