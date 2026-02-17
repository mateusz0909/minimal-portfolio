'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
  content: string
  label?: string
}

export function CopyButton({ content, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-[16px] leading-6 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity"
      aria-label={label || `Copy ${content}`}
    >
      <span className="min-w-0 break-words">{content}</span>
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-green-600" aria-hidden />
      ) : (
        <Copy className="h-4 w-4 shrink-0" aria-hidden />
      )}
    </button>
  )
}
