import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/menu'

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (to === 0) { setN(0); return }
    let raf
    const start = performance.now()
    const dur = 1200
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl">
      {n}
      {suffix}
    </span>
  )
}

export default function Story() {
  return (
    <section id="story" className="bg-surface py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7 }}
          className="text-sm tracking-widest uppercase text-spice mb-8"
        >
          The kitchen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl leading-tight mb-12 max-w-3xl"
        >
          Every recipe traces back to one place — the kitchen I grew up in.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 text-ink/75 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I've eaten in many kitchens — Hyderabad's old city lanes, Chennai street stalls, Andhra homes
            where the pappu is made fresh every morning, North Indian tables where the dal simmers all night.
            All of it traces back to the kitchen I grew up in.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            "Kitchen As It Is" means exactly that. No adaptation for a foreign palate. No toned-down spice,
            no simplified technique. The biryani is sealed and dum-cooked. The pappu is made with real
            tamarind and fresh greens, the way it's made at home.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12 mt-24 pt-12 border-t border-ink/10">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter to={s.value} suffix={s.suffix} />
              <div className="mt-3 text-sm tracking-widest uppercase text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
