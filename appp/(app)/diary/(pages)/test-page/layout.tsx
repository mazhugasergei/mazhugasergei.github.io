import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test Page",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
