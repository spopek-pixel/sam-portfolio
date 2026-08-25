import type { UserStoriesData } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'

export function UserStoriesSection({ data }: { data: UserStoriesData }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading kicker="User stories" title="Every click leads somewhere." />

        <div className="flex flex-col gap-4">
          {data.description.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p className="max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <Lightbox src={data.image} alt="User stories map — the advertiser upload journey and every fail branch">
            <div className="mx-auto max-h-[440px] max-w-3xl overflow-hidden rounded-xl border border-line bg-white">
              <img src={data.image} alt="" className="h-full w-full object-contain" loading="lazy" />
            </div>
          </Lightbox>
        </Reveal>
      </div>
    </section>
  )
}
