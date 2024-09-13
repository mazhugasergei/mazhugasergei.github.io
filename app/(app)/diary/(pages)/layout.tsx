import AsideAlt from "@/components/aside-alt"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideAlt title="Diary" href="/diary" />
      {children}
    </>
  )
}
