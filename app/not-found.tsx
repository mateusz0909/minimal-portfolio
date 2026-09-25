import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="hero" style={{ justifyContent: 'center' }}>
      <div className="eyebrow">404</div>
      <h1 className="case-title" style={{ marginTop: 24 }}>
        Page not found
      </h1>
      <p className="prose" style={{ marginTop: 22 }}>
        The page you are looking for does not exist. <Link href="/">Back home</Link>
      </p>
    </main>
  )
}
