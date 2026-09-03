import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Project } from '@/data/projects'
import { imageFor } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { ImageSlot } from './ImageSlot'

export function AihpHero({ project }: { project: Project }) {
  const hero1 = imageFor('aihp', 'hero-1')
  const hero2 = imageFor('aihp', 'hero-2')
  const hero3 = imageFor('aihp', 'hero-3')

  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-14 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone="violet" className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg">
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="mt-8 block kicker">{project.role}</span>
        </Reveal>
        <Reveal delay={0.14}>
          <h1 className="mt-4 text-[clamp(2.25rem,5.5vw,4.25rem)]">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">{aihp.hero.subtitle}</p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-8 flex flex-wrap gap-6 border-t border-line pt-6">
            {aihp.hero.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{item.label}</span>
                <span className="text-sm sm:text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12">
            <ImageSlot
              src={hero1}
              alt="Featured AIHP graphic"
              hint="hero-1.jpg"
              tone="violet"
              aspect="aspect-[16/11]"
              className="sm:col-span-7"
            />
            <div className="grid grid-cols-2 gap-4 sm:col-span-5 sm:grid-cols-1">
              <ImageSlot src={hero2} alt="AIHP graphic, detail one" hint="hero-2.jpg" tone="acid" aspect="aspect-[4/3] sm:aspect-[16/9]" />
              <ImageSlot src={hero3} alt="AIHP graphic, detail two" hint="hero-3.jpg" tone="mint" aspect="aspect-[4/3] sm:aspect-[16/9]" />
            </div>
          </div>
          <p className="mt-4 text-sm text-fg-muted">
            One of my best AIHP graphics, or a collage of a few. Add <span className="font-mono text-xs">hero-1.jpg</span> (and
            optionally <span className="font-mono text-xs">hero-2.jpg</span> / <span className="font-mono text-xs">hero-3.jpg</span>)
            to <span className="font-mono text-xs">src/assets/images/projects/aihp/</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
