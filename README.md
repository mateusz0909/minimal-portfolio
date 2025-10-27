# Mateusz Portfolio (Next.js)

This is a Next.js 14 App Router migration of the portfolio for better SEO (SSG), metadata, and social previews. Tailwind and your existing visual styles are preserved.

## Scripts

- dev: start local dev server
- build: production build
- start: run production server
- lint: Next.js ESLint
- typecheck: TypeScript validation

## Environment

Optionally set `NEXT_PUBLIC_SITE_URL` for correct canonical, sitemap, and robots generation.

## Notes

- Pages are SSG by default. Add `export const revalidate = 60` to use ISR on pages that change.
- API route example at `/api/ping`.
