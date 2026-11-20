import polleraPetalo from '../assets/pollera-petalo.jpeg'
import chaleco from '../assets/chaleco.jpeg'
import telaInicio from '../assets/telainicio.png'
import look from '../assets/look.jpg'
import galleryColumn from '../assets/gallery-column.jpg'
import lookStairs from '../assets/look-stairs.jpg'
import blouseDetail from '../assets/blouse-detail.jpg'
import blusaCorola from '../assets/blusa-corola.jpg'
import editorialDetail from '../assets/editorial-detail.jpg'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Shop', href: '#shop' },
  { label: 'Our story', href: '#story' },
  { label: 'Design process', href: '#process' },
]

export const images = {
  hero: { src: telaInicio, alt: 'Look BLOMST fotografiado en una galería de arte' },
  look: { src: look, alt: 'Look completo BLOMST' },
  story: { src: editorialDetail, alt: 'Editorial BLOMST sobre una escalera de mármol con piso damero' },
}

export const universes = ['Night Out', 'Comfy-Chic', 'Workwear']

export const products = [
  {
    title: 'Blusa Corola',
    ref: 'BL-001',
    universe: 'Comfy-Chic',
    img: blusaCorola,
    alt: 'Blusa Corola estampada con cuello volado',
    price: '$78.810',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Blusa estampada de base clara, con cuello volado y silueta con volumen.',
  },
  {
    title: 'Pollera Pétalo',
    ref: 'BL-002',
    universe: 'Workwear',
    img: polleraPetalo,
    alt: 'Pollera Pétalo de denim con volados, botones y base bordó',
    price: '$136.885',
    desc: 'Falda con volados, botones y combinaciones de tela.',
  },
  {
    title: 'Chaleco Tallo',
    ref: 'BL-003',
    universe: 'Comfy-Chic',
    img: chaleco,
    fit: 'contain',
    bg: '#f5f0ec',
    alt: 'Chaleco de denim con paneles y mangas verdes',
    price: '$102.287',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Prenda superior de denim con recortes horizontales y verticales.',
  },
]

export const values = [
  {
    title: 'Our mission',
    text: 'Crear diseños únicos que combinen creatividad, color, sensualidad y detalle, permitiendo que cada persona exprese su identidad a través de la marca.',
  },
  {
    title: 'Our vision',
    text: 'Inspirar una forma de vestir libre, auténtica y contemporánea, donde la moda sea una herramienta de expresión y confianza.',
  },
  {
    title: 'Our difference',
    text: 'Una propuesta de autor inspirada en el arte y el diseño, con siluetas lúdicas y expresivas que conservan su funcionalidad para el uso cotidiano.',
  },
]

export const palette = ['#762e43', '#c98f91', '#a9c4d5', '#85885c', '#e9dca9', '#f5efdf']

export const processSteps = [
  {
    title: 'Research & inspiration',
    text: 'Investigación de marca, universo visual y referencias que dieron origen a BLOMST.',
    img: editorialDetail,
    alt: 'Detalle editorial de la sesión',
  },
  {
    title: 'Materials & details',
    text: 'Exploración de estampas, materialidades, superposiciones y recursos constructivos.',
    img: blouseDetail,
    alt: 'Detalle de estampado y volados',
  },
  {
    title: 'The final look',
    text: 'La integración de los tres lenguajes en un único conjunto de autor.',
    img: lookStairs,
    alt: 'Look final de BLOMST',
  },
]
