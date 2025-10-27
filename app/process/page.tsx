import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Process' }

export default function ProcessPage() {
  return (
    <main>
      <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[#252525] tracking-[-1.5px] mb-6">My Process</h1>
      <div className="flex flex-col gap-4">
        <p className="text-[16px] leading-7 text-[#333]">I keep things simple and fast.</p>
        <div className="pl-4 text-[16px] leading-7 text-[#333]">
          Spot a real problem (often my own).<br />
          Sketch a "good enough" solution.<br />
          Build quickly with help from AI tools like Cursor and Claude.<br />
          Ship, learn, iterate, repeat.
        </div>
        <p className="text-[16px] leading-7 text-[#333]">
          It&apos;s not about perfect launches — it&apos;s about learning, improving, and having fun with the process.
        </p>
      </div>
    </main>
  )
}
