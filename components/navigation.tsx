"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Droplets, AlertTriangle, Users, BookOpen } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", icon: Shield, label: "Admin Dashboard", shortLabel: "Admin" },
    { href: "/community", icon: Heart, label: "Community Portal", shortLabel: "Community" },
    { href: "/monitoring", icon: Droplets, label: "Water Monitoring", shortLabel: "Monitor" },
    { href: "/alerts", icon: AlertTriangle, label: "Alert Management", shortLabel: "Alerts" },
    { href: "/volunteers", icon: Users, label: "Volunteer Management", shortLabel: "Volunteers" },
    { href: "/education", icon: BookOpen, label: "Educational Resources", shortLabel: "Learn" },
  ]

  return (
    <>
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">HealthGuard</span>
                <p className="text-xs text-muted-foreground">Disease Monitoring System</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`flex items-center space-x-2 transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden lg:inline font-medium">{item.label}</span>
                      <span className="lg:hidden font-medium">{item.shortLabel}</span>
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-50 shadow-lg">
        <div className="grid grid-cols-6 py-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`flex flex-col items-center space-y-1 h-auto py-3 px-2 transition-all duration-200 ${
                    isActive ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{item.shortLabel}</span>
                </Button>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="hidden md:block h-16" />
      <div className="md:hidden h-20" />
    </>
  )
}
