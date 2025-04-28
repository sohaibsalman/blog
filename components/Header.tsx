'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNav from './MobileNav'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="border-grid-line bg-gray-dark fixed top-0 z-50 flex w-full justify-between border-b px-8 py-5">
      <MobileNav />
      <Link href="/" aria-label={siteMetadata.headerTitle} className="flex">
        <div className="flex items-center justify-between">
          <div className="mr-3"></div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex space-x-4 leading-5 sm:-mr-6 sm:space-x-6 md:items-center">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
      </div>
      <Link href="/contact">
        <Button size="sm" inverted>
          Let's Talk
        </Button>
      </Link>
    </header>
  )
}

export default Header
