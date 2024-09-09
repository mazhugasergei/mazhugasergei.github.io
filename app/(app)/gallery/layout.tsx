import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Discover implemented insperations",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-12">
      <div className="mb-4">
        <h1 className="text-4xl">Gallery</h1>
        <p>Discover implemented insperations.</p>
      </div>

      {children}
    </main>
  )
}
