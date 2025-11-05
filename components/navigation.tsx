"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Crown, Menu, X } from "lucide-react"
import { useState, useMemo } from "react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/hooks/useLanguage"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, isLoaded } = useLanguage()

  const navItems = useMemo(
    () => ({
      ru: [
        { href: "/", label: "Главная" },
        { href: "/cv", label: "Обо мне" },
        { href: "/videos", label: "Видео" },
        { href: "/booking", label: "Записаться" },
      ],
      en: [
        { href: "/", label: "Home" },
        { href: "/cv", label: "About me" },
        { href: "/videos", label: "Videos" },
        { href: "/booking", label: "Book Lesson" },
      ],
    }),
    [],
  )

  // Don't render until language is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return null // Return null instead of a loading component to prevent layout shift
  }

  const currentNavItems = navItems[language]

  return (
    <nav className="bg-gradient-calm border-b border-blue-300/30 sticky top-0 z-50 shadow-blue-lg backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-blue-200" />
            <span className="text-xl font-bold text-white">
              {language === "ru" ? "Кирилл Шошин" : "Kirill Shoshin"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {currentNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={
                    pathname === item.href
                      ? "bg-blue-800 hover:bg-blue-900 text-white shadow-blue"
                      : "text-white hover:bg-white/20"
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <a href="https://t.me/SHOSHIN_KIRILL" target="_blank" rel="noopener noreferrer" className="ml-2">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-300/50 hover:bg-white/20 bg-transparent text-white hover:text-white"
              >
                <span className="mr-1">✈️</span>
                Telegram
              </Button>
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-300/30">
            <div className="flex flex-col space-y-2">
              {currentNavItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      pathname === item.href
                        ? "bg-blue-800 hover:bg-blue-900 text-white shadow-blue"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
