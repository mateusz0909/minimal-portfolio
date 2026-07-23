import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { RevealInit } from '@/components/RevealInit'

/* ---------- work (linked to real /projects/[slug] case studies) ---------- */
type Backdrop = { bd: CSSProperties; shape: CSSProperties }

type Work = {
  slug: string
  title: string
  year: string
  category: string
  desc: string
  backdrop: Backdrop
}

const work: Work[] = [
  {
    slug: 'wake-the-book',
    title: 'WakeTheBook',
    year: '2026',
    category: 'Tool',
    desc: 'EPUB and PDF files into narrated audiobooks — chapter review, voice profiles, resumable rendering.',
    backdrop: {
      bd: {
        backgroundImage: 'radial-gradient(rgb(var(--ink) /.13) 1.1px,transparent 1.3px)',
        backgroundSize: '13px 13px',
      },
      shape: { width: 86, height: 86, borderRadius: '50%' },
    },
  },
  {
    slug: 'aura-season',
    title: 'AuraSeason',
    year: '2026',
    category: 'iOS App',
    desc: 'A native iOS utility visualising seasons, years, and personal milestones across widgets and Live Activities.',
    backdrop: {
      bd: { background: 'repeating-radial-gradient(circle at 50% 50%,rgb(var(--ink) /.12) 0 1px,transparent 1px 15px)' },
      shape: { width: 14, height: 14, borderRadius: '50%', background: 'rgb(var(--ink) /.34)', border: 'none' },
    },
  },
  {
    slug: 'dopoki-zycie-trwa',
    title: 'Dopóki Życie Trwa',
    year: '2025',
    category: 'Editorial',
    desc: 'A dark editorial magazine on discipline and stoicism — WebGL shaders, cinematic scroll, built solo in two weeks.',
    backdrop: {
      bd: { background: 'repeating-linear-gradient(45deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 13px)' },
      shape: { width: 76, height: 76, transform: 'rotate(45deg)' },
    },
  },
  {
    slug: 'luma-breathwork',
    title: 'Luma Breathwork',
    year: '2024–26',
    category: 'iOS + Watch',
    desc: 'A breathwork app for iPhone and Apple Watch with Health integrations, richer stats, and stronger haptics.',
    backdrop: {
      bd: {
        backgroundImage:
          'linear-gradient(rgb(var(--ink) /.09) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--ink) /.09) 1px,transparent 1px)',
        backgroundSize: '17px 17px',
      },
      shape: { width: 90, height: 90, borderRadius: '50%' },
    },
  },
  {
    slug: 'daily-word',
    title: 'Daily Word',
    year: '2026',
    category: 'Web + AI',
    desc: 'Polish daily readings — scraping, AI summaries, generated visuals and newsletter delivery in one calm experience.',
    backdrop: {
      bd: { background: 'repeating-linear-gradient(0deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 12px)' },
      shape: { width: 82, height: 82 },
    },
  },
  {
    slug: 'lemmi-studio',
    title: 'Lemmi Studio',
    year: '2025',
    category: 'SaaS',
    desc: 'Turns raw app screenshots into ready-to-use App Store visuals, marketing copy and landing pages.',
    backdrop: {
      bd: {
        background:
          'repeating-linear-gradient(45deg,rgb(var(--ink) /.07) 0 1px,transparent 1px 11px),repeating-linear-gradient(-45deg,rgb(var(--ink) /.07) 0 1px,transparent 1px 11px)',
      },
      shape: { width: 74, height: 74, transform: 'rotate(45deg)' },
    },
  },
  {
    slug: 'feeling-journal',
    title: 'Feeling Journal',
    year: '2025',
    category: 'iOS App',
    desc: 'Emotion tracking for iOS with weekly AI summaries — idea to App Store in one week.',
    backdrop: {
      bd: { background: 'repeating-linear-gradient(90deg,rgb(var(--ink) /.09) 0 1px,transparent 1px 13px)' },
      shape: { width: 86, height: 86, borderRadius: '50%' },
    },
  },
  {
    slug: 'calm-now',
    title: 'Calm Now',
    year: '2025',
    category: 'iOS App',
    desc: 'A minimal box-breathing experience built in two weeks to explore focused UI and StoreKit paywalls.',
    backdrop: {
      bd: { background: 'radial-gradient(circle at 50% 45%,rgb(var(--ink) /.10),transparent 62%)' },
      shape: { width: 96, height: 96, borderRadius: '50%', border: '1px solid rgb(var(--ink) /.34)' },
    },
  },
  {
    slug: 'brain-plus',
    title: 'Brain+',
    year: '2026',
    category: 'AI',
    desc: 'Multi-agent Jira copilot for product operations, research, and grounded execution.',
    backdrop: {
      bd: {
        backgroundImage:
          'linear-gradient(rgb(var(--ink) /.07) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--ink) /.07) 1px,transparent 1px)',
        backgroundSize: '11px 11px',
      },
      shape: { width: 80, height: 80, transform: 'rotate(45deg)' },
    },
  },
]

/* ---------- skills ---------- */
const skillGroups = [
  { label: 'Languages', items: ['Python', 'Swift', 'SQL', 'JavaScript'] },
  {
    label: 'Frontend & Backend',
    items: ['React', 'React Native', 'Next.js', 'Express.js', 'FastAPI', 'Flask', 'Firebase', 'Supabase'],
  },
  { label: 'AI & Data', items: ['OpenAI', 'Gemini', 'Anthropic Claude', 'Perplexity', 'BigQuery'] },
  { label: 'Automation', items: ['n8n.io', 'Make.com', 'Postman'] },
  { label: 'Development', items: ['VSCode', 'Xcode', 'Cursor', 'Git', 'GitHub', 'Docker'] },
  { label: 'Product & Design', items: ['Figma', 'JIRA', 'Notion', 'Hotjar'] },
]

const contactRows = [
  { label: 'Email', value: 'mateusz.byrtus@icloud.com', href: 'mailto:mateusz.byrtus@icloud.com' },
  { label: 'X.com', value: 'x.com/mateusz_b9 ↗', href: 'https://x.com/mateusz_b9' },
  { label: 'LinkedIn', value: '/mateusz-byrtus ↗', href: 'https://linkedin.com/in/mateusz-byrtus-256021156' },
  { label: 'GitHub', value: 'github.com/mateusz0909 ↗', href: 'https://github.com/mateusz0909' },
]

const count = String(work.length).padStart(2, '0')

export default function Home() {
  return (
    <div className="site">
      <RevealInit />
      <Sidebar mode="home" />

      {/* MAIN */}
      <main className="main">
        {/* HERO */}
        <section id="top" className="hero">
          <h1 data-reveal className="hero-title" style={{ animationDelay: '.05s' }}>
            Mateusz
            <br />
            Byrtus
          </h1>
          <div data-reveal className="hero-role" style={{ animationDelay: '.16s' }}>
            Product Builder / Product Owner
          </div>
          <div data-reveal className="hero-grid" style={{ animationDelay: '.28s' }}>
            <div>
              <p className="prose">
                For opportunities and collaborations, reach me at
                <br />
                <a href="mailto:mateusz.byrtus@icloud.com">mateusz.byrtus@icloud.com</a>
              </p>
            </div>
            <div>
              <div className="inline-label">
                <span className="eyebrow">About Me</span>
                <span className="rule" />
              </div>
              <p className="prose prose--strong">
                By day, Product Owner at Assembly Global. By night, I make small, AI-powered tools and apps — bridging
                product strategy and rapid engineering.
              </p>
              <p className="prose prose--strong">
                In the past year I&apos;ve shipped native iOS apps, a full-stack SaaS product, and AI-powered publishing
                tools. Luma Breathwork reached a 13.3% App Store conversion rate, AuraSeason is live on the App Store,
                and Daily Word turns a daily ritual into a full pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* MOTIVATION + photo */}
        <section id="about" className="section">
          <div className="label-row">
            <span className="eyebrow">Motivation</span>
            <span className="rule" />
          </div>
          <div className="about-grid">
            <div data-reveal>
              <p className="lead">I&apos;m a builder with a growing focus on where product strategy meets craft.</p>
              <p className="prose">
                I&apos;ve found that shipping real things — small, focused, and fast — is what teaches me the most. So I
                keep the loop tight: spot a real problem, design a lean MVP, build with a modern stack, and iterate on
                data.
              </p>
              <p className="prose">
                Outside of work I create origami, play basketball, tennis, and chess — the same quiet obsession with
                structure and play, in a different medium.
              </p>
              <div className="stats">
                <div>
                  <div className="stat-num">09</div>
                  <div className="stat-label">Shipped</div>
                </div>
                <div>
                  <div className="stat-num">13.3%</div>
                  <div className="stat-label">Conversion</div>
                </div>
                <div>
                  <div className="stat-num">2wk</div>
                  <div className="stat-label">Idea → Ship</div>
                </div>
              </div>
            </div>
            <div data-reveal className="portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile_photo.png" alt="Mateusz Byrtus" />
              <div className="portrait-caption">Mateusz Byrtus — Warsaw</div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="label-row" style={{ marginBottom: 52 }}>
            <span className="eyebrow">Selected Work</span>
            <span className="rule" />
            <span className="rule-count">{count}</span>
          </div>
          <div className="work-grid">
            {work.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} data-reveal className="work-card">
                <div className="work-thumb">
                  <div className="bd" style={p.backdrop.bd} />
                  <div className="shape" style={p.backdrop.shape} />
                </div>
                <div>
                  <div className="work-head">
                    <span className="work-title">{p.title}</span>
                    <span className="work-year">{p.year}</span>
                  </div>
                  <div className="work-cat">{p.category}</div>
                  <p className="work-desc">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div data-reveal className="testimonial">
            <div className="stars">★★★★★</div>
            <blockquote className="quote">
              &ldquo;Incredible app. Simple, clean, and gets straight to the point. The Apple Watch integration is
              flawless and it actually helps me calm down during busy workdays.&rdquo;
            </blockquote>
            <div className="quote-source">App Store Review — Luma Breathwork User</div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="label-row" style={{ marginBottom: 52 }}>
            <span className="eyebrow">Skills</span>
            <span className="rule" />
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label} data-reveal>
                <div className="skill-label">{group.label}</div>
                <div className="chips">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" style={{ paddingTop: 96, paddingBottom: 60 }}>
          <div className="label-row" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Contact</span>
            <span className="rule" />
          </div>
          <h2 data-reveal className="contact-title">
            Let&apos;s build
            <br />
            something good
          </h2>
          <div className="contact-list">
            {contactRows.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="contact-row"
              >
                <span className="contact-row-label">{row.label}</span>
                <span className="contact-row-value">{row.value}</span>
              </a>
            ))}
          </div>
          <div className="contact-copy">© 2026 Mateusz Byrtus — Warsaw, Poland</div>
        </section>
      </main>
    </div>
  )
}
