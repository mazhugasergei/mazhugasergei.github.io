import { cn } from "@/utils"
import Image, { StaticImageData } from "next/image"
import React from "react"

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof Image>, "alt"> {
  src: string | StaticImageData
  alt?: string
}

export const PolaroidImage = React.forwardRef<HTMLImageElement, Props>(
  ({ src, alt = "", className, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        width={45}
        height={45}
        className={cn("relative z-50 -rotate-6 border-[.2rem] border-b-[.5rem] border-[#fff]", className)}
        {...props}
      />
    )
  }
)

PolaroidImage.displayName = "PolaroidImage"
