"use client"

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import React from "react"

const CustomImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image> & { src: StaticImageData }
>(({ src, width, height, placeholder, className, ...props }, ref) => {
  return (
    <Image
      ref={ref}
      src={src}
      {...props}
      placeholder="blur"
      width={1000}
      height={1000}
      className={cn("w-full object-cover pointer-events-none border rounded-[.75rem] my-3", className)}
    />
  )
})

CustomImage.displayName = Image.displayName

export default CustomImage
