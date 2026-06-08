import { motion } from 'framer-motion'
import { drinks } from '../data/menu'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 1] } },
}

export default function Drinks() {
  return (
    <section className="bg-spice text-cream py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest uppercase text-cream/60 mb-5"
        >
          Three house drinks
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl mb-14 max-w-3xl"
        >
          The bit you'll never find on a menu.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {drinks.map((d) => (
            <motion.article
              key={d.name}
              variants={card}
              className="bg-forest rounded-3xl p-8 md:p-10 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center mb-8">
                <span className="w-3 h-3 rounded-full bg-cream/60" />
              </div>
              <h3 className="font-display text-3xl text-cream">{d.name}</h3>
              <p className="italic text-cream/50 mt-2">{d.tagline}</p>
              <p className="text-cream/70 mt-5 leading-relaxed flex-grow">{d.description}</p>
              <div className="font-display text-3xl text-gold mt-8">€{d.price}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
