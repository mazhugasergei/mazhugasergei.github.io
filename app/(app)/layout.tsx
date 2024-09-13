import Dock from "@/components/dock"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="py-12">{children}</div>
      <Dock />
    </>
  )
}
