'use client'

import { createUrl } from '@lib/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import type { PathFilterItemType } from './list'

export function CollectionFilterItem({ item }: { item: PathFilterItemType }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = pathname === item.path
  const newParams = new URLSearchParams(searchParams.toString())
  const DynamicTag = active ? 'p' : Link

  newParams.delete('q')

  return (
    <li className="p-3" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx('text-sm underline-offset-4 hover:underline hover:text-neutral-100 whitespace-nowrap', {
          'underline underline-offset-4': active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  )
}
