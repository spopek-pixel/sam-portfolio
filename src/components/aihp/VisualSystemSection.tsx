import { imageFor } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ImageSlot } from './ImageSlot'

const elements = [
  { key: 'system-colors', label: 'Colors', tone: 'violet' as const },
  { key: 'system-type', label: 'Type Styles', tone: 'acid' as const },
  { key: 'system-elements', label: 'Graphic Elements', tone: 'mint' as const },
  { key: 'system-templates', label: 'Social Templates', tone: 'violet' as const },
  { key: 'system-layouts', label: 'Layout Examples', tone: 'acid' as const },
]

export function VisualSystemSection() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Visual System" title={aihp.visualSystem.heading} description={aihp.visualSystem.body} className="mb-10 max-w-2xl" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {elements.map((el, index) => (
            <Reveal key={el.key} delay={index * 0.06}>
              <ImageSlot
                src={imageFor('aihp', el.key)}
                alt={`AIHP visual system — ${el.label}`}
                label={el.label}
                hint={`${el.key}.jpg`}
                tone={el.tone}
                aspect="aspect-square"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
