import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import bffBillboard from '@/assets/images/projects/bumble-bff-concept/bff-billboard.png'
import bffBuswrap from '@/assets/images/projects/bumble-bff-concept/bff-buswrap.png'
import bffBusPoster from '@/assets/images/projects/bumble-bff-concept/bff-bus-poster.png'
import bffSocial from '@/assets/images/projects/bumble-bff-concept/bff-social.png'

type Channel = (typeof bumbleConcept)['channels'][number]

const imageMap: Record<string, string> = {
  'bff-billboard.png': bffBillboard,
  'bff-buswrap.png': bffBuswrap,
  'bff-bus-poster.png': bffBusPoster,
  'bff-social.png': bffSocial,
}

function Mockup({ channel }: { channel: Channel }) {
  const realImage = channel.image ? imageMap[channel.image] : undefined

  if (channel.format === 'social') {
    return (
      <div className="mx-auto flex w-full max-w-[280px] flex-col overflow-hidden rounded-3xl border border-line bg-surface">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
          <span className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-violet to-acid" />
          <span className="text-xs font-medium">bff</span>
        </div>
        {realImage ? (
          <Lightbox src={realImage} alt={`${channel.channel} mockup: "${channel.headline}"`}>
            <img src={realImage} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </Lightbox>
        ) : (
          <div className="aspect-square w-full bg-gradient-to-br from-violet-deep via-violet to-acid/60" />
        )}
        <div className="flex flex-col gap-1.5 px-3 py-3">
          <div className="flex gap-3 text-fg-muted">
            <span className="text-lg leading-none">♡</span>
            <span className="text-lg leading-none">◈</span>
          </div>
          {!realImage && (
            <p className="text-xs leading-relaxed text-fg">
              <span className="font-semibold">bff</span> {channel.headline}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (realImage) {
    return (
      <Lightbox src={realImage} alt={`${channel.channel} mockup: "${channel.headline}"`}>
        <div className="overflow-hidden rounded-2xl border border-line">
          <img src={realImage} alt="" className="h-auto w-full" loading="lazy" />
        </div>
      </Lightbox>
    )
  }

  return (
    <div className="flex aspect-[16/9] w-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-violet-deep via-ink to-ink p-6 sm:p-8">
      <span className="self-start rounded-full border border-fg/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg/60">
        BFF
      </span>
      <div className="flex flex-col gap-2">
        <p className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
          {channel.headline}
        </p>
        {channel.support && <p className="text-sm text-fg/70 sm:text-base">{channel.support}</p>}
      </div>
    </div>
  )
}

export function ChannelExecutions({ channels }: { channels: Channel[] }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="One idea, four contexts"
          title="Same voice, different rooms."
          className="mb-12"
        />

        <div className="flex flex-col gap-14">
          {channels.map((channel, index) => (
            <Reveal key={channel.id} delay={0.04}>
              <div
                className={cn(
                  'flex flex-col gap-8 md:items-center md:gap-12',
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row',
                )}
              >
                <div className="md:w-1/2">
                  <Mockup channel={channel} />
                </div>
                <div className="flex flex-col gap-2 md:w-1/2">
                  <span className="kicker">{channel.channel}</span>
                  <p className="text-sm leading-relaxed text-fg-muted sm:text-base">{channel.why}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
