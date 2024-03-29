'use client'

import { Menu } from '@lib/shopify/types'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const pathname = usePathname()
  const [active, setActive] = useState(pathname === item.path)

  useEffect(() => {
    setActive(pathname === item.path)
  }, [pathname, item.path])

  return (
    <li>
      <Link
        href={item.path}
        className={clsx('underline-offset-4 hover:underline inline-block text-sm hover:text-buttercup-400', {
          'text-neutral-300': active,
        })}
      >
        {item.title}
      </Link>
    </li>
  )
}

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null

  return (
    <ul className="mt-4 space-y-4">
      {menu.map((item: Menu) => {
        return <FooterMenuItem key={item.title} item={item} />
      })}
    </ul>
  )
}
