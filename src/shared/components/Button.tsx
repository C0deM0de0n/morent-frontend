import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../utils'

const buttonVariants = cva(
  "inline-flex justify-center items-center text-sm font-semibold cursor-pointer transition disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm",
  {
    variants: {
      variant: {
        default: "bg-[#3563E9] text-white",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-[#3563E9] text-[#3563E9] bg-white hover:bg-gray-50",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "text-gray-700 hover:bg-gray-100",
        link: "text-blue-600 hover:underline underline-offset-4",
      },
      size: {
        default: "w-32 h-11",
        sm: "w-28 h-9 text-sm",
        lg: "w-36 h-12 text-base",
        icon: "w-11 h-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
