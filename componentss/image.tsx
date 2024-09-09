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
    <Image
      {...{ src, alt }}
      placeholder="blur"
      width={1000}
      height={1000}
      className={`w-full object-cover rounded-[.75rem] pointer-events-none ${border ? "border" : ""} my-3 ${className}`}
    />
  )
}
