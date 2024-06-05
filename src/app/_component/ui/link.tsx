import NextLink from 'next/link'
import type { LinkProps } from 'next/link'
import type React from 'react'
import { tv } from 'tailwind-variants'

export const LinkTextVariants = tv({
  base: 'underline text-orange-500 hover:text-orange-600',
})

interface Props extends LinkProps {
  className?: string
  target?: string
  children: React.ReactNode
}

export const Link: React.FC<Props> = ({ children, className, ...Props }) => {
  return (
    <NextLink className={LinkTextVariants({ className })} {...Props}>
      {children}
    </NextLink>
  )
}
