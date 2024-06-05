'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const FaceImage = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="rounded-full border size-[120px]" />
  }

  return (
    <>
      <Image
        src={resolvedTheme === 'light' ? '/me_white_sm.png' : '/me_black_sm.png'}
        alt="logo"
        width={120}
        height={120}
      />
    </>
  )
}
