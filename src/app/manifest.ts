import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'Mieles El Garrapato',
    name: 'Mieles El Garrapato',
    lang: 'es',
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
      },
      {
        src: '/_static/favicons/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/_static/favicons/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: '/_static/favicons/icon-192-maskable.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'maskable',
      },
      {
        src: '/_static/favicons/icon-512-maskable.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#d18300',
    background_color: '#0f0f0f',
  }
}
