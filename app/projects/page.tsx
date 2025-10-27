import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[#252525] tracking-[-1.5px] mb-6">Projects</h1>
      <p className="text-[16px] leading-7 text-[#333]">A selection of recent projects.</p>
    </main>
  )
}
