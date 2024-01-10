/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/product/:path*',
        permanent: true,
      },
      {
        source: '/pages/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}
