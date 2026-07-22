import { Reveal } from '@/components/ui/Reveal'

export function IntroStatement() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-3xl leading-snug sm:text-4xl md:text-5xl">
            Five case studies. Three real client partnerships. One throughline:{' '}
            <span className="text-fg-muted">
              the best interface is the one that finally makes sense of something people were quietly
              struggling with.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
