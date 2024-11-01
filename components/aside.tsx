import Nav from "./nav"
import Resolution from "./resolution"
import ThemeSwitch from "./theme-switch"

export default function Aside() {
  return (
    <aside>
      <AsideContent />
    </aside>
  )
}

const AsideContent = () => (
  <div className="max-xl:hidden sticky top-0 h-screen p-4 pr-0">
    <div className="flex flex-col h-full bg-[#00000010] dark:bg-[#ffffff10] rounded-lg p-6">
      <h2 className="text-[1rem]">
        Mazhuga <br />
        Sergei
      </h2>

      <Nav className="my-4" />

      <ThemeSwitch />

      <Resolution className="mt-auto" />
    </div>
  </div>
)
