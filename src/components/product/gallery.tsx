'use client'

import { createUrl } from '@lib/utils'
import { GridTileImage } from '@ui/grid/tile'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const imageSearchParam = searchParams.get('image')
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0

  const nextSearchParams = new URLSearchParams(searchParams.toString())
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0
  nextSearchParams.set('image', nextImageIndex.toString())

  const previousSearchParams = new URLSearchParams(searchParams.toString())
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
  previousSearchParams.set('image', previousImageIndex.toString())

  return (
    <>
      <div className="h-full w-full mb-2">
        {images[imageIndex] && (
          <Image
            className="rounded-3xl h-full object-cover"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
            width={960}
            height={1200}
          />
        )}
      </div>

      {images.length > 1 ? (
        <ul className="my-3 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex
            const imageSearchParams = new URLSearchParams(searchParams.toString())

            imageSearchParams.set('image', index.toString())

            return (
              <li key={image.src} className="h-20 w-20">
                <Link
                  aria-label="Enlarge product image"
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                  className="h-full w-full"
                >
                  <GridTileImage alt={image.altText} src={image.src} width={160} height={160} active={isActive} />
                </Link>
              </li>
            )
          })}
        </ul>
      ) : null}
    </>
  )
}
