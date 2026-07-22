import { Compass, Palette, Target } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const pillars = [
  {
    icon: Compass,
    number: '01',
    title: 'UX Design',
    description: 'Intuitive, research-backed digital products.',
    points: ['User research & analysis', 'Information architecture', 'Wireframing & prototyping', 'Usability testing'],
  },
  {
    icon: Palette,
    number: '02',
    title: 'Visual Design',
    description: 'Brand-forward interfaces and identity work.',
    points: ['UI design systems', 'Branding & logo design', 'Illustration', 'Motion & micro-interaction'],
  },
  {
    icon: Target,
    number: '03',
    title: 'Product Strategy',
    description: 'Bridging user needs with business goals.',
    points: ['Problem & opportunity framing', 'Pain-point prioritization', 'Roadmap planning', 'Experience strategy'],
  },
]

export function HowIWork() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          kicker="How I work"
          title="Three lenses. One process."
          description="Every project moves through the same core disciplines — in different proportions depending on what the problem actually needs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-line bg-surface/60 p-7 transition-colors hover:border-violet-tint/60">
                <div className="flex items-center justify-between">
                  <pillar.icon className="text-violet-tint" size={28} />
                  <span className="font-mono text-xs text-fg-muted">{pillar.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl">{pillar.title}</h3>
                  <p className="mt-2 text-fg-muted">{pillar.description}</p>
                </div>
                <ul className="mt-auto flex flex-col gap-2 border-t border-line pt-5 text-sm text-fg-muted transition-colors group-hover:text-fg">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-acid" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
