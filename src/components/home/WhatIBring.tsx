import { Search, PenTool, Code2, Sparkles, Eye, Boxes } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const pillars = [
  {
    icon: Search,
    title: 'UX Research',
    description: 'Fifteen-plus stakeholder interviews, systems maps, and affinity diagrams — not assumptions.',
  },
  {
    icon: PenTool,
    title: 'Product Design',
    description: 'Wireframes through high-fidelity prototypes that hold up under real usability testing.',
  },
  {
    icon: Code2,
    title: 'Front-End Development',
    description: 'React, TypeScript, and Tailwind CSS — I ship what I design, pixel for pixel.',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Claude, ChatGPT, and Azure AI woven into both my process and the products I build.',
  },
  {
    icon: Eye,
    title: 'Accessibility',
    description: 'Reduced-motion support, focus states, and semantic markup by default, not as an afterthought.',
  },
  {
    icon: Boxes,
    title: 'Design Systems',
    description: 'Reusable components and tokens that hold up past the first screen and the first designer.',
  },
]

export function WhatIBring() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          kicker="Why hire me"
          title="What I bring."
          description="Most designers hand off a file. I hand off a working, accessible interface — because I build it myself."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={(index % 3) * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface/60 p-7 transition-colors hover:border-violet-tint/60">
                <pillar.icon className="text-violet-tint" size={28} />
                <h3 className="text-xl">{pillar.title}</h3>
                <p className="text-fg-muted">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
