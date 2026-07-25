import { motion } from 'framer-motion'
import type { Accent } from '@/data/projects'
import { imagesForClient } from '@/data/projects'
import type { outfront } from '@/data/outfront'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

type Client = (typeof outfront)['clients'][number]

export function ClientCaseStudy({ client, slug, accent, index }: { client: Client; slug: string; accent: Accent; index: number }) {
  const images = imagesForClient(slug, client.slug)

  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="flex flex-col gap-8 rounded-3xl border border-line bg-surface/60 p-6 sm:p-10"
      >
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: client.brandColor }} />
          <h3 className="text-2xl sm:text-3xl">{client.name}</h3>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="kicker">{client.header1.label}</span>
              <p className="max-w-2xl text-fg-muted">{client.header1.body}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="kicker">{client.header2.label}</span>
              <p className="max-w-2xl text-fg-muted">{client.header2.body}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:border-l lg:border-line lg:pl-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Tools</span>
              <span className="text-sm">{client.tools.join(', ')}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Timeline</span>
              <span className="text-sm">{client.timeline}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Final deliverables</span>
              <div className="flex flex-wrap gap-1.5">
                {client.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[0, 1].map((slot) =>
            images[slot] ? (
              <Lightbox key={slot} src={images[slot]} alt={`${client.name} mockup ${slot + 1}`}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-surface">
                  <img src={images[slot]} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </Lightbox>
            ) : (
              <ProjectVisual key={slot} title={client.name} accent={accent} className="aspect-[4/3] w-full" />
            ),
          )}
        </div>
      </motion.div>
    </Reveal>
  )
}
