import { useEffect, useRef } from 'react'
import { mains } from '../data/menu'

export default function MenuScroll() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return

    function onScroll() {
      const rect = wrap.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const p = scrolled / total
      const maxX = track.scrollWidth - window.innerWidth
      track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      id="menu"
      ref={wrapRef}
      className="relative bg-surface"
      style={{ height: `${mains.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-10 mb-10">
          <p className="text-sm tracking-widest uppercase text-spice mb-3">The full menu</p>
          <h2 className="font-display text-4xl md:text-6xl">Andhra. North. South.</h2>
        </div>
        <div ref={trackRef} className="flex gap-6 px-6 md:px-10 will-change-transform">
          {mains.map((m) => (
            <article
              key={m.name}
              className="flex-shrink-0 w-[80vw] md:w-[420px] bg-cream rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[420px] border border-ink/5"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {m.tags.map((t) => (
                    <span key={t} className="tag-pill text-ink/60">{t}</span>
                  ))}
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight">{m.name}</h3>
                <p className="mt-4 text-ink/65 leading-relaxed">{m.description}</p>
              </div>
              <div className="font-display text-4xl text-gold mt-8">€{m.price}</div>
            </article>
          ))}
          <div className="flex-shrink-0 w-[20vw]" />
        </div>
      </div>
    </section>
  )
}
