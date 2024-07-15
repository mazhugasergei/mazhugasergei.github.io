import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Discover implemented insperations",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="py-12">{children}</main>
}
