import type { Metadata } from 'next'
import { Abel } from 'next/font/google'

import GlobalStyles from '@/styles/global'
import Providers from './providers'
import Header from '@/components/ui/Header'

const abel = Abel({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Cubos Movies',
  description: 'Busque pelos melhores filmes'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/cubo-3d.png" sizes="any" />
      </head>
      <body className={abel.className}>
        <Providers>
          <GlobalStyles />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
