export default function Video({
  src,
  border = false,
  className,
}: {
  src: string
  border?: boolean
  className?: string
}) {
  return (
    <video
      {...{ src }}
      autoPlay
      muted
      loop
      className={`w-full bg-[#000] ${border ? 'border border-[#282828]' : ''} rounded-[.75rem] my-3 ${className}`}
    />
  )
}
