import { headingFont } from "@/app/fonts"
import { cn } from "@/app/lib/utils"
import React from "react"

export const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return <h1 ref={ref} {...props} className={cn(headingFont.className, className)} />
  }
)

export const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return <h2 ref={ref} {...props} className={cn(headingFont.className, className)} />
  }
)

export const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return <h3 ref={ref} {...props} className={cn(headingFont.className, className)} />
  }
)
