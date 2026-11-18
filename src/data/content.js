import galleryColumn from '../assets/gallery-column.jpg'
import lookStairs from '../assets/look-stairs.jpg'
import blouseDetail from '../assets/blouse-detail.jpg'
import burgundyStairs from '../assets/burgundy-stairs.jpg'
import editorialDetail from '../assets/editorial-detail.jpg'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Shop', href: '#shop' },
  { label: 'Our story', href: '#story' },
  { label: 'Design process', href: '#process' },
]

export const images = {
  hero: { src: galleryColumn, alt: 'Look BLOMST fotografiado en una galería de arte' },
  look: { src: lookStairs, alt: 'Look completo BLOMST' },
  story: { src: burgundyStairs, alt: 'Editorial BLOMST en escalera de arquitectura clásica' },
}

export const universes = ['Night Out', 'Comfy-Chic', 'Workwear']

export const products = [
  {
    title: 'Printed Ruffle Blouse',
    ref: 'BL-001',
    universe: 'Comfy-Chic',
    img: blouseDetail,
    alt: 'Blusa estampada con cuello volado',
    desc: 'Blusa estampada de base clara, con cuello volado y silueta con volumen. La ficha final incorporará la composición textil y los detalles de confección.',
  },
  {
    title: 'Layered Denim Vest',
    ref: 'BL-002',
    universe: 'Workwear',
    img: galleryColumn,
    alt: 'Chaleco de denim con mangas verdes',
    desc: 'Prenda superior de denim con paneles y mangas de volumen en contraste. Una pieza que integra recursos de superposición y construcción.',
  },
  {
    title: 'Patchwork Denim Skirt',
    ref: 'BL-003',
    universe: 'Comfy-Chic',
    img: lookStairs,
    alt: 'Falda de denim en conjunto',
    desc: 'Pieza inferior de denim que combina recortes y paneles en distintos tonos. La imagen corresponde al look editorial completo.',
  },
  {
    title: 'Burgundy Layer',
    ref: 'BL-004',
    universe: 'Night Out',
    img: burgundyStairs,
    alt: 'Detalle de prenda inferior bordó',
    desc: 'Prenda inferior en tono bordó que aporta contraste cromático al conjunto. Los detalles técnicos se completarán en la ficha definitiva.',
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
