import type { Metadata } from "next"
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
          <main className="mx-auto max-w-7xl px-4 md:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
