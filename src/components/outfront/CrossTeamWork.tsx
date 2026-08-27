import { ArrowUpRight } from 'lucide-react'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import snowflakeImg from '@/assets/images/projects/outfront-media-graphics/outfront-media.png'
import tinderImg from '@/assets/images/projects/outfront-media-graphics/outfront-media1.png'
import belliwelliImg from '@/assets/images/projects/outfront-media-graphics/outfront-media3.png'

const imageBySlug: Record<string, { src: string; alt: string }> = {
  snowflake: { src: snowflakeImg, alt: 'Snowflake x OpenTable billboard, "The Perfect Spot For A Data Night"' },
  tinder: { src: tinderImg, alt: 'Tinder bus wrap, "Proving astrology right"' },
  belliwelli: { src: belliwelliImg, alt: 'BelliWelli billboard, "Hot girls have IBS"' },
}

export function CrossTeamWork() {
  const { intro, studioLink, pieces } = outfront.crossTeam

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Beyond my own projects" title="Learning inside OUTFRONT Studios." className="mb-8 max-w-2xl" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{intro}</p>
          </Reveal>
          {studioLink && (
            <Reveal delay={0.08}>
              <LinkButton href={studioLink} target="_blank" rel="noreferrer" variant="secondary" className="whitespace-nowrap">
                About OUTFRONT Studios <ArrowUpRight size={16} />
              </LinkButton>
            </Reveal>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {pieces.map((piece, index) => {
            const image = imageBySlug[piece.slug]
            return (
              <Reveal key={piece.slug} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-4">
                  {image && (
                    <Lightbox src={image.src} alt={image.alt}>
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-white">
                        <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                      </div>
                    </Lightbox>
                  )}
                  <h3 className="font-medium">{piece.brand}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-fg-muted">{piece.note}</p>
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-tint hover:text-violet"
                  >
                    View case study <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
