import { cn } from "@/utils"
import React from "react"

export const Wrapper = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="mx-auto grid w-full max-w-7xl px-4" {...props}>
      <div className={cn("border-x p-4", className)}>{props.children}</div>
    </div>
  )
}
