'use client'

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { updateItemQuantity } from '@ui/cart/actions'
import LoadingDots from '@ui/loading-dots'
import { Button } from '@ui/ui/button'

import type { CartItem } from '@lib/shopify/types'

import clsx from 'clsx'
import { useFormState, useFormStatus } from 'react-dom'

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault()
      }}
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      aria-disabled={pending}
      className={clsx(
        'flex h-full min-w-[36px] max-w-[36px] items-center justify-center px-2 rounded-full text-muted-foreground',
        {
          'cursor-not-allowed': pending,
          'ml-auto': type === 'minus',
        },
      )}
      variant="link"
    >
      {pending ? (
        <LoadingDots className="bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4" />
      ) : (
        <MinusIcon className="h-4 w-4" />
      )}
    </Button>
  )
}

export function EditItemQuantityButton({ item, type }: { item: CartItem; type: 'plus' | 'minus' }) {
  const [message, formAction] = useFormState(updateItemQuantity, null)
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1,
  }
  const actionWithVariant = formAction.bind(null, payload)

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  )
}
