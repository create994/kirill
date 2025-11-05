"use client"
import { useLanguage } from "@/hooks/useLanguage"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const { language, isLoaded } = useLanguage()

  // Show loading state until language is loaded
  if (!isLoaded) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-calm py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {language === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
          </h1>
          <p className="text-blue-200 text-lg">
            {language === "ru"
              ? "Узнайте, как мы собираем, используем и защищаем вашу личную информацию"
              : "Learn how we collect, use, and protect your personal information"}
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mb-6">
          <Link
            href="/privacy"
            className="inline-block text-blue-200 hover:text-white transition-colors duration-200 text-lg underline"
          >
            {language === "ru" ? "Политика конфиденциальности (скоро)" : "Privacy Policy (coming soon)"}
          </Link>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-blue-lg p-6 sm:p-8 mb-8">
          <div className="prose prose-gray max-w-none text-center">
            <div className="py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "ru" ? "Страница в разработке" : "Page Under Development"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "ru"
                  ? "Мы работаем над созданием подробной политики конфиденциальности для нашего сайта."
                  : "We are working on creating a detailed privacy policy for our website."}
              </p>
              <Link
                href="/privacy"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {language === "ru" ? "Перейти к политике конфиденциальности" : "Go to Privacy Policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
