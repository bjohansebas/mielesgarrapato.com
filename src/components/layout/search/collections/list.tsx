import { Separator } from '@ui/ui/separator'
import { CollectionFilterItem } from './item'

export type ListItemType = PathFilterItemType
export type PathFilterItemType = { title: string; path: string }

export default function CollectionList({ list }: { list: ListItemType[] }) {
  return (
    <nav className="w-full overflow-x-auto border-b border-buttercup-500 bg-secondary/50">
      <ul className="flex items-center w-full text-secondary-foreground">
        {list.map((item: ListItemType) => (
          <>
            <CollectionFilterItem item={item} key={item.path} />
            <Separator orientation="vertical" className="h-3 bg-buttercup-500" />
          </>
        ))}
      </ul>
    </nav>
  )
}
