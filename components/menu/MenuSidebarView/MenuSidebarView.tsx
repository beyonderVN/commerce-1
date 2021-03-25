import { FC } from 'react'
import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { UserNav } from '@components/common'
import { useUI } from '@components/ui/context'
import { Cross } from '@components/icons'
import type { Page } from '@framework/common/get-all-pages'
import { useRouter } from 'next/router'
import getSlug from '@lib/get-slug'
import { Container } from '@components/ui'
interface Props {
  children?: any
  pages?: Page[]
}
const MenuSidebarView: FC<Props> = ({ pages }) => {
  const { sitePages, legalPages } = usePages(pages)
  const { closeSidebar } = useUI()
  const handleClose = () => closeSidebar()
  const error = null
  const success = null

  return (
    <div className={s.root}>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex justify-between space-x-3 items-center">
          <div className="h-7 flex items-center">
            <button
              onClick={handleClose}
              aria-label="Close panel"
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-1">
            <UserNav />
          </div>
        </div>
      </header>

      <div className="px-4 pt-12 pb-4 sm:px-6 space-y-16">
        <div className="flex">
          <div className="flex-1 space-y-1">
            <div className="font-semibold text-lg mb-2">Language</div>
            <div className="cursor-pointer hover:text-primary text-lg text-primary">
              English
            </div>
            <div className="cursor-pointer hover:text-primary text-lg">
              French
            </div>
            <div className="cursor-pointer hover:text-primary text-lg">
              Arabric
            </div>
          </div>
          <div className="w-3" />
          <div className="flex-1 space-y-1">
            <div className="font-semibold text-lg mb-2">Currencies</div>
            <div className="cursor-pointer hover:text-primary text-lg text-primary">
              USD - US Dollar
            </div>
            <div className="cursor-pointer hover:text-primary text-lg">
              Euro
            </div>
            <div className="cursor-pointer hover:text-primary text-lg">
              Pround
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-lg font-semibold  hover:text-accents-6 transition ease-in-out duration-150">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-lg font-semibold  hover:text-accents-6 transition ease-in-out duration-150">
                  Careers
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/blog">
                <a className="text-lg font-semibold  hover:text-accents-6 transition ease-in-out duration-150">
                  Blog
                </a>
              </Link>
            </li>
            {sitePages.map((page) => (
              <li key={page.url} className="py-3 md:py-0 md:pb-4">
                <Link href={page.url!}>
                  <a className="text-lg font-semibold  hover:text-accents-6 transition ease-in-out duration-150">
                    {page.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <a className="text-lg font-semibold  hover:text-accents-6 transition ease-in-out duration-150">
            Contact us
          </a>
          <p className="text-lg leading-loose text-accents-6">
            69 Halsey St, Ny 10002, New York, United States
            <br />
            support.center@unero.co
            <br />
            (0091) 8547 632521
          </p>
        </div>
        <div className="space-y-6">
          <a className="text-lg font-semibold  hover:text-accents-6 transition ease-in-out duration-150">
            Follow US On Socials
          </a>
          <div className="flex space-x-4">
            <span className="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </span>
            <span className="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </span>
            <span className="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
              </svg>
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LEGAL_PAGES = ['terms-of-use', 'shipping-returns', 'privacy-policy']
function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []
  const legalPages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)

      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return

      if (isLegalPage(slug, locale)) {
        legalPages.push(page)
      } else {
        sitePages.push(page)
      }
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
    legalPages: legalPages.sort(bySortOrder),
  }
}

const isLegalPage = (slug: string, locale?: string) =>
  locale
    ? LEGAL_PAGES.some((p) => `${locale}/${p}` === slug)
    : LEGAL_PAGES.includes(slug)

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}
export default MenuSidebarView
