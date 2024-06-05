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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
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
          <main className="py-8">
            <Inner>{children}</Inner>
          </main>
          <Nav />
        </ThemeProvider>
      </body>
    </html>
  )
}
