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

  const navBg = isSupperClub
    ? solid ? 'bg-forest/95 backdrop-blur border-b border-cream/10' : 'bg-transparent'
    : solid ? 'bg-cream/92 backdrop-blur border-b border-ink/8'    : 'bg-transparent'

  const textColour  = isSupperClub ? 'text-cream/70 hover:text-cream' : 'text-ink/65 hover:text-ink'
  const logoColour  = isSupperClub ? 'text-cream'  : 'text-ink'

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
          <Link to="/" className={`font-display text-xl md:text-2xl tracking-tight ${logoColour}`}>
            Kitchen <span className="text-spice">As It Is</span>
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
            <a href="#order" className="hidden md:inline-flex text-sm bg-forest text-cream px-5 py-2 rounded-full hover:bg-spice transition-colors">
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

            <div className="flex gap-4 mt-8">
              <a href="https://instagram.com/kitchenasitis" target="_blank" rel="noopener noreferrer"
                className="text-sm text-cream/60 hover:text-cream">@kitchenasitis</a>
              <span className="text-cream/20">·</span>
              <a href="https://wa.me/31647804089" target="_blank" rel="noopener noreferrer"
                className="text-sm text-cream/60 hover:text-cream">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
