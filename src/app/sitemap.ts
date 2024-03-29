import { HOME_DOMAIN } from '@lib/constants'
import { getCollections, getPages, getProducts } from '@lib/shopify'
import { validateEnvironmentVariables } from '@lib/utils'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables()

  const routesMap = [''].map((route) => ({
    url: `${HOME_DOMAIN}${route}`,
    lastModified: new Date().toISOString(),
  }))

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${HOME_DOMAIN}${collection.path}`,
      lastModified: collection.updatedAt,
    })),
  )

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${HOME_DOMAIN}/product/${product.handle}`,
      lastModified: product.updatedAt,
    })),
  )

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${HOME_DOMAIN}/${page.handle}`,
      lastModified: page.updatedAt,
    })),
  )

  let fetchedRoutes: Route[] = []

  try {
    fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise, pagesPromise])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }

  return [...routesMap, ...fetchedRoutes]
}
