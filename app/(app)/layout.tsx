import Aside from "@/components/aside"
import Contents from "@/components/contents"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[15rem_1fr_15rem] gap-8 text-[0.9375rem]">
      <Aside />
      <div className="max-w-[50rem] w-full py-12 mx-auto">{children}</div>
      <Contents />
    </div>
  )
}
