import { mainFont } from "@/app/fonts"
import "@/app/globals.css"
import Aside from "@/components/aside"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

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
      <body className={mainFont.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="grid lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem] px-2">
            <Aside />
            <main className="h-[200vh]">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
