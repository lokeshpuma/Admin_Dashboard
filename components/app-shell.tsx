"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { hasSession } from "@/lib/auth"

const PUBLIC_PATHS = ["/login", "/register"]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [ready, setReady] = useState(false)

  const isPublicPath = PUBLIC_PATHS.includes(pathname)

  useEffect(() => {
    const authenticated = hasSession()

    if (!isPublicPath && !authenticated) {
      router.replace("/login")
      return
    }

    if (isPublicPath && authenticated) {
      router.replace("/")
      return
    }

    setReady(true)
  }, [isPublicPath, pathname, router])

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-muted-foreground">
        Loading...
      </div>
    )
  }

  if (isPublicPath) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
