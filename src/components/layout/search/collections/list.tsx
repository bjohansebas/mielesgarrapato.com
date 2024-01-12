import { Separator } from '@ui/ui/separator'
import { CollectionFilterItem } from './item'

export type ListItemType = PathFilterItemType
export type PathFilterItemType = { title: string; path: string }

export default function CollectionList({ list }: { list: ListItemType[] }) {
  return (
    <nav className="border-t-2 border-buttercup-400 w-full bg-card overflow-x-auto">
      <ul className="flex items-center w-full">
        {list.map((item: ListItemType) => (
          <>
            <CollectionFilterItem item={item} key={item.path} />
            <Separator orientation="vertical" className="h-3 bg-buttercup-700" />
          </>
        ))}
      </ul>
    </nav>
  )
}
