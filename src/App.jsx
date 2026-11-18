import Header from './components/Header'
import Hero from './components/Hero'
import Look from './components/Look'
import Products from './components/Products'
import Story from './components/Story'
import Identity from './components/Identity'
import Process from './components/Process'
import Customer from './components/Customer'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Look />
        <Products />
        <Story />
        <Identity />
        <Process />
        <Customer />
      </main>
      <Footer />
    </>
  )
}
