'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)
// mobile URL-bar show/hide must not re-measure triggers mid-scroll (causes jumps)
ScrollTrigger.config({ ignoreMobileResize: true })

const HERO = '.hero, .case-hero'
const GRIDS = '.work-grid, .skills-grid, .about-grid, .metric-grid'

/** Site motion: smooth scroll, section anchoring, background arc, split-text intros, staggered reveals, scrubbed parallax.
    Re-runs on route change. */
export function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const mm = gsap.matchMedia()

    // ponytail: OS reduced-motion deliberately ignored (owner's call); restore a reduce branch if a11y complaints come
    mm.add('all', () => {
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

      // background arc: turns, rises and closes over the whole page
      gsap
        .timeline({ scrollTrigger: { start: 0, end: 'max', scrub: 1.2 } })
        .fromTo('.bg-arc', { rotation: 0, yPercent: 0 }, { rotation: 150, yPercent: -18, ease: 'none' }, 0)
        .fromTo('.bg-arc circle', { strokeDashoffset: 0.55 }, { strokeDashoffset: 0.02, ease: 'none' }, 0)
      gsap.from('.bg-arc', { opacity: 0, duration: 2, delay: 0.6 })

      // section anchoring (desktop pointer only): once scrolling settles, if the next section already
      // fills >40% of the screen glide to its top; going up, glide back to the previous one.
      // Tall sections (Work, Skills) stay freely scrollable because only boundaries on screen count.
      // only user input arms it, so a finished glide never chains into the next one
      let settle = 0
      let armed = false
      const arm = () => (armed = true)
      addEventListener('wheel', arm, { passive: true })
      addEventListener('keydown', arm)
      const anchor = () => {
        if (!armed || innerWidth <= 960 || !matchMedia('(pointer: fine)').matches) return
        armed = false
        const vh = innerHeight
        const tops = gsap.utils
          .toArray<HTMLElement>('.hero, .case-hero, .section')
          .map((el) => el.getBoundingClientRect().top)
        const edge = tops.find((t) => t > 2 && t < vh - 2)
        if (edge === undefined) return
        let target: number | undefined
        if (lenis.direction === 1 && edge < vh * 0.6) target = edge
        if (lenis.direction === -1 && edge > vh * 0.4) {
          const prev = tops.filter((t) => t < edge).pop() ?? edge - vh
          target = Math.max(prev, edge - vh)
        }
        if (target === undefined) return
        lenis.scrollTo(scrollY + target, { duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) })
      }
      const onScroll = () => {
        clearTimeout(settle)
        settle = window.setTimeout(anchor, 160)
      }
      lenis.on('scroll', onScroll)

      return () => {
        clearTimeout(settle)
        removeEventListener('wheel', arm)
        removeEventListener('keydown', arm)
        gsap.ticker.remove(tick)
        lenis.destroy()
        document.documentElement.style.scrollBehavior = ''
      }
    })

    // desktop only: scrubbed parallax jitters under native touch scroll
    mm.add('(min-width: 961px)', () => {
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
    })

    return () => mm.revert()
  }, [pathname])

  return (
    <svg className="bg-arc" viewBox="0 0 1000 1000" aria-hidden>
      <circle cx="500" cy="500" r="490" pathLength={1} />
    </svg>
  )
}
