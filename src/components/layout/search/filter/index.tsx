import { SortFilterItemType } from '@lib/constants'
import FilterItemDropdown from './dropdown'
import { SortFilterItem } from './item'

export type ListItemType = SortFilterItemType
export type PathFilterItemType = { title: string; path: string }

export default function FilterList({ list, title }: { list: ListItemType[]; title?: string }) {
  return (
    <nav>
      {title ? <h3 className="mb-3">{title}</h3> : null}
      <ul className="hidden md:flex gap-2 flex-col text-sm">
        {list.map((item: ListItemType) => (
          <SortFilterItem key={item.title} item={item} />
        ))}
      </ul>
      <ul className="md:hidden">
        <FilterItemDropdown list={list} />
      </ul>
    </nav>
  )
}
