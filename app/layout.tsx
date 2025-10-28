import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

import { GoogleAnalytics } from '@next/third-parties/google'
 


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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF8]">
        {children}
      </body>
      <GoogleAnalytics gaId="G-5N6RJJZ7DN" />

    </html>
  )
}
