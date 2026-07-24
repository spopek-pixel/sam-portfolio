import { UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import onboardingGoal from '@/assets/images/projects/dragonfly-yoga/onboarding8.png'
import aiScreen1 from '@/assets/images/projects/dragonfly-yoga/ai_screen1.png'
import wireframeImg from '@/assets/images/projects/dragonfly-yoga/wireframe.png'
import wireframe2Img from '@/assets/images/projects/dragonfly-yoga/wireframe2.png'

interface CardVisual {
  kind: 'image' | 'crop' | 'placeholder'
  src?: string
  position?: string
  size?: string
  badge?: string
}

const visuals: CardVisual[] = [
  { kind: 'image', src: onboardingGoal },
  { kind: 'crop', src: wireframeImg, position: '14% 22%', size: '280% auto', badge: 'Wireframe' },
  { kind: 'image', src: aiScreen1 },
  { kind: 'crop', src: wireframe2Img, position: '46% 78%', size: '280% auto', badge: 'Wireframe' },
  { kind: 'crop', src: wireframeImg, position: '86% 24%', size: '280% auto', badge: 'Wireframe' },
  { kind: 'placeholder' },
]

export function FinalExperience() {
  const features = dragonfly.finalExperience

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Final outcome" title="What the redesign actually does." className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((feature, index) => {
            const visual = visuals[index]
            return (
              <Reveal key={feature.title} delay={index * 0.06} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="group flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-surface/60 p-5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface">
                    {visual.kind === 'placeholder' ? (
                      <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                        <UserRound size={28} className="text-fg-muted/50" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted/70">UI coming soon</span>
                      </div>
                    ) : visual.kind === 'image' ? (
                      <img
                        src={visual.src}
                        alt={`${feature.title} screen`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="h-full w-full bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${visual.src})`, backgroundPosition: visual.position, backgroundSize: visual.size }}
                        role="img"
                        aria-label={`${feature.title} — wireframe preview`}
                      />
                    )}
                    {visual.badge && (
                      <span className="absolute left-3 top-3 rounded-full border border-line bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted backdrop-blur-sm">
                        {visual.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="text-sm text-fg-muted">{feature.body}</p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
