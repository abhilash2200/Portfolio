import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors duration-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white hover:bg-blue-600",
        outline:
          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
        ghost:
          "bg-transparent text-blue-500 hover:bg-blue-50",
        link:
          "text-blue-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-full tracking-[2px]",
        md: "h-8 px-3 rounded-md text-sm gap-1.5",
        lg: "h-10 px-6 rounded-md text-base tracking-[2px] uppercase",
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
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
