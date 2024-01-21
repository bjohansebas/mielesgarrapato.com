import { constructMetadata } from '@lib/metadata'
import Footer from '@ui/layout/footer'

import { Suspense } from 'react'

export const runtime = 'edge'

export const metadata = constructMetadata({
  title: 'Compra miel 100% natural en Mieles El Garrapato',
})

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  )
}
