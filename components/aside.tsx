import Nav from "./nav"
import Resolution from "./resolution"
import ThemeSwitch from "./theme-switch"

export default function Aside() {
  return (
    <aside className="max-w-[42rem] lg:h-screen lg:fixed top-0 flex lg:flex-col max-lg:items-center max-lg:justify-between max-lg:pb-[inherit] lg:py-[inherit] lg:px-6 max-lg:mx-auto">
      <h2 className="text-[1rem]">
        Mazhuga <br />
        Sergei
      </h2>

      <Nav className="max-lg:flex max-lg:justify-center lg:my-2" />

      <ThemeSwitch className="lg:self-start" />

      <div className="max-lg:hidden text-muted font-mono text-xs mt-auto">
        <Resolution />
      </div>
    </aside>
  )
}
