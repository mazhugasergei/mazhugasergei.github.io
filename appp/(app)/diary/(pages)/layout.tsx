import AsideAlt from "@/components/aside-alt"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-12">
      <AsideAlt title="Diary" href="/diary" />
      <main>{children}</main>
    </div>
  )
}
