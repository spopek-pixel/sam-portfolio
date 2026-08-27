import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import instagramSarah from '@/assets/images/projects/bumble-bff-concept/proof-instagram-sarah.png'
import friendMegan from '@/assets/images/projects/bumble-bff-concept/proof-friend-megan.png'
import friendLexi from '@/assets/images/projects/bumble-bff-concept/proof-friend-lexi.png'
import birthday from '@/assets/images/projects/bumble-bff-concept/proof-birthday.jpg'

const imageById: Record<string, string> = {
  'instagram-sarah': instagramSarah,
  'friend-megan': friendMegan,
  'friend-lexi': friendLexi,
  birthday: birthday,
}

export function MyStorySection({ story }: { story: (typeof bumbleConcept)['myStory'] }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="kicker">{story.kicker}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {story.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.06}>
                <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {story.proof.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <Lightbox src={imageById[item.id]} alt={item.caption}>
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-line bg-surface">
                    <img src={imageById[item.id]} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </Lightbox>
                <p className="text-xs leading-snug text-fg-muted">{item.caption}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
