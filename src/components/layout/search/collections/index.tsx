import { Suspense } from 'react'

import { getCollections } from '@lib/shopify'
import { Skeleton } from '@ui/ui/skeleton'
import FilterList from './list'

async function CollectionList() {
  const collections = await getCollections()
  return <FilterList list={collections} />
}

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="flex gap-3 w-full py-4">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  )
}
