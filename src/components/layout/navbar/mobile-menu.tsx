'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { Button } from '@ui/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@ui/ui/sheet'

import { Menu } from '@lib/shopify/types'

import Search from './search'

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const closeMobileMenu = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button aria-label="Open mobile menu" size="icon" variant="link">
          <Bars3Icon className="h-6 transition-all ease-in-out hover:scale-110" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div>
          <div className="w-full my-6">
            <Search />
          </div>
          {menu.length ? (
            <ul className="flex w-full flex-col">
              {menu.map((item: Menu) => (
                <li className="py-2 text-xl transition-colors text-white" key={item.title}>
                  <Link href={item.path} onClick={closeMobileMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  )
}
