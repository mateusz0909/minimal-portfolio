'use client'

import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-[var(--surface)] text-[var(--body)] shadow-sm transition-colors hover:bg-[var(--tag)] focus:outline-none focus:ring-2 focus:ring-[var(--body)]/20"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  )
}
