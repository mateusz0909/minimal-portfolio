import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Mateusz Byrtus — Product Builder',
    template: '%s — Mateusz Byrtus',
  },
  description: 'Product builder in Warsaw. I build small, AI-powered tools and apps during nights and weekends.',
  openGraph: {
    type: 'website',
    title: 'Mateusz Byrtus — Product Builder',
    description: 'Product builder in Warsaw. I build small, AI-powered tools and apps during nights and weekends.',
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateusz Byrtus — Product Builder',
    description: 'I build small, AI-powered tools and apps.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Top navbar */}
        <header className="sticky top-0 z-40 bg-[#FAFAF8]/80 backdrop-blur border-b border-[#EAEAE7]">
          <div className="max-w-[672px] mx-auto px-6 py-3 flex items-center justify-between">
            <a href="#home" className="inline-flex items-center" aria-label="Mateusz Byrtus home">
              <Image src="/mb-logo.png" alt="MB logo" width={158} height={102} priority className="h-7 w-auto md:h-8" />
            </a>
            <Nav />
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-screen bg-[#FAFAF8]">
          <div className="max-w-[672px] mx-auto px-6 py-6 md:py-12">{children}</div>
        </main>
      </body>
    </html>
  )
}
