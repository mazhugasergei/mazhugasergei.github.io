"use client"

import { Unplug } from "lucide-react"

export default function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">500</h1>
      <h2>Oops, something happened</h2>
      <Unplug size={48} className="mt-4" />
      <button onClick={() => location.reload()} className="bg-primary text-background rounded-full px-4 py-1 mt-4">
        Retry
      </button>
    </div>
  )
}
