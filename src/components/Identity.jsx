import { palette } from '../data/content'
import { Eyebrow, Section } from './ui'

export default function Identity() {
  return (
    <Section className="bg-[#e9dfc5]">
      <div className="mx-auto grid max-w-[1150px] grid-cols-[.8fr_1.2fr] items-center gap-[60px] max-[850px]:grid-cols-1 max-[850px]:gap-[30px]">
        <div>
          <Eyebrow>Brand identity</Eyebrow>
          <h2 className="mt-[13px] mb-4 font-serif text-[clamp(38px,5vw,64px)] leading-none">
            Botanical mood.
            <br />
            Modern spirit.
          </h2>
          <div className="mt-6 flex gap-2.5">
            {palette.map((c) => (
              <span
                key={c}
                className="size-[42px] rounded-full border border-black/[.08]"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 py-5 font-serif text-[20px] leading-[1.6] text-[#64564d]">
          <p>
            La identidad de BLOMST combina una paleta botánica y vintage, colores tierra y pasteles, estampas
            expresivas y una sensibilidad que conecta lo romántico con lo contemporáneo.
          </p>
          <p>
            La propuesta visual toma el color y la composición como herramientas para expresar individualidad,
            creatividad y confianza.
          </p>
        </div>
      </div>
    </Section>
  )
}
