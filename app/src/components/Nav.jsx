import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen]   = useState(false)
  const { pathname } = useLocation()
  const isHome       = pathname === '/'
  const isSupperClub = pathname === '/supper-club'

  // close menu on route change
  useEffect(() => setOpen(false), [pathname])

  // lock scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = solid
    ? 'bg-forest/95 backdrop-blur border-b border-cream/10'
    : 'bg-transparent'

  const textColour = 'text-cream/65 hover:text-cream'
  const logoColour = 'text-cream'

  const homeLinks = [
    { label: 'Story',        href: '#story'   },
    { label: 'Biryani',      href: '#biryani' },
    { label: 'Protein Bowl', href: '#bowl'    },
    { label: 'Order',        href: '#order'   },
  ]

  return (
    <>
      {/* ── Top tricolour stripe — the hidden Indian flag ── */}
      <div className="tricolour-stripe h-[3px] fixed top-0 inset-x-0 z-[60]" />

      {/* ── Nav bar ── */}
      <nav className={`fixed top-[3px] inset-x-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 ${logoColour}`}>
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className={`h-20 md:h-28 w-auto transition-all duration-500 ${solid ? 'brightness-0 invert' : ''}`}
            />
            <span className="font-display text-xl md:text-2xl tracking-tight">
              Kitchen <span className="text-spice">As It Is</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className={`hidden md:flex items-center gap-8 text-sm ${textColour}`}>
            {isHome
              ? homeLinks.map((l) => (
                  <a key={l.label} href={l.href} className="transition-colors">{l.label}</a>
                ))
              : <Link to="/" className="transition-colors">← Back to kitchen</Link>
            }
            <Link
              to="/supper-club"
              className={`font-medium transition-colors ${isSupperClub ? 'text-spice' : 'text-spice hover:text-spice/80'}`}
            >
              Supper Club
            </Link>
          </div>

          {/* Desktop CTA */}
          {isSupperClub ? (
            <a href="#contact" className="hidden md:inline-flex text-sm bg-spice text-cream px-5 py-2 rounded-full hover:bg-cream hover:text-ink transition-colors">
              Reserve a seat
            </a>
          ) : (
            <a href="#order" className="hidden md:inline-flex text-sm bg-spice text-cream px-5 py-2 rounded-full hover:bg-cream hover:text-ink transition-colors">
              Order
            </a>
          )}

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ${logoColour}`}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[1.5px] w-full bg-current origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="block h-[1.5px] w-full bg-current"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[1.5px] w-full bg-current origin-center"
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest flex flex-col px-6 pt-28 pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-2 flex-1">
              {isHome
                ? homeLinks.map((l, i) => (
                    <motion.a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="font-display text-5xl text-cream/80 hover:text-cream py-2 border-b border-cream/10 transition-colors"
                    >
                      {l.label}
                    </motion.a>
                  ))
                : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="font-display text-5xl text-cream/80 hover:text-cream py-2 border-b border-cream/10 block"
                    >
                      ← Kitchen
                    </Link>
                  </motion.div>
                )
              }
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (isHome ? homeLinks.length : 1) * 0.06 }}
              >
                <Link
                  to="/supper-club"
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl text-spice hover:text-cream py-2 border-b border-cream/10 block transition-colors"
                >
                  Supper Club
                </Link>
              </motion.div>
            </nav>

            <div className="flex gap-3 mt-8">
              <a
                href="https://instagram.com/kitchenasitis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @kitchenasitis"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-spice transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/31647804089"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-spice transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.93 13.865c-.207.582-1.21 1.113-1.655 1.163-.423.047-.814.209-2.738-.57-2.32-.938-3.806-3.308-3.921-3.462-.116-.154-.946-1.26-.946-2.403 0-1.143.598-1.706.81-1.94.212-.232.463-.29.617-.29l.444.008c.143.007.334-.054.523.4.195.469.661 1.613.718 1.73.058.115.096.25.019.404-.077.154-.116.25-.231.385-.116.135-.244.301-.348.404-.115.115-.235.24-.101.47.135.231.598.985 1.284 1.596.88.787 1.622 1.03 1.852 1.145.23.116.366.097.5-.058.135-.154.578-.673.731-.904.154-.23.308-.192.52-.115.211.077 1.345.635 1.575.75.231.116.385.173.443.27.058.096.058.557-.149 1.037z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
