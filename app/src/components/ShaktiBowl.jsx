import { motion } from 'framer-motion'
import { useState } from 'react'
import { proteinBowl } from '../data/menu'

export default function ShaktiBowl() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="bowl" className="bg-spice text-cream py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-14">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-widest uppercase text-cream/60 mb-5"
            >
              Signature · Veg &amp; Non-veg
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl md:text-7xl leading-tight"
            >
              {proteinBowl.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-base md:text-lg text-cream/75 max-w-xl"
            >
              {proteinBowl.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-cream/50 border border-cream/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-cream/70 animate-pulse" />
              Protein and greens rotate weekly
            </motion.div>
          </div>
          <div className="md:col-span-5 flex md:justify-end items-end">
            <div className="space-y-2">
              {proteinBowl.prices.map((p) => (
                <div key={p.variant} className="flex items-baseline gap-4 justify-end">
                  <span className="text-cream/55 text-sm">{p.variant}</span>
                  <span className="font-display text-3xl text-gold">€{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {proteinBowl.components.map((c, i) => (
            <motion.div
              key={c.slot}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.65, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-forest rounded-2xl p-6 md:p-8 aspect-square flex flex-col justify-between cursor-pointer hover:bg-ink transition-colors duration-500"
            >
              <div>
                <div className="text-xs tracking-widest uppercase text-cream/40 mb-3">{`0${i + 1}`}</div>
                <div className="font-display text-2xl md:text-3xl text-cream">{c.slot}</div>
              </div>
              <div className="text-sm space-y-1 text-cream/70">
                {(hovered === i ? c.options : c.options.slice(0, 2)).map((o) => (
                  <div key={o}>· {o}</div>
                ))}
                {hovered !== i && c.options.length > 2 && (
                  <div className="opacity-40">+{c.options.length - 2} more</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
