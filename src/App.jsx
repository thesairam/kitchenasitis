import { useLenis } from './hooks/useLenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import BiryaniShowcase from './components/BiryaniShowcase'
import ShaktiBowl from './components/ShaktiBowl'
import MenuScroll from './components/MenuScroll'
import Drinks from './components/Drinks'
import HowItWorks from './components/HowItWorks'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <div className="bg-cream text-ink">
      <Nav />
      <Hero />
      <Story />
      <BiryaniShowcase />
      <ShaktiBowl />
      <MenuScroll />
      <Drinks />
      <HowItWorks />
      <OrderCTA />
      <Footer />
    </div>
  )
}
