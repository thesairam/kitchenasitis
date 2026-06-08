import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const HEADLINE = 'Food the way it always tasted.'.split(' ')
const SPICES   = ['Dum.', 'Andhra.', 'Saffron.', 'Tamarind.']

export default function Hero() {
  const [spiceIdx, setSpiceIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSpiceIdx((i) => (i + 1) % SPICES.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="top"
      className="grain relative min-h-[100dvh] flex items-center pt-28 pb-16 px-5 md:px-10 bg-spice text-cream"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs tracking-widest uppercase text-cream/60 mb-5 md:mb-6"
          >
            Amsterdam · Home Kitchen
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04]">
            {HEADLINE.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: [0.2, 0.65, 0.3, 1] }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + HEADLINE.length * 0.08 }}
            className="mt-6 md:mt-8 text-base md:text-xl text-cream/75 max-w-xl leading-relaxed"
          >
            Hyderabadi dum biryani, Andhra protein bowl. Cooked from memory, sealed slow, no shortcuts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + HEADLINE.length * 0.08 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-3"
          >
            <a href="#order" className="bg-forest text-cream px-6 py-3 rounded-full text-sm hover:bg-ink transition-colors">
              Order on Kookxtra
            </a>
            <a href="#story" className="border border-cream/35 text-cream px-6 py-3 rounded-full text-sm hover:bg-cream/10 transition-colors">
              Read the story
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-4 flex md:justify-end md:items-end mt-4 md:mt-0">
          <div className="text-left md:text-right">
            <div className="text-xs tracking-widest uppercase text-cream/50 mb-2">This week</div>
            <div className="font-display text-3xl md:text-5xl relative h-12 md:h-16">
              {SPICES.map((s, i) => (
                <motion.span
                  key={s}
                  className="absolute left-0 md:right-0 md:left-auto text-cream"
                  animate={{ opacity: i === spiceIdx ? 1 : 0, y: i === spiceIdx ? 0 : 8 }}
                  transition={{ duration: 0.6 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
