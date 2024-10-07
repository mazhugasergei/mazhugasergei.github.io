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
import Image, { StaticImageData } from "next/image"

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
      <DialogContent className="max-w-[90vw] max-h-[90vh] rounded-[.75rem] overflow-hidden p-0">
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          width={2000}
          height={2000}
          className="max-w-[90vw] max-h-[90vh] object-contain pointer-events-none"
        />
        <DialogClose className="cursor-zoom-out absolute inset-0" />
      </DialogContent>
    </Dialog>
  )
}
