import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
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

export function FavoriteGames() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="Still playing" title="Games I still boot up." className="mb-12" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {games.map((game, index) => (
            <Reveal key={game.name} delay={index * 0.08}>
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-surface">
                  <img
                    src={game.src}
                    alt={game.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
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
