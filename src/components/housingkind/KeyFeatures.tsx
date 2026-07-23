import { BookOpenText, Bot, Library, Map, MonitorSmartphone, Scale } from 'lucide-react'
import { motion } from 'framer-motion'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const featureIcons = [Bot, Map, BookOpenText, Scale, Library, MonitorSmartphone]

interface Token {
  text: string
  cls?: string
}

const codeLines: Token[][] = [
  [{ text: 'export ', cls: 'text-violet-tint' }, { text: 'const ', cls: 'text-violet-tint' }, { text: 'keyFeatures', cls: 'text-fg' }, { text: ' = [', cls: 'text-fg-muted' }],
  [{ text: '  { ', cls: 'text-fg-muted' }, { text: 'title', cls: 'text-acid' }, { text: ': ', cls: 'text-fg-muted' }, { text: "'AI Chat Assistant'", cls: 'text-mint' }, { text: ', icon: Bot },', cls: 'text-fg-muted' }],
  [{ text: '  { ', cls: 'text-fg-muted' }, { text: 'title', cls: 'text-acid' }, { text: ': ', cls: 'text-fg-muted' }, { text: "'Street Visualizations'", cls: 'text-mint' }, { text: ', icon: Map },', cls: 'text-fg-muted' }],
  [{ text: '  { ', cls: 'text-fg-muted' }, { text: 'title', cls: 'text-acid' }, { text: ': ', cls: 'text-fg-muted' }, { text: "'Neighborhood Stories'", cls: 'text-mint' }, { text: ', icon: BookOpenText },', cls: 'text-fg-muted' }],
  [{ text: '  { ', cls: 'text-fg-muted' }, { text: 'title', cls: 'text-acid' }, { text: ': ', cls: 'text-fg-muted' }, { text: "'Myths vs. Facts'", cls: 'text-mint' }, { text: ', icon: Scale },', cls: 'text-fg-muted' }],
  [{ text: ']', cls: 'text-fg-muted' }],
  [{ text: '', cls: '' }],
  [{ text: '// built with React, TypeScript & Azure OpenAI', cls: 'text-fg-muted italic' }],
]

function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#0d0d13]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-fg-muted">KeyFeatures.tsx</span>
      </div>
      <motion.div
        className="flex flex-col gap-1.5 p-5 font-mono text-[13px] leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35 } } }}
          >
            {line.length === 0 || (line.length === 1 && line[0].text === '') ? (
              <>&nbsp;</>
            ) : (
              line.map((token, tokenIndex) => (
                <span key={tokenIndex} className={token.cls}>
                  {token.text}
                </span>
              ))
            )}
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
        <SectionHeading kicker="Key features" title="What Housingkind does." className="mb-8" />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12">
          <div className="flex flex-col">
            {features.map((feature, index) => {
              const Icon = featureIcons[index]
              const isLast = index === features.length - 1
              return (
                <Reveal key={feature.title} delay={index * 0.06}>
                  <div className={isLast ? 'flex items-start gap-4 py-4' : 'flex items-start gap-4 border-b border-line py-4'}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-violet-tint">
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

          <Reveal delay={0.15}>
            <CodeWindow />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
