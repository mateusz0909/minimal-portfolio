'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const HERO = '.hero, .case-hero'
const GRIDS = '.work-grid, .skills-grid, .about-grid, .metric-grid'

/** Site motion: smooth scroll, split-text intros, staggered reveals, scrubbed parallax.
    Reduced-motion users get plain fades only. Re-runs on route change. */
export function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: reduce)', () => {
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top bottom', // no clamp: elements already on screen must show at load
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, duration: 0.6, stagger: 0.08 }),
      })
    })

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({ anchors: true, lerp: 0.1 })
      lenis.on('scroll', ScrollTrigger.update)
      const tick = (t: number) => lenis.raf(t * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      document.documentElement.style.scrollBehavior = 'auto'

      // hero: title letters rise out of a mask, then the rest follows
      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
      const title = document.querySelector<HTMLElement>('.hero-title, .case-title')
      const heroRest: Element[] = []
      gsap.utils.toArray<HTMLElement>('.hero [data-reveal], .case-hero [data-reveal]').forEach((el) => {
        if (el === title) return
        if (title && el.contains(title)) {
          gsap.set(el, { opacity: 1 })
          heroRest.push(...Array.from(el.children).filter((c) => c !== title))
        } else heroRest.push(el)
      })
      if (title) {
        gsap.set(title, { opacity: 1 })
        const split = SplitText.create(title, { type: 'chars,lines', mask: 'lines' })
        intro.from(split.chars, { yPercent: 115, duration: 1.2, stagger: 0.035 })
      }
      intro.fromTo(heroRest, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 }, title ? '-=0.8' : 0)

      // hero drifts down and fades as the next section slides over it
      const hero = document.querySelector(HERO)
      if (hero) {
        gsap.to(hero.children, {
          yPercent: 18,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
        })
      }

      // everything else: grids stagger their children, singles rise
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.closest(HERO)) return
        const isGrid = el.matches(GRIDS)
        if (isGrid || el.matches('.contact-title')) gsap.set(el, { opacity: 1 })
        if (el.matches('.contact-title')) return
        gsap.fromTo(
          isGrid ? el.children : el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: 'clamp(top 88%)', once: true },
          },
        )
      })

      // big closing headline: lines slide up from a mask
      document.querySelectorAll<HTMLElement>('.contact-title').forEach((el) => {
        const split = SplitText.create(el, { type: 'lines', mask: 'lines' })
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: 'clamp(top 85%)', once: true },
        })
      })

      // section rules draw left → right
      gsap.utils.toArray<HTMLElement>('.rule').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'clamp(top 90%)', once: true },
        })
      })

      // stats count up: "09", "13.3%", "2wk"
      document.querySelectorAll<HTMLElement>('.stat-num').forEach((el) => {
        // original value kept in a data attr: a revert re-renders the tween at 0
        const m = (el.dataset.value ??= el.textContent ?? '').match(/^(\d+)(?:\.(\d+))?(.*)$/)
        if (!m) return
        const [, int, dec = '', suffix] = m
        const val = { n: 0 }
        gsap.to(val, {
          n: parseFloat(`${int}.${dec || 0}`),
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'clamp(top 90%)', once: true },
          onUpdate: () => {
            const [i, d] = val.n.toFixed(dec.length).split('.')
            el.textContent = i.padStart(int.length, '0') + (d ? `.${d}` : '') + suffix
          },
        })
      })

      // portrait: curtain reveal + slow zoom-out
      gsap.utils.toArray<HTMLElement>('.portrait-frame').forEach((frame) => {
        gsap.fromTo(
          frame,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.4,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: frame, start: 'clamp(top 85%)', once: true },
          },
        )
        gsap.fromTo(frame.children, { scale: 1.2 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: frame, scrub: true } })
      })

      // depth: patterns drift one way, marks the other
      gsap.utils.toArray<HTMLElement>('.work-thumb .bd, .pv-bd').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -12 },
          { yPercent: 12, ease: 'none', scrollTrigger: { trigger: el.parentElement, scrub: true } },
        )
      })
      gsap.utils.toArray<HTMLElement>('.work-thumb .app-mark, .pv-mark').forEach((el) => {
        gsap.fromTo(el, { y: 24 }, { y: -24, ease: 'none', scrollTrigger: { trigger: el.parentElement, scrub: true } })
      })

      return () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
        document.documentElement.style.scrollBehavior = ''
      }
    })

    return () => mm.revert()
  }, [pathname])

  return null
}
