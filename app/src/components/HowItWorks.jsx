import { motion } from 'framer-motion'
import { steps } from '../data/menu'

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest uppercase text-spice mb-6"
        >
          How it works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl mb-20 max-w-3xl"
        >
          Pre-order. I cook. You eat.
        </motion.h2>

        <div className="relative grid md:grid-cols-4 gap-10 md:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-ink/15"
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full bg-spice/10 border border-spice/30 flex items-center justify-center font-display text-xl text-spice mb-6">
                {s.n}
              </div>
              <div className="font-display text-2xl mb-3">{s.title}</div>
              <p className="text-ink/65 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
