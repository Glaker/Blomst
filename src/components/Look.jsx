import { images, universes } from '../data/content'
import { Button, Eyebrow, Section, SectionHead } from './ui'

export default function Look() {
  return (
    <Section id="collection">
      <SectionHead eyebrow="The collection" title="One look. Three design languages.">
        Un conjunto que reúne los universos Night Out, Comfy-Chic y Workwear en una propuesta integral.
      </SectionHead>

      <div className="mx-auto grid max-w-[1250px] grid-cols-[1.15fr_.85fr] items-center gap-7 max-[850px]:grid-cols-1 max-[850px]:gap-[30px]">
        <div>
          <img
            src={images.look.src}
            alt={images.look.alt}
            loading="lazy"
            className="block max-h-[730px] w-full object-cover object-[center_38%]"
          />
        </div>
        <div className="p-[5%]">
          <Eyebrow>The BLOMST look · 01</Eyebrow>
          <h3 className="mt-3 mb-[19px] font-serif text-[43px]">Designed to express.</h3>
          <p className="font-serif text-[19px] leading-[1.6] text-taupe">
            Una composición de prendas que explora la superposición, el contraste de materiales, los volúmenes y
            el encuentro entre tipologías. Tres lenguajes conviven en un mismo look.
          </p>
          <div className="my-[22px] flex flex-wrap gap-2">
            {universes.map((u) => (
              <span
                key={u}
                className="rounded-full border border-line px-3 py-2 text-[9px] uppercase tracking-[.12em]"
              >
                {u}
              </span>
            ))}
          </div>
          <Button href="#shop">Shop the pieces</Button>
        </div>
      </div>
    </Section>
  )
}
