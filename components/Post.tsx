import CopyURL from "@/components/CopyURL"

interface Props {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function Post({ title, subtitle, children }: Props) {
  return (
    <>
      {title && (
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1>{title}</h1>
            {subtitle && <div className="text-[0.8125rem] text-secondary">{subtitle}</div>}
          </div>
          <CopyURL />
        </div>
      )}
      {children}
    </>
  )
}
