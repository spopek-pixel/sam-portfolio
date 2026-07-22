import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
  { label: 'Résumé (PDF)', href: '/resume.pdf', external: true },
  { label: 'View my work', href: '/work', external: false },
]

export function ContactLinks() {
  return (
    <section className="px-6 pb-24 sm:px-10">
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {links.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.08}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="group flex items-center justify-between rounded-2xl border border-line px-6 py-5 transition-colors hover:border-violet-tint"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
