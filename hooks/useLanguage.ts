"use client"

import { useState, useEffect, useCallback } from "react"

export const useLanguage = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get initial language from localStorage with fallback
    const savedLanguage =
      typeof window !== "undefined" ? (localStorage.getItem("language") as "ru" | "en" | null) : null

    if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
    setIsLoaded(true)

    // Listen for language changes with passive listener
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("languageChange", handleLanguageChange as EventListener, { passive: true })
      return () => {
        window.removeEventListener("languageChange", handleLanguageChange as EventListener)
      }
    }
  }, [])

  const changeLanguage = useCallback(
    (newLanguage: "ru" | "en") => {
      if (language === newLanguage) return // Prevent unnecessary updates

      setLanguage(newLanguage)
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLanguage)
        window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
      }
    },
    [language],
  )

  return { language, changeLanguage, isLoaded }
}
