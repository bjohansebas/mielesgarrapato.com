'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { Button } from '@ui/ui/button'
import type { ListItemType } from '.'
import { SortFilterItem } from './item'

export default function FilterItemDropdown({ list }: { list: ListItemType[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [active, setActive] = useState('')

  useEffect(() => {
    for (const listItem of list) {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setActive(listItem.title)
      }
    }
  }, [pathname, list, searchParams])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex justify-between w-full" variant="outline">
          {active}
          <ChevronDownIcon className="h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {list.map((item: ListItemType) => (
          <DropdownMenuItem key={item.slug}>
            <SortFilterItem item={item} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
