import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "HealthGuard NE - Water Disease Monitoring",
  description: "Smart health monitoring system for water-borne diseases in rural Northeast India",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          {children}
          <Navigation />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
