'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Price from '@ui/price'
import { Button } from '@ui/ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@ui/ui/sheet'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { DEFAULT_OPTION } from '@lib/constants'
import type { Cart } from '@lib/shopify/types'
import { createUrl } from '@lib/utils'

import { DeleteItemButton } from './delete-item-button'
import { EditItemQuantityButton } from './edit-item-quantity-button'
import OpenCart from './open-cart'

type MerchandiseSearchParams = {
  [key: string]: string
}

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false)
  const quantityRef = useRef(cart?.totalQuantity)
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button aria-label="Open cart" size="icon" variant="link" className="relative">
          <OpenCart quantity={cart?.totalQuantity} />
        </Button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-lg bg-card/75">
        <div className="flex flex-col justify-between h-full">
          <SheetHeader className="h-fit">
            <SheetTitle className="text-xl">Mi carrito</SheetTitle>
          </SheetHeader>
          {!cart || cart.lines.length === 0 ? (
            <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
              <ShoppingCartIcon className="h-10 animate-cart-moving" />
              <p className="mt-6 text-center text-lg font-bold">Tu carrito de compras está vacío.</p>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between overflow-hidden p-1">
              <ul className="flex-grow overflow-auto py-4">
                {cart.lines.map((item) => {
                  const merchandiseSearchParams = {} as MerchandiseSearchParams

                  for (const { name, value } of item.merchandise.selectedOptions) {
                    if (value !== DEFAULT_OPTION) {
                      merchandiseSearchParams[name.toLowerCase()] = value
                    }
                  }

                  const merchandiseUrl = createUrl(
                    `/product/${item.merchandise.product.handle}`,
                    new URLSearchParams(merchandiseSearchParams),
                  )

                  return (
                    <li key={item.id} className="flex w-full flex-col">
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
                            <div className="flex flex-1 flex-col text-base mb-1">
                              <span className="leading-tight text-xl hover:text-buttercup-500 transition-all duration-200 ease font-semibold">
                                {item.merchandise.product.title}
                              </span>
                              {item.merchandise.title !== DEFAULT_OPTION ? (
                                <p className="text-sm text-neutral-400">{item.merchandise.title}</p>
                              ) : null}
                            </div>
                          </Link>
                          <Price
                            className="flex text-sm mb-4"
                            amount={item.cost.totalAmount.amount}
                            currencyCode={item.cost.totalAmount.currencyCode}
                          />
                          <div className="flex gap-2">
                            <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                              <EditItemQuantityButton item={item} type="minus" />
                              <p className="w-6 text-center">
                                <span className="w-full text-sm">{item.quantity}</span>
                              </p>
                              <EditItemQuantityButton item={item} type="plus" />
                            </div>
                            <DeleteItemButton item={item} />
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="py-4 text-sm text-neutral-400">
                <div className="mb-3 text-xl flex items-center gap-1 justify-center">
                  <p className="text-muted-foreground">Subtotal:</p>
                  <Price
                    className="text-foreground"
                    amount={cart.cost.totalAmount.amount}
                    currencyCode={cart.cost.totalAmount.currencyCode}
                  />
                </div>
                <p className="text-center">Impuestos y envío calculados al finalizar la compra.</p>
              </div>
            </div>
          )}
          <SheetFooter>
            <SheetClose asChild>
              {!cart || cart.lines.length === 0 ? (
                <Button type="submit" className="w-full uppercase font-bold">
                  Continuar comprando
                </Button>
              ) : (
                <Button asChild className="p-3 w-full text-lg h-[27]">
                  <a href={cart.checkoutUrl}>Ir a pagar</a>
                </Button>
              )}
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
