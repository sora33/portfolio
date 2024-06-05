'use client'
import {
  CodeBracketIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'ホーム',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    label: '記事',
    icon: <DocumentTextIcon />,
    href: '/article',
  },
  {
    label: '技術スタック',
    icon: <CodeBracketIcon />,
    href: '/stack',
  },
  {
    label: 'ポートフォリオ',
    icon: <CursorArrowRaysIcon />,
    href: '/portfolio',
  },
  // {
  //   label: 'いいね',
  //   icon: <HandThumbUpIcon />,
  //   href: '/good',
  // },
  {
    label: 'お問い合わせ',
    icon: <EnvelopeIcon />,
    href: '/contact',
  },
]

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav
      aria-labelledby="nav"
      className="fixed bottom-6 lg:bottom-10 z-50 left-1/2 -translate-x-1/2 bg-background-50/50 rounded-full backdrop-blur-md border border-foreground/30 shadow-foreground"
    >
      <div className="flex p-1 px-4 relativeoverflow-hidden w-max gap-2">
        {navItems.map((item) => {
          return (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              aria-current={pathname === item.href ? 'page' : undefined}
              tabIndex={0}
              className={`size-9 p-2 text-foreground/80 rounded-full hover:bg-foreground/10 hover:text-foreground transition-all duration-200
                ${
                  pathname === item.href
                    ? 'text-orange-500 bg-orange-500/10 hover:bg-orange-500/10 hover:text-orange-500'
                    : ''
                }
                `}
            >
              {item.icon}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
