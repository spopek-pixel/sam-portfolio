import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import { Users, GitBranch, LayoutGrid, UserCircle, ClipboardCheck, StickyNote, Sparkles, Image, PenTool, Bot } from 'lucide-react'
import {
  SiFigma,
  SiMiro,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiClaude,
} from 'react-icons/si'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

interface Item {
  label: string
  Icon: ComponentType<{ className?: string; size?: number }>
}

const groups: Array<{ title: string; items: Item[] }> = [
  {
    title: 'Research & Strategy',
    items: [
      { label: 'User Interviews', Icon: Users },
      { label: 'Systems Mapping', Icon: GitBranch },
      { label: 'Affinity Diagramming', Icon: LayoutGrid },
      { label: 'Personas', Icon: UserCircle },
      { label: 'Usability Testing', Icon: ClipboardCheck },
    ],
  },
  {
    title: 'Design & Prototyping',
    items: [
      { label: 'Figma', Icon: SiFigma },
      { label: 'FigJam', Icon: StickyNote },
      { label: 'Figma Make', Icon: Sparkles },
      { label: 'Adobe CC', Icon: Image },
      { label: 'Illustration', Icon: PenTool },
      { label: 'Miro', Icon: SiMiro },
    ],
  },
  {
    title: 'Front-End & AI',
    items: [
      { label: 'React', Icon: SiReact },
      { label: 'TypeScript', Icon: SiTypescript },
      { label: 'Tailwind CSS', Icon: SiTailwindcss },
      { label: 'Framer Motion', Icon: SiFramer },
      { label: 'Claude', Icon: SiClaude },
      { label: 'ChatGPT', Icon: Bot },
    ],
  },
]

export function ExpertiseGrid() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          kicker="Expertise"
          title={
            <>
              Design that talks to <span className="text-gradient">code.</span>
            </>
          }
          description="I move fluidly between research methods, design tools, and the code that ships — so nothing gets lost in translation between what's designed and what's built."
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.1}>
              <div className="flex flex-col gap-5">
                <h3 className="font-mono text-sm uppercase tracking-wider text-fg-muted">{group.title}</h3>
                <div className="grid grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -4, borderColor: 'var(--color-acid)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="group flex flex-col items-center gap-2 rounded-2xl border border-line px-3 py-4 text-center"
                    >
                      <item.Icon className="text-fg-muted transition-colors group-hover:text-acid" size={22} />
                      <span className="font-mono text-[11px] uppercase leading-tight tracking-wide text-fg-muted">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
