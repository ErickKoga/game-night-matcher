import { cn } from '@gnm/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'gnm:inline-flex gnm:items-center gnm:justify-center gnm:font-medium gnm:border gnm:border-transparent gnm:transition-colors gnm:focus:outline-none gnm:disabled:opacity-50 gnm:disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'gnm:bg-blue-600 gnm:hover:bg-blue-900 gnm:text-gray-100',
        secondary: 'gnm:bg-gray-200 gnm:text-gray-900 gnm:hover:bg-gray-300',
        outline:
          'gnm:bg-transparent gnm:border-gray-900 gnm:text-gray-900 gnm:hover:bg-gray-100',
        ghost: 'gnm:bg-transparent gnm:text-gray-900 gnm:hover:bg-gray-100',
      },
      size: {
        sm: 'gnm:px-3 gnm:py-1 gnm:text-sm',
        md: 'gnm:px-4 gnm:py-2 gnm:text-base',
        lg: 'gnm:px-6 gnm:py-3 gnm:text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  variant,
  size,
  className,
  type = 'button',
  loading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
}
