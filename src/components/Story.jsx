import { images, values } from '../data/content'
import { Eyebrow, Section } from './ui'

const p = 'mb-5 font-serif text-[20px] leading-[1.65] font-medium text-[#241a15]'

export default function Story() {
  return (
    <Section id="story">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 items-center gap-[70px] max-[850px]:grid-cols-1 max-[850px]:gap-[30px]">
        <div>
          <img
            src={images.story.src}
            alt={images.story.alt}
            loading="lazy"
            className="block max-h-[630px] w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-[13px] mb-5 font-serif text-[55px] leading-none">A blooming identity.</h2>
          <p className={p}>
            BLOMST es una cápsula de indumentaria Primavera/Verano 2027 que nace de la exploración del color, la
            creatividad y la expresión individual.
          </p>
          <p className={p}>
            Inspirada en una estética botánica y vintage, propone una mirada contemporánea donde conviven
            diferentes tipologías, materialidades y recursos constructivos.
          </p>
          <p className={p}>
            A través de la combinación de tres universos —Night Out, Comfy-Chic y Workwear— BLOMST desarrolla una
            identidad versátil, expresiva y femenina.
          </p>
        </div>
      </div>

      <div className="mt-[75px] grid grid-cols-3 gap-px border border-line bg-line max-[620px]:grid-cols-1">
        {values.map((v) => (
          <div key={v.title} className="min-h-[210px] bg-paper px-7 py-[35px]">
            <h3 className="mb-3.5 font-serif text-[29px] text-wine">{v.title}</h3>
            <p className="font-serif text-[17px] leading-[1.55] font-medium text-[#241a15]">{v.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
