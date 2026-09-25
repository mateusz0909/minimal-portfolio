import type { ReactNode } from 'react'
import type { ProjectSlug } from '@/app/data/projects'

/** One voice for every project mark: same squircle tile, mono line glyph, stroke 3 on a 64 grid.
    Each glyph is a reduced motif of the app's real icon so it stays recognisable. */
const glyphs: Record<ProjectSlug, ReactNode> = {
  'luma-breathwork': (
    <>
      <circle cx="32" cy="32" r="13" />
      <circle cx="32" cy="32" r="4.5" fill="currentColor" stroke="none" />
    </>
  ),
  'calm-now': <path d="M21 39V25a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-8" />,
  'feeling-journal': <path d="M24 20v14a8 8 0 0 0 16 0V20" />,
  'lemmi-studio': <path d="M30 22h14M20 32h24M20 42h14" />,
  'aura-season': (
    <>
      <circle cx="32" cy="32" r="13" />
      <path d="M32 32V19a13 13 0 0 1 13 13z" fill="currentColor" />
    </>
  ),
  'daily-word': <path d="M32 18v28M24 27h16" />,
  'wake-the-book': <path d="M32 23c-4-3-9-3-13-2v21c4-1 9-1 13 2 4-3 9-3 13-2V21c-4-1-9-1-13 2zM32 23v21" />,
  'brain-plus': <path d="M19 20v24h8a6 6 0 0 0 0-12h-8M19 20h7a6 6 0 0 1 0 12M42 27v10M37 32h10" />,
  'dopoki-zycie-trwa': (
    <text
      x="32"
      y="37"
      textAnchor="middle"
      fontSize="14"
      letterSpacing="1.5"
      fill="currentColor"
      stroke="none"
      style={{ fontFamily: 'var(--font-jost)', fontWeight: 400 }}
    >
      DŻT
    </text>
  ),
}

export function AppMark({ slug, size = 56, className }: { slug: ProjectSlug; size?: number | string; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`app-mark${className ? ` ${className}` : ''}`}
      aria-hidden
    >
      <rect className="app-mark-tile" x=".5" y=".5" width="63" height="63" rx="15" />
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {glyphs[slug]}
      </g>
    </svg>
  )
}
