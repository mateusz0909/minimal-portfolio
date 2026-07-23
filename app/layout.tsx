import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { JetBrains_Mono, Jost, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mateusz Byrtus — Product Builder / Product Owner',
  description: 'Product Owner at Assembly Global building AI-powered tools, native iOS apps, and full-stack products.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${jetbrainsMono.variable} ${jost.variable} ${hanken.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
