import { motion } from 'framer-motion'
import { PenTool } from 'lucide-react'
import type { outfront } from '@/data/outfront'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { ImageCarousel, type CarouselSlide } from './ImageCarousel'
import { cn } from '@/lib/utils'

type Client = (typeof outfront)['clients'][number]

export interface ClientImage {
  src: string
  alt: string
  fit?: 'cover' | 'contain'
}

export type Media =
  | { type: 'grid'; images: ClientImage[]; layout?: 'even' | 'feature-left' | 'stacked' }
  | { type: 'carousel'; slides: CarouselSlide[] }

export interface ClientCaseStudyProps {
  client: Client
  media: Media
  index: number
}

function ImageGrid({ images, layout = 'even' }: { images: ClientImage[]; layout?: 'even' | 'feature-left' | 'stacked' }) {
  if (layout === 'stacked') {
    return (
      <div className="flex flex-col gap-4">
        {images.map((image, slot) => (
          <Lightbox key={image.src} src={image.src} alt={image.alt}>
            <div
              className={cn(
                'w-full overflow-hidden rounded-xl border border-line',
                slot === 0 ? 'aspect-[16/9]' : 'aspect-[21/9]',
                image.fit === 'contain' ? 'bg-white p-3' : 'bg-surface',
              )}
            >
              <img
                src={image.src}
                alt=""
                className={cn('h-full w-full', image.fit === 'contain' ? 'object-contain' : 'object-cover')}
                loading={slot === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </Lightbox>
        ))}
      </div>
    )
  }

  if (layout === 'feature-left') {
    return (
      <div className="flex flex-col gap-4 sm:flex-row">
        {images.map((image, slot) => (
          <Lightbox
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="h-full"
            triggerClassName={cn('h-72 sm:h-96', slot === 0 ? 'sm:flex-[1.5]' : 'sm:flex-1')}
          >
            <div
              className={cn(
                'h-full w-full overflow-hidden rounded-xl border border-line',
                image.fit === 'contain' ? 'bg-white p-3' : 'bg-surface',
              )}
            >
              <img
                src={image.src}
                alt=""
                className={cn('h-full w-full', image.fit === 'contain' ? 'object-contain' : 'object-cover')}
                loading={slot === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </Lightbox>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image, slot) => (
        <Lightbox key={image.src} src={image.src} alt={image.alt}>
          <div
            className={cn(
              'aspect-[3/2] w-full overflow-hidden rounded-xl border border-line',
              image.fit === 'contain' ? 'bg-white p-3' : 'bg-surface',
            )}
          >
            <img
              src={image.src}
              alt=""
              className={cn('h-full w-full', image.fit === 'contain' ? 'object-contain' : 'object-cover')}
              loading={slot === 0 ? 'eager' : 'lazy'}
            />
          </div>
        </Lightbox>
      ))}
    </div>
  )
}

export function ClientCaseStudy({ client, media, index }: ClientCaseStudyProps) {
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

        {client.messaging && (
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-bg/40 p-6">
            <div className="flex items-center gap-2">
              <PenTool size={15} className="text-violet-tint" />
              <span className="kicker">Messaging approach</span>
            </div>
            <p className="max-w-2xl text-lg font-medium text-fg">"{client.messaging.hook}"</p>
            <p className="max-w-2xl text-sm text-fg-muted sm:text-base">{client.messaging.body}</p>

            {client.messaging.headlines.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                  {client.messaging.headlines.length > 1 ? 'Headlines I wrote' : 'Headline I wrote'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {client.messaging.headlines.map((headline) => (
                    <span
                      key={headline}
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-fg"
                    >
                      "{headline}"
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
              {client.messaging.considerations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-xs italic text-fg-muted">{client.messaging.copyCredit}</p>
          </div>
        )}

        {media.type === 'carousel' ? (
          <ImageCarousel slides={media.slides} />
        ) : (
          <ImageGrid images={media.images} layout={media.layout} />
        )}
      </motion.div>
    </Reveal>
  )
}
