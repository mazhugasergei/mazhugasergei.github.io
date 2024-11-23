import type { Metadata } from "next"
import { Aside } from "./components/aside"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="grid gap-6 p-4 lg:grid-cols-[14rem_1fr] xl:grid-cols-[14rem_1fr_14rem]">
            <Aside className="sticky top-4 h-[calc(100vh-2rem)]" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
