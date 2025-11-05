"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, BookOpen, Quote, ArrowLeft, Crown, Star } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/useLanguage"

export default function ShereshevskPage() {
  const { language, isLoaded } = useLanguage()

  const content = {
    ru: {
      title: "Михаил Шерешевский",
      subtitle: "Заслуженный тренер и автор шахматных бестселлеров",
      backToVideos: "Назад к видео",
      backToHome: "Назад на главную",
      about: "О тренере",
      achievements: "Достижения",
      books: "Известные работы",
      testimonials: "Чемпион о Михаиле Израилевиче",
      biography: `Михаил Шерешевский – заслуженный тренер Белоруссии, руководитель шахматного направления школы «Сириус», автор бестселлеров «Стратегия эндшпиля», «Контуры эндшпиля», «Моя методика: от разрядника – к гроссмейстеру».`,
      kramnikQuote: `Доминанту взглядов Михаила Израилевича я бы определил очень просто – здравый смысл прежде всего! Любая проблема подвергается им критическому и непредвзятому анализу, без догм и заранее готовых красивых выводов, зато с характерной и неповторимой мягкой иронией. Здравый смысл же является и главной путеводной нитью книги «С молодежью – в эндшпиль». Этот капитальный труд об эндшпиле не является чистой воды справочником или учебником, несмотря на достаточно формализованную структуру. Он учит, прежде всего, именно разыгрыванию эндшпилей и предназначен для практиков самого разного уровня, от любителей до топ-гроссмейстеров.`,
      tomashevskiQuote: `Евгений Томашевский, двукратный чемпион России`,
      kramnikAttribution: "Владимир Крамник, 14-й чемпион мира",
      achievementsList: [
        "Заслуженный тренер сборной Азербайджана",
        "Руководитель шахматного направления школы «Сириус»",
        "Автор множества шахматных бестселлеров",
        "Наставник Кирилла Шошина с 2017 года",
      ],
      booksList: [
        "«Стратегия эндшпиля»",
        "«Контуры эндшпиля»",
        "«Моя методика: от разрядника – к гроссмейстеру»",
        "«С молодежью – в эндшпиль»",
      ],
      influence: "Влияние на шахматный мир",
      influenceText:
        "Работы Михаила Шерешевского оказали огромное влияние на поколения шахматистов. Его книги рекомендовались тренерами по всему Советскому Союзу и продолжают быть актуальными для современных игроков всех уровней.",
    },
    en: {
      title: "Mikhail Shereshevsky",
      subtitle: "Honored Coach and Chess Bestselling Author",
      backToVideos: "Back to Videos",
      backToHome: "Back to Home",
      about: "About the Coach",
      achievements: "Achievements",
      books: "Notable Works",
      testimonials: "Testimonials",
      biography: `Mikhail Shereshevsky is an honored coach of Belarus, head of the chess direction at the "Sirius" school, and author of bestsellers "Endgame Strategy", "Endgame Contours", and "My Method: From Club Player to Grandmaster".`,
      kramnikQuote: `I would define the dominant feature of Mikhail Israelievich's views very simply - common sense above all! Any problem is subjected by him to critical and unbiased analysis, without dogmas and ready-made beautiful conclusions, but with characteristic and unique gentle irony. Common sense is also the main guiding thread of the book "With Youth - Into the Endgame". This fundamental work on the endgame is not a pure reference book or textbook, despite its fairly formalized structure. It teaches, first of all, precisely the playing of endgames and is intended for practitioners of the most diverse levels, from amateurs to top grandmasters.`,
      tomashevskiQuote: `Evgeny Tomashevsky, two-time Russian champion`,
      kramnikAttribution: "Vladimir Kramnik, 14th World Champion",
      achievementsList: [
        "Honored coach of the Azerbaijan national team",
        "Head of chess direction at Sirius school",
        "Author of numerous chess bestsellers",
        "Mentor to Kirill Shoshin since 2017",
      ],
      booksList: [
        '"Endgame Strategy"',
        '"Endgame Contours"',
        '"My Method: From Club Player to Grandmaster"',
        '"With Youth - Into the Endgame"',
      ],
      influence: "Influence on the Chess World",
      influenceText:
        "Mikhail Shereshevsky's works have had an enormous influence on generations of chess players. His books were recommended by coaches throughout the Soviet Union and continue to be relevant for modern players of all levels.",
    },
  }

  // Show loading state until language is loaded
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-chess flex items-center justify-center">
        <div className="text-blue-100 text-xl">Loading...</div>
      </div>
    )
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-chess py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-blue-100 text-lg">{t.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="grid gap-6">
          {/* About Section */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                {t.about}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-amber max-w-none">
                <p className="text-blue-800 leading-relaxed whitespace-pre-line">{t.biography}</p>
                {language === "ru" ? (
                  <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-start mb-4">
                      <Quote className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-blue-800 italic leading-relaxed">
                        В юности, когда я только начинал изучать шахматы, одной из, можно сказать, «библий» по игровым
                        окончаниям была книга этого же автора «Стратегия эндшпиля». Она считалась «канонической», все
                        тренеры в Советском Союзе рекомендовали своим ученикам: «Читай Шерешевского!» Я сам внимательно
                        проштудировал эту книжку, и мне она очень понравилась. Слышал, что она понравилась и Магнусу
                        Карлсену – понятное дело, много лет спустя. Книга «С молодежью – в эндшпиль» продолжает ту же
                        линию, но назвать ее «вторым изданием», конечно, будет несправедливо – в ней очень много нового.
                        Причем не просто дополнительных свежих примеров (по объему этот двухтомник, наверное, раз в 3–4
                        больше советской книжки в мягком переплете), но и оригинальных концепций, новых подходов к
                        изучению эндшпиля.
                      </p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Crown className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-700 font-semibold">{t.kramnikAttribution}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-start mb-4">
                      <Quote className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-blue-800 italic leading-relaxed">
                        In my youth, when I was just beginning to study chess, one of the "bibles" of endgame play was
                        this same author's book "Endgame Strategy". It was considered "canonical" - all coaches in the
                        Soviet Union recommended to their students: "Read Shereshevsky!" I myself carefully studied this
                        book, and I really liked it. I heard that Magnus Carlsen also liked it - understandably, many
                        years later. The book "With Youth - Into the Endgame" continues the same line, but calling it a
                        "second edition" would certainly be unfair - it contains a lot of new material. Not just
                        additional fresh examples (this two-volume work is probably 3-4 times larger than the Soviet
                        paperback), but also original concepts and new approaches to studying the endgame.
                      </p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Crown className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-700 font-semibold">{t.kramnikAttribution}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Achievements and Books */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  {t.achievements}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {t.achievementsList.map((achievement, index) => (
                    <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Star className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-900">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t.books}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {t.booksList.map((book, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-blue-900 font-medium">{book}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Quote className="w-5 h-5 mr-2" />
                {t.testimonials}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Kramnik Quote */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start mb-4">
                  <Quote className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-blue-800 italic leading-relaxed">{t.kramnikQuote}</p>
                </div>
                <div className="flex items-center justify-end">
                  <Crown className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-semibold">{t.tomashevskiQuote}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Influence */}
          <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                {t.influence}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 leading-relaxed">{t.influenceText}</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Button asChild variant="outline" className="border-blue-200 text-white hover:bg-blue-800/30 bg-transparent">
            <Link href="/videos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToVideos}
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-200 text-white hover:bg-blue-800/30 bg-transparent">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToHome}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
