'use client'

import { SortFilterItemType } from '@lib/constants'
import { createUrl } from '@lib/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export function SortFilterItem({ item }: { item: SortFilterItemType }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = searchParams.get('sort') === item.slug
  const q = searchParams.get('q')
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug?.length && { sort: item.slug }),
    }),
  )
  const DynamicTag = active ? 'p' : Link

  return (
    <li className="list-none">
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx('w-full h-full hover:underline hover:underline-offset-4', {
          'underline underline-offset-4 text-card-foreground': active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  )
}
