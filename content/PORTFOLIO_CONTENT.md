# Portfolio Content — Dopóki Życie Trwa

> Content for mateuszbyrtus.com project page, structured like Lemmi Studio.

---

## Status

🟢 LIVE PERSONAL PROJECT

## Timeline

NOVEMBER – DECEMBER 2025 (2 WEEKS)

## Header

**Dopóki Życie Trwa**
Monastic noir digital magazine about discipline, stoicism, and the body.

## Short Description

A dark, brutalist editorial platform chronicling a personal journey through carnivore diet, cold exposure, ultra-endurance, and stoic philosophy. Full CMS, WebGL shaders, cinematic scroll animations, and newsletter — built solo in two weeks.

## Link

[Visit dopokizycietrwa.pl ↗](https://dopokizycietrwa.pl)

## Tech Stack

`Next.js 16` · `React 19` · `Sanity CMS` · `Three.js / R3F` · `GSAP` · `Tailwind CSS 4` · `Resend` · `Vercel`

## Stats

| BUILD TIME | FEATURES SHIPPED | CONTENT CATEGORIES |
|---|---|---|
| 2 weeks (solo, nights & weekends) | 30+ | 3 pillars |

---

## Overview

Dopóki Życie Trwa ("While Life Lasts") is a monastic noir editorial magazine — a raw, maximalist record of an inner journey through physical discipline and spiritual depth. The site serves as a living archive of articles organized around three pillars: **CIAŁO** (Body), **HART** (Grit), and **DUCH** (Spirit). Built with a custom "monastic noir" visual identity — dark tones, desaturated imagery, cinematic typography, and WebGL-driven hero experience.

---

## Key Highlights

- **WebGL shader hero**: Custom GLSL fragment/vertex shaders via React Three Fiber creating an ice-like, breathing texture with center glow, vignette, and hover-reactive distortion.

- **Cinematic scroll experience**: GSAP ScrollTrigger–powered parallax dispersal — each typographic line (IDĘ / WBREW WYGODZIE / POZA CHAOS / W STRONĘ ŹRÓDŁA) animates independently with blur, scale, and directional movement.

- **Headless CMS editorial system**: Sanity Studio with custom schemas for articles, categories, authors, and block content — including monologue blocks, protocol boxes, and data tables.

- **Newsletter & audience building**: Email capture via Resend API with Zod validation, inline and footer form variants, and a dedicated `/dolacz` landing page.

- **Full SEO & content distribution**: Dynamic sitemap, RSS feed, JSON-LD structured data, Open Graph, robots.txt, and Google Analytics integration.

---

## Technical Notes

- **Next.js 16 + React 19** with App Router, server components, ISR (60s revalidation), and dynamic draft preview mode via `draftMode()`.

- **Three.js / React Three Fiber** for the hero section — custom GLSL shaders with vertex displacement, UV distortion, desaturation, cold tinting, and pulsating center glow.

- **GSAP ScrollTrigger** orchestrating pinned hero parallax, manifesto text reveal, image parallax, and horizontal marquee for category titles.

- **Sanity CMS** with custom Portable Text components (monologue, protocol box, data table), markdown alternative input, image hotspot cropping, and YAML-based article import scripts.

- **Resend** for transactional newsletter emails with server-side API route and client-side optimistic UI.

- **Tailwind CSS 4** with custom design tokens: `onyx`, `bone`, `blood`, `steel`, `charcoal` — enforcing the monastic noir visual language across every component.

---

## Results

- Full editorial platform delivered in two weeks, solo, with 30+ features and a cohesive dark design system.

- Custom WebGL hero renders at 60fps with smooth pointer-reactive distortion and cinematic scroll dispersal.

- Content pipeline from YAML → Sanity import script → Studio → live article with SEO, RSS, and newsletter in a single workflow.

- Lighthouse performance optimized: dynamic imports for Three.js, lazy-loaded images, font optimization (Oswald + Montserrat via `next/font`), and ISR caching.

---

[Visit dopokizycietrwa.pl ↗](https://dopokizycietrwa.pl)
