import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProject, projects } from '@/app/data/projects'
import { VideoPreview } from '@/components/VideoPreview'
import { ProjectVisual } from '@/components/ProjectVisual'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Mateusz Byrtus`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      {/* HERO */}
      <section className="case-hero">
        <Link href="/#work" className="back-link" data-reveal>
          ← Back to work
        </Link>
        <div className="case-hero-grid">
          <div data-reveal>
            <div className="case-eyebrow">Project Case Study</div>
            <h1 className="case-title">{project.title}</h1>
            <p className="case-sub">{project.subtitle}</p>
            <p className="case-desc">{project.description}</p>
            <div className="case-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div data-reveal style={{ animationDelay: '.12s' }}>
            <ProjectVisual slug={project.slug} variant="portrait" icon={project.logo} title={project.title} />
          </div>
        </div>
        <div className="case-meta" data-reveal>
          <div>
            <div className="meta-label">Status</div>
            <div className="meta-value">{project.status.label}</div>
          </div>
          <div>
            <div className="meta-label">Timeline</div>
            <div className="meta-value">{project.timeline}</div>
          </div>
          {project.links && project.links.length > 0 && (
            <div>
              <div className="meta-label">Links</div>
              <div className="meta-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* METRICS */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="section">
          <div className="label-row" data-reveal>
            <span className="eyebrow">Metrics</span>
            <span className="rule" />
          </div>
          <div className="metric-grid">
            {project.metrics.map((metric, i) => (
              <div key={metric.label} data-reveal style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SHOWCASE BANNER — large graphic break */}
      <section className="section">
        <div data-reveal>
          <ProjectVisual slug={project.slug} variant="banner" icon={project.logo} title={project.title} />
        </div>
      </section>

      {/* SECTIONS */}
      {project.sections.map((section, i) => (
        <section key={section.heading} className="section">
          <div className="case-section-grid">
            <div className="case-index" data-reveal>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <div className="label-row" data-reveal>
                <span className="eyebrow">{section.heading}</span>
                <span className="rule" />
              </div>
              {section.body && (
                <p className="prose case-section-body" data-reveal>
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul className="bullets">
                  {section.bullets.map((bullet, bi) => (
                    <li key={bullet} data-reveal style={{ animationDelay: `${bi * 0.07}s` }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* VIDEO */}
      {project.video && (
        <section className="section">
          <div className="label-row" data-reveal>
            <span className="eyebrow">Demo</span>
            <span className="rule" />
          </div>
          <div data-reveal style={{ maxWidth: 860 }}>
            <VideoPreview src={project.video} />
          </div>
        </section>
      )}

      {/* PREV / NEXT */}
      <section className="section case-nav">
        <Link href={`/projects/${prev.slug}`} className="case-nav-link" data-reveal>
          <span className="case-nav-label">← Previous</span>
          <span className="case-nav-title">{prev.title}</span>
        </Link>
        <Link href={`/projects/${next.slug}`} className="case-nav-link case-nav-link--next" data-reveal>
          <span className="case-nav-label">Next →</span>
          <span className="case-nav-title">{next.title}</span>
        </Link>
      </section>
    </>
  )
}
