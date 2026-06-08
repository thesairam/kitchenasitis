import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const WHATSAPP = 'https://wa.me/31647804089?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20seat%20at%20the%20Amsterdam%20Supper%20Club!'
const INSTAGRAM = 'https://instagram.com/kitchenasitis'

const experiences = [
  {
    n: '01',
    title: 'The Table',
    body: 'A long, shared table. Flowers, candles, brass diyas. Every seat next to a stranger who leaves as a friend. This is how Indians have always eaten.',
  },
  {
    n: '02',
    title: 'The Food',
    body: 'A rotating feast — always built around the biryani and the protein bowl, with small plates, chutneys, and house drinks woven through the evening. No substitutions. No compromises.',
  },
  {
    n: '03',
    title: 'The Stories',
    body: 'Each supper club has a theme — a region, a festival, a season. The chef talks about the food as it arrives: where the recipe is from, what occasion it belongs to, what it means.',
  },
  {
    n: '04',
    title: 'Mehndi',
    body: 'Our henna artist brings the tradition of mehndi to the table. Guests are invited to receive henna before or after dinner — intricate, meaningful patterns rooted in Indian celebration.',
  },
]

const upcomingDates = [
  { theme: 'Hyderabad Old City', date: 'July 12, 2026',   seats: 8  },
  { theme: 'Andhra Harvest',     date: 'August 2, 2026',  seats: 10 },
  { theme: 'Diwali Supper',      date: 'October 18, 2026', seats: 12 },
]

export default function SupperClub() {
  return (
    <div className="bg-cream text-ink">

      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-center bg-forest text-cream px-5 md:px-10 overflow-hidden grain">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 35%, #D4530A 0%, transparent 55%), radial-gradient(circle at 20% 75%, #B8891E 0%, transparent 45%)',
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 pt-32 pb-20 md:py-44">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-widest uppercase text-spice mb-6"
          >
            Amsterdam · Intimate Dining
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl sm:text-7xl md:text-9xl leading-[1.02]"
          >
            Amsterdam<br />Supper Club.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 md:mt-10 text-base md:text-xl text-cream/70 max-w-2xl leading-relaxed"
          >
            An evening of Indian food, culture, and community — cooked from memory, shared at a long table in Amsterdam.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#dates"      className="bg-spice text-cream px-6 md:px-8 py-3 md:py-4 rounded-full text-sm hover:bg-cream hover:text-ink transition-colors">See upcoming dates</a>
            <a href="#experience" className="border border-cream/35 px-6 md:px-8 py-3 md:py-4 rounded-full text-sm hover:bg-cream/10 transition-colors">What to expect</a>
          </motion.div>
        </div>
        {/* Decorative rings */}
        <div className="absolute right-[-12vw] top-1/2 -translate-y-1/2 w-[65vw] max-w-[680px] aspect-square rounded-full border border-cream/5 pointer-events-none" />
        <div className="absolute right-[-6vw]  top-1/2 -translate-y-1/2 w-[50vw] max-w-[520px] aspect-square rounded-full border border-spice/10 pointer-events-none" />
      </section>

      {/* ── Concept ── */}
      <section className="py-20 md:py-32 px-5 md:px-10 bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase text-spice mb-5">The concept</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              Not a restaurant.<br />An experience.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5 text-ink/70 leading-relaxed"
          >
            <p>The Amsterdam Supper Club is a monthly Indian-themed evening — intimate, seated, cultural. Every gathering has a theme drawn from a region, a festival, or a season in India.</p>
            <p>The food is the anchor. But around the table, Indian tradition comes alive through storytelling, mehndi, music, and the kind of conversation that only happens when people eat together slowly.</p>
            <p>Maximum 12 guests. One long table. One kitchen. Everything cooked fresh on the day.</p>
          </motion.div>
        </div>
      </section>

      {/* ── The Evening ── */}
      <section id="experience" className="py-20 md:py-32 px-5 md:px-10 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-xs tracking-widest uppercase text-spice mb-4">The evening</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">What happens<br />at the table.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {experiences.map((e, i) => (
              <motion.div
                key={e.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-surface rounded-3xl p-8 md:p-10"
              >
                <div className="text-xs tracking-widest uppercase text-muted mb-5">{e.n}</div>
                <h3 className="font-display text-3xl mb-3">{e.title}</h3>
                <p className="text-ink/65 leading-relaxed">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mehndi ── */}
      <section className="py-20 md:py-32 px-5 md:px-10 bg-forest text-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Decorative motif */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="hidden md:flex md:col-span-5 justify-start"
          >
            <div className="aspect-square w-full max-w-xs rounded-full border border-cream/10 flex items-center justify-center relative">
              <div className="absolute inset-5  rounded-full border border-cream/8"  />
              <div className="absolute inset-10 rounded-full border border-spice/25" />
              <span className="font-display text-[110px] leading-none text-spice/25 select-none">&#2306;</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="text-xs tracking-widest uppercase text-spice mb-5">Cultural experience</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight mb-7">
              Mehndi.<br />The art of<br />celebration.
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed max-w-xl">
              <p>Mehndi — henna applied to the hands — has been part of Indian celebrations for over a thousand years. Weddings, festivals, prayers. It is an art form and a blessing in one.</p>
              <p>At each supper club, our henna artist brings this tradition to the table. Before or after dinner, guests receive their own mehndi — patterns rooted in real tradition, designed for the evening's theme.</p>
              <p className="text-cream/45 text-sm">Our henna artist is Rachana — a trained mehndi artist based in Amsterdam, blending classical Indian motifs with a contemporary, precise style.</p>
            </div>
            <div className="mt-8">
              <a
                href="https://hennabyrachana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-spice text-cream px-7 py-3.5 rounded-full text-sm hover:bg-cream hover:text-ink transition-colors group"
              >
                Visit Henna by Rachana
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Culture pillars ── */}
      <section className="py-20 md:py-32 px-5 md:px-10 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 md:mb-20"
          >
            <p className="text-xs tracking-widest uppercase text-spice mb-4">Indian culture</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">Every gathering<br />honours a tradition.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: '🪔', title: 'Themed evenings', body: 'Each supper club draws from a specific Indian context — Holi, Diwali, harvest season, or a regional cuisine. The décor, music, and food align with the theme.' },
              { icon: '🌸', title: 'Flowers & ritual',  body: 'Marigolds, jasmine, brass lamps. The table is set the way a celebration is set in India — with intention and beauty that has meaning behind it.' },
              { icon: '🎶', title: 'Music & story',     body: 'Ambient Indian classical or folk music sets the tone. The chef shares the story behind each dish as it arrives — because food without context is just eating.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-cream rounded-2xl p-7 md:p-10"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-display text-2xl md:text-3xl mb-3">{item.title}</h3>
                <p className="text-ink/65 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming dates ── */}
      <section id="dates" className="py-20 md:py-32 px-5 md:px-10 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 md:mb-16"
          >
            <p className="text-xs tracking-widest uppercase text-spice mb-4">Reserve your seat</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">Upcoming<br />evenings.</h2>
          </motion.div>

          <div className="space-y-3">
            {upcomingDates.map((d, i) => (
              <motion.div
                key={d.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 border border-ink/10 rounded-2xl px-6 py-5 md:px-8 md:py-6 hover:border-spice/40 hover:bg-surface transition-all group"
              >
                <div className="flex-1 font-display text-xl md:text-2xl">{d.theme}</div>
                <div className="text-ink/55 text-sm sm:w-48">{d.date}</div>
                <div className="text-ink/40 text-sm sm:w-24">{d.seats} seats</div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-spice group-hover:underline sm:text-right sm:w-24"
                >
                  Reserve →
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-ink/45 text-sm"
          >
            New dates added monthly. Follow <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline">@kitchenasitis</a> or join the WhatsApp community to be notified first.
          </motion.p>
        </div>
      </section>

      {/* ── Contact / booking form ── */}
      <ContactForm type="supper-club" />
    </div>
  )
}
