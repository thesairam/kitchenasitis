import { Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { usePageMeta } from './hooks/usePageMeta'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import BiryaniShowcase from './components/BiryaniShowcase'
import ShaktiBowl from './components/ShaktiBowl'
import Drinks from './components/Drinks'
import HowItWorks from './components/HowItWorks'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'
import SupperClub from './components/SupperClub'

function HomePage() {
  usePageMeta({
    title: 'Kitchen As It Is — Authentic Indian Home Cooking & Supper Club in Amsterdam',
    description: 'Authentic Hyderabadi dum biryani and Andhra protein bowl — home-cooked in Amsterdam. Halal. Order on Kookxtra or WhatsApp. Plus: monthly Indian supper club.',
    canonicalPath: '/',
  })
  return (
    <>
      <Hero />
      <Story />
      <BiryaniShowcase />
      <ShaktiBowl />
      <Drinks />
      <HowItWorks />
      <OrderCTA />
    </>
  )
}

function SupperClubPage() {
  usePageMeta({
    title: 'Amsterdam Indian Supper Club — Kitchen As It Is',
    description: 'A monthly Indian-themed supper club in Amsterdam. Authentic home-cooked feast, mehndi experience with Henna by Rachana, cultural storytelling. Max 12 guests.',
    canonicalPath: '/supper-club',
  })
  return <SupperClub />
}

export default function App() {
  useLenis()

  return (
    <div className="bg-cream text-ink">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/supper-club" element={<SupperClubPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
