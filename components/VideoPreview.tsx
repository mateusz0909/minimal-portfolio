'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'

export function VideoPreview({ src }: { src: string }) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const close = useCallback(() => setOpen(false), [])

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
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        className="group relative w-full sm:w-40 aspect-[9/16] sm:aspect-auto shrink-0 sm:self-stretch rounded-xl overflow-hidden border border-[var(--edge)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        aria-label="Play video"
      >
        <video
          src={src}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
            <Play className="h-5 w-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </button>

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
