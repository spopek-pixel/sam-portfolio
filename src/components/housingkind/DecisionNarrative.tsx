import { HelpCircle } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import housingAboutMockup from '@/assets/images/projects/housingkind/housing_about.png'
import figmaAfter from '@/assets/images/projects/housingkind/figma_after.png'

const mockupImages = [housingAboutMockup, figmaAfter]
const mockupImageClasses = ['aspect-[4/3] object-cover', 'aspect-[7/8] object-cover object-top']

export function DecisionNarrative() {
  const { body, questions, mockups } = housingkind.decisionNarrative

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="In my own words" title="Decision making & thought process." className="mb-8" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            {body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="text-fg-muted">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-line bg-surface/60 p-6">
                <p className="mb-3 text-sm font-medium">Throughout the process, I kept asking myself:</p>
                <ul className="flex flex-col gap-2">
                  {questions.map((question) => (
                    <li key={question} className="flex gap-2 text-fg-muted">
                      <HelpCircle size={16} className="mt-0.5 shrink-0 text-violet-tint" />
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6">
            {mockups.map((mockup, index) => (
              <Reveal key={mockup.caption} delay={0.1 + index * 0.08}>
                <figure>
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                    <img
                      src={mockupImages[index]}
                      alt={mockup.caption}
                      className={cn('w-full', mockupImageClasses[index])}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-fg-muted">{mockup.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
