import { useState } from 'react'
import { products } from '../data/content'
import { Section, SectionHead } from './ui'
import ProductModal from './ProductModal'

export default function Products() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="shop" className="bg-cream">
      <SectionHead eyebrow="Shop the look" title="The pieces">
        Descubrí cada pieza que compone el conjunto BLOMST.
      </SectionHead>

      <div className="mx-auto grid max-w-[1120px] grid-cols-3 gap-[26px] max-[850px]:gap-[16px] max-[620px]:grid-cols-1 max-[620px]:gap-8">
        {products.map((p, i) => (
          <button
            key={p.ref}
            type="button"
            onClick={() => setSelected(i)}
            className="group cursor-pointer text-left"
          >
            <div className="relative h-[520px] overflow-hidden bg-[#e8e0d2] max-[850px]:h-[400px] max-[620px]:h-[460px]">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.035]"
              />
            </div>
            <div className="px-0.5 py-[15px]">
              <p className="mb-2 text-[9px] uppercase tracking-[.12em] text-[#7d6d62]">
                Ref. {p.ref} · {p.universe}
              </p>
              <h3 className="mb-[5px] font-serif text-[22px] max-[620px]:text-[19px]">{p.title}</h3>
              <div className="text-[11px] tracking-[.08em]">Precio a definir</div>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-[11px] text-[#8b7b70]">
        Las fotografías actuales son editoriales. Las fotografías individuales de producto se incorporarán en la
        siguiente etapa.
      </p>

      <ProductModal product={selected === null ? null : products[selected]} onClose={() => setSelected(null)} />
    </Section>
  )
}
