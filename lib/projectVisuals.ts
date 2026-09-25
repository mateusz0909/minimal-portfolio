import type { CSSProperties } from 'react'

export type Visual = { bd: CSSProperties }

/** Monochrome geometric panels — same visual language as the homepage work cards. */
export const visuals: Record<string, Visual> = {
  'wake-the-book': {
    bd: {
      backgroundImage: 'radial-gradient(rgb(var(--ink) /.13) 1.1px,transparent 1.3px)',
      backgroundSize: '15px 15px',
    },
  },
  'brain-plus': {
    bd: {
      backgroundImage:
        'linear-gradient(rgb(var(--ink) /.08) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--ink) /.08) 1px,transparent 1px)',
      backgroundSize: '13px 13px',
    },
  },
  'dopoki-zycie-trwa': {
    bd: { background: 'repeating-linear-gradient(45deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 15px)' },
  },
  'daily-word': {
    bd: { background: 'repeating-linear-gradient(0deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 14px)' },
  },
  'aura-season': {
    bd: { background: 'repeating-radial-gradient(circle at 50% 50%,rgb(var(--ink) /.12) 0 1px,transparent 1px 17px)' },
  },
  'lemmi-studio': {
    bd: {
      background:
        'repeating-linear-gradient(45deg,rgb(var(--ink) /.07) 0 1px,transparent 1px 13px),repeating-linear-gradient(-45deg,rgb(var(--ink) /.07) 0 1px,transparent 1px 13px)',
    },
  },
  'luma-breathwork': {
    bd: {
      backgroundImage:
        'linear-gradient(rgb(var(--ink) /.09) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--ink) /.09) 1px,transparent 1px)',
      backgroundSize: '19px 19px',
    },
  },
  'feeling-journal': {
    bd: { background: 'repeating-linear-gradient(90deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 15px)' },
  },
  'calm-now': {
    bd: { background: 'radial-gradient(circle at 50% 45%,rgb(var(--ink) /.12),transparent 62%)' },
  },
}

export const fallback: Visual = {
  bd: {
    backgroundImage: 'radial-gradient(rgb(var(--ink) /.12) 1.1px,transparent 1.3px)',
    backgroundSize: '15px 15px',
  },
}

export const getVisual = (slug: string): Visual => visuals[slug] ?? fallback
