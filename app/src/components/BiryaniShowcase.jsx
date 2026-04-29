import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { biryanis } from '../data/menu'

const featured = biryanis.slice(0, 3)

export default function BiryaniShowcase() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    function onScroll() {
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const p = scrolled / total
      const idx = Math.min(featured.length - 1, Math.floor(p * featured.length))
      setActive(idx)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="biryani"
      ref={sectionRef}
      className="relative bg-ink text-cream"
      style={{ height: `${100 * featured.length}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-sm tracking-widest uppercase text-spice mb-6">Rotating weekly</p>
            <AnimatePresence mode="wait">
              <motion.h2
                key={featured[active].name}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5 }}
                className="font-display text-5xl md:text-7xl leading-tight"
              >
                {featured[active].name}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={featured[active].description}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-8 text-lg md:text-xl text-cream/70 max-w-xl"
              >
                {featured[active].description}
              </motion.p>
            </AnimatePresence>
            <div className="mt-10 flex items-center gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured[active].price}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-4xl text-gold"
                >
                  €{featured[active].price}
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap gap-2">
                {featured[active].tags.map((t) => (
                  <span key={t} className="tag-pill text-cream/80">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex md:justify-end">
            <div className="aspect-square w-full max-w-md rounded-full bg-gradient-to-br from-spice via-gold/40 to-ink/0 grain relative">
              <div className="absolute inset-8 rounded-full border border-cream/20" />
              <div className="absolute inset-16 rounded-full border border-cream/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-8xl text-cream/20">{active + 1}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {featured.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? 'bg-spice scale-150' : 'bg-cream/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
