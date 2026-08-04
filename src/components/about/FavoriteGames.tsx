import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { PixelAccent } from '@/components/ui/PixelAccent'
import fortnite from '@/assets/images/about/fortnite.jpg'
import minecraft from '@/assets/images/about/minecraft.png'
import marvelRivals from '@/assets/images/about/marvelrivals.jpg'
import valorant from '@/assets/images/about/valorant.jpg'

const games = [
  { src: fortnite, name: 'Fortnite' },
  { src: minecraft, name: 'Minecraft' },
  { src: marvelRivals, name: 'Marvel Rivals' },
  { src: valorant, name: 'Valorant' },
]

const accentColors = ['#a6ff4d', '#8a6bff', '#a6ff4d', '#8a6bff']

export function FavoriteGames() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-3">
          <PixelAccent icon="heart" color="#a6ff4d" size={28} />
          <SectionHeading kicker="Still playing" title="Games I still boot up." />
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {games.map((game, index) => (
            <Reveal key={game.name} delay={index * 0.08}>
              <div className="group relative flex flex-col gap-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-surface">
                  <img
                    src={game.src}
                    alt={game.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute right-2 top-2 origin-top-right scale-50 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
                    <PixelAccent icon="sparkle" color={accentColors[index]} size={18} duration={2} />
                  </div>
                </div>
                <span className="text-center text-sm text-fg-muted">{game.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
