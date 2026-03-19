import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.iteralex.com'),
  title: {
    default: 'ÍTERA Lex — Documentación',
    template: '%s — ÍTERA Lex Docs',
  },
  description:
    'Documentación de ÍTERA Lex — Sistema de gestión jurídica para estudios y abogados argentinos. Guías, glosario y recursos.',
  icons: {
    icon: '/logo-corbata.png',
    apple: '/logo-corbata.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'ÍTERA Lex Docs',
    images: [{ url: '/og-image.png', width: 1200, height: 628 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img
      src="/itera-lex-logo-dark.png"
      alt="ÍTERA Lex"
      style={{ height: '28px' }}
      className="logo-light"
    />
    <img
      src="/itera-lex-logo.png"
      alt="ÍTERA Lex"
      style={{ height: '28px' }}
      className="logo-dark"
    />
    <span
      style={{
        fontWeight: 600,
        fontSize: '13px',
        opacity: 0.5,
        letterSpacing: '0.05em',
        textTransform: 'uppercase' as const,
      }}
    >
      Docs
    </span>
  </span>
)

const navbar = <Navbar logo={logo} projectLink="https://iteralex.com" />

const footer = (
  <Footer>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: '14px',
      }}
    >
      <span style={{ opacity: 0.6 }}>
        {new Date().getFullYear()} © ÍTERA Lex
      </span>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a
          href="https://iteralex.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ opacity: 0.6, textDecoration: 'none' }}
        >
          iteralex.com
        </a>
        <a
          href="https://app.iteralex.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ opacity: 0.6, textDecoration: 'none' }}
        >
          Acceder al sistema
        </a>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      dir="ltr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/iteralat/itera-lex-docs/tree/master"
          footer={footer}
          editLink="Editar esta página"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: 'En esta página' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
