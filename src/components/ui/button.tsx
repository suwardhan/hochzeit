import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'glass' | 'outline' | 'link'
  size?: 'sm' | 'default' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'glass', size = 'default', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50'
    const variants = {
      glass: 'btn-glass text-slate-800 hover:bg-white/90',
      outline: 'border-2 border-white/60 bg-white/30 backdrop-blur-md text-slate-800 hover:bg-white/50',
      link: 'bg-transparent text-slate-700 underline-offset-4 hover:underline',
    }
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      default: 'h-11 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
    }
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
