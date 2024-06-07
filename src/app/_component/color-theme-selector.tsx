'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Skeleton } from '~/app/_component/ui'

export const ColorThemeSelector = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Skeleton className="size-6" />
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      className="size-6 text-orange-500 hover:text-orange-600"
      aria-label={resolvedTheme === 'light' ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
    >
      {resolvedTheme === 'light' ? <SunIcon className="" /> : <MoonIcon className="" />}
    </button>
  )
}
