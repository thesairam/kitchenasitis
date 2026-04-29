import { useEffect, useState } from 'react'

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? 'bg-cream/85 backdrop-blur border-b border-ink/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="font-display text-xl md:text-2xl tracking-tight">
          Kitchen <span className="text-spice">As It Is</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          <a href="#story" className="hover:text-ink">Story</a>
          <a href="#biryani" className="hover:text-ink">Biryani</a>
          <a href="#shakti" className="hover:text-ink">Shakti Bowl</a>
          <a href="#menu" className="hover:text-ink">Menu</a>
          <a href="#order" className="hover:text-ink">Order</a>
        </div>
        <a
          href="#order"
          className="text-sm bg-ink text-cream px-4 py-2 rounded-full hover:bg-spice transition-colors"
        >
          Order
        </a>
      </div>
    </nav>
  )
}
