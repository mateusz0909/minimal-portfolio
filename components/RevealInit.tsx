'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Runs the reveal-on-scroll observer for any [data-reveal] element. Re-scans on route change. */
export function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      items.forEach((i) => i.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
  }, [pathname])

  return null
}
