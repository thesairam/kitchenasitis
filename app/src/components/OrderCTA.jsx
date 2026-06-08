import { motion } from 'framer-motion'

const WHATSAPP = 'https://wa.me/31647804089?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Kitchen%20As%20It%20Is!'
const KOOKXTRA = 'https://www.kookxtra.nl'

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="bg-spice text-cream py-24 md:py-40 px-5 md:px-10 grain relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-widest uppercase text-cream/70 mb-6"
        >
          One pot at a time
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-8xl leading-[1.05]"
        >
          Order this week's biryani.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 md:mt-8 text-base md:text-xl text-cream/80 max-w-2xl mx-auto"
        >
          Pre-orders close 24h before each cook. I make only what's ordered. Zero waste.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 md:mt-12 flex flex-wrap gap-4 justify-center"
        >
          <a
            href={KOOKXTRA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream text-ink px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base hover:bg-forest hover:text-cream transition-colors"
          >
            Order on Kookxtra
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/50 px-7 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base hover:bg-cream/10 transition-colors"
          >
            WhatsApp the kitchen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
