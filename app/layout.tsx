import { Aside } from "@/app/components/aside"
import { ThemeProvider } from "@/app/components/theme-provider"
import "@/app/globals.css"
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="grid lg:grid-cols-[14rem_1fr] xl:grid-cols-[14rem_1fr_14rem] gap-6 p-4">
            <Aside className="sticky top-4 h-[calc(100vh-2rem)]" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
