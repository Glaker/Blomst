export const btnClass =
  'inline-block border border-current px-[22px] py-3.5 text-[10px] uppercase tracking-[.2em] transition duration-[250ms] hover:border-wine hover:bg-wine hover:text-white'

export function Button({ href, className = '', children }) {
  return (
    <a href={href} className={`${btnClass} ${className}`}>
      {children}
    </a>
  )
}

export function Eyebrow({ light = false, className = '', children }) {
  return (
    <div
      className={`text-[10px] uppercase tracking-[.24em] ${light ? 'text-butter' : 'text-wine'} ${className}`}
    >
      {children}
    </div>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-[78px] px-[7%] py-[100px] max-[620px]:px-[6%] max-[620px]:py-[72px] ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHead({ eyebrow, title, light = false, children }) {
  return (
    <div className="mx-auto mb-12 max-w-[660px] text-center">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className="mt-[13px] mb-[19px] font-serif text-[clamp(38px,5vw,64px)] leading-none">
        {title}
      </h2>
      <p
        className={`font-serif text-[19px] leading-[1.55] ${light ? 'text-[#eadbd2]' : 'text-[#76685e]'}`}
      >
        {children}
      </p>
    </div>
  )
}

export function Brand({ as: Tag = 'div', size = 'md', ...props }) {
  return (
    <Tag
      className={`block text-center font-serif leading-[.8] tracking-[.07em] ${
        size === 'lg' ? 'text-[40px]' : 'text-[31px]'
      }`}
      {...props}
    >
      BLOMST
      <small className="mt-2 block font-serif text-xs tracking-[.18em]">CAPSULE</small>
    </Tag>
  )
}
