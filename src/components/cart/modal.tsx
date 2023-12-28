'use client'

import { Dialog, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { DEFAULT_OPTION } from '@lib/constants'
import type { Cart } from '@lib/shopify/types'
import { createUrl } from '@lib/utils'
import Price from '@ui/price'
import { Button } from '@ui/ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@ui/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { DeleteItemButton } from './delete-item-button'
import { EditItemQuantityButton } from './edit-item-quantity-button'
import OpenCart from './open-cart'

type MerchandiseSearchParams = {
  [key: string]: string
}

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false)
  const quantityRef = useRef(cart?.totalQuantity)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true)
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity
    }
  }, [isOpen, cart?.totalQuantity, quantityRef])

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button aria-label="Open cart" onClick={openCart} size="icon" variant="link" className="relative">
            <OpenCart quantity={cart?.totalQuantity} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-between h-full">
            <SheetHeader className="h-fit">
              <SheetTitle className="text-xl">Your Cart</SheetTitle>
            </SheetHeader>
            {!cart || cart.lines.length === 0 ? (
              <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                <ShoppingCartIcon className="h-10 animate-cart-moving" />
                <p className="mt-6 text-center text-lg font-bold">Your cart is currently empty.</p>
              </div>
            ) : (
              <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                <ul className="flex-grow overflow-auto py-4">
                  {cart.lines.map((item, i) => {
                    const merchandiseSearchParams = {} as MerchandiseSearchParams

                    item.merchandise.selectedOptions.forEach(({ name, value }) => {
                      if (value !== DEFAULT_OPTION) {
                        merchandiseSearchParams[name.toLowerCase()] = value
                      }
                    })

                    const merchandiseUrl = createUrl(
                      `/product/${item.merchandise.product.handle}`,
                      new URLSearchParams(merchandiseSearchParams),
                    )

                    return (
                      <li key={i} className="flex w-full flex-col border-b border-neutral-300">
                        <div className="flex w-full flex-row px-1 py-4 gap-6">
                          <Link href={merchandiseUrl} onClick={closeCart}>
                            <div className="h-28 w-28 cursor-pointer overflow-hidden rounded-[1rem]">
                              <Image
                                className="h-full w-full object-cover"
                                width={112}
                                height={112}
                                alt={item.merchandise.product.featuredImage.altText || item.merchandise.product.title}
                                src={item.merchandise.product.featuredImage.url}
                              />
                            </div>
                          </Link>
                          <div className="flex h-16 flex-col justify-between">
                            <Link href={merchandiseUrl} onClick={closeCart}>
                              <div className="flex flex-1 flex-col text-base">
                                <span className="leading-tight">{item.merchandise.product.title}</span>
                                {item.merchandise.title !== DEFAULT_OPTION ? (
                                  <p className="text-sm text-neutral-400">{item.merchandise.title}</p>
                                ) : null}
                              </div>
                            </Link>
                            <Price
                              className="flex justify-end space-y-2 text-right text-sm"
                              amount={item.cost.totalAmount.amount}
                              currencyCode={item.cost.totalAmount.currencyCode}
                            />
                            <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                              <EditItemQuantityButton item={item} type="minus" />
                              <p className="w-6 text-center">
                                <span className="w-full text-sm">{item.quantity}</span>
                              </p>
                              <EditItemQuantityButton item={item} type="plus" />
                            </div>
                            <div>
                              <DeleteItemButton item={item} />
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                    <p>Taxes</p>
                    <Price
                      className="text-right text-base text-black dark:text-white"
                      amount={cart.cost.totalTaxAmount.amount}
                      currencyCode={cart.cost.totalTaxAmount.currencyCode}
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                    <p>Shipping</p>
                    <p className="text-right">Calculated at checkout</p>
                  </div>
                  <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                    <p>Total</p>
                    <Price
                      className="text-right text-base text-black dark:text-white"
                      amount={cart.cost.totalAmount.amount}
                      currencyCode={cart.cost.totalAmount.currencyCode}
                    />
                  </div>
                </div>
                <a
                  href={cart.checkoutUrl}
                  className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                >
                  Proceed to Checkout
                </a>
              </div>
            )}
            <SheetFooter>
              <SheetClose asChild>
                {!cart || cart.lines.length === 0 ? (
                  <Button type="submit" className="w-full uppercase font-bold">
                    Continue shopping
                  </Button>
                ) : null}
              </SheetClose>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
