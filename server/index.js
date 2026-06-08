import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT      = Number(process.env.PORT)      || 8080
const SMTP_HOST = process.env.SMTP_HOST         || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const TO_EMAIL  = process.env.TO_EMAIL          || SMTP_USER
const FROM_NAME = process.env.FROM_NAME         || 'Kitchen As It Is - Website'

if (!SMTP_USER || !SMTP_PASS) {
  console.error('[startup] WARNING: SMTP_USER or SMTP_PASS not set — /api/contact will fail until configured.')
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
})

const app = express()
app.set('trust proxy', 1)
app.disable('x-powered-by')

// www redirect
app.use((req, res, next) => {
  if (req.hostname === 'kitchenasitis.com') {
    return res.redirect(301, `https://www.kitchenasitis.com${req.url}`)
  }
  next()
})

app.use(express.json({ limit: '32kb' }))

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many submissions. Please try again in a few minutes.' },
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, message, type, website, consent_given_at } = req.body || {}

    // honeypot
    if (website) return res.status(200).json({ ok: true })

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ error: 'Name, email, and message are required.' })
    }
    const n = name.trim()
    const e = email.trim()
    const m = message.trim()
    const p = typeof phone === 'string' ? phone.trim() : ''
    const t = typeof type === 'string' ? type.trim() : 'general'

    if (!n || !e || !m) {
      return res.status(400).json({ error: 'Name, email, and message are required.' })
    }
    if (n.length > 200 || e.length > 200 || m.length > 5000) {
      return res.status(400).json({ error: 'One of your fields is too long.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }

    const isSupperClub = t === 'supper-club'
    const subject = isSupperClub
      ? `Supper Club booking enquiry — ${n}`
      : `Website enquiry — ${n}`

    const text =
      `${isSupperClub ? 'Supper Club booking enquiry' : 'General enquiry'} from kitchenasitis.com\n\n` +
      `Name:    ${n}\n` +
      `Email:   ${e}\n` +
      (p ? `Phone:   ${p}\n` : '') +
      `\nMessage:\n${m}\n\n` +
      `---\n` +
      `Type:             ${t}\n` +
      `Consent given at: ${consent_given_at || 'unknown'}\n` +
      `Received at:      ${new Date().toISOString()}\n` +
      `IP:               ${req.ip || 'unknown'}\n`

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: `"${n}" <${e}>`,
      subject,
      text,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('[contact] send failed:', err)
    res.status(500).json({ error: 'Sorry, the message could not be sent right now. Please try again, or WhatsApp us directly.' })
  }
})

// Serve the built Vite frontend
const distPath = path.join(__dirname, '..', 'public')

app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (/\.(js|css|woff2?|ttf|eot|ico)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    } else if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=86400')
    } else {
      res.setHeader('Cache-Control', 'no-cache')
    }
  },
}))

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => console.log(`[startup] listening on :${PORT}`))
