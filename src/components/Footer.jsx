import { Brand } from './ui'

const links = [
  { label: 'Collection', href: '#collection' },
  { label: 'Shop', href: '#shop' },
  { label: 'Our story', href: '#story' },
  { label: 'Design process', href: '#process' },
]

export default function Footer() {
  return (
    <footer className="bg-[#29231f] px-[7%] pt-[55px] pb-7 text-center text-[#f8f1e5]">
      <Brand size="lg" />
      <p className="mt-[18px] font-serif text-lg text-[#d7c9b9]">A different way to bloom.</p>
      <div className="my-[30px] flex flex-wrap justify-center gap-[22px] text-[9px] uppercase tracking-[.18em]">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="text-[9px] tracking-[.12em] text-[#b7a99a]">
        UNIVERSITY PROJECT · 2026 · SPRING / SUMMER 2027
      </div>
    </footer>
  )
}
