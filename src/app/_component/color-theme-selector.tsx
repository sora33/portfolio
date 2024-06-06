'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ColorThemeSelector = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="rounded border border-slate-300 dark:border-slate-700 size-6" />
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      className="size-6 text-orange-500 hover:text-orange-600"
    >
      {resolvedTheme === 'light' ? <SunIcon className="" /> : <MoonIcon className="" />}
    </button>
  )
}
