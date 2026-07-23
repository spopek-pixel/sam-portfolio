import { HelpCircle } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import housingAboutMockup from '@/assets/images/projects/housingkind/housing_about.png'

export function DecisionNarrative() {
  const { body, questions, mockups } = housingkind.decisionNarrative
  const mockup = mockups[0]

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="In my own words" title="Decision making & thought process." className="mb-8" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
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

          <Reveal delay={0.12} className="h-full">
            <figure className="flex h-full flex-col">
              <div className="min-h-0 flex-1 overflow-hidden rounded-2xl">
                <img
                  src={housingAboutMockup}
                  alt={mockup.caption}
                  className="h-full w-full object-cover object-[50%_35%]"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 shrink-0 text-sm text-fg-muted">{mockup.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
