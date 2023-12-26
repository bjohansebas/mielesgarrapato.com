import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { Viewport } from 'next'
import { ReactNode, Suspense } from 'react'

import Navbar from '@/components/layout/navbar'
import { constructMetadata } from '@/lib/metadata'

export const viewport: Viewport = {
  themeColor: '#ffc310',
  colorScheme: 'light',
}

export const metadata = constructMetadata()

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body className="selection:bg-buttercup-400">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
