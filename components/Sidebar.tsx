'use client'

import { useEffect } from 'react'

const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const socials = [
  { label: 'X', href: 'https://x.com/mateusz_b9' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mateusz-byrtus-256021156' },
  { label: 'GitHub', href: 'https://github.com/mateusz0909' },
  { label: 'Email', href: 'mailto:mateusz.byrtus@icloud.com' },
] as const

export function Sidebar({ mode = 'home' }: { mode?: 'home' | 'sub' }) {
  useEffect(() => {
    if (mode !== 'home' || !('IntersectionObserver' in window)) return

    const order = navItems.map((n) => n.id)
    const links = new Map<string, HTMLElement>()
    document.querySelectorAll<HTMLElement>('[data-nav]').forEach((a) => {
      links.set(a.dataset.nav as string, a)
    })
    const visible = new Set<string>()
    const setActive = (id: string) => {
      links.forEach((a, key) => a.classList.toggle('is-active', key === id))
    }
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        })
        const current = order.find((id) => visible.has(id))
        if (current) setActive(current)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    order.forEach((id) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })
    return () => spy.disconnect()
  }, [mode])

  const hrefFor = (id: string) => (mode === 'home' ? `#${id}` : `/#${id}`)

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={hrefFor(item.id)}
            data-nav={mode === 'home' ? item.id : undefined}
            className={`nav-link${mode === 'home' && i === 0 ? ' is-active' : ''}`}
          >
            <span>{item.label}</span>
            <span className="navline" aria-hidden />
          </a>
        ))}
      </nav>
      <div className="sidebar-social">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target={s.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <div className="sidebar-copy">© 2026 Mateusz Byrtus</div>
    </aside>
  )
}
