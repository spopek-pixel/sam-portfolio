import { Bot, LayoutTemplate, Lightbulb, PenTool, Route, StickyNote, Waypoints } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from '@/components/housingkind/ArtifactPlaceholder'
import { cn } from '@/lib/utils'
import brainstormBoard from '@/assets/images/projects/dragonfly-yoga/brainstorm_dragon.jpg'
import storyboardImg from '@/assets/images/projects/dragonfly-yoga/storyboard.png'
import taskFlow1 from '@/assets/images/projects/dragonfly-yoga/task1.png'
import taskFlow2 from '@/assets/images/projects/dragonfly-yoga/task2.png'
import taskFlow3 from '@/assets/images/projects/dragonfly-yoga/task3.png'
import wireframeImg from '@/assets/images/projects/dragonfly-yoga/wireframe.png'
import aiFigmaDesign from '@/assets/images/projects/dragonfly-yoga/ai_figma_design.png'

const sketchImages = [taskFlow1, taskFlow2, taskFlow3]

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

export function IdeationProcess() {
  const { earlyIdeation, conceptExploration, storyboard, taskFlows, sketches, wireframe, aiDesign } = dragonfly.ideationProcess

  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Ideation & process" title="How I got from a blank board to a plan." className="mb-10" />

        <div className="flex flex-col gap-10">
          {/* 1. Early ideation */}
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
              <div>
                <StageHeader index={1} icon={StickyNote} title={earlyIdeation.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{earlyIdeation.body}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line">
                <img
                  src={brainstormBoard}
                  alt="Miro brainstorm board — 5 themes, 25 ideas"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* 2. Concept exploration — no images, compact */}
          <Reveal delay={0.05}>
            <div>
              <StageHeader index={2} icon={Lightbulb} title={conceptExploration.title} />
              <p className="mb-5 text-sm leading-relaxed text-fg-muted">{conceptExploration.body}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {conceptExploration.concepts.map((concept) => (
                  <div key={concept.name} className="rounded-2xl border border-line bg-surface/60 p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h4 className="text-sm font-medium">{concept.name}</h4>
                      <span
                        className={cn(
                          'shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                          concept.status === 'Shipped'
                            ? 'bg-acid/15 text-acid'
                            : 'bg-fg-muted/10 text-fg-muted',
                        )}
                      >
                        {concept.status}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-fg-muted">{concept.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3. Storyboard — small image, narrative text */}
          <Reveal delay={0.1}>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
              <div>
                <StageHeader index={3} icon={Route} title={storyboard.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{storyboard.body}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line">
                <img src={storyboardImg} alt="Storyboard — Feeling ready for hot yoga" className="w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* 4. Task flows — kept centered, awaiting one large diagram */}
          <Reveal delay={0.14}>
            <div>
              <StageHeader index={4} icon={Waypoints} title={taskFlows.title} />
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-fg-muted">{taskFlows.body}</p>
              <ArtifactPlaceholder
                label="Full task flow diagram"
                icon={Waypoints}
                className="mx-auto aspect-[2/1] w-full max-w-2xl"
              />
            </div>
          </Reveal>

          {/* 5. Screen sketches — side by side, fill containers */}
          <Reveal delay={0.18}>
            <div>
              <StageHeader index={5} icon={PenTool} title={sketches.title} />
              <p className="mb-5 text-sm leading-relaxed text-fg-muted">{sketches.body}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {sketchImages.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                    <img
                      src={img}
                      alt={`Screen sketch ${i + 1}`}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 6. Wireframe — small image, narrative text */}
          <Reveal delay={0.22}>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
              <div>
                <StageHeader index={6} icon={LayoutTemplate} title={wireframe.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{wireframe.body}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                <img src={wireframeImg} alt="Wireframe kit — Dragonfly Hot Yoga" className="w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>

          {/* 7. AI-assisted design — modern two-column treatment */}
          <Reveal delay={0.26}>
            <div className="grid gap-6 rounded-2xl border border-violet-tint/30 bg-violet/5 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
              <div>
                <StageHeader index={7} icon={Bot} title={aiDesign.title} />
                <p className="text-sm leading-relaxed text-fg-muted">{aiDesign.body}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-line">
                <img
                  src={aiFigmaDesign}
                  alt="AI-assisted design exploration in Figma"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
