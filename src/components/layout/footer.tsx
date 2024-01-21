import Link from 'next/link'
import { Suspense } from 'react'

import { getMenu } from '@lib/shopify'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import FacebookLogoIcon from '@ui/icons/facebook'
import LogoType from '@ui/icons/logotype'
import YoutubeLogoIcon from '@ui/icons/youtube'
import FooterMenu from '@ui/layout/footer-menu'
import { Separator } from '@ui/ui/separator'
import { Skeleton } from '@ui/ui/skeleton'

export default async function Footer() {
  const menu_about = await getMenu('next-js-frontend-footer-menu-about')
  const menu_policies = await getMenu('next-js-frontend-footer-menu-policies')

  return (
    <footer className="z-10 py-8 backdrop-blur-lg bg-secondary/95">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pt-16 border-t-2 border-buttercup-600">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <Link className="flex items-center gap-2 text-white" href="/">
              <LogoType className="h-12 w-auto" />
            </Link>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.youtube.com/@MielesElGarrapato"
                target="_blank"
                rel="noreferrer"
                className="group rounded-md p-2 transition-colors hover:bg-background"
              >
                <span className="sr-only">Youtube</span>
                <YoutubeLogoIcon className="h-5 w-5" />
              </a>
              <Separator orientation="vertical" className="h-5 bg-buttercup-500" />
              <a
                href="https://www.instagram.com/mieleselgarrapato"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-background"
              >
                <span className="sr-only">Instagram</span>
                <InstagramLogoIcon className="h-5 w-5" />
              </a>
              <Separator orientation="vertical" className="h-5 bg-buttercup-500" />
              <a
                href="https://www.facebook.com/mieleselgarrapato"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-background"
              >
                <span className="sr-only">Facebook</span>
                <FacebookLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
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
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
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
        </div>
      </div>
    </footer>
  )
}
