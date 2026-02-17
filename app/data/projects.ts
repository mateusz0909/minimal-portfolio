import type { StaticImageData } from 'next/image'
import calmNowImg from '@/public/calmNow.png'
import dztImg from '@/public/dzt-icon.png'
import feelingJournalImg from '@/public/feelingJournal.jpeg'
import lemmiImg from '@/public/lemmi.png'
import lumaImg from '@/public/luma.png'

export type ProjectSlug = 'dopoki-zycie-trwa' | 'lemmi-studio' | 'luma-breathwork' | 'feeling-journal' | 'calm-now'

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
  logo: StaticImageData
}

export const projects: Project[] = [
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
    subtitle: 'Guided Wim Hof-style breathing with a premium feel',
    timeline: 'September 2024',
    status: {
      label: 'Live on App Store',
      color: '#65D898',
    },
    description:
      'A breathwork companion with expert-led sessions, rich visuals, and automated marketing content. Achieved 13.3% conversion and a 5-star rating.',
    technologies: ['Swift', 'SwiftUI', 'StoreKit 2', 'CloudKit', 'Adobe Firefly API'],
    metrics: [
      { label: 'Conversion rate', value: '13.3%' },
      { label: 'App Store rating', value: '5.0★' },
      { label: 'Status', value: 'Live product' },
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Designed a ritual-like breathing experience with tactile feedback, layered audio, and scenario-based programs. Automated marketing creative through Adobe Firefly to keep campaigns fresh.',
      },
      {
        heading: 'What stands out',
        bullets: [
          'Structured programmes tailored to user goals (focus, recovery, evening wind-down).',
          'AI-generated marketing visuals and copy to maintain engagement between updates.',
          'Progress tracking with meaningful streaks and habit nudges.',
        ],
      },
      {
        heading: 'Technical Notes',
        bullets: [
          'SwiftUI interface tuned for smooth breathing animations and haptic timing.',
          'StoreKit 2 subscriptions with finely tuned paywall copy and trials.',
          'CloudKit-backed analytics to understand retention and cohort behaviour.',
        ],
      },
      {
        heading: 'Impact',
        bullets: [
          'Outperformed typical meditation-app conversions by 4–10×.',
          'Maintained a perfect star rating thanks to continuous UX refinements.',
          'Automated campaign creation freed up time for product iteration.',
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
