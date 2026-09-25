import type { CSSProperties } from 'react'
import type { ProjectSlug } from '@/app/data/projects'
import { getVisual } from '@/lib/projectVisuals'
import { AppMark } from '@/components/AppMark'

export function ProjectVisual({
  slug,
  variant = 'portrait',
  className,
  style,
}: {
  slug: ProjectSlug
  variant?: 'portrait' | 'banner'
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={`pv pv--${variant}${className ? ` ${className}` : ''}`} style={style} aria-hidden>
      {/* project mark lives in the back, muted, as a watermark */}
      <div className="pv-mark">
        <AppMark slug={slug} size="100%" />
      </div>
      {/* pattern sits on top, quieting the mark behind it */}
      <div className="pv-bd" style={getVisual(slug).bd} />
    </div>
  )
}
