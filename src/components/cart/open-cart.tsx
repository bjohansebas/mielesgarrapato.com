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
    <>
      <ShoppingCartIcon className={clsx('h-6 transition-all ease-in-out hover:scale-110', className)} />
      {quantity ? (
        <div className="absolute right-0 top-[2px] h-4 w-4 rounded-full bg-buttercup-700 text-[11px] font-bold flex justify-center items-center text-white">
          {quantity}
        </div>
      ) : null}
    </>
  )
}
