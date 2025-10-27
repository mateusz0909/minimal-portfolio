import { ReactNode } from 'react'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="max-w-[672px] mx-auto px-6 py-6 md:py-12">{children}</div>
    </main>
  )
}
