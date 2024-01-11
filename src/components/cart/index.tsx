import { getCart } from '@lib/shopify'
import { Cart as CartType } from '@lib/shopify/types'
import { cookies } from 'next/headers'
import CartModal from './modal'

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value
  let cart: CartType | undefined

  if (cartId) {
    cart = await getCart(cartId)
  }

  return <CartModal cart={cart} />
}
