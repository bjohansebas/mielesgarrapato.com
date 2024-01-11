'use client'

import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'

import { ProductVariant } from '@lib/shopify/types'

import { PlusIcon } from '@heroicons/react/24/outline'
import { addItem } from '@ui/cart/actions'
import LoadingDots from '@ui/loading-dots'
import { Button } from '@ui/ui/button'

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean
  selectedVariantId: string | undefined
}) {
  const { pending } = useFormStatus()

  if (!availableForSale) {
    return (
      <Button aria-disabled className="cursor-not-allowed opacity-60 hover:opacity-60 w-full">
        Sin existencias
      </Button>
    )
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label="Por favor, selecciona una opción"
        aria-disabled
        className="cursor-not-allowed opacity-60 hover:opacity-60 w-full"
      >
        <PlusIcon className="h-5 mr-6" />
        Agregar al carrito
      </Button>
    )
  }

  return (
    <Button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault()
      }}
      aria-label="Agregar al carrito"
      aria-disabled={pending}
      className={clsx('w-full', {
        'hover:opacity-90': true,
        'cursor-not-allowed opacity-60': pending,
      })}
    >
      {pending ? <LoadingDots className="mb-3 bg-white" /> : <PlusIcon className="h-5" />}
      Agregar al carrito
    </Button>
  )
}

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[]
  availableForSale: boolean
}) {
  const [message, formAction] = useFormState(addItem, null)
  const searchParams = useSearchParams()
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === searchParams.get(option.name.toLowerCase())),
  )
  const selectedVariantId = variant?.id || defaultVariantId
  const actionWithVariant = formAction.bind(null, selectedVariantId)

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  )
}
