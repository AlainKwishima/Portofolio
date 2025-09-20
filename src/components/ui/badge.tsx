import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-md hover:shadow-primary/50',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline:
          'border border-muted text-muted-foreground hover:bg-muted/50'
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-sm',
        lg: 'px-3 py-1 text-sm'
      },
      pulse: {
        true: 'animate-pulse',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      pulse: false
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, pulse, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, pulse }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
