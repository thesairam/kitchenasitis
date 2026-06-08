import { Link } from 'react-router-dom'

const WHATSAPP = 'https://wa.me/31647804089'
const INSTAGRAM = 'https://instagram.com/kitchenasitis'
const KOOKXTRA = 'https://www.kookxtra.nl'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/70 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-cream">
            Kitchen <span className="text-spice">As It Is</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            A home kitchen in Amsterdam. Biryani and Protein Bowl — cooked from memory, two menus, zero shortcuts.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase hover:text-spice transition-colors"
            >
              @kitchenasitis
            </a>
            <span className="text-cream/20">·</span>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase hover:text-spice transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-cream/50 mb-4">Menu</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#biryani" className="hover:text-cream">Biryani</a></li>
            <li><a href="/#bowl" className="hover:text-cream">Protein Bowl</a></li>
            <li>
              <Link to="/supper-club" className="text-spice hover:text-cream transition-colors">
                Supper Club
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-cream/50 mb-4">Order</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={KOOKXTRA} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                Kookxtra
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-cream/10 text-xs text-cream/40 flex justify-between flex-wrap gap-4">
        <span>© Kitchen As It Is, Amsterdam</span>
        <span>Food the way it always tasted.</span>
      </div>
    </footer>
  )
}
