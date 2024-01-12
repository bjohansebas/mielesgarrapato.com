import { defaultSort, sorting } from '@lib/constants'
import { getProducts } from '@lib/shopify'
import Grid from '@ui/grid'
import ProductGridItems from '@ui/layout/product-grid-items'

export const runtime = 'edge'

export const metadata = {
  title: 'Página de búsqueda',
  description: 'Busca productos en la tienda.',
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string }
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort

  const products = await getProducts({ sortKey, reverse, query: searchValue })
  const resultsText = products.length > 1 ? 'resultados' : 'resultado'

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'No hay productos que coincidan.'
            : `Mostrando ${products.length} ${resultsText} para `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  )
}
