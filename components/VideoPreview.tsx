'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'
import { getVisual } from '@/lib/projectVisuals'

export function VideoPreview({ src, slug }: { src: string; slug: string }) {
  const [open, setOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!window.matchMedia) return
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play()
    }
  }, [open])

  return (
    <>
      {/* Stage — the video sits on the same geometric panel language as the rest of the site */}
      <div className="demo-stage">
        <div className="demo-bd" style={getVisual(slug).bd} />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="demo-screen"
          aria-label="Play video with sound"
        >
          <video
            src={src}
            muted
            loop
            playsInline
            autoPlay={!reduceMotion}
            preload={reduceMotion ? 'metadata' : 'auto'}
          />
          <span className="demo-play">
            <Play aria-hidden />
            Play with sound
          </span>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] max-w-[min(90vw,400px)] rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              ref={videoRef}
              src={src}
              controls
              playsInline
              autoPlay
              className="max-h-[90vh] w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
