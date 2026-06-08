import { useEffect } from 'react'

export function usePageMeta({ title, description, canonicalPath = '/' }) {
  useEffect(() => {
    document.title = title

    const setMeta = (sel, content) => {
      let el = document.querySelector(sel)
      if (el) el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', `https://www.kitchenasitis.com${canonicalPath}`)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://www.kitchenasitis.com${canonicalPath}`)
  }, [title, description, canonicalPath])
}
