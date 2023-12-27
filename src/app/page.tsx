import { Carousel } from '@ui/carousel'
import { ThreeItemGrid } from '@ui/grid/three-items'
import Footer from '@ui/layout/footer'
import { Suspense } from 'react'

export const runtime = 'edge'

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  )
}
