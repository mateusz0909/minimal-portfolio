import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Star } from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { RevealInit } from '@/components/RevealInit'
import { AppMark } from '@/components/AppMark'
import { getVisual } from '@/lib/projectVisuals'
import { getProject, isLive, type ProjectSlug } from '@/app/data/projects'
import portrait from '@/public/profile_photo.png'

/* ---------- work (linked to real /projects/[slug] case studies) ---------- */
type Work = {
  slug: ProjectSlug
  title: string
  year: string
  category: string
  desc: string
}

const work: Work[] = [
  {
    slug: 'wake-the-book',
    title: 'WakeTheBook',
    year: '2026',
    category: 'Tool',
    desc: 'EPUB and PDF files into narrated audiobooks — chapter review, voice profiles, resumable rendering.',
  },
  {
    slug: 'aura-season',
    title: 'AuraSeason',
    year: '2026',
    category: 'iOS App',
    desc: 'A native iOS utility visualising seasons, years, and personal milestones across widgets and Live Activities.',
  },
  {
    slug: 'dopoki-zycie-trwa',
    title: 'Dopóki Życie Trwa',
    year: '2025',
    category: 'Editorial',
    desc: 'A dark editorial magazine on discipline and stoicism — WebGL shaders, cinematic scroll, built solo in two weeks.',
  },
  {
    slug: 'luma-breathwork',
    title: 'Luma Breathwork',
    year: '2024–26',
    category: 'iOS + Watch',
    desc: 'Breathwork for iPhone and Apple Watch — free forever, no ads, supported by donations. Android port in progress.',
  },
  {
    slug: 'daily-word',
    title: 'Daily Word',
    year: '2026',
    category: 'Web + AI',
    desc: 'Polish daily readings — scraping, AI summaries, generated visuals and newsletter delivery in one calm experience.',
  },
  {
    slug: 'lemmi-studio',
    title: 'Lemmi Studio',
    year: '2025',
    category: 'SaaS',
    desc: 'Turns raw app screenshots into ready-to-use App Store visuals, marketing copy and landing pages.',
  },
  {
    slug: 'feeling-journal',
    title: 'Feeling Journal',
    year: '2025',
    category: 'iOS App',
    desc: 'Emotion tracking for iOS with weekly AI summaries — idea to App Store in two weeks.',
  },
  {
    slug: 'calm-now',
    title: 'Calm Now',
    year: '2025',
    category: 'iOS App',
    desc: 'A minimal box-breathing experience built in one week to explore focused UI and StoreKit paywalls.',
  },
  {
    slug: 'brain-plus',
    title: 'Brain+',
    year: '2026',
    category: 'AI',
    desc: 'Multi-agent Jira copilot for product operations, research, and grounded execution.',
  },
]

/* ---------- skills ---------- */
const skillGroups = [
  { label: 'Languages', items: ['Python', 'Swift', 'Kotlin', 'SQL', 'JavaScript'] },
  {
    label: 'Frontend & Backend',
    items: ['React', 'React Native', 'Jetpack Compose', 'Next.js', 'Express.js', 'FastAPI', 'Flask', 'Firebase', 'Supabase'],
  },
  { label: 'AI & Data', items: ['Claude Code', 'Anthropic Claude', 'LangGraph', 'OpenAI', 'Gemini', 'Perplexity', 'BigQuery'] },
  { label: 'Automation', items: ['n8n.io', 'Make.com', 'Postman'] },
  { label: 'Development', items: ['VSCode', 'Xcode', 'Cursor', 'Git', 'GitHub', 'Docker'] },
  { label: 'Product & Design', items: ['Figma', 'JIRA', 'Notion', 'Hotjar'] },
]

const contactRows = [
  { label: 'Email', value: 'mateusz.byrtus@icloud.com', href: 'mailto:mateusz.byrtus@icloud.com' },
  { label: 'X.com', value: 'x.com/mateusz_b9', href: 'https://x.com/mateusz_b9' },
  { label: 'LinkedIn', value: '/mateusz-byrtus', href: 'https://linkedin.com/in/mateusz-byrtus-256021156' },
  { label: 'GitHub', value: 'github.com/mateusz0909', href: 'https://github.com/mateusz0909' },
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
            Senior Product Owner / Builder
          </div>
          <div data-reveal className="hero-grid" style={{ animationDelay: '.28s' }}>
            <div>
              <div className="now-label">
                <span className="live-dot" aria-hidden />
                Now · September 2026
              </div>
              <ul className="now-list">
                <li>Porting Luma to Android (Jetpack Compose), built agent-first with Claude Code</li>
                <li>Shaping an AI-first PO/BA playbook at Godel</li>
              </ul>
            </div>
            <div>
              <p className="prose prose--strong">
                I turn product ideas into shipped software — fast. Senior Product Owner / BA at Godel Technologies,
                building AI-first delivery workflows with Claude Code and agents.
              </p>
              <p className="prose prose--strong">
                After hours I ship small native apps and AI tools that reach real users.
              </p>
            </div>
          </div>
        </section>

        {/* MOTIVATION + photo */}
        <section id="about" className="section">
          <div data-reveal className="about-grid">
            <div>
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
            <div className="portrait">
              <Image src={portrait} alt="Mateusz Byrtus" sizes="300px" placeholder="blur" />
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
          <div data-reveal className="work-grid">
            {work.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="work-card">
                <div className="work-thumb">
                  <div className="bd" style={getVisual(p.slug).bd} />
                  <AppMark slug={p.slug} size={56} />
                </div>
                <div>
                  <div className="work-head">
                    <span className="work-title">{p.title}</span>
                    <span className="work-year">
                      {isLive(getProject(p.slug)!) && <span className="live-dot" title="Live" />}
                      {p.year}
                    </span>
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
            <div className="stars" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={14} strokeWidth={1.5} fill="currentColor" aria-hidden />
              ))}
            </div>
            <blockquote className="quote">
              &ldquo;Incredible app. Simple, clean, and gets straight to the point. The Apple Watch integration is
              flawless and it actually helps me calm down during busy workdays.&rdquo;
            </blockquote>
            <div className="quote-source">Luma Breathwork · App Store review</div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div data-reveal className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label}>
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
                <span className="contact-row-value">
                  {row.value}
                  {!row.href.startsWith('mailto:') && <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />}
                </span>
              </a>
            ))}
          </div>
          <div className="contact-copy">© 2026 Mateusz Byrtus — Warsaw, Poland</div>
        </section>
      </main>
    </div>
  )
}
