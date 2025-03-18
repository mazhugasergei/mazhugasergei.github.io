import { cn } from "@/utils"
import React from "react"

export const Wrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className="mx-auto grid w-full max-w-7xl px-4" {...props}>
        <div className={cn("border-x px-4", className)}>{props.children}</div>
      </div>
    )
  }
)

Wrapper.displayName = "Wrapper"
