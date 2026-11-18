import { processSteps } from '../data/content'
import { Button, Section, SectionHead } from './ui'

export default function Process() {
  return (
    <Section id="process">
      <SectionHead eyebrow="Behind the collection" title="Design process">
        Una mirada al desarrollo creativo: investigación, exploración de recursos y construcción del look final.
      </SectionHead>

      <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-5 max-[850px]:grid-cols-2 max-[620px]:grid-cols-1">
        {processSteps.map((s) => (
          <article key={s.title} className="bg-cream pb-5">
            <img
              src={s.img}
              alt={s.alt}
              loading="lazy"
              className="block h-[300px] w-full object-cover max-[620px]:h-[340px]"
            />
            <h3 className="mx-5 mt-5 mb-2 font-serif text-[28px]">{s.title}</h3>
            <p className="mx-5 font-serif text-[17px] leading-normal text-taupe">{s.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-[42px] text-center">
        <Button href="#collection">Explore the look</Button>
      </div>
    </Section>
  )
}
