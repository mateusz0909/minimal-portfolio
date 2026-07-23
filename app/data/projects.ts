import type { StaticImageData } from 'next/image'
import calmNowImg from '@/public/calmNow.png'
import dztImg from '@/public/dzt-icon.png'
import feelingJournalImg from '@/public/feelingJournal.jpeg'
import lemmiImg from '@/public/lemmi.png'
import lumaImg from '@/public/luma.png'

export type ProjectSlug =
  | 'wake-the-book'
  | 'brain-plus'
  | 'dopoki-zycie-trwa'
  | 'daily-word'
  | 'aura-season'
  | 'lemmi-studio'
  | 'luma-breathwork'
  | 'feeling-journal'
  | 'calm-now'

export type ProjectRoute = `/projects/${ProjectSlug}`

export type Project = {
  slug: ProjectSlug
  title: string
  subtitle: string
  timeline: string
  status: {
    label: string
    color: string
  }
  description: string
  technologies: string[]
  metrics?: { label: string; value: string }[]
  sections: {
    heading: string
    body?: string
    bullets?: string[]
  }[]
  links?: { label: string; href: string; external?: boolean }[]
  video?: string
  logo: StaticImageData | string
  cover?: StaticImageData | string
}

export const projects: Project[] = [
  {
    slug: 'wake-the-book',
    title: 'WakeTheBook',
    subtitle: 'Local-first audiobook studio for EPUB and PDF files',
    timeline: '2026 · open-source personal project',
    status: {
      label: 'Open-source personal project',
      color: '#65D898',
    },
    description:
      'A local-first full-stack tool that turns EPUB and PDF books into narrated audiobooks with chapter review, voice profiles, and resumable rendering. Runs local TTS models so source files and audio generation stay on-device.',
    technologies: ['FastAPI', 'React 19', 'TypeScript', 'SQLite', 'Tailwind CSS 4', 'XTTS v2', 'VoxCPM2', 'PyMuPDF'],
    metrics: [
      { label: 'Rendering model', value: 'Local-first, no cloud audio generation' },
      { label: 'Workflow', value: '5-step import → extract → review → render' },
      { label: 'Voice stack', value: 'XTTS v2 + VoxCPM2' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'WakeTheBook was built as a local audiobook production tool, not just a file converter. It gives users one guided flow to import a book, inspect extracted chapters, adjust the structure, choose a voice, and render final audio without sending source files to external services.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'Supports EPUB and PDF import with extraction, chapter detection, and cleanup before audio rendering.',
          'Lets the user review, edit, split, merge, or skip chapters before committing to the final render.',
          'Uses local voice workflows with XTTS voice cloning and VoxCPM2 support instead of a cloud TTS dependency.',
          'Handles rendering as resumable chapter jobs, so failures do not force a full restart.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'FastAPI backend orchestrates ingest, extraction, analysis, voice handling, render jobs, and filesystem-backed project storage.',
          'React + TypeScript frontend wraps the pipeline in a 5-step wizard and output view for non-technical use.',
          'SQLite stores project state while generated files live under per-project directories for easy inspection and recovery.',
          'The app keeps the whole processing loop local, including voice previews, chapter audio, manifests, and logs.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Covers file ingest, chapter cleanup, voice selection, local inference, and long-running render jobs in one product flow.',
          'Runs without cloud audio generation, keeping source files local and reducing operating cost.',
          'Shows ownership across product flow, backend orchestration, frontend job UX, and local storage design.',
        ],
      },
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/mateusz0909/WakeTheBook', external: true },
    ],
    logo: '/wakethebook.svg',
    cover: '/wakethebook-cover.svg',
  },
  {
    slug: 'brain-plus',
    title: 'Brain+',
    subtitle: 'Multi-agent Jira copilot for product operations, research, and grounded execution',
    timeline: '2026 · active full-stack AI product',
    status: {
      label: 'Active AI product',
      color: '#65D898',
    },
    description:
      'A multi-agent Jira copilot built for real product operations work: backlog refinement, issue creation, document drafting, project memory, RAG over internal docs, live research, and browser-side capture through a Chrome extension.',
    technologies: ['FastAPI', 'LangGraph', 'React 18', 'TypeScript', 'Chrome Extension MV3', 'Gemini', 'ChromaDB', 'Pydantic'],
    metrics: [
      { label: 'Interaction surfaces', value: 'Web app, Chrome extension, and streaming API' },
      { label: 'Agent roles', value: 'Router, Jira, RAG, Research, Notion, and Responder' },
      { label: 'Grounding model', value: 'Project memory + local vector retrieval' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Brain+ combines Jira execution, grounded retrieval, live research, and project memory for backlog work, discovery tasks, and document drafting.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'LangGraph routes work between specialized agents instead of relying on one giant prompt, separating Jira actions, RAG lookup, research, and response synthesis.',
          'The product ships across multiple surfaces: a React web app for deep work, a Chrome extension overlay for in-context capture, and a streaming backend for longer-running flows.',
          'Project memory and a local vector store ground answers in prior context and uploaded documents.',
          'Browser-side capture makes the assistant usable inside real workflows by pulling page context, images, and voice input directly from the current tab.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'FastAPI exposes the streaming API layer while LangGraph coordinates routing, tool execution, and agent-to-agent handoffs.',
          'React 18 + TypeScript power the main product UI, including project-aware chat, markdown rendering, document handling, and settings flows.',
          'The Chrome extension uses Manifest V3, Shadow DOM isolation, storage sync/local, and rich capture inputs to stay useful on any page.',
          'ChromaDB and project memory provide the retrieval layer, while Gemini handles reasoning and search-grounded research workflows.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Combines web app, Chrome extension, and streaming API around one agent graph.',
          'Separates Jira actions, retrieval, research, and response generation into clear agent roles.',
          'Shows full-stack AI product work across orchestration, UX, retrieval, and integrations.',
        ],
      },
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/mateusz0909/product-brain-plus', external: true },
    ],
    logo: '/brain-plus.svg',
    cover: '/brain-plus-cover.svg',
  },
  {
    slug: 'dopoki-zycie-trwa',
    title: 'Dopóki Życie Trwa',
    subtitle: 'Monastic noir digital magazine about discipline, stoicism, and the body',
    timeline: 'November – December 2025 (2 weeks)',
    status: {
      label: 'Live personal project',
      color: '#65D898',
    },
    description:
      'A brutalist editorial platform for essays on carnivore diet, cold exposure, endurance, and stoic philosophy. Includes CMS, WebGL shaders, scroll animation, newsletter, and SEO, built solo in two weeks.',
    technologies: ['Next.js 16', 'React 19', 'Sanity CMS', 'Three.js / R3F', 'GSAP', 'Tailwind CSS 4', 'Resend', 'Vercel'],
    metrics: [
      { label: 'Build time', value: '2 weeks (solo, nights & weekends)' },
      { label: 'Features shipped', value: '30+' },
      { label: 'Content categories', value: '3 pillars' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Dopóki Życie Trwa ("While Life Lasts") is an editorial site with articles organized around three pillars: CIAŁO (Body), HART (Grit), and DUCH (Spirit). The build includes a custom dark visual identity, desaturated imagery, cinematic typography, and a WebGL-driven hero.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'WebGL shader hero: Custom GLSL fragment/vertex shaders via React Three Fiber creating an ice-like, breathing texture with center glow, vignette, and hover-reactive distortion.',
          'Cinematic scroll experience: GSAP ScrollTrigger–powered parallax dispersal — each typographic line animates independently with blur, scale, and directional movement.',
          'Headless CMS editorial system: Sanity Studio with custom schemas for articles, categories, authors, and block content — including monologue blocks, protocol boxes, and data tables.',
          'Newsletter & audience building: Email capture via Resend API with Zod validation, inline and footer form variants, and a dedicated landing page.',
          'Full SEO & content distribution: Dynamic sitemap, RSS feed, JSON-LD structured data, Open Graph, robots.txt, and Google Analytics integration.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'Next.js 16 + React 19 with App Router, server components, ISR (60s revalidation), and dynamic draft preview mode via draftMode().',
          'Three.js / React Three Fiber for the hero section — custom GLSL shaders with vertex displacement, UV distortion, desaturation, cold tinting, and pulsating center glow.',
          'GSAP ScrollTrigger orchestrating pinned hero parallax, manifesto text reveal, image parallax, and horizontal marquee for category titles.',
          'Sanity CMS with custom Portable Text components (monologue, protocol box, data table), markdown alternative input, image hotspot cropping, and YAML-based article import scripts.',
          'Resend for transactional newsletter emails with server-side API route and client-side optimistic UI.',
          'Tailwind CSS 4 with custom design tokens: onyx, bone, blood, steel, charcoal — enforcing the monastic noir visual language across every component.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Full editorial platform delivered in two weeks, solo, with 30+ shipped features.',
          'Custom WebGL hero renders at 60fps with smooth pointer-reactive distortion and cinematic scroll dispersal.',
          'Content pipeline from YAML → Sanity import script → Studio → live article with SEO, RSS, and newsletter in a single workflow.',
          'Lighthouse performance optimized: dynamic imports for Three.js, lazy-loaded images, font optimization (Oswald + Montserrat via next/font), and ISR caching.',
        ],
      },
    ],
    links: [
      { label: 'Visit dopokizycietrwa.pl', href: 'https://dopokizycietrwa.pl', external: true },
    ],
    logo: dztImg,
  },
  {
    slug: 'daily-word',
    title: 'Daily Word',
    subtitle: 'Polish daily readings product powered by scraping, AI, and content automation',
    timeline: '2026 · live web product',
    status: {
      label: 'Live personal project',
      color: '#65D898',
    },
    description:
      'A Polish daily liturgy site that assembles readings, video commentary, reflections, AI summaries, AI-generated visuals, and newsletter delivery with caching and fallback logic.',
    technologies: ['Next.js 16', 'React 19', 'Supabase', 'Gemini API', 'Groq', 'Cheerio', 'Resend', 'Vercel Cron'],
    metrics: [
      { label: 'Delivery model', value: 'Daily cron + on-demand backfill' },
      { label: 'AI pipeline', value: 'Transcript, video, and gospel-text fallbacks' },
      { label: 'Content flow', value: 'Scrape, summarise, cache, illustrate, send' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Daily Word assembles the day\'s Catholic readings, commentary, reflection, AI summary, and illustration into one Polish page instead of spreading the routine across websites, YouTube, and email.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'Daily content pipeline: readings and reflections are scraped from external sources, YouTube commentary is matched by date, and the full page is assembled automatically.',
          'AI fallback pipeline: summaries, commentary timestamps, hero copy, and gospel illustrations use transcript, video, and text fallback modes.',
          'Cache repair: cache hits still trigger missing-field backfills when upstream content appears late.',
          'Distribution included: a daily newsletter is sent only when the right content is ready, using an idempotent send log to avoid duplicates.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'Next.js App Router with async server components, SSR, and route-level revalidation for both today\'s page and recent history.',
          'Supabase used as the content cache, subscriber store, send log, and image storage layer.',
          'Summary generation cascades through transcript mode, Gemini video mode, and gospel-text fallback, with deterministic transcript parsing for commentary timestamps.',
          'Vercel Cron pre-fills the cache every morning, but page visits can also safely complete any missing parts of the pipeline.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Turned a manual daily routine into a repeatable digital product with automation across content ingestion, AI enrichment, and delivery.',
          'Created a full-stack content system that stays useful even when upstream sources are incomplete or late.',
          'Added AI-generated visuals and newsletter distribution while keeping the reading page focused.',
        ],
      },
    ],
    links: [
      { label: 'Visit slowo.dopokizycietrwa.pl', href: 'https://slowo.dopokizycietrwa.pl/', external: true },
    ],
    logo: '/dailyWord.svg',
  },
  {
    slug: 'aura-season',
    title: 'AuraSeason',
    subtitle: 'Native iOS utility that makes the passage of time tangible across widgets and live surfaces',
    timeline: '2026 · live on App Store',
    status: {
      label: 'Live on App Store',
      color: '#65D898',
    },
    description:
      'An iPhone time-progress utility for seasons, year, month, day, and custom milestones. Ships widgets, Live Activities, custom events, and a RevenueCat one-time Pro unlock.',
    technologies: ['SwiftUI', 'SwiftData', 'WidgetKit', 'ActivityKit', 'RevenueCat', 'App Intents', 'Core Location'],
    metrics: [
      { label: 'Product surfaces', value: 'Widgets, Live Activities, and in-app dashboard' },
      { label: 'Monetisation', value: 'Free tier + one-time Pro unlock' },
      { label: 'Platform', value: 'Native iPhone utility app' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'AuraSeason shows progress through a season, year, month, day, or custom event across the app, widgets, and Live Activities.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'Ambient utility product: users can check time progress through widgets, Live Activities, and a dashboard instead of actively opening a productivity app.',
          'Custom events and milestones: vacations, birthdays, and personal deadlines can be tracked alongside seasonal progress.',
          'Clear business model: free seasonal tracking plus one-time Pro unlock for deeper tracking and customisation.',
          'Seasonal visual system: colors and labels adapt to the current season across every surface.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'Built in SwiftUI with a modular architecture spanning dashboard views, widget extensions, Live Activities, settings, paywall, and event management.',
          'WidgetKit and ActivityKit power persistent time-progress surfaces outside the main app, including lock-screen and home-screen experiences.',
          'SwiftData stores custom events locally, while RevenueCat manages the Pro entitlement layer.',
          'Astronomical and daylight calculations add depth to the product without turning it into a data-heavy utility.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Shipped a native iOS utility with app, widget, Live Activity, settings, paywall, and event-management surfaces.',
          'Combined Apple platform features with a one-time purchase model for a small, maintainable product.',
          'Kept the product scope narrow enough to support ongoing iteration after release.',
        ],
      },
    ],
    links: [
      {
        label: 'View on App Store',
        href: 'https://apps.apple.com/us/app/auraseason-time-progress/id6759496828',
        external: true,
      },
    ],
    logo: '/auraSeason.png',
    cover: '/auraSeason.png',
  },
  {
    slug: 'lemmi-studio',
    title: 'Lemmi Studio',
    subtitle: 'AI-powered marketing kit for fast-moving app teams',
    timeline: 'September – October 2025 (1 month)',
    status: {
      label: 'Live production SaaS',
      color: '#65D898',
    },
    description:
      'Turns raw app screenshots into App Store image sets, landing-page files, and launch copy. Built solo with auth, billing, AI generation, and an editor.',
    technologies: ['Node.js', 'Express', 'React', 'Supabase', 'Stripe', 'Gemini API'],
    metrics: [
      { label: 'Build time', value: '1 month (solo, nights & weekends)' },
      { label: 'Features shipped', value: '50+' },
      { label: 'Languages', value: '7+ supported' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Lemmi automates the “last mile” of an app launch. Upload screenshots and product notes → receive fully composed visuals, copy, and a launch-ready landing page in under 15 minutes.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'AI-powered assets: device-framed screenshots, gradients, and typography rendered automatically.',
          'Multi-language copy: App Store descriptions, keywords, and promo text tuned for 7+ languages.',
          'Landing page builder: deployable HTML/CSS/JS package that mirrors the generated assets.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'Node.js/Express + Prisma backed by Supabase Postgres for auth, storage, and data.',
          'Custom React canvas editor with GPU-accelerated transforms for 60fps drag/drop.',
          'Stripe billing and credit tracking with optimistic UI updates and webhook sync.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Full SaaS delivered in one month with auth, billing, editor, generation, and export flows.',
          'High-res export pipeline renders ten 1200×2600 images in under eight seconds.',
          'Pricing tiers tailored to indie budgets (Free / $19 / $49) with clear upgrade paths.',
        ],
      },
    ],
    links: [
      { label: 'Visit lemmi.studio', href: 'https://lemmi.studio', external: true },
    ],
    logo: lemmiImg,
    cover: lemmiImg,
  },
  {
    slug: 'luma-breathwork',
    title: 'Luma Breathwork',
    subtitle: 'Guided breathwork app for iPhone and Apple Watch',
    timeline: '2024 – now',
    status: {
      label: 'Live on App Store',
      color: '#65D898',
    },
    description:
      'A breathwork product built around ritual-like guided sessions, Apple Watch support, Health integrations, and post-launch iteration. Reached a 13.3% App Store conversion rate and keeps evolving through regular feature updates.',
    technologies: ['Swift', 'SwiftUI', 'watchOS', 'HealthKit', 'WatchConnectivity', 'SwiftData', 'Swift Charts', 'WhatsNewKit'],
    metrics: [
      { label: 'Conversion rate', value: '13.3%' },
      { label: 'Platforms', value: 'iPhone + Apple Watch' },
      { label: 'Status', value: 'Live product with ongoing updates' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Luma combines guided session structure, ambient audio, tactile cues, Apple Watch mirroring, heart-rate visibility, and progress tracking.',
      },
      {
        heading: 'Highlights',
        bullets: [
          'Breathing sessions are structured as a full ritual, not just an inhale-exhale loop, with dedicated phases for breathing, retention, recovery, meditation, and session end.',
          'Recent updates expanded the product beyond the phone with Apple Watch session support, widget surfaces, more precise haptics, and clearer guidance controls.',
          'Users can review progress through charts, streaks, and session history instead of relying only on motivation and memory.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'SwiftUI app with a paired watchOS experience, using WatchConnectivity and HealthKit workout mirroring to keep phone and watch in sync during sessions.',
          'HealthKit integration supports mindful-session syncing and heart-rate aware experiences, while SwiftData stores settings, sessions, and streak-related progress.',
          'Swift Charts power the stats layer, and WhatsNewKit is used to communicate product updates inside the app after each release.',
        ],
      },
      {
        heading: 'Impact',
        bullets: [
          'Achieved a 13.3% App Store conversion rate, outperforming typical indie wellness app benchmarks.',
          'Expanded after launch with watch support, richer stats, more precise haptics, and clearer session guidance.',
          'Shows not just launch speed, but continuous improvement of a shipped product through focused updates.',
        ],
      },
    ],
    links: [
      {
        label: 'View on App Store',
        href: 'https://apps.apple.com/pl/app/luma-breathwork-meditation/id6737122722',
        external: true,
      },
    ],
    video: '/luma-video.mp4',
    logo: lumaImg,
    cover: lumaImg,
  },
  {
    slug: 'feeling-journal',
    title: 'Feeling Journal',
    subtitle: 'Emotion log with AI-generated weekly reflections',
    timeline: '2025 · concept to launch in 2 weeks',
    status: {
      label: 'Live on App Store',
      color: '#65D898',
    },
    description:
      'Built a modern, privacy-first journal that analyses the thought–emotion–behaviour cycle and produces calming weekly summaries.',
    technologies: ['SwiftUI', 'SwiftData', 'CloudKit', 'Gemini API', 'Firebase'],
    metrics: [
      { label: 'Build time', value: '2 weeks (evenings & weekends)' },
      { label: 'Platform', value: 'iOS' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Feeling Journal captures quick emotion entries and turns them into insights. Users get thoughtful prompts, trends, and experiments to try in the week ahead.',
      },
      {
        heading: 'Highlights',
        bullets: [
          'CloudKit sync keeps entries in step across devices while staying private.',
          'Gemini API generates weekly recaps and suggestions.',
          'SwiftUI interface keeps logging lightweight so users return daily.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'MVVM structure with SwiftData for fast local reads and writes.',
          'Background tasks generate summaries without blocking the UI.',
          'Firebase analytics to understand retention and drop-off moments.',
        ],
      },
      {
        heading: 'Outcome',
        bullets: [
          'Shipped end-to-end in two weeks from idea to App Store approval.',
          'Protects user entry privacy using secure, anonymized API transit and local preprocessing.',
          'Left a SwiftUI and SwiftData base that can add iPad or macOS views later.',
        ],
      },
    ],
    links: [
      {
        label: 'View on App Store',
        href: 'https://apps.apple.com/pl/app/reflekto-feelings-journal/id6752426056',
        external: true,
      },
    ],
    logo: feelingJournalImg,
    cover: feelingJournalImg,
  },
  {
    slug: 'calm-now',
    title: 'Calm Now',
    subtitle: 'Rapidly prototyped breathing companion',
    timeline: '2025 · idea to App Store in 1 week',
    status: {
      label: 'Live on App Store',
      color: '#65D898',
    },
    description:
      'A minimalist breathing app created to test motion design, haptics, and StoreKit paywalls in record time.',
    technologies: ['SwiftUI', 'Haptics', 'AudioKit', 'Lottie'],
    metrics: [
      { label: 'Build time', value: '1 week (nights & weekends)' },
      { label: 'Focus', value: 'Rapid prototyping' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Calm Now offers focused box-breathing sessions with synced haptics and animation. Built for a fast App Store release and a reusable breathing-session engine.',
      },
      {
        heading: 'Highlights',
        bullets: [
          'Customisable breathing ratios with responsive visuals.',
          'Haptic feedback aligned to inhale / exhale cues.',
          'Session history and gentle reminders to keep the habit alive.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'SwiftUI + Lottie animations tuned for smooth 60fps loops.',
          'Audio layers for ambient focus without impacting battery life.',
          'Core Data for storing routines and keeping state offline.',
        ],
      },
      {
        heading: 'Outcome',
        bullets: [
          'Proved out a fast idea-to-App-Store workflow.',
          'Validated the calm, distraction-free direction in early user feedback.',
          'Reusable breathing engine now powers newer experiments.',
        ],
      },
    ],
    links: [
      {
        label: 'View on App Store',
        href: 'https://apps.apple.com/pl/app/calm-now/id6751507698',
        external: true,
      },
    ],
    logo: calmNowImg,
    cover: calmNowImg,
  },
]

export const projectMap = new Map(projects.map((project) => [project.slug, project]))

export function getProject(slug: string): Project | undefined {
  return projectMap.get(slug as ProjectSlug)
}

export function projectRoute(slug: ProjectSlug): ProjectRoute {
  return `/projects/${slug}` as ProjectRoute
}
