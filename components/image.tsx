"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import React from "react"

export default function CustomImage({
  src,
  alt,
  border = false,
  className,
}: {
  src: StaticImageData
  alt: string
  border?: boolean
  className?: string
}) {
  const [zoomLevel, setZoomLevel] = React.useState(1)

  return (
    <Dialog>
      <DialogTrigger className="cursor-zoom-in rounded-[.75rem] overflow-hidden my-3">
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          width={1000}
          height={1000}
          className={cn("w-full object-cover pointer-events-none", border && "border", className)}
        />
      </DialogTrigger>
      <DialogContent className="isolate max-w-[90vw] max-h-[90vh] rounded-[.75rem] overflow-hidden p-0">
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <DialogClose className="cursor-zoom-out absolute z-[-1] inset-0" />

        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          width={2000}
          height={2000}
          className="max-w-[90vw] max-h-[90vh] object-contain pointer-events-none"
          style={{ transform: `scale(${zoomLevel})` }}
        />

        <div className="absolute left-4 top-[50%] -translate-y-1/2 flex flex-col rounded overflow-hidden">
          <button
            disabled={zoomLevel === 4}
            className="grid place-items-center w-9 h-9 text-black bg-white rounded-none disabled:opacity-70"
            onClick={() => setZoomLevel(Math.min(zoomLevel + 1, 4))}
          >
            <Plus size={16} />
          </button>
          <button
            disabled={zoomLevel === 1}
            className="grid place-items-center w-9 h-9 text-black bg-white rounded-none disabled:opacity-70"
            onClick={() => setZoomLevel(Math.max(zoomLevel - 1, 1))}
          >
            <Minus size={16} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
