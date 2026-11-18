import { images } from '../data/content'
import { Button } from './ui'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-110px)] max-h-[850px] min-h-[590px] overflow-hidden bg-[#d8d0c4] max-[620px]:h-[75vh] max-[620px]:min-h-[500px]"
    >
      <img
        src={images.hero.src}
        alt={images.hero.alt}
        className="h-full w-full object-cover object-[center_42%] brightness-[.78]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(25,19,16,.45),transparent_72%)]" />
      <div className="absolute top-1/2 left-[9%] z-[2] max-w-[490px] -translate-y-1/2 text-[#fffaf1] max-[620px]:right-[6%] max-[620px]:left-[7%]">
        <div className="text-[10px] uppercase tracking-[.28em]">
          Spring / Summer 2027 · Capsule collection
        </div>
        <h1 className="mt-6 mb-[18px] font-serif text-[clamp(58px,9vw,118px)] leading-[.82] tracking-[-.035em]">
          A different
          <br />
          way to bloom.
        </h1>
        <p className="mb-[30px] font-serif text-[23px] italic">Color, creativity &amp; self-expression.</p>
        <Button href="#collection">Discover the collection</Button>
      </div>
    </section>
  )
}
