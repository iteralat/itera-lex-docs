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
  title: {
    default: 'ITERA LEX Docs',
    template: '%s — ITERA LEX Docs',
  },
  description:
    'Documentacion de ITERA LEX — Software de gestion juridica para abogados y estudios legales.',
  icons: {
    icon: '/logo-corbata.png',
    apple: '/logo-corbata.png',
  },
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img
      src="/itera-lex-logo.png"
      alt="ITERA LEX"
      style={{ height: '28px' }}
    />
    <span style={{ fontWeight: 600, fontSize: '14px', opacity: 0.6 }}>
      Docs
    </span>
  </span>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/iteralex"
  />
)

const footer = (
  <Footer>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '8px' }}>
      <span>
        {new Date().getFullYear()} © ITERA LEX. Todos los derechos reservados.
      </span>
      <a href="https://iteralex.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
        iteralex.com
      </a>
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
          docsRepositoryBase="https://github.com/iteralex/itera-lex-docs/tree/main"
          footer={footer}
          editLink="Editar esta pagina"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: 'En esta pagina' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
