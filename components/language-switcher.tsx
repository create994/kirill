"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === "ru" ? "en" : "ru"
    changeLanguage(newLanguage)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-blue-300/50 hover:bg-white/20 bg-transparent text-white hover:text-white"
    >
      <Globe className="w-4 h-4 mr-1" />
      {language === "ru" ? "EN" : "RU"}
    </Button>
  )
}
