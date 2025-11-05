"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cookie, Shield, Info } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/useLanguage"

export default function CookiePolicyPage() {
  const { language, isLoaded } = useLanguage()

  const content = {
    ru: {
      title: "Политика использования файлов cookie",
      subtitle: "Информация о том, как мы используем файлы cookie на нашем сайте",
      lastUpdated: "Последнее обновление: 18 июля 2025",
      backBtn: "На главную",

      whatAreCookies: {
        title: "Что такое файлы cookie?",
        content: `Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайтов. Они помогают сайтам запоминать информацию о вашем визите, что может сделать ваше следующее посещение более удобным и полезным.`,
      },

      howWeUseCookies: {
        title: "Как мы используем файлы cookie",
        content: `Мы используем файлы cookie для следующих целей:`,
        purposes: [
          "Сохранение ваших языковых предпочтений (русский/английский)",
          "Обеспечение правильной работы функций сайта",
          "Улучшение производительности и пользовательского опыта",
          "Анализ использования сайта для его улучшения",
        ],
      },

      typesOfCookies: {
        title: "Типы файлов cookie, которые мы используем",
        essential: {
          title: "Необходимые файлы cookie",
          description:
            "Эти файлы cookie необходимы для работы сайта и не могут быть отключены. Они обычно устанавливаются в ответ на ваши действия, такие как выбор языка или заполнение форм.",
        },
        functional: {
          title: "Функциональные файлы cookie",
          description:
            "Эти файлы cookie позволяют сайту запоминать ваши предпочтения и обеспечивать расширенную функциональность.",
        },
        analytics: {
          title: "Аналитические файлы cookie",
          description:
            "Эти файлы cookie помогают нам понять, как посетители взаимодействуют с сайтом, предоставляя информацию о количестве посетителей, времени пребывания на сайте и других статистических данных.",
        },
      },

      manageCookies: {
        title: "Управление файлами cookie",
        content: `Вы можете контролировать и/или удалять файлы cookie по своему усмотрению. Вы можете удалить все файлы cookie, которые уже находятся на вашем компьютере, и настроить большинство браузеров так, чтобы они не сохранялись.

Однако, если вы это сделаете, вам может потребоваться вручную настраивать некоторые предпочтения каждый раз при посещении сайта, и некоторые службы и функции могут не работать.`,
      },

      thirdParty: {
        title: "Сторонние файлы cookie",
        content: `Некоторые файлы cookie на нашем сайте размещаются третьими сторонами, такими как:`,
        services: [
          "Cal.com - для системы бронирования уроков",
          "Rutube - для встроенных видео",
          "Другие встроенные сервисы для улучшения функциональности сайта",
        ],
      },

      contact: {
        title: "Свяжитесь с нами",
        content: `Если у вас есть вопросы о нашей политике использования файлов cookie, пожалуйста, свяжитесь с нами:`,
      },
    },

    en: {
      title: "Cookie Policy",
      subtitle: "Information about how we use cookies on our website",
      lastUpdated: "Last updated: July 18, 2025",
      backBtn: "To the main page",

      whatAreCookies: {
        title: "What are cookies?",
        content: `Cookies are small text files that are stored on your device when you visit websites. They help websites remember information about your visit, which can make your next visit easier and more useful.`,
      },

      howWeUseCookies: {
        title: "How we use cookies",
        content: `We use cookies for the following purposes:`,
        purposes: [
          "Saving your language preferences (Russian/English)",
          "Ensuring proper website functionality",
          "Improving performance and user experience",
          "Analyzing website usage for improvements",
        ],
      },

      typesOfCookies: {
        title: "Types of cookies we use",
        essential: {
          title: "Essential cookies",
          description:
            "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as language selection or filling in forms.",
        },
        functional: {
          title: "Functional cookies",
          description:
            "These cookies allow the website to remember your preferences and provide enhanced functionality.",
        },
        analytics: {
          title: "Analytics cookies",
          description:
            "These cookies help us understand how visitors interact with the website by providing information about the number of visitors, time spent on the site, and other statistical data.",
        },
      },

      manageCookies: {
        title: "Managing cookies",
        content: `You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.

However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functions may not work.`,
      },

      thirdParty: {
        title: "Third-party cookies",
        content: `Some cookies on our site are placed by third parties, such as:`,
        services: [
          "Cal.com - for lesson booking system",
          "Rutube - for embedded videos",
          "Other embedded services to enhance website functionality",
        ],
      },

      contact: {
        title: "Contact us",
        content: `If you have any questions about our cookie policy, please contact us:`,
      },
    },
  }

  // Show loading state until language is loaded
  if (!isLoaded) {
    return null
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-chess py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-blue-100 text-lg mb-2">{t.subtitle}</p>
          <p className="text-blue-200 text-sm">{t.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* What are cookies */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Cookie className="w-5 h-5 mr-2" />
                {t.whatAreCookies.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 leading-relaxed">{t.whatAreCookies.content}</p>
            </CardContent>
          </Card>

          {/* How we use cookies */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                {t.howWeUseCookies.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">{t.howWeUseCookies.content}</p>
              <ul className="space-y-2">
                {t.howWeUseCookies.purposes.map((purpose, index) => (
                  <li key={index} className="flex items-start text-blue-800">
                    <span className="text-blue-600 mr-2">•</span>
                    {purpose}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Types of cookies */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                {t.typesOfCookies.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">{t.typesOfCookies.essential.title}</h4>
                <p className="text-blue-800 text-sm">{t.typesOfCookies.essential.description}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">{t.typesOfCookies.functional.title}</h4>
                <p className="text-blue-800 text-sm">{t.typesOfCookies.functional.description}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">{t.typesOfCookies.analytics.title}</h4>
                <p className="text-blue-800 text-sm">{t.typesOfCookies.analytics.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Managing cookies */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">{t.manageCookies.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 leading-relaxed whitespace-pre-line">{t.manageCookies.content}</p>
            </CardContent>
          </Card>

          {/* Third-party cookies */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">{t.thirdParty.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">{t.thirdParty.content}</p>
              <ul className="space-y-2">
                {t.thirdParty.services.map((service, index) => (
                  <li key={index} className="flex items-start text-blue-800">
                    <span className="text-blue-600 mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">{t.contact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">{t.contact.content}</p>
              <div className="space-y-2">
                <p className="text-blue-800">
                  <strong>Telegram: </strong>
                  <a
                    href="https://t.me/SHOSHIN_KIRILL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    @SHOSHIN_KIRILL
                  </a>
                </p>
                <p className="text-blue-800">
                  <strong>Email: </strong>
                  <a href="mailto:conciliateur@mail.ru" className="text-blue-600 hover:text-blue-800 hover:underline">
                    conciliateur@mail.ru
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back Navigation */}
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-blue-200 text-white hover:bg-blue-800/30 bg-transparent">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backBtn}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
