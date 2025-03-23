import { ThemeProvider } from "@/components/theme-provider"
import { Wrapper } from "@/components/ui/wrapper"
import bg from "@/images/bg.jpg"
import noise from "@/images/noise.png"
import "@/styles/index.css"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: {
    template: "%s | Mazhuga Sergei",
    default: "Mazhuga Sergei",
  },
  description: "A web developer with a passion for creating visually stunning and intuitive websites",
  authors: [{ name: "Mazhuga Sergei", url: "https://mazhugasergei.github.io" }],
  creator: "Mazhuga Sergei",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <NoiseOverlay />
          <BG />
          <div className="grid flex-1 grid-rows-[auto_1fr_auto]">
            <Header />
            <Wrapper>{children}</Wrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

const NoiseOverlay = () => (
  <div
    className="pointer-events-none absolute z-50 h-full w-full object-cover opacity-12"
    style={{
      backgroundImage: `url(${noise.src})`,
      backgroundSize: "200px 200px",
    }}
  />
)

const BG = () => (
  <div className="absolute isolate -z-10 h-screen w-full">
    <Image
      src={bg}
      alt=""
      placeholder="blur"
      className="absolute h-full w-full object-cover brightness-[.15] grayscale"
    />
    {/* <div className="absolute inset-0 shadow-[inset_0_-15rem_5rem_-5rem_var(--background)]" /> */}
  </div>
)

const Header = () => (
  <header className="border-b">
    <Wrapper className="py-4"></Wrapper>
  </header>
)
const Footer = () => (
  <footer className="border-t">
    <Wrapper className="py-4"></Wrapper>
  </footer>
)
