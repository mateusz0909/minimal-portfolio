import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projectRoute } from '@/app/data/projects'
import { CopyButton } from '@/components/CopyButton'
import auraSeasonImg from '@/public/auraSeason.png'
import calmNowImg from '@/public/calmNow.png'
import dailyWordImg from '@/public/dailyWord.svg'
import dztImg from '@/public/dzt-icon.png'
import feelingJournalImg from '@/public/feelingJournal.jpeg'
import lemmiImg from '@/public/lemmi.png'
import lumaImg from '@/public/luma.png'

export const metadata: Metadata = {
  title: 'Home',
  description: "Mateusz is a product builder based in Warsaw, Poland.",
}

export default function Page() {
  const currentYear = new Date().getFullYear()

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
          sameAs: ['https://x.com/mateusz_b9', 'https://github.com/mateusz0909'],
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
          <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[var(--heading)] tracking-[-1.5px]">
            Hi, I&apos;m Mateusz.
            <br />I&apos;m a product builder
            <br />based in Warsaw, Poland.
          </h1>

          <div className="text-[16px] leading-7 text-[var(--body)] space-y-6">
            <p>
              By day Product Owner at Assembly Global.
              <br />By night I make small, AI-powered tools and apps.
              <br />Bridging the gap between product strategy and rapid engineering.
            </p>
            <p>
              In the past year, I&apos;ve shipped native iOS apps, a full-stack SaaS product, and AI-powered publishing tools.&nbsp;
              <span className="underline">Luma Breathwork</span> reached a 13.3% App Store conversion rate and keeps evolving, <span className="underline">AuraSeason</span> is live on the App Store,
              and <span className="underline">Daily Word</span> turns a daily content ritual into a full product pipeline.
            </p>
            <div className="flex items-center gap-3 mt-4 text-[var(--heading)] font-semibold border border-[var(--edge)] bg-[var(--surface)] px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Currently open to new projects & roles
            </div>
          </div>

          <Link
            href={{ hash: 'contact' }}
            className="inline-flex items-center gap-2 text-[16px] leading-7 text-[var(--body)] font-medium underline decoration-2 underline-offset-4 hover:opacity-70 mt-2"
          >
            Let&apos;s build something together
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section id="projects" className="py-8 border-t border-transparent scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-[var(--heading)] tracking-[-0.5px] mb-8">Recent Projects</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              title: 'WakeTheBook',
              year: '2026',
              description:
                'A local-first tool that turns EPUB and PDF files into narrated audiobooks with chapter review, voice profiles, and resumable rendering.',
              route: projectRoute('wake-the-book'),
              tech: 'Tech: FastAPI, React 19, TypeScript, SQLite, XTTS v2, VoxCPM2',
              logo: '/wakethebook.svg',
            },
            {
              title: 'AuraSeason',
              year: '2026',
              description:
                'A native iOS utility that visualises the progress of seasons, years, months, days, and personal milestones across widgets and Live Activities.',
              route: projectRoute('aura-season'),
              tech: 'Tech: SwiftUI, SwiftData, WidgetKit, ActivityKit, RevenueCat, App Intents',
              logo: auraSeasonImg,
            },
            {
              title: 'Dopóki Życie Trwa',
              year: '2025',
              description:
                'A dark, brutalist editorial magazine about discipline, stoicism, and the body. WebGL shaders, cinematic scroll animations, Sanity CMS, and newsletter — built solo in two weeks.',
              route: projectRoute('dopoki-zycie-trwa'),
              tech: 'Tech: Next.js 16, React 19, Sanity CMS, Three.js / R3F, GSAP, Tailwind CSS 4',
              logo: dztImg,
            },
            {
              title: 'Luma Breathwork',
              year: '2024–26',
              description:
                'A breathwork app for iPhone and Apple Watch, expanded with watch support, Health integrations, richer stats, stronger haptics, and ongoing product updates.',
              route: projectRoute('luma-breathwork'),
              tech: 'Tech: SwiftUI, watchOS, HealthKit, WatchConnectivity, SwiftData, Swift Charts',
              logo: lumaImg,
            },
            {
              title: 'Daily Word',
              year: '2026',
              description:
                'A Polish daily readings product combining scraping, AI summaries, generated visuals, caching, and newsletter delivery into one calm daily experience.',
              route: projectRoute('daily-word'),
              tech: 'Tech: Next.js 16, React 19, Supabase, Gemini API, Groq, Cheerio, Resend',
              logo: dailyWordImg,
            },
            {
              title: 'Lemmi Studio',
              year: '2025',
              description:
                'A tool that turns raw app screenshots into ready-to-use App Store visuals, marketing copy and landing pages. Built to help indie developers who ship fast but don\'t have time for design or copywriting.',
              route: projectRoute('lemmi-studio'),
              tech: 'Tech: Node.js, React, Supabase, Gemini API, Stripe',
              logo: lemmiImg,
            },
            {
              title: 'Feeling Journal',
              year: '2025',
              description:
                'Emotion tracking app for iOS that helps users reflect on emotional patterns with weekly AI-generated summaries. Built from idea to App Store in one week.',
              route: projectRoute('feeling-journal'),
              tech: 'Tech: SwiftUI, SwiftData, CloudKit, Gemini API',
              logo: feelingJournalImg,
            },
            {
              title: 'Calm Now',
              year: '2025',
              description:
                'A minimal, calming box breathing experience built in two weeks to explore focused UI design and StoreKit paywalls.',
              route: projectRoute('calm-now'),
              tech: 'Tech: SwiftUI, SwiftData, CloudKit, StoreKit',
              logo: calmNowImg,
            },
          ].map((project) => (
            <article
              key={project.title}
              className="bg-[var(--surface)] rounded-2xl p-6 flex flex-col gap-[18px] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[14px_14px_30px_-30px_rgba(0,0,0,0.45)]"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src={project.logo}
                    alt={`${project.title} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg border border-[var(--edge)] bg-white object-contain"
                  />
                  <h3 className="font-sans text-2xl font-bold text-[var(--heading)]">{project.title}</h3>
                </div>
                <span className="text-[16px] leading-7 text-[var(--body)]">{project.year}</span>
              </div>
              <p className="text-[16px] leading-7 text-[var(--body)]">
                {project.description}
                <br />
                <br />
                {project.tech}
              </p>
              <Link
                href={project.route}
                className="inline-flex items-center gap-2 text-[16px] leading-7 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70 self-start"
              >
                View project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-[var(--heading)] tracking-[-0.5px] mb-8">What others say</h2>
        <div className="flex flex-col gap-4">
          <article className="bg-[var(--surface)] rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[14px_14px_30px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-[16px] leading-7 text-[var(--body)] italic relative z-10">
              &quot;Incredible app. Simple, clean, and gets straight to the point. The Apple Watch integration is flawless and it actually helps me calm down during busy workdays. Highly recommend!&quot;
            </p>
            <div className="flex flex-col relative z-10">
              <span className="font-sans text-[16px] font-bold text-[var(--heading)]">App Store Review</span>
              <span className="text-[14px] text-[var(--body)] opacity-80">Luma Breathwork user</span>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none">
              <Image src={lumaImg} alt="Luma background" width={160} height={160} />
            </div>
          </article>
        </div>
      </section>

      <section id="process" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-[var(--heading)] tracking-[-0.5px] mb-4">My Process</h2>
        <div className="mt-2 rounded-none">
          <div className="py-4 font-mono text-[16px] leading-7 text-[var(--body)]">
            I don&apos;t just write code – I focus on solving user problems and delivering business value fast:
          </div>
          <div className="divide-y divide-[var(--divider)]">
            <div className="py-4 font-mono text-[16px] leading-7 text-[var(--body)] pl-8">1. Spot a real problem with measurable impact</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[var(--body)] pl-8">2. Design a lean, &quot;good enough&quot; MVP</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[var(--body)] pl-8">3. Build rapidly leveraging AI and a modern stack</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[var(--body)] pl-8">4. Ship early, gather data, and iterate</div>
            <div className="py-4 font-mono text-[16px] leading-7 text-[var(--body)]">
              Bridging the gap between a Product Owner&apos;s product strategy and an engineer&apos;s execution.
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-[var(--heading)] tracking-[-0.5px] mb-8">Stack</h2>
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
            <article key={card.heading} className="bg-[var(--surface)] rounded-2xl p-6 space-y-3">
              <h3 className="font-sans text-2xl font-bold text-[var(--heading)]">{card.heading}</h3>
              <p className="text-[16px] leading-7 text-[var(--body)]">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="py-8 scroll-mt-[var(--header-h)]">
        <h2 className="font-sans text-[32px] leading-8 font-bold text-[var(--heading)] tracking-[-0.5px] mb-8">Contact</h2>
        <div className="space-y-6 md:space-y-3">
          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[var(--body)] whitespace-nowrap">Email:</span>
            <div className="mt-1 md:mt-0">
              <CopyButton content="mateusz.byrtus@icloud.com" label="Copy email address" />
            </div>
          </div>

          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[var(--body)] whitespace-nowrap">X.com:</span>
            <a
              href="https://x.com/mateusz_b9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 md:mt-0 inline-flex items-center gap-2 text-[16px] leading-6 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70"
            >
              <span className="min-w-0 break-words">x.com/mateusz_b9</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>

          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[var(--body)] whitespace-nowrap">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/mateusz-byrtus-256021156"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 md:mt-0 inline-flex items-center gap-2 text-[16px] leading-6 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70"
            >
              <span className="min-w-0 break-words">linkedin.com/in/mateusz-byrtus-256021156</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>

          <div className="md:grid md:grid-cols-[88px_1fr] md:items-baseline md:gap-x-4">
            <span className="text-[16px] font-bold text-[var(--body)] whitespace-nowrap">GitHub:</span>
            <a
              href="https://github.com/mateusz0909"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 md:mt-0 inline-flex items-center gap-2 text-[16px] leading-6 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70"
            >
              <span className="min-w-0 break-words">github.com/mateusz0909</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <div className="py-8 border-t border-[var(--footer-border)] mt-8">
        <p className="text-center text-[16px] leading-7 text-[var(--heading)]">© {currentYear} · Mateusz Byrtus · Warsaw, Poland</p>
      </div>
    </main>
  )
}
