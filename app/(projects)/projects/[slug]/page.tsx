import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { getProject, projects } from '@/app/data/projects'
import { VideoPreview } from '@/components/VideoPreview'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} — Projects`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="space-y-10">
      <Link
        href={{ pathname: '/', hash: 'projects' }}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--edge)] bg-[var(--page)] px-4 py-2 text-[14px] font-medium leading-6 text-[var(--heading)] shadow-[0_8px_24px_var(--shadow-btn,rgba(24,24,24,0.08))] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--edge-hover)]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to projects
      </Link>

      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--badge-bg)] px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--badge-text)]">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: project.status.color }}
              aria-hidden
            />
            <span>{project.status.label}</span>
          </span>
          <span className="text-[14px] uppercase tracking-[0.2em] text-[var(--body-muted)]">{project.timeline}</span>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={56}
              height={56}
              className="h-14 w-14 rounded-lg border border-[var(--edge)] object-contain"
              priority
            />
            <div>
              <h1 className="font-sans text-[36px] leading-[40px] font-bold text-[var(--heading)] tracking-[-1.5px]">{project.title}</h1>
              <p className="text-[16px] leading-7 text-[var(--body)]">{project.subtitle}</p>
            </div>
          </div>
          <p className="text-[16px] leading-7 text-[var(--body)]">{project.description}</p>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => {
                const Icon = link.external ? ArrowUpRight : ArrowRight
                return (
                  <a
                    key={`top-${link.href}`}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-[16px] leading-7 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70"
                  >
                    {link.label}
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                )
              })}
            </div>
          )}
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-[var(--tag)] px-3 py-1 text-[13px] font-medium text-[var(--body)]">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className={project.video ? 'flex flex-col sm:flex-row gap-4' : ''}>
            <dl className={`grid gap-3 ${project.video ? 'flex-1 grid-cols-1' : 'sm:grid-cols-3'}`}>
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[var(--edge)] bg-[var(--surface-alt)] p-4">
                  <dt className="text-[12px] uppercase tracking-[0.18em] text-[var(--body-muted)]">{metric.label}</dt>
                  <dd className="mt-2 text-[16px] leading-7 text-[var(--body)] font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
            {project.video && (
              <VideoPreview src={project.video} />
            )}
          </div>
        )}

        {!project.metrics && project.video && (
          <VideoPreview src={project.video} />
        )}
      </header>

      <div className="space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading} className="space-y-4 border-t border-[var(--edge)] pt-6 first:border-none first:pt-0">
            <h2 className="font-sans text-[24px] leading-7 font-semibold text-[var(--heading)]">{section.heading}</h2>
            {section.body && <p className="text-[16px] leading-7 text-[var(--body)]">{section.body}</p>}
            {section.bullets && (
              <ul className="list-disc list-inside space-y-2 text-[16px] leading-7 text-[var(--body)]">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="space-y-3 border-t border-[var(--edge)] pt-6">
          {project.links.map((link) => {
            const Icon = link.external ? ArrowUpRight : ArrowRight
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-[16px] leading-7 text-[var(--body)] underline decoration-2 underline-offset-4 hover:opacity-70"
              >
                {link.label}
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}
