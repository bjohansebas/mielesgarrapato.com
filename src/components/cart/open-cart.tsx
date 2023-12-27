import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string
  quantity?: number
}) {
  return (
    <div className="relative flex items-center justify-center">
      <ShoppingCartIcon className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)} />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-4 -mt-4 h-4 w-4 rounded bg-buttercup-700 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  )
}
