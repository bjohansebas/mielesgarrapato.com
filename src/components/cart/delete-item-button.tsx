'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useFormState, useFormStatus } from 'react-dom'

import type { CartItem } from '@lib/shopify/types'
import { removeItem } from '@ui/cart/actions'
import LoadingDots from '@ui/loading-dots'
import { Button } from '@ui/ui/button'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault()
      }}
      variant="link"
      aria-label="Remove cart item"
      aria-disabled={pending}
      className={clsx(
        'ease flex items-center justify-center rounded-full transition-all duration-200 hover:text-red-500 px-1 py-1',
        {
          'cursor-not-allowed': pending,
        },
      )}
    >
      {pending ? <LoadingDots className="bg-white" /> : <TrashIcon className="h-5 w-5 text-inherit" />}
    </Button>
  )
}

export function DeleteItemButton({ item }: { item: CartItem }) {
  const [message, formAction] = useFormState(removeItem, null)
  const itemId = item.id
  const actionWithVariant = formAction.bind(null, itemId)

  return (
    <form action={actionWithVariant}>
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  )
}
