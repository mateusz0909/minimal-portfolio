import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: "Mateusz is a product builder based in Warsaw, Poland.",
}

export default function Page() {
  return (
    <main>
      <Script id="ld-json-person" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Mateusz Byrtus',
          jobTitle: 'Product Builder',
          address: { '@type': 'PostalAddress', addressLocality: 'Warsaw', addressCountry: 'PL' },
          url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          sameAs: ['https://x.com/mateusz_b9'],
          email: 'mailto:mateusz.byrtus@icloud.com',
        })}
      </Script>
  {/* Hero Section */}
  <section id="home" className="flex flex-col gap-8 mb-8 scroll-mt-[var(--header-h)]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/306f1cd38534d3a4ec272aabbae0549b93cbbb49?width=350"
          alt="Profile"
          className="w-[175px] h-[175px] rounded-full object-cover"
        />

        <div className="flex flex-col gap-8">
          <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[#252525] tracking-[-1.5px]">
            Hi, I&apos;m Mateusz.<br />I&apos;m a product builder<br />based in Warsaw, Poland.
          </h1>

          <div className="text-[16px] leading-7 text-[#333] space-y-4">
            <p>
              By day Product Owner at Assembly Global.<br />By night I make small, AI-powered tools and apps.<br />Solo, during nights and weekends.
            </p>
            <p>
              In the past year, I&apos;ve released a few iOS apps and one full-stack SaaS project.{' '}
              <span className="underline">Luma Breathwork</span> reached a 13.3% App Store conversion rate — much higher than I expected. And{' '}
              <span className="underline">Lemmi Studio</span> is now live and evolving.
            </p>
          </div>

          <Link href="/contact" className="text-[16px] leading-7 text-[#333] hover:underline">
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Sections below trimmed for brevity; ported structure retained */}
  <section id="projects" className="py-8 border-t border-transparent scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-8">Recent Projects</h2>
        <div className="flex flex-col gap-4">
          {/* Lemmi Studio */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-[18px]">
            <div className="flex justify-between items-center">
              <h3 className="font-sans text-2xl font-bold text-black">Lemmi Studio</h3>
              <span className="text-[16px] leading-7 text-[#333]">2025</span>
            </div>
            <p className="text-[16px] leading-7 text-[#333]">
              A tool that turns raw app screenshots into ready-to-use App Store visuals, marketing copy and Landgin Page. Built to help indie developers who ship fast but don&apos;t have time for design or copywriting.
              <br />
              <br />
              Built solo in about a month — full stack, from auth and billing to AI image generation.
              <br />
              <br />
              Tech: Node.js, React, Supabase, Gemini API, Stripe
            </p>
            <a
              href="https://lemmi.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] leading-7 text-[#333] border-b border-black pb-1 inline-block self-start hover:opacity-70"
            >
              lemmi.studio →
            </a>
          </div>

          {/* Feeling Journal */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-[18px]">
            <div className="flex justify-between items-center">
              <h3 className="font-sans text-2xl font-bold text-black">Feeling Journal</h3>
              <span className="text-[16px] leading-7 text-[#333]">2025</span>
            </div>
            <p className="text-[16px] leading-7 text-[#333]">
              Emotion tracking app for iOS, that helps users reflect on emotional patterns with weekly AI-generated summaries. Built from idea to App Store in one week.
              <br />
              <br />
              Tech: SwiftUI, SwiftData, CloudKit, Gemini API
            </p>
            <a
              href="#"
              className="text-[16px] leading-7 text-[#333] border-b border-black pb-1 inline-block self-start hover:opacity-70"
            >
              Check out on App Store →
            </a>
          </div>

          {/* Calm Now */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-[18px]">
            <div className="flex justify-between items-center">
              <h3 className="font-sans text-2xl font-bold text-black">Calm Now</h3>
              <span className="text-[16px] leading-7 text-[#333]">2025</span>
            </div>
            <p className="text-[16px] leading-7 text-[#333]">
              A minimal, calming box breathing experience built in two weeks to explore simple, focused UI design and paywalls from StoreKit.
              <br />
              <br />
              Tech: SwiftUI, SwiftData, CloudKit, StoreKit
            </p>
            <a
              href="#"
              className="text-[16px] leading-7 text-[#333] border-b border-black pb-1 inline-block self-start hover:opacity-70"
            >
              Check out on App Store →
            </a>
          </div>

          {/* Luma Breathwork */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-[18px]">
            <div className="flex justify-between items-center">
              <h3 className="font-sans text-2xl font-bold text-black">Luma Breathwork</h3>
              <span className="text-[16px] leading-7 text-[#333]">2024</span>
            </div>
            <p className="text-[16px] leading-7 text-[#333]">
              A breathwork app that that guide users through Wim Hof style breathing experience. Reached a 13.3% App Store conversion rate and holds a 4.9-star rating.
              <br />
              Tech: Swift, SwiftUI
              <br />
              <br />
              Tech: SwiftUI, SwiftData, CloudKit, StoreKit
            </p>
            <a
              href="#"
              className="text-[16px] leading-7 text-[#333] border-b border-black pb-1 inline-block self-start hover:opacity-70"
            >
              Check out on App Store →
            </a>
          </div>
        </div>
      </section>

  <section id="process" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-4">My Process</h2>
        <div className="mt-2 rounded-none">
          {/* Intro without divider below */}
          <div className="py-4 font-mono text-[16px] leading-7 text-[#333]">I keep things simple and fast:</div>
          {/* Only the list + outro get dividers between items */}
          <div className="divide-y divide-[#333]">
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">1. Spot a real problem (often my own)</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">2. Sketch a "good enough" solution</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">3. Build quickly with help from AI tools like Cursor</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">4. Ship, learn, iterate, repeat</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">It&apos;s not about perfect launches — it&apos;s about learning, improving, and having fun with the process</div>
          </div>
        </div>
      </section>

  {/* Stack Section */}
  <section id="stack" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-8">Stack</h2>

        <div className="flex flex-col gap-4">
          {/* AI & Data */}
        

          {/* Languages */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-sans text-2xl font-bold text-black mb-3">Languages</h3>
            <p className="text-[16px] leading-7 text-[#333]">
              Python · Swift · SQL · JavaScript
            </p>
          </div>

          {/* Backend & API */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-sans text-2xl font-bold text-black mb-3">Frontend &amp; Backend</h3>
            <p className="text-[16px] leading-7 text-[#333]">
              React · React Native · Next.js · Express.js · FastAPI · Flask · Firebase · Supabase
            </p>
          </div>

            <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-sans text-2xl font-bold text-black mb-3">AI &amp; Data</h3>
            <p className="text-[16px] leading-7 text-[#333]">
              OpenAI · Gemini · Anthropic Claude · Perplexity · BigQuery
            </p>
          </div>

          {/* Automation */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-sans text-2xl font-bold text-black mb-3">Automation</h3>
            <p className="text-[16px] leading-7 text-[#333]">
              n8n.io · Make.com · Postman
            </p>
          </div>

          {/* Development Tools */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-sans text-2xl font-bold text-black mb-3">Development Tools</h3>
            <p className="text-[16px] leading-7 text-[#333]">
              VSCode · Xcode · Cursor · Git · GitHub · Docker
            </p>
          </div>

          {/* Product & Design */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <h3 className="font-sans text-2xl font-bold text-black mb-3">Product &amp; Design</h3>
            <p className="text-[16px] leading-7 text-[#333]">
              Figma · JIRA · Notion · Hotjar
            </p>
          </div>
        </div>
      </section>

  <section id="contact" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-8">Contact</h2>
        <div className="space-y-6 md:space-y-3">
          {/* Email */}
          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[#333] whitespace-nowrap">Email:</span>
            <a
              href="mailto:mateusz.byrtus@icloud.com"
              className="mt-1 md:mt-0 inline-flex flex-wrap items-center text-[16px] leading-6 text-[#333] hover:opacity-70"
            >
              <span className="min-w-0 break-words underline">mateusz.byrtus@icloud.com</span>
              <span className="ml-1 inline-block text-base no-underline align-middle shrink-0">↗</span>
            </a>
          </div>

          {/* X */}
          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[#333] whitespace-nowrap">X.com:</span>
            <a
              href="https://x.com/mateusz_b9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 md:mt-0 inline-flex flex-wrap items-center text-[16px] leading-6 text-[#333] hover:opacity-70"
            >
              <span className="min-w-0 break-words underline">x.com/mateusz_b9</span>
              <span className="ml-1 inline-block text-base no-underline align-middle shrink-0">↗</span>
            </a>
          </div>
        </div>
      </section>

      <div className="py-8 border-t border-black mt-8">
        <p className="text-center text-[16px] leading-7 text-[#252525]">© 2025 · Mateusz Byrtus · Warsaw, Poland</p>
      </div>
    </main>
  )
}
