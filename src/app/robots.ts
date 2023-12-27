import { HOME_DOMAIN } from '@lib/constants'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${HOME_DOMAIN}/sitemap.xml`,
    host: HOME_DOMAIN,
  }
}
