import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { aivy } from '@/data/aivy'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import aivyHeroImage from '@/assets/images/projects/aivy/aivy-hero.jpg'

export function AivyHero({ project }: { project: Project }) {
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    ...(project.team ? [{ label: 'Team', value: project.team }] : []),
    { label: 'Partner', value: aivy.brief.partner },
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-40">
      <NoiseOverlay />
      <GradientBlob tone="mint" className="left-[-10%] top-0 h-[420px] w-[420px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-fg"
          >
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {aivy.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mint"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://aivy-lovat.vercel.app/#top"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Visit AIVY <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mt-6 text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02]">
            AIVY — <span className="text-gradient">designing AI that reconnects</span> people with nature.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted">{aivy.hero.description}</p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={aivyHeroImage}
              alt="A speculative AIVY interior blending a smart home into a glowing forest, visualizing the Root ecosystem"
              className="aspect-[20/9] w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-10 rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
            <span className="kicker">The challenge</span>
            <p className="mt-4 max-w-3xl font-display text-xl leading-snug sm:text-2xl">
              {aivy.challenge.question}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.42}>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{item.label}</span>
                <span className="text-sm sm:text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
