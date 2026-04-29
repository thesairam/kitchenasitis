export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl text-cream">
            Kitchen <span className="text-spice">As It Is</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            A home kitchen in Amsterdam. Hyderabadi, Andhra, North & South Indian — cooked from memory.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-cream/50 mb-4">Order</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cream">Kookxtra</a></li>
            <li><a href="#" className="hover:text-cream">WhatsApp community</a></li>
            <li><a href="#" className="hover:text-cream">Instagram</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-cream/50 mb-4">Kitchen</div>
          <ul className="space-y-2 text-sm">
            <li>HACCP certified home kitchen</li>
            <li>Halal meat sourcing</li>
            <li>Amsterdam · Amstelveen</li>
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
