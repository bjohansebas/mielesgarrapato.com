import Footer from '@ui/layout/footer'
import { Suspense } from 'react'

export const runtime = 'edge'

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
