import { sorting } from '@lib/constants'
import Footer from '@ui/layout/footer'
import FilterList from '@ui/layout/search/filter'
import { Suspense } from 'react'

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-white md:flex-row pt-4 md:pt-8">
        <div className="md:w-[230px]">
          <FilterList list={sorting} title="Filtrar por:" />
        </div>
        <div className="min-h-screen w-full">{children}</div>
      </div>
      <Footer />
    </Suspense>
  )
}
