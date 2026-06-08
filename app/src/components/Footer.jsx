import { Link } from 'react-router-dom'

const WHATSAPP = 'https://wa.me/31647804089'
const INSTAGRAM = 'https://instagram.com/kitchenasitis'
const KOOKXTRA  = 'https://www.kookxtra.nl'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px]">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px]">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.93 13.865c-.207.582-1.21 1.113-1.655 1.163-.423.047-.814.209-2.738-.57-2.32-.938-3.806-3.308-3.921-3.462-.116-.154-.946-1.26-.946-2.403 0-1.143.598-1.706.81-1.94.212-.232.463-.29.617-.29l.444.008c.143.007.334-.054.523.4.195.469.661 1.613.718 1.73.058.115.096.25.019.404-.077.154-.116.25-.231.385-.116.135-.244.301-.348.404-.115.115-.235.24-.101.47.135.231.598.985 1.284 1.596.88.787 1.622 1.03 1.852 1.145.23.116.366.097.5-.058.135-.154.578-.673.731-.904.154-.23.308-.192.52-.115.211.077 1.345.635 1.575.75.231.116.385.173.443.27.058.096.058.557-.149 1.037z"/>
  </svg>
)

const KookxtraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px]">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="fixed bottom-0 inset-x-0 z-40 border-t border-cream/10 bg-forest/95 backdrop-blur"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex flex-wrap items-center justify-between gap-3 text-cream/50 text-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-display text-cream/80">Kitchen <span className="text-spice">As It Is</span></span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="hidden sm:inline text-xs">Amsterdam · Indian Home Kitchen</span>
          <span className="hidden md:inline opacity-40">·</span>
          <span className="hidden md:inline text-xs">© {year}</span>
        </div>

        <ul className="flex items-center gap-1.5">
          <li>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @kitchenasitis"
              title="@kitchenasitis on Instagram"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-spice hover:bg-spice/10 transition-colors"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              title="Order on WhatsApp"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-spice hover:bg-spice/10 transition-colors"
            >
              <WhatsAppIcon />
            </a>
          </li>
          <li>
            <a
              href={KOOKXTRA}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on Kookxtra"
              title="Order on Kookxtra"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 text-cream/60 hover:text-cream hover:border-spice hover:bg-spice/10 transition-colors"
            >
              <KookxtraIcon />
            </a>
          </li>
          <li>
            <Link
              to="/supper-club"
              className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-xs text-spice border border-spice/30 px-3 py-1.5 rounded-full hover:bg-spice hover:text-cream transition-colors"
            >
              Supper Club
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
