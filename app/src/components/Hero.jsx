import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const HEADLINE = 'Food the way it always tasted.'.split(' ')
const SPICES = ['Dum.', 'Andhra.', 'Saffron.', 'Tamarind.']

export default function Hero() {
  const [spiceIdx, setSpiceIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSpiceIdx((i) => (i + 1) % SPICES.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="grain relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-widest uppercase text-spice mb-6"
          >
            Amsterdam · Home Kitchen
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
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
            className="mt-8 text-lg md:text-xl text-ink/70 max-w-xl"
          >
            Hyderabadi dum biryani, Andhra pappu, South Indian thalis. Cooked from memory, sealed slow,
            no shortcuts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + HEADLINE.length * 0.08 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#order" className="bg-ink text-cream px-6 py-3 rounded-full hover:bg-spice transition-colors">
              Order on Kookxtra
            </a>
            <a href="#story" className="border border-ink/30 px-6 py-3 rounded-full hover:border-ink transition-colors">
              Read the story
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-4 flex md:justify-end items-end">
          <div className="text-right">
            <div className="text-xs tracking-widest uppercase text-muted mb-3">This week</div>
            <div className="font-display text-4xl md:text-5xl text-ink relative h-20">
              {SPICES.map((s, i) => (
                <motion.span
                  key={s}
                  className="absolute right-0"
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
