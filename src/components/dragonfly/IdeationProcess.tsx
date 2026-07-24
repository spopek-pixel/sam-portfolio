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

const taskFlowImages = [taskFlow1, taskFlow2, taskFlow3]

function StageHeader({ index, icon: Icon, title, body }: { index: number; icon: typeof StickyNote; title: string; body: string }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-violet-tint">
        <Icon size={20} />
      </span>
      <div>
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-xs text-fg-muted">0{index}</span>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-fg-muted">{body}</p>
      </div>
    </div>
  )
}

export function IdeationProcess() {
  const { earlyIdeation, conceptExploration, storyboard, taskFlows, sketches, wireframe, aiDesign } = dragonfly.ideationProcess

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Ideation & process" title="From a messy board to a validated flow." className="mb-12" />

        <div className="flex flex-col gap-14">
          <Reveal>
            <div>
              <StageHeader index={1} icon={StickyNote} title={earlyIdeation.title} body={earlyIdeation.body} />
              <div className="overflow-hidden rounded-2xl border border-line">
                <img src={brainstormBoard} alt="Miro brainstorm board — 5 themes, 25 ideas" className="w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <StageHeader index={2} icon={Lightbulb} title={conceptExploration.title} body={conceptExploration.body} />
              <div className="grid gap-4 sm:grid-cols-3">
                {conceptExploration.concepts.map((concept) => (
                  <ArtifactPlaceholder key={concept} label={concept} icon={Lightbulb} className="aspect-[4/3] w-full" />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <StageHeader index={3} icon={Route} title={storyboard.title} body={storyboard.body} />
              <div className="overflow-hidden rounded-2xl border border-line">
                <img src={storyboardImg} alt="Storyboard — Feeling ready for hot yoga" className="w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div>
              <StageHeader index={4} icon={Waypoints} title={taskFlows.title} body={taskFlows.body} />
              <div className="grid gap-4 sm:grid-cols-3">
                {taskFlowImages.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                    <img src={img} alt={`Task flow ${i + 1}`} className="w-full" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div>
              <StageHeader index={5} icon={PenTool} title={sketches.title} body={sketches.body} />
              <div className="grid gap-4 sm:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <ArtifactPlaceholder key={n} label={`Screen sketch ${n}`} icon={PenTool} className="aspect-[3/4] w-full" />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div>
              <StageHeader index={6} icon={LayoutTemplate} title={wireframe.title} body={wireframe.body} />
              <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                <img src={wireframeImg} alt="Wireframe kit — Dragonfly Hot Yoga" className="w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className={cn('rounded-2xl border border-violet-tint/30 bg-violet/5 p-6')}>
              <StageHeader index={7} icon={Bot} title={aiDesign.title} body={aiDesign.body} />
              <div className="overflow-hidden rounded-2xl border border-line">
                <img src={aiFigmaDesign} alt="AI-assisted design exploration in Figma" className="w-full" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
