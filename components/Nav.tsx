"use client"
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Prevent page scroll when the mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <div className="relative flex items-center gap-2">
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-4 text-[16px] leading-7 text-[var(--body)]">
        {links.map((l, i) => (
          <div key={l.href} className="flex items-center gap-4">
            <a href={l.href} className="hover:underline">
              {l.label}
            </a>
            {i < links.length - 1 && <span className="text-[var(--body-subtle)]">/</span>}
          </div>
        ))}
        <span className="text-[var(--body-subtle)]">/</span>
        <ThemeToggle />
      </nav>

      {/* Mobile: toggle + hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-[var(--surface)] text-[var(--body)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--body)]/20"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-20"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile full-width slide-in menu */}
      <div
        className={`md:hidden fixed top-[var(--header-h)] right-0 left-0 bottom-0 z-40 bg-[var(--page)] transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <nav className="divide-y divide-[var(--divider)] bg-[var(--page)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-4 text-[16px] leading-7 text-[var(--body)] hover:bg-[var(--surface)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
