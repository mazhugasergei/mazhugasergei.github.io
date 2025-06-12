"use client"

import { cn } from "@/utils"
import React from "react"

export const VladivostokClock = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const [time, setTime] = React.useState("00:00 AM")

  React.useEffect(() => {
    const update = () => {
      const now = new Date()
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Vladivostok",
        hour: "2-digit",
        minute: "2-digit",
      })
      setTime(time)
    }

    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={cn(
        "border-foreground rounded-full border px-3 py-1 text-[.65rem] font-bold whitespace-nowrap",
        className
      )}
      {...props}
    >
      VLADIVOSTOK {time}
    </span>
  )
}
