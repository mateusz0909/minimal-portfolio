import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projectRoute } from '@/app/data/projects'
import { CopyButton } from '@/components/CopyButton'

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

      <section id="home" className="flex flex-col gap-8 mb-8 scroll-mt-[var(--header-h)]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/306f1cd38534d3a4ec272aabbae0549b93cbbb49?width=350"
          alt="Profile"
          className="w-[175px] h-[175px] rounded-full object-cover"
        />

        <div className="flex flex-col gap-8">
          <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[#252525] tracking-[-1.5px]">
            Hi, I&apos;m Mateusz.
            <br />I&apos;m a product builder
            <br />based in Warsaw, Poland.
          </h1>

          <div className="text-[16px] leading-7 text-[#333] space-y-8">
            <p>
              By day Product Owner at Assembly Global.
              <br />By night I make small, AI-powered tools and apps.
              <br />Solo, during nights and weekends.
            </p>
            <p>
              In the past year, I&apos;ve released a few iOS apps and one full-stack SaaS project.&nbsp;
              <span className="underline">Luma Breathwork</span> reached a 13.3% App Store conversion rate — much higher than I expected.
              And <span className="underline">Lemmi Studio</span> is now live and evolving.
            </p>
          </div>

          <Link
            href={{ hash: 'contact' }}
            className="inline-flex items-center gap-2 text-[16px] leading-7 text-[#333] underline decoration-2 underline-offset-4 hover:opacity-70"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section id="projects" className="py-8 border-t border-transparent scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-8">Recent Projects</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              title: 'Lemmi Studio',
              year: '2025',
              description:
                'A tool that turns raw app screenshots into ready-to-use App Store visuals, marketing copy and landing pages. Built to help indie developers who ship fast but don\'t have time for design or copywriting.',
              route: projectRoute('lemmi-studio'),
              tech: 'Tech: Node.js, React, Supabase, Gemini API, Stripe',
            },
            {
              title: 'Feeling Journal',
              year: '2025',
              description:
                'Emotion tracking app for iOS that helps users reflect on emotional patterns with weekly AI-generated summaries. Built from idea to App Store in one week.',
              route: projectRoute('feeling-journal'),
              tech: 'Tech: SwiftUI, SwiftData, CloudKit, Gemini API',
            },
            {
              title: 'Calm Now',
              year: '2025',
              description:
                'A minimal, calming box breathing experience built in two weeks to explore focused UI design and StoreKit paywalls.',
              route: projectRoute('calm-now'),
              tech: 'Tech: SwiftUI, SwiftData, CloudKit, StoreKit',
            },
            {
              title: 'Luma Breathwork',
              year: '2024',
              description:
                'A breathwork app that guides users through Wim Hof style sessions. Reached a 13.3% App Store conversion rate and holds a 4.9-star rating.',
              route: projectRoute('luma-breathwork'),
              tech: 'Tech: Swift, SwiftUI, StoreKit',
            },
          ].map((project) => (
            <article
              key={project.title}
              className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col gap-[18px] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[14px_14px_30px_-30px_rgba(0,0,0,0.45)]"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-sans text-2xl font-bold text-black">{project.title}</h3>
                <span className="text-[16px] leading-7 text-[#333]">{project.year}</span>
              </div>
              <p className="text-[16px] leading-7 text-[#333]">
                {project.description}
                <br />
                <br />
                {project.tech}
              </p>
              <Link
                href={project.route}
                className="inline-flex items-center gap-2 text-[16px] leading-7 text-[#333] underline decoration-2 underline-offset-4 hover:opacity-70 self-start"
              >
                View project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-4">My Process</h2>
        <div className="mt-2 rounded-none">
          <div className="py-4 font-mono text-[16px] leading-7 text-[#333]">I keep things simple and fast:</div>
          <div className="divide-y divide-[#333]">
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">1. Spot a real problem (often my own)</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">2. Sketch a "good enough" solution</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">3. Build quickly with help from AI tools like Cursor</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333] pl-8">4. Ship, learn, iterate, repeat</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[#333]">
              It&apos;s not about perfect launches — it&apos;s about learning, improving, and having fun with the process
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-8">Stack</h2>
        <div className="flex flex-col gap-4">
          {[
            { heading: 'Languages', body: 'Python · Swift · SQL · JavaScript' },
            {
              heading: 'Frontend & Backend',
              body: 'React · React Native · Next.js · Express.js · FastAPI · Flask · Firebase · Supabase',
            },
            { heading: 'AI & Data', body: 'OpenAI · Gemini · Anthropic Claude · Perplexity · BigQuery' },
            { heading: 'Automation', body: 'n8n.io · Make.com · Postman' },
            { heading: 'Development Tools', body: 'VSCode · Xcode · Cursor · Git · GitHub · Docker' },
            { heading: 'Product & Design', body: 'Figma · JIRA · Notion · Hotjar' },
          ].map((card) => (
            <article key={card.heading} className="bg-[#F5F5F5] rounded-2xl p-6 space-y-3">
              <h3 className="font-sans text-2xl font-bold text-black">{card.heading}</h3>
              <p className="text-[16px] leading-7 text-[#333]">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-black tracking-[-0.5px] mb-8">Contact</h2>
        <div className="space-y-6 md:space-y-3">
          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[#333] whitespace-nowrap">Email:</span>
            <div className="mt-1 md:mt-0">
              <CopyButton content="mateusz.byrtus@icloud.com" label="Copy email address" />
            </div>
          </div>

          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[#333] whitespace-nowrap">X.com:</span>
            <a
              href="https://x.com/mateusz_b9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 md:mt-0 inline-flex items-center gap-2 text-[16px] leading-6 text-[#333] underline decoration-2 underline-offset-4 hover:opacity-70"
            >
              <span className="min-w-0 break-words">x.com/mateusz_b9</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
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
