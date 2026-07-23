import { BookOpenText, Bot, Library, Map, MonitorSmartphone, Scale } from 'lucide-react'
import { motion } from 'framer-motion'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const featureIcons = [Bot, Map, BookOpenText, Scale, Library, MonitorSmartphone]
const featureTones = ['text-violet-tint', 'text-acid', 'text-violet-tint', 'text-acid', 'text-violet-tint', 'text-acid']

interface Token {
  text: string
  cls?: string
}

const featureCodeLines: Token[][] = [
  [{ text: 'export ', cls: 'text-violet-tint' }, { text: 'const ', cls: 'text-violet-tint' }, { text: 'features', cls: 'text-fg' }, { text: ' = [', cls: 'text-fg-muted' }],
  [{ text: "  'AI Chat Assistant',", cls: 'text-mint' }],
  [{ text: "  'Street Visualizations',", cls: 'text-mint' }],
  [{ text: "  'Neighborhood Stories',", cls: 'text-mint' }],
  [{ text: "  'Myths vs. Facts',", cls: 'text-mint' }],
  [{ text: "  'Resource Library',", cls: 'text-mint' }],
  [{ text: ']', cls: 'text-fg-muted' }],
]

const aiCodeLines: Token[][] = [
  [{ text: 'const ', cls: 'text-violet-tint' }, { text: 'res', cls: 'text-fg' }, { text: ' = ', cls: 'text-fg-muted' }, { text: 'await ', cls: 'text-violet-tint' }, { text: 'client', cls: 'text-fg' }, { text: '.chat(', cls: 'text-fg-muted' }],
  [{ text: '  deployment,', cls: 'text-fg-muted' }],
  [{ text: '  [', cls: 'text-fg-muted' }],
  [{ text: '    { ', cls: 'text-fg-muted' }, { text: 'role', cls: 'text-acid' }, { text: ": 'system', ", cls: 'text-mint' }, { text: 'content', cls: 'text-acid' }, { text: ': HOUSING_CONTEXT },', cls: 'text-fg-muted' }],
  [{ text: '    { ', cls: 'text-fg-muted' }, { text: 'role', cls: 'text-acid' }, { text: ": 'user', ", cls: 'text-mint' }, { text: 'content', cls: 'text-acid' }, { text: ': question },', cls: 'text-fg-muted' }],
  [{ text: '  ],', cls: 'text-fg-muted' }],
  [{ text: ')', cls: 'text-fg-muted' }],
]

function CodeWindow({ filename, lines, className }: { filename: string; lines: Token[][]; className?: string }) {
  return (
    <div className={cn('hidden overflow-hidden rounded-2xl border border-line bg-[#0d0d13] lg:block', className)}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[11px] text-fg-muted">{filename}</span>
      </div>
      <motion.div
        className="flex flex-col gap-2 p-5 font-mono text-[12.5px] leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35 } } }}
          >
            {line.map((token, tokenIndex) => (
              <span key={tokenIndex} className={token.cls}>
                {token.text}
              </span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function KeyFeatures() {
  const features = housingkind.keyFeatures

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Key features"
          title="What Housingkind does."
          description="Straightforward, in plain terms: a platform residents and developers can both use to understand missing middle housing — no policy background required."
          className="mb-10"
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr_0.85fr] lg:items-center lg:gap-8">
          <CodeWindow filename="features.ts" lines={featureCodeLines} />

          <div className="flex flex-col">
            {features.map((feature, index) => {
              const Icon = featureIcons[index]
              const isLast = index === features.length - 1
              return (
                <Reveal key={feature.title} delay={index * 0.06}>
                  <div className={isLast ? 'flex items-start gap-4 py-4' : 'flex items-start gap-4 border-b border-line py-4'}>
                    <span
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line',
                        featureTones[index],
                      )}
                    >
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="mt-0.5 text-sm text-fg-muted">{feature.body}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <CodeWindow filename="ChatAssistant.tsx" lines={aiCodeLines} />
        </div>
      </div>
    </section>
  )
}
