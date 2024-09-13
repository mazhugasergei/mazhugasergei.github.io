import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diary",
  description: "Discover important memories",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
