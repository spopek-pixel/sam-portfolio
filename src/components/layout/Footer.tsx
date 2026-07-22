import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const socials = [
  { label: 'Email', href: 'mailto:hello@sampopek.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Resume', href: '/resume.pdf' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="kicker">Let's talk</span>
              <h3 className="mt-3 text-3xl sm:text-4xl">
                Got a problem worth <span className="text-gradient">designing</span> for?
              </h3>
            </div>
            <a
              href="mailto:hello@sampopek.com"
              className="group flex items-center gap-2 whitespace-nowrap font-mono text-sm uppercase tracking-wider text-fg-muted transition-colors hover:text-fg"
            >
              hello@sampopek.com
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 text-sm text-fg-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Samantha Popek. Designed &amp; built by hand.</p>
          <div className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition-colors hover:text-fg"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
