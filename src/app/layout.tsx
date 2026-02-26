import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SUDOTECH IT - Soluciones Tecnológicas para PYMES',
  description: 'Desarrollo de sitios web a medida, consultoría IT, soluciones en la nube y comunicaciones VoIP para empresas.',
  keywords: 'desarrollo web, consultoría IT, cloud computing, VoIP, soluciones tecnológicas, PYMES',
  authors: [{ name: 'SUDOTECH IT' }],
  openGraph: {
    title: 'SUDOTECH IT - Soluciones Tecnológicas',
    description: 'Desarrollo de sitios web a medida y soluciones IT para empresas',
    url: 'https://sudotechit.com',
    siteName: 'SUDOTECH IT',
    images: [
      {
        url: 'https://sudotechit.com/img/sudotech-logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}