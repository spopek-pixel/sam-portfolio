import { Info } from 'lucide-react'

export function ConceptDisclaimer({ text }: { text: string }) {
  return (
    <section className="px-6 sm:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-3 rounded-2xl border border-line bg-surface/60 p-5">
          <Info size={18} className="mt-0.5 shrink-0 text-violet-tint" />
          <p className="text-sm leading-relaxed text-fg-muted">{text}</p>
        </div>
      </div>
    </section>
  )
}
