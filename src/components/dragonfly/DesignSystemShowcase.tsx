import { Accessibility, Component, MousePointerClick } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const icons = [Component, MousePointerClick, Accessibility]

export function DesignSystemShowcase() {
  const { intro, colors, principles } = dragonfly.designSystem

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design system" title="A soft, consistent language." description={intro} className="mb-10 max-w-2xl" />

        <Reveal>
          <div className="flex flex-wrap gap-6 rounded-2xl border border-line bg-surface/60 p-8">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center gap-2">
                <span className="h-16 w-16 rounded-full border border-line" style={{ backgroundColor: color.hex }} />
                <span className="text-xs text-fg-muted">{color.name}</span>
              </div>
            ))}
            <div className="flex flex-1 flex-col justify-center gap-1 border-l border-line pl-6">
              <p className="font-display text-2xl">Aa</p>
              <p className="text-sm text-fg-muted">Raleway — headings in the live app</p>
              <p className="mt-2 text-lg">Aa</p>
              <p className="text-sm text-fg-muted">Open Sans — body copy and UI text</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.title} delay={0.1 + index * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-line bg-surface/60 p-6">
                  <Icon size={20} className="text-violet-tint" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-fg-muted">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
