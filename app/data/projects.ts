import type { StaticImageData } from 'next/image'
import calmNowImg from '@/public/calmNow.png'
import dztImg from '@/public/dzt-icon.png'
import feelingJournalImg from '@/public/feelingJournal.jpeg'
import lemmiImg from '@/public/lemmi.png'
import lumaImg from '@/public/luma.png'

export type ProjectSlug =
  | 'wake-the-book'
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
      'A local-first full-stack tool that turns EPUB and PDF books into narrated audiobooks with chapter review, voice profiles, and resumable rendering. Built to show product thinking, AI workflow design, and practical TTS engineering without relying on cloud APIs.',
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
          'Shows end-to-end product thinking: file ingest, AI-assisted review, local inference, and UX around long-running jobs.',
          'Demonstrates a practical AI product that is useful on its own and publishable as an open-source portfolio piece.',
          'Positions the work as both a user-facing tool and a technically credible local AI pipeline.',
        ],
      },
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/mateusz0909/WakeTheBook', external: true },
    ],
    logo: '/wakethebook.svg',
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
      'A dark, brutalist editorial platform chronicling a personal journey through carnivore diet, cold exposure, ultra-endurance, and stoic philosophy. Full CMS, WebGL shaders, cinematic scroll animations, and newsletter — built solo in two weeks.',
    technologies: ['Next.js 16', 'React 19', 'Sanity CMS', 'Three.js / R3F', 'GSAP', 'Tailwind CSS 4', 'Resend', 'Vercel'],
    metrics: [
      { label: 'Build time', value: '2 weeks (solo, nights & weekends)' },
      { label: 'Features shipped', value: '30+' },
      { label: 'Content categories', value: '3 pillars' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Dopóki Życie Trwa ("While Life Lasts") is a monastic noir editorial magazine — a raw, maximalist record of an inner journey through physical discipline and spiritual depth. The site serves as a living archive of articles organized around three pillars: CIAŁO (Body), HART (Grit), and DUCH (Spirit). Built with a custom "monastic noir" visual identity — dark tones, desaturated imagery, cinematic typography, and WebGL-driven hero experience.',
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
          'Full editorial platform delivered in two weeks, solo, with 30+ features and a cohesive dark design system.',
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
      'A Polish daily liturgy experience that turns scattered readings, video commentary, reflection text, and AI-generated visuals into one calm daily ritual. Built end-to-end with scraping, caching, AI summarisation, newsletter delivery, and resilient fallback logic.',
    technologies: ['Next.js 16', 'React 19', 'Supabase', 'Gemini API', 'Groq', 'Cheerio', 'Resend', 'Vercel Cron'],
    metrics: [
      { label: 'Delivery model', value: 'Daily cron + on-demand backfill' },
      { label: 'AI pipeline', value: 'Transcript, video, and gospel-text fallbacks' },
      { label: 'Content flow', value: 'Scrape, summarise, cache, illustrate, send' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Daily Word was built to make a fragmented content journey feel effortless. Instead of forcing readers to jump between websites, YouTube, and newsletters, the product assembles the day\'s Catholic readings, commentary, reflection, AI summary, and illustration into one focused destination in Polish.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'Daily content pipeline: readings and reflections are scraped from external sources, YouTube commentary is matched by date, and the full page is assembled automatically.',
          'AI where it matters: summaries, commentary timestamps, hero copy, and gospel illustrations are generated with a multi-step fallback strategy instead of a single brittle prompt.',
          'Built for reliability: cache hits still trigger missing-field backfills, so the experience improves even when upstream content appears late.',
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
          'Extended the product beyond text by adding AI-generated visuals and newsletter distribution without breaking the calm reading experience.',
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
      'A time-progress utility for iPhone that helps people see the current season, year, month, day, and personal milestones at a glance. Built as a polished native iOS product with widgets, Live Activities, custom events, and a simple monetisation model.',
    technologies: ['SwiftUI', 'SwiftData', 'WidgetKit', 'ActivityKit', 'RevenueCat', 'App Intents', 'Core Location'],
    metrics: [
      { label: 'Product surfaces', value: 'Widgets, Live Activities, and in-app dashboard' },
      { label: 'Monetisation', value: 'Free tier + one-time Pro unlock' },
      { label: 'Platform', value: 'Native iPhone utility app' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'AuraSeason rethinks time tracking as a consumer product, not a calendar. The app turns invisible progress into something visual and ambient, showing how far you are through a season, year, month, day, or custom event with a premium iOS-native feel.',
      },
      {
        heading: 'Key Highlights',
        bullets: [
          'Ambient utility product: users can check time progress through widgets, Live Activities, and a dashboard instead of actively opening a productivity app.',
          'Custom events and milestones: vacations, birthdays, and personal deadlines can be tracked alongside seasonal progress.',
          'Clear business model: the free tier covers the seasonal experience, while Pro unlocks deeper tracking and customisation with a one-time purchase.',
          'Consistent visual system: the app adapts its presentation to the current season and keeps the product feeling intentional across every surface.',
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
          'Shipped a differentiated iOS utility with a clearer brand and stronger product positioning than a typical side-project timer app.',
          'Combined native Apple platform features with monetisation and visual polish in a way that supports long-term iteration.',
          'Created a product that says as much about taste and framing as it does about implementation.',
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
      'Transforms raw app screenshots into App Store visuals, landing pages, and copy in minutes. Built solo—auth, billing, AI generation, and editor included.',
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
          'Full SaaS delivered in one month with production-ready AI workflows.',
          'High-res export pipeline renders ten 1200×2600 images in under eight seconds.',
          'Pricing tiers tailored to indie budgets (Free / $19 / $49) with clear upgrade paths.',
        ],
      },
    ],
    links: [
      { label: 'Visit lemmi.studio', href: 'https://lemmi.studio', external: true },
    ],
    logo: lemmiImg,
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
        body: 'Luma was designed as a more immersive breathwork experience than the typical timer-based wellness app. The product combines guided session structure, ambient audio, tactile cues, and a calm visual system, then extends the experience through Apple Watch mirroring, heart-rate visibility, and deeper progress tracking.',
      },
      {
        heading: 'What stands out',
        bullets: [
          'Breathing sessions are structured as a full ritual, not just an inhale-exhale loop, with dedicated phases for breathing, retention, recovery, meditation, and session end.',
          'Recent updates expanded the product beyond the phone with Apple Watch session support, widget surfaces, stronger haptics, and clearer guidance controls.',
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
          'Converted at 13.3%, well above what I expected for an indie wellness app.',
          'Evolved from a launchable breathwork product into a more mature ecosystem with watch support, richer stats, and more polished session guidance.',
          'Shows not just launch speed, but the ability to keep improving a shipped product through focused updates.',
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
          'Gemini API crafts empathetic weekly recaps and suggestions.',
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
          'AI integration stays on-device where possible to protect entries.',
          'Set the foundation for cross-platform expansion.',
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
        body: 'Calm Now offers focused box-breathing sessions with synced haptics and soothing animations. Designed to help stressed teams reset quickly.',
      },
      {
        heading: 'Highlights',
        bullets: [
          'Customisable breathing ratios with responsive visuals.',
          'Immersive haptic feedback aligned to inhale / exhale cues.',
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
          'Positive user feedback for the calm, distraction-free art direction.',
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
  },
]

export const projectMap = new Map(projects.map((project) => [project.slug, project]))

export function getProject(slug: string): Project | undefined {
  return projectMap.get(slug as ProjectSlug)
}

export function projectRoute(slug: ProjectSlug): ProjectRoute {
  return `/projects/${slug}` as ProjectRoute
}
