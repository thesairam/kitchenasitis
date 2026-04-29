import { motion } from 'framer-motion'
import { useState } from 'react'
import { shaktiBowl } from '../data/menu'

export default function ShaktiBowl() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="shakti" className="bg-cream py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-widest uppercase text-spice mb-6"
            >
              Signature
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl md:text-7xl leading-tight"
            >
              Andhra Shakti Bowl
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg text-ink/70 max-w-xl"
            >
              {shaktiBowl.description}
            </motion.p>
          </div>
          <div className="md:col-span-5 flex md:justify-end items-end">
            <div className="space-y-2">
              {shaktiBowl.prices.map((p) => (
                <div key={p.variant} className="flex items-baseline gap-4 justify-end">
                  <span className="text-ink/60 text-sm">{p.variant}</span>
                  <span className="font-display text-3xl text-gold">€{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shaktiBowl.components.map((c, i) => (
            <motion.div
              key={c.slot}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.65, 0.3, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-surface rounded-2xl p-6 md:p-8 aspect-square flex flex-col justify-between cursor-pointer hover:bg-ink hover:text-cream transition-colors duration-500"
            >
              <div>
                <div className="text-xs tracking-widest uppercase opacity-60 mb-3">{`0${i + 1}`}</div>
                <div className="font-display text-2xl md:text-3xl">{c.slot}</div>
              </div>
              <div className="text-sm space-y-1 opacity-80">
                {(hovered === i ? c.options : c.options.slice(0, 2)).map((o) => (
                  <div key={o}>· {o}</div>
                ))}
                {hovered !== i && c.options.length > 2 && (
                  <div className="opacity-50">+{c.options.length - 2} more</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
