import Dock from "@/components/dock"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Dock />
    </>
  )
}
