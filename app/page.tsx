"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Trophy, Users, Dumbbell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

export default function HomePage() {
  const { language, isLoaded } = useLanguage()

  const content = {
    ru: {
      name: "Кирилл Шошин",
      fideMaster: "Мастер FIDE",
      rating: "Рейтинг: 2329",
      description:
        "Профессиональный тренер по шахматам & FIDE Мастер, увлеченный развитием силы игры шахматистов любого уровня 🚀",
      hobbiesTitle: "Увлечения",
      hobbiesText:
        "Помимо шахмат, я увлекаюсь калистеникой - это помогает мне поддерживать физическую форму и ментальную концентрацию, что повышает выносливость во время игры, а также улучшает качество преподавания.",
      bookLesson: "Записаться на урок",
      viewCV: "Посмотреть резюме",
      whyChoose: "Почему стоит выбрать меня в качестве преподавателя шахмат? ",
      fideMasterTitle: "Мастер FIDE",
      fideMasterDesc:
        "Титулованный мастер с максимальным рейтингом 2329 пунктов в классику, привносящий турнирный опыт в каждую тренировку.",
      youngTitle: "Молодой и энергичный",
      youngDesc:
        "Занимаюсь шахматами уже 14 лет и при этом продолжаю вдохновлено развивать свои навыки и регулярно выступать на международных соревнованиях.",
      personalTitle: "Индивидуальный подход",
      personalDesc:
        "Весь накопленный опыт я передаю своим ученикам, беря за основу уникальную методику обучения, разработанную с собственными тренерами мирового класса.",
      exploreTitle: "Изучите мои учебные ресурсы",
      videosTitle: "Обучающие видео",
      videosDesc: "Посмотрите мои обучающие шахматные видео, охватывающие различные темы и стратегии",
      watchVideos: "Смотреть видео",
      scheduleTitle: "Записаться на урок",
      scheduleDesc: "Забронируйте персонализированный урок шахмат в удобное для вас время",
      bookNow: "Записаться сейчас",
    },
    en: {
      name: "Kirill Shoshin",
      fideMaster: "FIDE Master",
      rating: "Rating: 2329",
      description:
        "Professional Chess Trainer & FIDE Master, passionate about developing the playing strength of chess players of all levels 🚀",
      hobbiesTitle: "Hobbies",
      hobbiesText:
        "Besides chess, I am into calisthenics - it helps me maintain physical fitness and mental focus, which increases my endurance during the game, and also improves the quality of teaching.",
      bookLesson: "Book a Lesson",
      viewCV: "View CV",
      whyChoose: "Why should you choose me as a chess tutor?",
      fideMasterTitle: "FIDE Master",
      fideMasterDesc:
        "A titled master with a maximum rating of 2329 points in the classics, bringing tournament experience to every training session.",
      youngTitle: "Young & Energetic",
      youngDesc:
        "I have been playing chess for 14 years now and continue to develop my skills with inspiration and regularly compete in international competitions.",
      personalTitle: "Personalized Approach",
      personalDesc:
        "I pass on all my accumulated experience to my students, taking as a basis a unique teaching method developed with my own world-class trainers.",
      exploreTitle: "Explore My Teaching Resources",
      videosTitle: "Educational Videos",
      videosDesc: "Watch my instructional chess videos covering various topics and strategies",
      watchVideos: "Watch Videos",
      scheduleTitle: "Schedule a Lesson",
      scheduleDesc: "Book a personalized chess lesson at a time that works for you",
      bookNow: "Book Now",
    },
  }

  // Show loading state until language is loaded
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-calm flex items-center justify-center">
        <div className="text-blue-100 text-xl">Loading...</div>
      </div>
    )
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/kirill-profile-photo.jpg"
              alt={t.name}
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-blue-200 shadow-blue-lg object-cover"
              style={{ aspectRatio: "1/1" }}
            />
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">{t.name}</h1>

          <div className="flex justify-center gap-2 mb-6">
            <div
              className="bg-blue-800 text-white text-lg px-4 py-2 rounded-full flex items-center shadow-blue-lg cursor-pointer hover:opacity-80 transition-opacity hover-lift"
              onClick={() => window.open("/images/fide-master-certificate.png", "_blank")}
            >
              {t.fideMaster}
            </div>
            <div className="bg-blue-700 text-white text-lg px-4 py-2 rounded-full flex items-center shadow-blue-lg hover-lift">
              <Star className="w-4 h-4 mr-2" />
              <a
                href="https://ratings.fide.com/profile/34167061/calculations"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {t.rating}
              </a>
            </div>
          </div>

          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">{t.description}</p>

          <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-blue-300/30 max-w-2xl mx-auto hover-lift shadow-blue">
            <div className="flex items-center justify-center mb-2">
              <Dumbbell className="w-5 h-5 mr-2 text-blue-200" />
              <span className="font-medium text-blue-200">{t.hobbiesTitle}</span>
            </div>
            <p className="text-blue-100">{t.hobbiesText}</p>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white shadow-blue-lg hover-lift">
              <Link href="/booking">{t.bookLesson}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-300/50 text-white hover:bg-white/20 bg-transparent shadow-blue hover-lift"
            >
              <Link href="/cv">{t.viewCV}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-calm backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t.whyChoose}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">{t.fideMasterTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">{t.fideMasterDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">{t.youngTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">{t.youngDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
              <CardHeader className="text-center">
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">{t.personalTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-center">{t.personalDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-gradient-chess-dark backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t.exploreTitle}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-soft bg-white/90 backdrop-blur-sm hover:shadow-blue-xl transition-shadow hover-lift">
              <CardHeader>
                <CardTitle className="text-blue-800">{t.videosTitle}</CardTitle>
                <CardDescription className="text-blue-600">{t.videosDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-800 hover:bg-blue-900 text-white shadow-blue">
                  <Link href="/videos">{t.watchVideos}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-soft bg-white/90 backdrop-blur-sm hover:shadow-blue-xl transition-shadow hover-lift">
              <CardHeader>
                <CardTitle className="text-blue-800">{t.scheduleTitle}</CardTitle>
                <CardDescription className="text-blue-600">{t.scheduleDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-800 hover:bg-blue-900 text-white shadow-blue">
                  <Link href="/booking">{t.bookNow}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  )
}
