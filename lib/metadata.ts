import { Metadata } from 'next'

import { HOME_DOMAIN } from './constants'

export function constructMetadata({
  title = 'Mieles Organicas El Garrapato',
  description = 'Miel 100% natural',
  //   image = '',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  //   image?: string
  icons?: string
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    robots: {
      follow: true,
      index: true,
    },
    description,
    openGraph: {
      title,
      description,
      //   images: [
      // {
      //   url: image,
      // },
      //   ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      //   images: [image],
      //   creator: '@bjohansebas',
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    manifest: '/manifest.json',
    keywords: [],
  }
}
