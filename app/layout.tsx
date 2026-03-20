import { Footer, Layout, Navbar, LastUpdated } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeToggle } from './components/theme-toggle'
import { ScrollToTop } from './components/scroll-to-top'
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
    icon: '/favicon.ico',
    apple: '/logo-corbata.png',
  },
  alternates: {
    canonical: 'https://docs.iteralex.com',
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
  <span className="logo-container">
    <img
      src="/itera-lex-logo-dark.png"
      alt="ÍTERA Lex"
      className="logo-light"
    />
    <img
      src="/itera-lex-logo.png"
      alt="ÍTERA Lex"
      className="logo-dark"
    />
    <span className="logo-badge">Docs</span>
  </span>
)

const navbar = (
  <Navbar logo={logo}>
    <ThemeToggle />
  </Navbar>
)

const footer = (
  <Footer>
    <div className="docs-footer">
      <span className="docs-footer-copy">
        {new Date().getFullYear()} © ÍTERA Lex
      </span>
      <div className="docs-footer-links">
        <a
          href="https://iteralex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          iteralex.com
        </a>
        <a
          href="https://app.iteralex.com"
          target="_blank"
          rel="noopener noreferrer"
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'ÍTERA Lex',
                url: 'https://iteralex.com',
                logo: 'https://docs.iteralex.com/logo-corbata.png',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'ÍTERA Lex Docs',
                url: 'https://docs.iteralex.com',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://docs.iteralex.com?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          copyPageButton={false}
          editLink={null}
          feedback={{ content: null }}
          lastUpdated={
            <LastUpdated locale="es-AR">Última actualización</LastUpdated>
          }
          search={<Search placeholder="Buscar..." />}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: 'En esta página' }}
          themeSwitch={{ dark: 'Oscuro', light: 'Claro' }}
        >
          {children}
        </Layout>
        <ScrollToTop />
      </body>
    </html>
  )
}
