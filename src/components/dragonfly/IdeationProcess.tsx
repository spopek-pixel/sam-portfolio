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
import taskflow1 from '@/assets/images/projects/dragonfly-yoga/taskflow1.png'
import taskflow2 from '@/assets/images/projects/dragonfly-yoga/taskflow2.png'
import taskflow3 from '@/assets/images/projects/dragonfly-yoga/taskflow3.png'
import taskflow4 from '@/assets/images/projects/dragonfly-yoga/taskflow4.png'
import taskflow5 from '@/assets/images/projects/dragonfly-yoga/taskflow5.png'

const sketchImages = [task1, task2, task3]
const wireframeImages = [wireframeImg, wireframe2Img]
const taskFlowImages = [
  { src: taskflow1, label: 'Task Flow 1 — Onboarding & Personalization Setup' },
  { src: taskflow2, label: 'Task Flow 2 — Booking a Recommended Class' },
  { src: taskflow3, label: 'Task Flow 3 — Viewing Alternative Recommendations' },
  { src: taskflow4, label: 'Task Flow 4 — Managing Upcoming Classes' },
  { src: taskflow5, label: 'Task Flow 5 — Discovering New Class Types' },
]

function StageHeader({ index, icon: Icon, title }: { index: number; icon: typeof StickyNote; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-violet-tint">
        <Icon size={16} />
      </span>
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-fg-muted">0{index}</span>
        <h3 className="font-medium">{title}</h3>
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
  const alt = 'Miro brainstorm board — 5 themes, 25 ideas'

  return (
    <div ref={ref} className={cn('overflow-hidden rounded-2xl border border-line bg-surface/60 p-2', className)}>
      <Lightbox src={src} alt={alt} triggerClassName="overflow-hidden rounded-xl">
        <motion.img src={src} alt={alt} className="aspect-[4/3] w-full object-cover" loading="lazy" style={{ scale }} />
      </Lightbox>
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

          {/* 4. Task flows — real diagrams, uniform size, zoomable */}
          <Reveal delay={0.14}>
            <div>
              <StageHeader index={4} icon={Waypoints} title={taskFlows.title} />
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-fg-muted">{taskFlows.body}</p>
              <div className="mx-auto flex max-w-2xl flex-col gap-4">
                {taskFlowImages.map((flow, i) => (
                  <Reveal key={flow.label} delay={i * 0.08}>
                    <Lightbox src={flow.src} alt={flow.label}>
                      <img
                        src={flow.src}
                        alt={flow.label}
                        className="aspect-[3/1] w-full rounded-2xl border border-line bg-white object-cover"
                        loading="lazy"
                      />
                    </Lightbox>
                  </Reveal>
                ))}
              </div>
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
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">
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
