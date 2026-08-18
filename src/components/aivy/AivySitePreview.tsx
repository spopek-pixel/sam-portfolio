import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import heroShot from '@/assets/images/projects/aivy/aivy_home.png'
import aboutShot from '@/assets/images/projects/aivy/ai_aivy.png'
import ecosystemShot from '@/assets/images/projects/aivy/aivy_ecosystem.png'
import howItWorksShot from '@/assets/images/projects/aivy/aivy_insight.png'

const shots = [
  { src: heroShot, label: 'Home' },
  { src: aboutShot, label: 'About AIVY' },
  { src: ecosystemShot, label: 'The ecosystem' },
  { src: howItWorksShot, label: 'How it works' },
]

export function AivySitePreview() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={aivy.sitePreview.kicker}
          title={aivy.sitePreview.title}
          description={aivy.sitePreview.body}
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {shots.map((shot, index) => (
            <Reveal key={shot.label} delay={index * 0.08}>
              <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Lightbox src={shot.src} alt={`AIVY concept site: ${shot.label}`}>
                  <img
                    src={shot.src}
                    alt={`AIVY concept site: ${shot.label}`}
                    className="aspect-[16/10] w-full object-cover object-top"
                    loading="lazy"
                  />
                </Lightbox>
                <figcaption className="border-t border-line px-4 py-3 text-xs uppercase tracking-wider text-fg-muted">
                  {shot.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
