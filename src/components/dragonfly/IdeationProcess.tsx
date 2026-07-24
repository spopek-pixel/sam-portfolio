import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Bot, LayoutTemplate, Lightbulb, MessageCircleQuestion, PenTool, Route, Sparkles, StickyNote, Waypoints } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { ConceptRoadmap } from './ConceptRoadmap'
import { StoryboardReveal } from './StoryboardReveal'
import { AIFeatureShowcase } from './AIFeatureShowcase'
import { cn } from '@/lib/utils'
import brainstormBoard from '@/assets/images/projects/dragonfly-yoga/brainstorm_dragon.jpg'
import storyboardImg from '@/assets/images/projects/dragonfly-yoga/storyboard.png'
import task1 from '@/assets/images/projects/dragonfly-yoga/task1.png'
import task2 from '@/assets/images/projects/dragonfly-yoga/task2.png'
import task3 from '@/assets/images/projects/dragonfly-yoga/task3.png'
import wireframeImg from '@/assets/images/projects/dragonfly-yoga/wireframe.png'
import wireframe2Img from '@/assets/images/projects/dragonfly-yoga/wireframe2.png'

const sketchImages = [task1, task2, task3]
const wireframeImages = [wireframeImg, wireframe2Img]

function StageHeader({ index, icon: Icon, title }: { index: number; icon: typeof StickyNote; title: string }) {
  return (
    <div className="mb-4 flex items-start gap-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-violet-tint">
        <Icon size={16} />
      </span>
      <div>
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-xs text-fg-muted">0{index}</span>
          <h3 className="font-medium">{title}</h3>
        </div>
      </div>
    </div>
  )
}

function Takeaway({ children }: { children: string }) {
  return (
    <p className="mt-4 flex items-start gap-2 rounded-xl border border-violet-tint/25 bg-violet/5 p-4 text-sm leading-relaxed text-fg-muted">
      <Sparkles size={16} className="mt-0.5 shrink-0 text-violet-tint" />
      {children}
    </p>
  )
}

function WhyBubble({ children }: { children: string }) {
  return (
    <div className="relative mt-5 max-w-md rounded-2xl rounded-bl-none border border-violet-tint/25 bg-violet/5 p-4">
      <p className="flex items-start gap-2 text-sm leading-relaxed text-fg-muted">
        <MessageCircleQuestion size={16} className="mt-0.5 shrink-0 text-violet-tint" />
        <span>
          <span className="font-medium text-fg">Why? </span>
          {children}
        </span>
      </p>
      <span className="absolute -bottom-2 left-1 h-2.5 w-2.5 rounded-full border border-violet-tint/25 bg-ink" />
      <span className="absolute -bottom-4 -left-0.5 h-1.5 w-1.5 rounded-full border border-violet-tint/25 bg-ink" />
    </div>
  )
}

function FramedZoomImage({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <div ref={ref} className={cn('overflow-hidden rounded-2xl border border-line bg-surface/60 p-2', className)}>
      <div className="overflow-hidden rounded-xl">
        <motion.img
          src={src}
          alt="Miro brainstorm board — 5 themes, 25 ideas"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
          style={{ scale }}
        />
      </div>
    </div>
  )
}

function TaskFlowPlaceholder() {
  const nodes = [
    { x: 30, label: 'Home' },
    { x: 130, label: 'Details' },
    { x: 230, label: 'Confirm' },
    { x: 330, label: 'Booked' },
  ]

  return (
    <div className="mx-auto flex aspect-[2/1] w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-line bg-surface/40 p-6 text-center">
      <svg viewBox="0 0 360 60" className="w-full max-w-sm" aria-hidden>
        <motion.path
          d="M30 30 H330"
          stroke="var(--color-violet-tint)"
          strokeOpacity={0.4}
          strokeWidth={2}
          strokeDasharray="6 8"
          fill="none"
          animate={{ strokeDashoffset: [0, -28] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
        {nodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={30} r={9} fill="var(--color-ink)" stroke="var(--color-violet-tint)" strokeWidth={1.5} />
          </g>
        ))}
      </svg>
      <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted/70">
        Full task flow diagram — coming soon
      </span>
    </div>
  )
}

export function IdeationProcess() {
  const { earlyIdeation, conceptExploration, storyboard, taskFlows, sketches, wireframe, aiDesign } = dragonfly.ideationProcess

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Ideation & process" title="How I got from a blank board to a plan." className="mb-10" />

        <div className="flex flex-col gap-12">
          {/* 1. Early ideation — smaller framed image, tight to text, scroll-zoom */}
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-6">
              <div>
                <StageHeader index={1} icon={StickyNote} title={earlyIdeation.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{earlyIdeation.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                    5 themes
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                    25 ideas
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                    3 concepts moved forward
                  </span>
                </div>
              </div>
              <FramedZoomImage src={brainstormBoard} className="max-w-sm justify-self-center lg:justify-self-end" />
            </div>
          </Reveal>

          {/* 2. Concept exploration — roadmap */}
          <Reveal delay={0.05}>
            <div>
              <StageHeader index={2} icon={Lightbulb} title={conceptExploration.title} />
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-fg-muted">{conceptExploration.body}</p>
              <ConceptRoadmap concepts={conceptExploration.concepts} />
            </div>
          </Reveal>

          {/* 3. Storyboard — larger, floating, scroll spotlight */}
          <Reveal delay={0.1}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-8">
              <div>
                <StageHeader index={3} icon={Route} title={storyboard.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{storyboard.body}</p>
                <Takeaway>{storyboard.takeaway}</Takeaway>
              </div>
              <StoryboardReveal src={storyboardImg} alt="Storyboard — Feeling ready for hot yoga" />
            </div>
          </Reveal>

          {/* 4. Task flows — animated placeholder, or the real diagram once supplied */}
          <Reveal delay={0.14}>
            <div>
              <StageHeader index={4} icon={Waypoints} title={taskFlows.title} />
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-fg-muted">{taskFlows.body}</p>
              {taskFlows.image ? (
                <Lightbox src={taskFlows.image} alt="Full task flow diagram" triggerClassName="mx-auto block w-full max-w-2xl">
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <img src={taskFlows.image} alt="" className="w-full" loading="lazy" />
                  </div>
                </Lightbox>
              ) : (
                <TaskFlowPlaceholder />
              )}
            </div>
          </Reveal>

          {/* 5. Screen sketches — staggered, zoomable */}
          <Reveal delay={0.18}>
            <div>
              <StageHeader index={5} icon={PenTool} title={sketches.title} />
              <p className="mb-5 text-sm leading-relaxed text-fg-muted">{sketches.body}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {sketchImages.map((img, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <Lightbox src={img} alt={`Screen sketch ${i + 1}`}>
                      <img
                        src={img}
                        alt={`Screen sketch ${i + 1}`}
                        className="aspect-[3/2] w-full rounded-2xl border border-line object-cover"
                        loading="lazy"
                      />
                    </Lightbox>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 6. Wireframes — two-image gallery, matching sketches' weight */}
          <Reveal delay={0.22}>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
              <div>
                <StageHeader index={6} icon={LayoutTemplate} title={wireframe.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{wireframe.body}</p>
                <WhyBubble>{wireframe.why}</WhyBubble>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {wireframeImages.map((img, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <Lightbox src={img} alt={`Wireframe kit ${i + 1} — Dragonfly Hot Yoga`}>
                      <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                        <img src={img} alt={`Wireframe kit ${i + 1} — Dragonfly Hot Yoga`} className="w-full" loading="lazy" />
                      </div>
                    </Lightbox>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 7. AI-assisted design — editorial showcase, phones as the hero */}
          <Reveal delay={0.26}>
            <div className="border-t border-line pt-12">
              <div className="mb-2 flex items-center justify-center gap-2 text-fg-muted">
                <Bot size={16} />
                <span className="font-mono text-xs uppercase tracking-wider">07 — AI-assisted design</span>
              </div>
              <AIFeatureShowcase title={aiDesign.title} body={aiDesign.body} why={aiDesign.why} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
