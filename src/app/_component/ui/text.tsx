import type React from 'react'
import { tv } from 'tailwind-variants'

export const TextVariants = tv({
  base: '',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm md:text-base',
      md: 'text-base',
      lg: 'text-3xl md:text-3xl',
      xl: 'text-3xl md:text-4xl',
      '2xl': 'text-2xl md:text-5xl',
    },
    color: {
      dark: 'text-slate-900 dark:text-slate-100',
      gray: 'text-slate-600 dark:text-slate-300',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'gray',
  },
})

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'dark' | 'gray'
  children: React.ReactNode
  className?: string
}
export const Text: React.FC<TextProps> = ({ size, color, children, className }) => {
  return <p className={TextVariants({ size, color, className })}>{children}</p>
}
