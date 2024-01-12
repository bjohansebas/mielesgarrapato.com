export const SITE_NAME = 'Mieles Organicas El Garrapato'

export const HOME_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://garrapato.vercel.app'
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000'

export type SortFilterItemType = {
  title: string
  slug: string | null
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE'
  reverse: boolean
}

export const defaultSort: SortFilterItemType = {
  title: 'Relevancia',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false,
}

export const sorting: SortFilterItemType[] = [
  defaultSort,
  { title: 'Tendencia', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Últimas llegadas', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Precio: De bajo a alto', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Precio: De alto a bajo', slug: 'price-desc', sortKey: 'PRICE', reverse: true },
]

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart',
}

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden'
export const DEFAULT_OPTION = 'Default Title'

export * from './shopify'
