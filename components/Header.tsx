'use client'
import { useRouter } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import Button from './Button'

const Header = () => {
  const router = useRouter()

  return (
    <header className="fixed z-50 flex w-full items-center justify-between border-b border-default-grid-line bg-default-gray-dark px-8 py-5">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <span>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <span className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </span>
            ) : (
              siteMetadata.headerTitle
            )}
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden text-lg font-medium text-gray-100 transition-all duration-300 hover:text-default-primary sm:block"
          >
            {link.title}
          </Link>
        ))}
        <MobileNav />
      </div>
      <Button size="sm" inverted onClick={() => router.push('/contact')}>
        Let's Talk
      </Button>
    </header>
  )
}

export default Header
