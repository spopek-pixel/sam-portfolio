import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import brandLockups from '@/assets/images/projects/housingkind/Housingkind-Brand-Identity.png'
import brandKit from '@/assets/images/projects/housingkind/Housingkind-Brand-Identity- Kit.png'

export function BrandShowcase() {
  const { body, colors, typography } = housingkind.branding

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <SectionHeading kicker="Branding" title="A mark built on trust." />
          <Reveal delay={0.1}>
            <p className="text-fg-muted">{body}</p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <figure className="aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#e9eef9] via-[#dde7f6] to-[#c9d9ef]">
              <img
                src={brandLockups}
                alt="Housingkind logo lockups in primary, light, and reversed color variants"
                className="h-full w-full object-contain p-6"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.06}>
            <figure className="aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#e9eef9] via-[#dde7f6] to-[#c9d9ef]">
              <img
                src={brandKit}
                alt="Housingkind monogram badges and mark variants"
                className="h-full w-full object-contain p-6"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6">
              <h3 className="kicker">Color palette</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center gap-2">
                    <span
                      className="h-14 w-14 rounded-full border border-line"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-fg-muted">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6">
              <h3 className="kicker">Typography</h3>
              <div className="flex flex-col gap-4">
                {typography.map((type) => (
                  <div key={type.name}>
                    <p className="font-display text-2xl">Aa {type.name}</p>
                    <p className="text-xs text-fg-muted">{type.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
