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
      const rect  = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const idx = Math.min(featured.length - 1, Math.floor((scrolled / total) * featured.length))
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
      className="relative bg-forest text-cream"
      style={{ height: `${100 * featured.length}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] flex items-center px-5 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-6 md:gap-12 items-center">

          {/* Text column */}
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="text-xs tracking-widest uppercase text-spice mb-4 md:mb-6">Rotating weekly</p>

            <AnimatePresence mode="wait">
              <motion.h2
                key={featured[active].name}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight"
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
                className="mt-5 md:mt-8 text-base md:text-xl text-cream/70 max-w-xl"
              >
                {featured[active].description}
              </motion.p>
            </AnimatePresence>

            <div className="mt-6 md:mt-10 flex items-center gap-4 md:gap-6 flex-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured[active].price}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-3xl md:text-4xl text-gold"
                >
                  €{featured[active].price}
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap gap-2">
                {featured[active].tags.map((t) => (
                  <span key={t} className="tag-pill text-cream/70">{t}</span>
                ))}
              </div>
            </div>

            {/* Veg note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-sm text-cream/40"
            >
              Veg version available from €{featured[active].vegPrice}
            </motion.p>
          </div>

          {/* Photo column */}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-[340px] md:max-w-none aspect-[4/5] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured[active].image}
                  src={featured[active].image}
                  alt={featured[active].imageAlt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Subtle vignette so text colours read well if overlaid */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-cream/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {featured.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-2 h-5 bg-spice' : 'w-2 h-2 bg-cream/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
