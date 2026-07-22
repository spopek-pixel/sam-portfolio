import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const groups = [
  {
    title: 'Research & Strategy',
    items: ['User Interviews', 'Systems Mapping', 'Affinity Diagramming', 'Personas', 'Usability Testing'],
  },
  {
    title: 'Design & Prototyping',
    items: ['Figma', 'FigJam', 'Figma Make', 'Adobe Photoshop', 'Adobe Illustrator', 'Miro'],
  },
  {
    title: 'Front-End & AI',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Claude', 'ChatGPT'],
  },
]

export function ExpertiseGrid() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          kicker="Expertise"
          title={
            <>
              Design that talks to <span className="text-gradient">code.</span>
            </>
          }
          description="I don't just hand off files — I understand what's feasible to build, because I build it myself."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.1}>
              <div className="flex flex-col gap-5">
                <h3 className="font-mono text-sm uppercase tracking-wider text-fg-muted">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.06, borderColor: 'var(--color-acid)', color: 'var(--color-acid)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="cursor-default rounded-full border border-line px-4 py-2 text-sm text-fg"
                    >
                      {item}
                    </motion.span>
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
