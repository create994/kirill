"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Crown, ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/useLanguage"
import { useMemo, useCallback } from "react"
// Add to imports
import LazyIframe from "@/components/lazy-iframe"
import { Badge } from "@/components/ui/badge"

export default function BookingPage() {
  const { language, isLoaded } = useLanguage()

  const content = useMemo(
    () => ({
      ru: {
        title: "Записаться на урок шахмат",
        subtitle: "Запланируйте персональный урок шахмат с Мастером FIDE Кириллом Шошиным",
        backHome: "Назад на главную",
        price: "Цена: 2 450 ₽/час",
        duration: "Продолжительность: 1 час",
        description:
          "Выберите удобное время для персонального урока шахмат. Занятия проводятся онлайн через Zoom, Telegram или WhatsApp. Свяжитесь со мной в",
        benefits: [
          "🎯 Персональный подход к обучению",
          "📚 Собственные методические материалы",
          "🏆 Опыт работы с учениками всех уровней",
          "🌍 Занятия на русском или английском языке",
        ],
        bookAnother: "Записаться на другой урок",
        bookAnotherDesc: "Нужно записаться на еще один урок?",
        packagesTitle: "Пакетные предложения",
        packagesSubtitle: "Экономьте до 20% при покупке пакетов уроков",
        orderPackage: "Заказать пакет",
        packageTip: "💡 Совет: Пакетные предложения включают персональные материалы и домашние задания",
        contactTelegram: "Свяжитесь со мной в Telegram для оформления пакета",
        save: "Экономия",
        lessons: "уроков",
        popular: "Популярный",

        // Package descriptions
        beginnerPackage: {
          title: "Начинающий",
          features: ["Основы шахмат", "Расчет вариантов на несколько ходов", "Простая тактика", "Дебютные принципы"],
        },
        intermediatePackage: {
          title: "Средний",
          features: [
            "Расчет длинных вариантов",
            "Комбинационное видение",
            "Основы стратегии",
            "Шахматная культура",
            "Полноценный дебютный репертуар",
            "Анализ партий",
          ],
        },
        expertPackage: {
          title: "Эксперт",
          features: ["Мастерский уровень", "Стратегическое понимание", "Техника эндшпиля", "Психологический аспект"],
        },
      },
      en: {
        title: "Book a Chess Lesson",
        subtitle: "Schedule a personalized chess lesson with FIDE Master Kirill Shoshin",
        backHome: "Back to Home",
        price: "Price: 2,450 ₽/hour",
        duration: "Duration: 1 hour",
        description:
          "Choose a convenient time for your personalized chess lesson. Lessons are conducted online via Zoom, Telegram, or WhatsApp. Contact me at",
        benefits: [
          "🎯 Personalized teaching approach",
          "📚 Original methodological materials",
          "🏆 Experience with students of all levels",
          "🌍 Lessons in Russian or English",
        ],
        bookAnother: "Book Another Lesson",
        bookAnotherDesc: "Need to book another",
        packagesTitle: "Package Offers",
        packagesSubtitle: "Save up to 20% when purchasing packages",
        orderPackage: "Order Package",
        packageTip: "💡 Tip: Package offers include personalized materials and homework assignments",
        contactTelegram: "Contact me on Telegram to purchase a package",
        save: "Save",
        lessons: "lessons",
        popular: "Popular",

        beginnerPackage: {
          title: "Beginner",
          features: ["Chess basics", "Options calculation for several moves", "Simple tactics", "Opening principles"],
        },
        intermediatePackage: {
          title: "Intermediate",
          features: [
            "Long options calculation",
            "Combinational vision",
            "Strategy basics",
            "Chess culture",
            "Full debut repertoire",
            "Game analysis",
          ],
        },
        expertPackage: {
          title: "Expert",
          features: ["Master level training", "Strategy principles", "Endgame training", "Psychological aspect"],
        },
      },
    }),
    [],
  )

  const reloadCalendar = useCallback(() => {
    window.location.reload()
  }, [])

  // Show loading state until language is loaded
  if (!isLoaded) {
    return null
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-chess py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-blue-100 text-lg mb-4">{t.subtitle}</p>
          <div className="flex justify-center items-center gap-6 mt-4">
            <p className="text-blue-200 text-lg font-semibold">{t.price}</p>
            <p className="text-blue-200 text-sm">{t.duration}</p>
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center justify-center">
              <Crown className="w-5 h-5 mr-2" />
              {language === "ru" ? "Преимущества занятий" : "Lesson Benefits"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 text-center mb-6">
              {t.description}{" "}
              <a
                href="https://t.me/SHOSHIN_KIRILL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                @SHOSHIN_KIRILL
              </a>
              {language === "ru" ? " для вопросов." : " for questions."}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="text-blue-900">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cal.com Booking Widget */}
        <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {language === "ru" ? "Выберите время урока" : "Choose Lesson Time"}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={reloadCalendar}
                className="border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                {t.bookAnother}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full">
              <LazyIframe
                src="https://cal.com/kirill-shoshin/занятие-по-шахматам?embed=true&theme=light&hideEventTypeDetails=false&layout=month_view"
                width="100%"
                height="700"
                title="Chess Lesson Booking"
                allow="camera; microphone; fullscreen; display-capture; autoplay"
              />
            </div>
          </CardContent>
        </Card>

        {/* Package Offers Section */}
        <div className="mt-8" id="packages">
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 text-center flex items-center justify-center">
                <Crown className="w-5 h-5 mr-2" />
                {t.packagesTitle}
              </CardTitle>
              <p className="text-blue-700 text-center">{t.packagesSubtitle}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Beginner Package */}
                <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <CardTitle className="text-green-800">{t.beginnerPackage.title}</CardTitle>
                    <div className="text-3xl font-bold text-green-900">16 990 ₽</div>
                    <div className="text-ml text-green-600">{language === "ru" ? "8 занятий" : "8 lessons"}</div>
                    <div className="text-xs text-green-500"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="text-sm text-green-700 space-y-2 mb-4">
                      {t.beginnerPackage.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <a href="https://t.me/SHOSHIN_KIRILL" target="_blank" rel="noopener noreferrer">
                        {t.orderPackage}
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Intermediate Package */}
                <Card className="border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow ring-2 ring-blue-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <CardTitle className="text-blue-800">{t.intermediatePackage.title}</CardTitle>
                    <div className="text-3xl font-bold text-blue-900">20 990 ₽</div>
                    <div className="text-ml text-blue-600">{language === "ru" ? "10 занятий" : "10 lessons"}</div>
                    <div className="text-xs text-blue-500"></div>
                    <div className="text-center">
                      <Badge className="bg-blue-600 text-white mt-1">{t.popular}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="text-sm text-blue-700 space-y-2 mb-4">
                      {t.intermediatePackage.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <a href="https://t.me/SHOSHIN_KIRILL" target="_blank" rel="noopener noreferrer">
                        {t.orderPackage}
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Expert Package */}
                <Card className="border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">👑</span>
                    </div>
                    <CardTitle className="text-purple-800">{t.expertPackage.title}</CardTitle>
                    <div className="text-3xl font-bold text-purple-900">23 990 ₽</div>
                    <div className="text-ml text-purple-600">{language === "ru" ? "12 занятий" : "12 lessons"}</div>
                    <div className="text-xs text-purple-500"></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="text-sm text-purple-700 space-y-2 mb-4">
                      {t.expertPackage.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <a href="https://t.me/SHOSHIN_KIRILL" target="_blank" rel="noopener noreferrer">
                        {t.orderPackage}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 text-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>{t.packageTip}</strong>
                </p>
                <p className="text-amber-700 text-xs mt-1">{t.contactTelegram}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Book Another Lesson Section */}
        <div className="mt-8 text-center">
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-900 font-semibold">{t.bookAnotherDesc}</span>
              </div>
              <Button onClick={reloadCalendar} className="bg-blue-800 hover:bg-blue-700 text-white">
                <RefreshCw className="w-4 h-4 mr-2" />
                {t.bookAnother}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Section */}
        <div className="mt-8 pt-6 border-t border-blue-300/30">
          <div className="text-center">
            <p className="text-blue-200 text-xs sm:text-sm mb-2">
              {language === "ru"
                ? "Используя этот сайт, вы соглашаетесь с нашей политикой конфиденциальности и использованием файлов cookie."
                : "By using this site, you agree to our privacy policy and cookie usage."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="/cookie-policy" className="text-blue-300 hover:text-white hover:underline transition-colors">
                {language === "ru" ? "Политика использования файлов cookie" : "Cookie Policy"}
              </a>
              <span className="hidden sm:inline text-blue-400">•</span>
              <a href="/privacy" className="text-blue-300 hover:text-white hover:underline transition-colors">
                {language === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
              </a>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-blue-200 text-white hover:bg-blue-800/30 bg-transparent">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backHome}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
