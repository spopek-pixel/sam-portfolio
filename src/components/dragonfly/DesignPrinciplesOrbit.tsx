import { CalendarCheck, Compass, Flower2, Frown, Repeat } from 'lucide-react'
import { motion } from 'framer-motion'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const iconMap = { Frown, CalendarCheck, Compass, Repeat, Flower2 }

const RADIUS = 190

function pointOn(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  return { x: Math.cos(angle) * RADIUS, y: Math.sin(angle) * RADIUS }
}

export function DesignPrinciplesOrbit() {
  const goals = dragonfly.designGoals
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design principles" title="The compass behind every screen." className="mb-10" />

        <div className="hidden justify-center lg:flex">
          <div className="relative h-[480px] w-[480px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="-240 -240 480 480" aria-hidden>
              {goals.map((_, index) => {
                const p = pointOn(index, goals.length)
                return (
                  <line key={index} x1={0} y1={0} x2={p.x} y2={p.y} stroke="var(--color-line)" strokeWidth={1} strokeDasharray="4 5" />
                )
              })}
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-violet-tint/40 bg-violet/10 text-center"
            >
              <Flower2 size={26} className="text-violet-tint" />
              <span className="px-2 text-xs font-medium leading-tight">Design principles</span>
            </motion.div>

            {goals.map((goal, index) => {
              const Icon = iconMap[goal.icon as keyof typeof iconMap]
              const p = pointOn(index, goals.length)
              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={reducedMotion ? undefined : { scale: 1.08 }}
                  className="absolute left-1/2 top-1/2 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
                  style={{ marginLeft: p.x, marginTop: p.y }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface text-violet-tint shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                    <Icon size={22} />
                  </span>
                  <span className="text-xs font-medium leading-tight sm:text-sm">{goal.title}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className={cn('grid gap-3 sm:grid-cols-2 lg:hidden')}>
          {goals.map((goal, index) => {
            const Icon = iconMap[goal.icon as keyof typeof iconMap]
            return (
              <Reveal key={goal.title} delay={index * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-violet-tint">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium">{goal.title}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
