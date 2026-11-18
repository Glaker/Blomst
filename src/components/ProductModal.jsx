import { useEffect } from 'react'
import { Eyebrow } from './ui'

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(30,24,21,.65)] p-5"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.title}
        className="relative grid max-h-[90vh] w-full max-w-[850px] grid-cols-2 overflow-auto bg-paper max-[620px]:grid-cols-1"
      >
        <button
          type="button"
          className="absolute top-2.5 right-3.5 cursor-pointer text-[27px]"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={product.img}
          alt={product.alt}
          className="h-full max-h-[650px] w-full object-cover max-[620px]:h-[300px]"
        />
        <div className="p-[45px_35px] max-[620px]:p-[25px]">
          <Eyebrow>
            Ref. {product.ref} · {product.universe}
          </Eyebrow>
          <h3 className="my-2 font-serif text-[36px]">{product.title}</h3>
          <div className="text-[11px] tracking-[.08em]">Precio a definir</div>
          <p className="my-[18px] font-serif text-lg leading-[1.5] text-[#76685e]">{product.desc}</p>

          <div className="mt-[25px] text-[9px] uppercase tracking-[.15em]">Talles disponibles</div>
          <div className="mt-2.5 mb-5 flex gap-2">
            <span className="border border-line px-[13px] py-[9px] text-[10px] text-[#82766d]">A definir</span>
          </div>

          <div className="mt-[25px] text-[9px] uppercase tracking-[.15em]">Estado</div>
          <p className="my-[18px] font-serif text-lg leading-[1.5] text-[#76685e]">
            Ficha conceptual. La fotografía individual, composición y curva de talles se completarán con la
            información final del proyecto.
          </p>
        </div>
      </div>
    </div>
  )
}
