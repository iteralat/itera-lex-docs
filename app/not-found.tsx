import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', opacity: 0.7 }}>
        La página que buscás no existe o fue movida.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <Link
          href="/"
          style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            background: 'var(--nextra-primary-hue, #3b82f6)',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Ir al inicio
        </Link>
        <Link
          href="/guia-rapida"
          style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid currentColor',
            textDecoration: 'none',
            opacity: 0.8,
          }}
        >
          Guía rápida
        </Link>
      </div>
    </div>
  )
}
