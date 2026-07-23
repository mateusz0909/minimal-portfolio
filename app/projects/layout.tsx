import type { ReactNode } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { RevealInit } from '@/components/RevealInit'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <RevealInit />
      <Sidebar mode="sub" />
      <main className="main">{children}</main>
    </div>
  )
}
