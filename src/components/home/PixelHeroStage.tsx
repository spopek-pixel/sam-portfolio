import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, SkipForward } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '@/components/ui/Button'
import { InteractiveHeadline } from './InteractiveHeadline'
import { PixelSam } from './PixelSam'
import { PaintCelebration } from './PaintCelebration'
import { PaintProjectile, type Point } from './PaintProjectile'
import { heroWords, type HeadlineWord } from './heroWords'

interface ActiveShot {
  id: string
  from: Point
  to: Point
  color: HeadlineWord['color']
}

export function PixelHeroStage() {
  const stageRef = useRef<HTMLDivElement>(null)
  const muzzleRef = useRef<HTMLDivElement>(null)
  // A ref-based lock (not state) so rapid clicks within the same React batch
  // can't both read "no shot in flight" before either update commits.
  const firingRef = useRef(false)
  const queueRef = useRef<Array<{ word: HeadlineWord; wordEl: HTMLElement }>>([])

  const [hits, setHits] = useState<Set<string>>(new Set())
  const [activeShot, setActiveShot] = useState<ActiveShot | null>(null)
  const [recoilKey, setRecoilKey] = useState(0)
  const [skipped, setSkipped] = useState(false)

  const allHit = hits.size === heroWords.length
  const revealed = allHit || skipped

  const fireShot = (word: HeadlineWord, wordEl: HTMLElement) => {
    if (!stageRef.current || !muzzleRef.current) return

    const stageRect = stageRef.current.getBoundingClientRect()
    const muzzleRect = muzzleRef.current.getBoundingClientRect()
    const wordRect = wordEl.getBoundingClientRect()

    const from: Point = {
      x: muzzleRect.left + muzzleRect.width / 2 - stageRect.left,
      y: muzzleRect.top + muzzleRect.height / 2 - stageRect.top,
    }
    const to: Point = {
      x: wordRect.left + wordRect.width / 2 - stageRect.left,
      y: wordRect.top + wordRect.height / 2 - stageRect.top,
    }

    firingRef.current = true
    setActiveShot({ id: word.id, from, to, color: word.color })
    setRecoilKey((k) => k + 1)
  }

  const handleActivate = (word: HeadlineWord, wordEl: HTMLElement) => {
    if (hits.has(word.id) || queueRef.current.some((q) => q.word.id === word.id)) return
    if (firingRef.current) {
      queueRef.current.push({ word, wordEl })
      return
    }
    fireShot(word, wordEl)
  }

  const handleShotImpact = () => {
    setActiveShot((current) => {
      if (current) setHits((prev) => new Set(prev).add(current.id))
      return current
    })
  }

  const handleShotDone = () => {
    firingRef.current = false
    setActiveShot(null)
    const next = queueRef.current.shift()
    if (next) handleActivate(next.word, next.wordEl)
  }

  const handleSkip = () => {
    queueRef.current = []
    firingRef.current = false
    setHits(new Set(heroWords.map((w) => w.id)))
    setSkipped(true)
    setActiveShot(null)
  }

  return (
    <div ref={stageRef} className="relative">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="kicker"
          >
            Research · Design · Code · AI
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <InteractiveHeadline hits={hits} onActivate={handleActivate} />
          </motion.div>

          <div className="min-h-[2rem]">
            {!revealed ? (
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                  Click the words to make some noise
                </p>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted transition-colors hover:border-acid hover:text-acid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid"
                >
                  <SkipForward size={11} /> Skip animation
                </button>
              </div>
            ) : (
              <p className="relative inline-block font-mono text-xs uppercase tracking-wider text-acid">
                Now that feels more like me.
                <PaintCelebration />
              </p>
            )}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-lg text-fg-muted"
          >
            I design the message and the experience around it. My background spans product design,
            UX research, front-end development, and brand/OOH communications, so whether I'm working
            on an app interface, a billboard, or a line of copy, I'm asking the same question: what's
            the clearest, most human way to make an idea connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <LinkButton href="/work" variant="primary">
              View my work
            </LinkButton>
            <Link to="/contact" className="group flex items-center gap-1.5 font-medium text-fg-muted transition-colors hover:text-fg">
              Get in touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>

        <PixelSam ref={muzzleRef} recoilKey={recoilKey} celebrate={revealed} />
      </div>

      {activeShot && (
        <PaintProjectile
          key={activeShot.id}
          from={activeShot.from}
          to={activeShot.to}
          color={activeShot.color}
          onImpact={handleShotImpact}
          onDone={handleShotDone}
        />
      )}
    </div>
  )
}
