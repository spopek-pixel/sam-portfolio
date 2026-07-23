import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'

export function Deliverables({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">Deliverables</span>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-5 flex flex-wrap gap-2">
            {items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
