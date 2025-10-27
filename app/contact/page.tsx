import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <main>
      <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[#252525] tracking-[-1.5px] mb-6">Contact</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <span className="text-[16px] font-bold text-[#333]">Email:</span>
          <a href="mailto:mateusz.byrtus@icloud.com" className="text-[16px] text-[#333] underline hover:opacity-70">
            mateusz.byrtus@icloud.com <span className="text-2xl font-bold no-underline">↗</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[16px] font-bold text-[#333]">X.com:</span>
          <a href="https://x.com/mateusz_b9" target="_blank" rel="noopener noreferrer" className="text-[16px] text-[#333] underline hover:opacity-70">
            x.com/mateusz_b9 <span className="text-2xl no-underline">↗</span>
          </a>
        </div>
      </div>
    </main>
  )
}
