import { ThemeProvider } from "@/components/theme-provide"
import { Metadata } from "next"
import "./styles/globals.scss"

export const metadata: Metadata = {
  title: {
    template: "%s | Mazhuga Sergei",
    default: "Mazhuga Sergei",
  },
  description: "A web developer with a passion for creating visually stunning and intuitive websites",
  keywords: [
    "Mazhuga",
    "Sergei",
    "mazhuga",
    "sergei",
    "developer",
    "web",
    "front-end",
    "back-end",
    "full-stack",
    "react",
    "next",
    "nextjs",
    "typescript",
    "tailwind",
    "tailwindcss",
    "css",
    "scss",
    "javascript",
    "js",
    "node",
    "npm",
  ],
  authors: [{ name: "Mazhuga Sergei", url: "https://mazhugasergei.github.io" }],
  creator: "Mazhuga Sergei",
  category: "developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
