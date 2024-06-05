import type React from 'react'
import { tv } from 'tailwind-variants'
import { type TextProps, TextVariants } from '~/app/_component/ui/text'

const TitleVariants = tv({
  extend: TextVariants,
  base: 'font-bold tracking-wide',
  defaultVariants: {
    size: 'lg',
    color: 'dark',
  },
})

interface TitleProps extends TextProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title: React.FC<TitleProps> = ({ size, color, children, className, as }) => {
  const Tag = as
  return <Tag className={TitleVariants({ size, color, className })}>{children}</Tag>
}
