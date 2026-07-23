import { Download, ArrowUpRight } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function ResumeCTA() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 rounded-3xl border border-line bg-surface/60 p-10 sm:flex-row sm:items-center sm:p-14">
          <div>
            <span className="kicker">Want the full picture?</span>
            <h3 className="mt-3 text-3xl sm:text-4xl">Grab my résumé.</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <LinkButton href="/resume.pdf" target="_blank" rel="noreferrer" variant="primary">
              <Download size={16} /> Download
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Say hello <ArrowUpRight size={16} />
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
