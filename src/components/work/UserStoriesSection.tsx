import type { UserStoriesData } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function UserStoriesSection({ data }: { data: UserStoriesData }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading kicker="User stories" title="Every click leads somewhere." />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex flex-col gap-4">
            {data.description.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-xl border border-line bg-white">
              <img
                src={data.image}
                alt="User stories map — the advertiser upload journey and every fail branch"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
