import { Section, SectionHead } from './ui'

export default function Customer() {
  return (
    <Section className="bg-wine text-center text-[#fff7ed]">
      <SectionHead eyebrow="The BLOMST woman" title="Creative. Independent. Expressive." light>
        Una mujer curiosa, sensible y elegante, que encuentra en la moda una forma de expresión personal.
        Disfruta del arte, el diseño y los espacios culturales, y busca prendas que acompañen su estilo de vida
        sin renunciar a su individualidad.
      </SectionHead>
      <blockquote className="mx-auto mb-[35px] max-w-[850px] font-serif text-[clamp(27px,4vw,43px)] italic leading-[1.25]">
        “Fashion is a way to bloom into your own identity.”
      </blockquote>
    </Section>
  )
}
