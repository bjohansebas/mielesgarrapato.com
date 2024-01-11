import { Product } from '@lib/shopify/types'
import { AddToCart } from '@ui/cart/add-to-cart'
import Price from '@ui/price'
import Prose from '@ui/prose'
import { VariantSelector } from './variant-selector'

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col">
        <h1 className="mb-2 text-[2rem] font-semibold">{product.title}</h1>
        <div className="w-auto rounded-full text-xl text-muted-foreground">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <div className="mb-6 flex gap-4 flex-col w-full">
          <h4 className="uppercase text-buttercup-500">Detalles</h4>
          <div>
            <Prose className="text-sm leading-tight" html={product.descriptionHtml} />
          </div>
        </div>
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  )
}
