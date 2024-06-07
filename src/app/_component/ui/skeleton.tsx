import type React from 'react'
import { tv } from 'tailwind-variants'

export const SkeletonVariants = tv({
  base: 'rounded border border-slate-300 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 animate-pulse',
})

export interface SkeletonProps {
  className?: string
}
export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <div className={SkeletonVariants({ className })} />
}
