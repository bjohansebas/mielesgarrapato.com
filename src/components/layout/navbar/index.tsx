import Link from 'next/link'
import { Suspense } from 'react'

import { SITE_NAME } from '@lib/constants'
import { getCollections } from '@lib/shopify'
import Cart from '@ui/cart'
import OpenCart from '@ui/cart/open-cart'
import { Skeleton } from '@ui/ui/skeleton'
import Collections from '../search/collections'
import MobileMenu from './mobile-menu'
import Search from './search'

export default async function Navbar() {
  const menu = await getCollections()

  return (
    <div className="">
      <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-secondary/50 md:pb-0 ">
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
              <div className="ml-2 flex-none text-sm font-medium uppercase lg:block">{SITE_NAME}</div>
            </Link>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Search />
          </div>
          <div className="flex justify-end md:w-1/3">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
      <Suspense
        fallback={
          <div className="flex gap-3 w-full py-4 bg-secondary/50">
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
        <Collections collections={menu} />
      </Suspense>
    </div>
  )
}
