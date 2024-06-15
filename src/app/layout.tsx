import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header, Nav } from '~/app/_component'
import { Inner } from '~/app/_component/ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Hiranuma Shuya',
    template: '%s | Hiranuma Shuya',
  },
  description: 'I’m an Japanese Software Engineer.',
  openGraph: {
    title: {
      default: 'Hiranuma Shuya',
      template: '%s | Hiranuma Shuya',
    },
    description: 'I’m an Japanese Software Engineer.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Hiranuma Shuya',
    images: [
      {
        url: '/img/portfolio.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  generator: 'Next.js',
  keywords: ['エンジニア', 'デザイン', 'プログラミング', 'システム開発', 'WEBアプリケーション', 'DX', 'IT'],
  authors: [{ name: 'Hiranuma Shuya' }],
  creator: 'Hiranuma Shuya',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: any
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Header />
          <main className="pb-32 md:pt-8">
            <Inner>{children}</Inner>
          </main>
          <Nav />
        </ThemeProvider>
      </body>
    </html>
  )
}
