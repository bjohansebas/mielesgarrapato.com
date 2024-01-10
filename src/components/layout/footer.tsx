import Link from 'next/link'
import { Suspense } from 'react'

import { SITE_NAME } from '@lib/constants'
import { getMenu } from '@lib/shopify'
import FooterMenu from '@ui/layout/footer-menu'
import LogoSquare from '@ui/logo-square'
import { Skeleton } from '@ui/ui/skeleton'

export default async function Footer() {
  const menu_about = await getMenu('next-js-frontend-footer-menu-about')
  const menu_policies = await getMenu('next-js-frontend-footer-menu-policies')

  return (
    <footer className="text-sm text-card-foreground bg-card">
      <div className="flex flex-col mx-auto border-t w-full max-w-7xl md:justify-evenly md:flex-row px-6 py-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-white" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <div className="flex md:gap-16 flex-col md:flex-row gap-6">
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold">Nuestra Compañía</h3>
            <Suspense
              fallback={
                <div className="flex h-[188px] w-[200px] flex-col gap-2">
                  <Skeleton className="h-6" />
                  <Skeleton className="h-6" />
                </div>
              }
            >
              <FooterMenu
                menu={[
                  ...menu_about,
                  // { path: '/contacto', title: 'Contáctenos' }
                ]}
              />
            </Suspense>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold">Políticas</h3>
            <Suspense
              fallback={
                <div className="flex h-[188px] w-[200px] flex-col gap-2">
                  <Skeleton className="h-6" />
                  <Skeleton className="h-6" />
                  <Skeleton className="h-6" />
                </div>
              }
            >
              <FooterMenu menu={menu_policies} />
            </Suspense>
          </div>
        </div>
      </div>
    </footer>
  )
}
