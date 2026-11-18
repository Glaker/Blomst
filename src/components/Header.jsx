import { useState } from 'react'
import { navLinks } from '../data/content'
import { Brand } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-wine px-3 py-[9px] text-center text-[10px] uppercase tracking-[.22em] text-[#fff7ed]">
        BLOMST CAPSULE — SPRING / SUMMER 2027
      </div>
      <header className="sticky top-0 z-20 flex h-[78px] items-center justify-between border-b border-line bg-paper/[.96] px-[5.5%] max-[620px]:h-[66px] max-[620px]:px-[5%]">
        <button
          type="button"
          className="hidden text-[23px] max-[620px]:block"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <Brand as="a" href="#home" />

        <nav
          className={`gap-[25px] text-[10px] uppercase tracking-[.16em] max-[850px]:gap-3 ${
            open
              ? 'max-[620px]:absolute max-[620px]:inset-x-0 max-[620px]:top-full max-[620px]:flex max-[620px]:flex-col max-[620px]:gap-0 max-[620px]:border-b max-[620px]:border-line max-[620px]:bg-paper'
              : 'flex max-[620px]:hidden'
          }`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="max-[620px]:px-[5%] max-[620px]:py-4"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-[10px] tracking-[.13em] max-[620px]:hidden">
          COLLECTION 01&nbsp;&nbsp; ♡
        </div>

        {/* mantiene la marca centrada en mobile */}
        <span className="hidden w-[23px] max-[620px]:block" aria-hidden="true" />
      </header>
    </>
  )
}
