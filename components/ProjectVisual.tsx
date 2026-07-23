import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { StaticImageData } from 'next/image'
import { getVisual } from '@/lib/projectVisuals'

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
  const v = getVisual(slug)
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
