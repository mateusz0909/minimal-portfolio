import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { StaticImageData } from 'next/image'

type ShapeKind = 'circle' | 'square' | 'diamond' | 'dot'
type Visual = { bd: CSSProperties; kind: ShapeKind }

/** Monochrome geometric panels — same visual language as the homepage work cards. */
const visuals: Record<string, Visual> = {
  'wake-the-book': {
    bd: {
      backgroundImage: 'radial-gradient(rgb(var(--ink) /.13) 1.1px,transparent 1.3px)',
      backgroundSize: '15px 15px',
    },
    kind: 'circle',
  },
  'brain-plus': {
    bd: {
      backgroundImage:
        'linear-gradient(rgb(var(--ink) /.08) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--ink) /.08) 1px,transparent 1px)',
      backgroundSize: '13px 13px',
    },
    kind: 'diamond',
  },
  'dopoki-zycie-trwa': {
    bd: { background: 'repeating-linear-gradient(45deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 15px)' },
    kind: 'diamond',
  },
  'daily-word': {
    bd: { background: 'repeating-linear-gradient(0deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 14px)' },
    kind: 'square',
  },
  'aura-season': {
    bd: { background: 'repeating-radial-gradient(circle at 50% 50%,rgb(var(--ink) /.12) 0 1px,transparent 1px 17px)' },
    kind: 'dot',
  },
  'lemmi-studio': {
    bd: {
      background:
        'repeating-linear-gradient(45deg,rgb(var(--ink) /.07) 0 1px,transparent 1px 13px),repeating-linear-gradient(-45deg,rgb(var(--ink) /.07) 0 1px,transparent 1px 13px)',
    },
    kind: 'diamond',
  },
  'luma-breathwork': {
    bd: {
      backgroundImage:
        'linear-gradient(rgb(var(--ink) /.09) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--ink) /.09) 1px,transparent 1px)',
      backgroundSize: '19px 19px',
    },
    kind: 'circle',
  },
  'feeling-journal': {
    bd: { background: 'repeating-linear-gradient(90deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 15px)' },
    kind: 'circle',
  },
  'calm-now': {
    bd: { background: 'radial-gradient(circle at 50% 45%,rgb(var(--ink) /.12),transparent 62%)' },
    kind: 'circle',
  },
}

const fallback: Visual = {
  bd: {
    backgroundImage: 'radial-gradient(rgb(var(--ink) /.12) 1.1px,transparent 1.3px)',
    backgroundSize: '15px 15px',
  },
  kind: 'circle',
}

export function ProjectVisual({
  slug,
  variant = 'portrait',
  icon,
  title,
  className,
  style,
}: {
  slug: string
  variant?: 'portrait' | 'banner'
  icon?: StaticImageData | string
  title?: string
  className?: string
  style?: CSSProperties
}) {
  const v = visuals[slug] ?? fallback
  return (
    <div className={`pv pv--${variant}${className ? ` ${className}` : ''}`} style={style} aria-hidden>
      {/* icon lives in the back, muted, as a watermark */}
      {icon ? (
        <div className="pv-mark">
          <div className="pv-mark-inner">
            <Image src={icon} alt={title ? `${title} icon` : ''} fill sizes="420px" className="pv-mark-img" />
          </div>
        </div>
      ) : (
        <div className={`pv-shape pv-shape--${v.kind}`} />
      )}
      {/* pattern sits on top, quieting the mark behind it */}
      <div className="pv-bd" style={v.bd} />
    </div>
  )
}
