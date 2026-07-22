const skills = [
  'User Research',
  'Systems Thinking',
  'Figma',
  'Prototyping',
  'React',
  'Product Strategy',
  'Accessibility',
  'Framer Motion',
  'Visual Design',
  'TypeScript',
]

export function SkillsMarquee() {
  const doubled = [...skills, ...skills]

  return (
    <section className="overflow-hidden border-y border-line py-8">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 motion-reduce:animate-none">
        {doubled.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="font-display text-3xl text-fg-muted/50 sm:text-4xl"
          >
            {skill} <span className="text-acid">/</span>
          </span>
        ))}
      </div>
    </section>
  )
}
