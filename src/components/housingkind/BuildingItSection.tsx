import { motion } from 'framer-motion'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'
import houseVideo from '@/assets/images/projects/housingkind/house-video.mp4'
import figmaMakeBefore from '@/assets/images/projects/housingkind/figma_make_before.png'
import figmaAfter from '@/assets/images/projects/housingkind/figma_after.png'

const comparisonImages = { before: figmaMakeBefore, after: figmaAfter }

interface Token {
  text: string
  cls?: string
}

const componentCodeLines: Token[][] = [
  [{ text: 'export ', cls: 'text-violet-tint' }, { text: 'function ', cls: 'text-violet-tint' }, { text: 'StreetView', cls: 'text-fg' }, { text: '() {', cls: 'text-fg-muted' }],
  [{ text: '  const ', cls: 'text-violet-tint' }, { text: '[block, setBlock]', cls: 'text-fg' }, { text: ' = ', cls: 'text-fg-muted' }, { text: 'useState', cls: 'text-acid' }, { text: '(real)', cls: 'text-fg-muted' }],
  [{ text: '  return (', cls: 'text-fg-muted' }],
  [{ text: '    <', cls: 'text-fg-muted' }, { text: 'Overlay', cls: 'text-mint' }, { text: ' housing={block} />', cls: 'text-fg-muted' }],
  [{ text: '  )', cls: 'text-fg-muted' }],
  [{ text: '}', cls: 'text-fg-muted' }],
]

const deployCodeLines: Token[][] = [
  [{ text: '$ ', cls: 'text-fg-muted' }, { text: 'git push', cls: 'text-mint' }, { text: ' origin main', cls: 'text-fg' }],
  [{ text: '  Building…', cls: 'text-fg-muted' }],
  [{ text: '  ✓ ', cls: 'text-acid' }, { text: 'Compiled successfully', cls: 'text-fg-muted' }],
  [{ text: '  ✓ ', cls: 'text-acid' }, { text: 'Deployed to production', cls: 'text-fg-muted' }],
  [{ text: '  ', cls: '' }, { text: 'housingkind.org', cls: 'text-violet-tint' }],
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
        className="flex flex-col gap-2 p-5 font-mono text-[12px] leading-relaxed"
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

export function BuildingItSection() {
  const { figmaMakeIntro, comparison, decisionLede, decisionRest, screenshotCaption, stack } = housingkind.buildingIt

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Building it for real" title="Figma Make, then me." className="mb-8 max-w-2xl" />

        <Reveal>
          <p className="max-w-2xl text-lg text-fg-muted">{figmaMakeIntro}</p>
        </Reveal>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {(['before', 'after'] as const).map((stage, stageIndex) => (
            <Reveal key={stage} delay={0.06 + stageIndex * 0.06}>
              <figure>
                <div className="mb-3 flex items-start gap-2.5">
                  <span className={stage === 'before' ? 'mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-tint' : 'mt-2 h-2 w-2 shrink-0 rounded-full bg-acid'} />
                  <span className="font-medium">{comparison[stage].title}</span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-line">
                  <img src={comparisonImages[stage]} alt={comparison[stage].title} className="aspect-[7/8] w-full object-cover object-top" loading="lazy" />
                </div>
                <figcaption className="mt-3 text-sm text-fg-muted">{comparison[stage].body}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Reveal>
            <h3 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl md:text-5xl">{decisionLede}</h3>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">{decisionRest}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-center">
          <CodeWindow filename="StreetView.tsx" lines={componentCodeLines} />

          <Reveal delay={0.12}>
            <figure className="mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                <video src={houseVideo} autoPlay muted loop playsInline aria-label="Screen recording of the Housingkind website" className="h-auto w-full" />
              </div>
              <figcaption className="mt-3 text-center text-sm text-fg-muted">{screenshotCaption}</figcaption>
            </figure>
          </Reveal>

          <CodeWindow filename="deploy.sh" lines={deployCodeLines} />
        </div>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Tools used</span>
            {stack.map((tool) => (
              <span key={tool} className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-fg-muted">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
