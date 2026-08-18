import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import { StickyNote, Layers, Briefcase, TerminalSquare, Bot, Cloud, Code2 } from 'lucide-react'
import { SiFigma, SiMiro, SiClaude, SiGithub, SiVercel, SiReact, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { PixelAccent } from '@/components/ui/PixelAccent'

interface Tool {
  label: string
  Icon: ComponentType<{ className?: string; size?: number }>
}

const tools: Tool[] = [
  { label: 'Figma', Icon: SiFigma },
  { label: 'FigJam', Icon: StickyNote },
  { label: 'Miro', Icon: SiMiro },
  { label: 'Creative Cloud', Icon: Layers },
  { label: 'Microsoft Office', Icon: Briefcase },
  { label: 'Claude', Icon: SiClaude },
  { label: 'Claude Code', Icon: TerminalSquare },
  { label: 'ChatGPT', Icon: Bot },
  { label: 'Azure OpenAI', Icon: Cloud },
  { label: 'Cursor', Icon: Code2 },
  { label: 'React', Icon: SiReact },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'Tailwind CSS', Icon: SiTailwindcss },
  { label: 'Framer Motion', Icon: SiFramer },
  { label: 'GitHub', Icon: SiGithub },
  { label: 'Vercel', Icon: SiVercel },
]

export function WeaponsOfChoice() {
  return (
    <section className="relative px-6 py-10 sm:px-14 sm:py-16">
      <PixelAccent icon="bolt" color="#a6ff4d" size={22} className="absolute right-[10%] top-4 hidden sm:block" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Loadout"
          title="Weapons of choice."
          description="What I reach for by default, from research to shipped code."
          className="mb-12"
        />

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {tools.map((tool, index) => (
            <Reveal key={tool.label} delay={(index % 8) * 0.04}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'var(--color-acid)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-line px-3 py-4 text-center"
              >
                <tool.Icon className="text-fg-muted transition-colors group-hover:text-acid" size={22} />
                <span className="font-mono text-[11px] uppercase leading-tight tracking-wide text-fg-muted">
                  {tool.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
