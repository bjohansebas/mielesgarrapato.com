import { Collection } from '@lib/shopify/types'
import FilterList from './list'

export default async function Collections({ collections }: { collections: Collection[] }) {
  return (
    <div className="md:block hidden">
      <FilterList list={collections} />
    </div>
  )
}
