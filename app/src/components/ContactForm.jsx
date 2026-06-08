import { useState } from 'react'
import { motion } from 'framer-motion'

const WHATSAPP = 'https://wa.me/31647804089?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20seat%20at%20the%20Amsterdam%20Supper%20Club!'
const INSTAGRAM = 'https://instagram.com/kitchenasitis'
const CONTACT_ENDPOINT = '/api/contact'

const initial = { name: '', email: '', phone: '', message: '', website: '', consent: false }

export default function ContactForm({ type = 'supper-club' }) {
  const [form, setForm]       = useState(initial)
  const [showPolicy, setShowPolicy] = useState(false)
  const [status, setStatus]   = useState({ kind: 'idle', msg: '' })
  const [submitting, setSubmitting] = useState(false)

  const update = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: v }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.consent) {
      setStatus({ kind: 'error', msg: 'Please confirm you have read the privacy notice.' })
      return
    }
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ kind: 'error', msg: 'Please fill in name, email, and message.' })
      return
    }

    setSubmitting(true)
    setStatus({ kind: 'idle', msg: '' })

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          website: form.website,
          type,
          consent_given_at: new Date().toISOString(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus({ kind: 'ok', msg: "Message sent — we'll reply by email within 24h." })
        setForm(initial)
      } else {
        setStatus({ kind: 'error', msg: data?.error || 'Something went wrong. Please try WhatsApp instead.' })
      }
    } catch {
      setStatus({ kind: 'error', msg: 'Network error. Please try again or use WhatsApp.' })
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-ink/4 border border-ink/12 rounded-xl px-4 py-3 text-ink placeholder:text-ink/30 outline-none focus:border-forest focus:ring-1 focus:ring-forest/20 transition-colors'

  return (
    <section id="contact" className="py-32 px-6 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm tracking-widest uppercase text-spice mb-4">Reserve a seat</p>
          <h2 className="font-display text-5xl md:text-6xl">
            Join the table.
          </h2>
          <p className="mt-4 text-ink/60 max-w-xl">
            Seats are limited to 12 per evening. Send a message and we'll confirm availability and details by email.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
            noValidate
          >
            {/* Honeypot */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} />
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink/60">Name</span>
              <input value={form.name} onChange={update('name')} type="text" autoComplete="name" required className={inputClass} placeholder="Your name" />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink/60">Email</span>
              <input value={form.email} onChange={update('email')} type="email" autoComplete="email" required className={inputClass} placeholder="your@email.com" />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink/60">Phone <span className="text-ink/30">(optional)</span></span>
              <input value={form.phone} onChange={update('phone')} type="tel" autoComplete="tel" className={inputClass} placeholder="+31 6 ..." />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink/60">Message</span>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={5}
                required
                className={inputClass + ' resize-y'}
                placeholder="Which date are you interested in? Any dietary requirements?"
              />
            </label>

            <label className="flex items-start gap-3 mt-1 text-sm text-ink/60 leading-snug">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={update('consent')}
                className="mt-0.5 accent-spice"
                required
              />
              <span>
                I have read the{' '}
                <button type="button" onClick={() => setShowPolicy((v) => !v)} className="underline text-ink">
                  privacy notice
                </button>{' '}
                and consent to Kitchen As It Is using my details to reply to my enquiry.
              </span>
            </label>

            {showPolicy && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-surface rounded-2xl p-5 text-sm text-ink/60 leading-relaxed space-y-2"
              >
                <strong className="text-ink block">Privacy notice (GDPR)</strong>
                <p><strong>Controller:</strong> Kitchen As It Is, Amsterdam — kitchenasitis@gmail.com</p>
                <p><strong>What we collect:</strong> name, email, phone (optional), and message submitted through this form, plus the timestamp of your consent.</p>
                <p><strong>Why:</strong> solely to reply to your enquiry. Lawful basis: your consent (GDPR Art. 6(1)(a)).</p>
                <p><strong>How it works:</strong> your message is relayed by our server (DigitalOcean EU) to our Gmail inbox via Google SMTP. The server does not log or store your message. No analytics, cookies, or trackers.</p>
                <p><strong>Sub-processors:</strong> DigitalOcean (hosting, EU) and Google (Gmail SMTP).</p>
                <p><strong>Retention:</strong> kept only as long as needed to handle your enquiry, then deleted. Never shared or sold.</p>
                <p><strong>Your rights:</strong> access, rectification, erasure, restriction, objection, and portability. Email <strong>kitchenasitis@gmail.com</strong> or contact the Autoriteit Persoonsgegevens to exercise these.</p>
              </motion.div>
            )}

            {status.msg && (
              <p className={`text-sm ${status.kind === 'error' ? 'text-spice' : 'text-ink/60'}`}>
                {status.msg}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 bg-forest text-cream px-8 py-4 rounded-full hover:bg-spice transition-colors disabled:opacity-50 self-start"
            >
              {submitting ? 'Sending…' : 'Send message'}
            </button>
          </motion.form>

          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-surface rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-3xl mb-2">Prefer a quick chat?</h3>
              <p className="text-ink/60 mb-6">Reach out on WhatsApp or Instagram — we reply fast.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest text-cream px-6 py-3 rounded-full hover:bg-spice transition-colors text-sm"
                >
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink/20 px-6 py-3 rounded-full hover:border-spice hover:text-spice transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
              <div className="mt-6 text-sm text-ink/50 space-y-1">
                <p>Instagram: <strong className="text-ink">@kitchenasitis</strong></p>
                <p>WhatsApp: <strong className="text-ink">+31 6 47 80 40 89</strong></p>
                <p>Email: <strong className="text-ink">kitchenasitis@gmail.com</strong></p>
              </div>
            </div>

            <div className="bg-surface rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-3xl mb-2">Order food?</h3>
              <p className="text-ink/60 mb-6">Biryani and Protein Bowl orders go through Kookxtra or WhatsApp — not through this form.</p>
              <a
                href="https://wa.me/31647804089?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Kitchen%20As%20It%20Is!"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/20 px-6 py-3 rounded-full hover:border-spice hover:text-spice transition-colors text-sm inline-block"
              >
                WhatsApp to order →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
