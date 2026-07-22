import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob } from '@/components/ui/GradientBlob'

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
      <GradientBlob tone="violet" className="left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="kicker">The origin story</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-3xl leading-snug sm:text-4xl md:text-5xl">
            I won my school's typing competition at 96 words per minute. I've been translating between
            people and technology ever since.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-violet-tint"
          >
            Read the full story
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
