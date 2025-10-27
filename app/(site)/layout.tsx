import { ReactNode } from 'react'
import Image from 'next/image'
import Nav from '@/components/Nav'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="sticky top-0 z-40 bg-[#FAFAF8]/80 backdrop-blur border-b border-[#EAEAE7]">
        <div className="max-w-[672px] mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center" aria-label="Mateusz Byrtus home">
            <Image src="/mb-logo.png" alt="MB logo" width={158} height={102} priority className="h-7 w-auto md:h-8" />
          </a>
          <Nav />
        </div>
      </header>

      <main className="min-h-screen">
        <div className="max-w-[672px] mx-auto px-6 py-6 md:py-12">{children}</div>
      </main>
    </div>
  )
}
