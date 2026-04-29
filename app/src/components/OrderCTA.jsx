import { motion } from 'framer-motion'

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="bg-spice text-cream py-32 md:py-40 px-6 md:px-10 grain relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest uppercase text-cream/80 mb-8"
        >
          One pot at a time
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-8xl leading-[1.05]"
        >
          Order this week's biryani.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto"
        >
          Pre-orders close 24h before each cook. I make only what's ordered — zero waste.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <a href="#" className="bg-cream text-ink px-8 py-4 rounded-full hover:bg-ink hover:text-cream transition-colors">
            Order on Kookxtra
          </a>
          <a href="#" className="border border-cream/60 px-8 py-4 rounded-full hover:bg-cream/10 transition-colors">
            WhatsApp the kitchen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
