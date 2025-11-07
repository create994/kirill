"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Globe, Phone, Mail, MapPin, Crown, Target, CheckCircle, ExternalLink, Quote } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/useLanguage"
import { useMemo } from "react"

export default function CVPage() {
  const { language, changeLanguage, isLoaded } = useLanguage()

  const content = useMemo(
    () => ({
      ru: {
        title: "Шахматная карьера",
        subtitle: "Кирилл Шошин - Мастер FIDE и преподаватель шахмат",
        backBtn: "← Назад на главную",
        contact: "Контактная информация",
        chessJourney: "Мой путь в шахматах",
        chessJourneyText: `Мой опыт в шахматной карьере начинается с 5-тилетнего возраста. За 14 лет в шахматах я успел стать мастером FIDE, выполнить норму международного мастера на Чемпионате Европы, а также многократно войти в 10-ку лучших шахматистов России в своем возрасте (максимальный рейтинг 2329)

Однако огромное удовольствие мне доставляет не только совершенствование собственных навыков, но и преподавание. Я веду индивидуальные занятия с 2020 года, а с 2022 и групповые. За это время я поработал с учениками (в том числе с иностранцами) и теперь способен найти подход к абсолютно ЛЮБОМУ 🥇

Какие бы шахматные цели перед Вами не стояли – я помогу их достигнуть 📌`,
        goals: "Чего мы можем достигнуть на занятиях:",
        goalsList: [
          "🎯 Научиться с нуля",
          "🎯 Прокачать тактическое видение",
          "🎯 Развить стратегическое мышление",
          "🎯 Поставить опаснейший дебютный репертуар",
          "🎯 Подготовиться под конкретного соперника",
          "🎯 Стать мастером эндшпиля",
          "🎯 Насладиться изяществом великой игры",
        ],
        methodology: "Моя методика преподавания:",
        methodologyList: [
          "✔️ Делюсь ВСЕМИ собственными разработками, присылая файлы",
          "✔️ Обязательно даю задания для закрепления материала",
          "✔️ Доходчиво объясняю материал любой сложности",
          "✔️ Помогаю более эффективно играть в интернете",
          "✔️ Учу использовать функционал шахматных платформ на максимум",
          "✔️ Применяю собственную методику обучения шахматам (выработанную с моими собственными тренерами)",
        ],
        languages: "🌏 Язык преподавания - русский/английский",
        platforms: "Занятия проходят через любую удобную для Вас платформу, например, Zoom/Telegram/WhatsApp.",
        mentors: "Мои наставники",
        mentorsText: `Также хочу поделиться чьи знания я впитал и теперь передаю своим ученикам. С 2017 года и по сей день занимаюсь с Михаилом Израилевичем Шерешевским.

Мне посчастливилось поработать и с другими ведущими шахматными тренерами страны: <strong>Сергеем Ивановым</strong>, <strong>Константином Сакаевым</strong>, <strong>Владимиром Беликовым</strong> в Сочи на сменах в ОЦ "Сириус" для талантливых юниоров России.`,
        achievements: "Шахматные достижения",
        fideMaster: "Мастер FIDE",
        imNorm: "Норма международного мастера на Чемпионате Европы",
        topRussia: "Чемпион многочисленных международных турниров и многократный ТОП-10 России в своём возрасте",
        teachingExp: "Опыт преподавания: 5+ лет",
        viewCertificate: "Посмотреть сертификат",
        studentReviews: "Отзывы учеников",
        reviews: [
          {
            text: "Дочери очень понравилось занятие! Сказала, что тренер рассказывает много интересного, а не заставляет решать задачи все занятие, как прошлый… Будем продолжать, спасибо!!",
            author: "Ольга",
          },
          {
            text: "Заинтересовался шахматами в период пандемии и начал смотреть обучающий контент на ютубе. Далее решил перейти на более серьезный уровень - попробовать позаниматься с тренером и обратился к Кириллу. С того времени мы продолжаем регулярно заниматься и я ни разу не пожалел. Вы нигде не найдете настолько понятного объяснения дебютных схем и техники эндшпиля!",
            author: "Иван",
          },
          {
            text: "Замечательный тренер! Если Вас интересует прогресс в совокупности с увлекательной подачей материала, то я настоятельно рекомендую Кирилла. Особенно хочется отметить качество файлов и дебютных разработок, которыми он делится.",
            author: "Иван",
          },
        ],
      },
      en: {
        title: "Chess Career",
        subtitle: "Kirill Shoshin - FIDE Master & Chess Teacher",
        backBtn: "← Back to Home",
        contact: "Contact Information",
        chessJourney: "My Chess Journey",
        chessJourneyText: `My chess career began at the age of 5. Over 14 years in chess, I have become a FIDE Master, achieved an International Master norm at the European Championship, and repeatedly entered the top 10 best chess players in Russia in my age category (maximum rating 2329).

However, I derive enormous pleasure not only from improving my own skills, but also from teaching. I have been conducting individual lessons since 2020, and group lessons since 2022. During this time I have worked with students (including foreigners) and now I am able to find an approach to absolutely ANYONE 🥇

Whatever chess goals you have - I will help you achieve them 📌`,
        goals: "What we can achieve in our lessons:",
        goalsList: [
          "🎯 Learn from scratch",
          "🎯 Improve tactical vision",
          "🎯 Develop strategic thinking",
          "🎯 Build a dangerous opening repertoire",
          "🎯 Prepare against specific opponents",
          "🎯 Master endgames",
          "🎯 Enjoy the elegance of the great game",
        ],
        methodology: "My teaching methodology:",
        methodologyList: [
          "✔️ I share ALL my own developments, sending files",
          "✔️ I always give assignments to reinforce the material",
          "✔️ I clearly explain material of any complexity",
          "✔️ I help play more effectively online",
          "✔️ I teach how to use chess platform functionality to the maximum",
          "✔️ I apply my own chess teaching methodology (developed with my own coaches)",
        ],
        languages: "🌏 Teaching language - Russian/English",
        platforms:
          "Lessons are conducted through any platform convenient for you, for example, Zoom/Telegram/WhatsApp.",
        mentors: "My Mentors",
        mentorsText: `I also want to share whose knowledge I have absorbed and now pass on to my students. Since 2017 and to this day I have been studying with Mikhail Israelievich Shereshevsky.

I was fortunate to work with other leading chess coaches of the country: <strong>Sergey Ivanov</strong>, <strong>Konstantin Sakaev</strong>, <strong>Vladimir Belikov</strong> in Sochi at the "Sirius" Educational Center for talented juniors of Russia.`,
        achievements: "Chess Achievements",
        fideMaster: "FIDE Master",
        imNorm: "International Master norm at European Championship",
        topRussia: "Multiple champion of international tournaments and TOP-10 of Russia in my age group",
        teachingExp: "Teaching experience: 5+ years",
        viewCertificate: "View Certificate",
        studentReviews: "Student Reviews",
        reviews: [
          {
            text: "My daughter really enjoyed the lesson! She said that the coach explains a lot of interesting things, and doesn't force you to solve problems all lesson long, like the previous one... We will continue, thank you!!",
            author: "Olga",
          },
          {
            text: "I became interested in chess during the pandemic and started watching educational content on YouTube. Then I decided to move to a more serious level - try studying with a coach and contacted Kirill. Since then we continue to study regularly and I have never regretted it. You will not find such a clear explanation of opening schemes and endgame technique anywhere!",
            author: "Ivan",
          },
          {
            text: "Wonderful coach! If you are interested in progress combined with engaging material presentation, then I strongly recommend Kirill. I especially want to note the quality of files and opening developments that he shares.",
            author: "Ivan",
          },
        ],
      },
    }),
    [],
  )

  // Show loading state until language is loaded
  if (!isLoaded) {
    return null
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-calm py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-white">{t.title}</h1>
            <div className="flex gap-2">
              <Button
                variant={language === "ru" ? "default" : "outline"}
                size="sm"
                onClick={() => changeLanguage("ru")}
                className={
                  language === "ru"
                    ? "bg-blue-800 hover:bg-blue-900 text-white shadow-blue"
                    : "border-blue-300 text-blue-200 hover:bg-blue-800/20 bg-transparent shadow-blue"
                }
              >
                <Globe className="w-4 h-4 mr-1" />
                RU
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => changeLanguage("en")}
                className={
                  language === "en"
                    ? "bg-blue-900 hover:bg-blue-950 text-white shadow-blue font-bold"
                    : "border-blue-300 text-blue-200 hover:bg-blue-800/20 bg-transparent shadow-blue"
                }
              >
                <Globe className="w-4 h-4 mr-1" />
                EN
              </Button>
            </div>
          </div>
          <p className="text-blue-200 text-lg">{t.subtitle}</p>
        </div>

        {/* CV Content */}
        <div className="grid gap-6">
          {/* Contact Information */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                {t.contact}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center text-blue-800">
                    <span className="w-4 h-4 mr-2 text-center">✈️</span>
                    <a
                      href="https://t.me/SHOSHIN_KIRILL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                    >
                      @SHOSHIN_KIRILL
                    </a>
                  </div>
                  <div className="flex items-center text-blue-800">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:conciliateur@mail.ru" className="text-blue-600 hover:text-blue-800 hover:underline">
                      conciliateur@mail.ru
                    </a>
                  </div>
                  <div className="flex items-center text-blue-800">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+79115076060" className="text-blue-600 hover:text-blue-800 hover:underline">
                      +7 911 507 60 60
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-blue-800">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{language === "ru" ? "Санкт-Петербург" : "Saint Petersburg"}</span>
                  </div>
                  <div className="text-blue-800">
                    <strong>{language === "ru" ? "Формат" : "Format"}:</strong> Offline/Online
                  </div>
                  <div className="text-blue-800">
                    <strong>{language === "ru" ? "Языки" : "Languages"}:</strong>{" "}
                    {language === "ru" ? "Русский/Английский" : "Russian/English"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chess Achievements */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                {t.achievements}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-300">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/fide-master-certificate.png"
                        alt="FIDE Master Certificate"
                        width={48}
                        height={64}
                        className="w-12 h-16 object-cover rounded border border-blue-300 cursor-pointer hover:opacity-80 transition-opacity shadow-blue"
                        onClick={() => window.open("/images/fide-master-certificate.png", "_blank")}
                      />
                      <span className="text-blue-900 font-medium">{t.fideMaster}</span>
                    </div>
                    <a
                      href="https://ratings.fide.com/profile/34167061/calculations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700 shadow-blue">2329</Badge>
                    </a>
                  </div>

                  {/* Add Lichess Bullet Rating */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <a
                        href="https://lichess.org/@/Kirill_Shoshin/perf/bullet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 font-medium hover:text-blue-600 hover:underline transition-colors"
                      >
                        Bullet 2700+
                      </a>
                    </div>
                    <a
                      href="https://lichess.org/@/Kirill_Shoshin/perf/bullet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Badge className="bg-green-600 text-white hover:bg-green-700 shadow-blue">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Lichess
                      </Badge>
                    </a>
                  </div>

                  {/* Add Lichess Blitz Rating */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔥</span>
                      <a
                        href="https://lichess.org/@/Kirill_Shoshin/perf/blitz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 font-medium hover:text-blue-600 hover:underline transition-colors"
                      >
                        Blitz 2500+
                      </a>
                    </div>
                    <a
                      href="https://lichess.org/@/Kirill_Shoshin/perf/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Badge className="bg-green-600 text-white hover:bg-green-700 shadow-blue">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Lichess
                      </Badge>
                    </a>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-300">
                    <span className="text-blue-900 font-medium">{t.teachingExp}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-300 relative">
                    <div className="flex items-center justify-between">
                      <a
                        href="https://drive.google.com/file/d/1dXPnYfLe8UU46e1FLvJ5v8GGTM1qnMQX/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 font-medium hover:text-blue-600 hover:underline transition-colors"
                      >
                        {t.imNorm}
                      </a>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-800 p-1 h-auto"
                      >
                        <a
                          href="https://drive.google.com/file/d/1dXPnYfLe8UU46e1FLvJ5v8GGTM1qnMQX/view?usp=drivesdk"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                    <a
                      href="https://drive.google.com/file/d/1dXPnYfLe8UU46e1FLvJ5v8GGTM1qnMQX/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 mt-1 hover:text-blue-800 hover:underline cursor-pointer block"
                    >
                      {t.viewCertificate}
                    </a>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-300">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-blue-900 font-medium cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                        onClick={() => window.open("/images/diplomas.jpg", "_blank")}
                      >
                        {t.topRussia}
                      </span>
                      <button
                        onClick={() => window.open("/images/diplomas.jpg", "_blank")}
                        className="text-blue-600 hover:text-blue-800 p-1 h-auto transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Student Reviews */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">{t.studentReviews}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {t.reviews.map((review, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-300 shadow-blue">
                    <div className="flex items-start mb-3">
                      <Quote className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-blue-800 leading-relaxed">{review.text}</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Star className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-700 font-semibold">— {review.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chess Journey */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Star className="w-5 h-5 mr-2" />
                {t.chessJourney}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-blue-800 leading-relaxed whitespace-pre-line">{t.chessJourneyText}</p>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Target className="w-5 h-5 mr-2" />
                {t.goals}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {t.goalsList.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-300 shadow-blue"
                  >
                    <span className="text-blue-900">{goal}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                {t.methodology}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {t.methodologyList.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-300 shadow-blue"
                  >
                    <span className="text-blue-900">{method}</span>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-400 shadow-blue">
                  <p className="text-blue-900 font-medium">{t.languages}</p>
                  <p className="text-blue-800 text-sm mt-2">{t.platforms}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mentors */}
          <Card className="border-blue-soft bg-white/90 backdrop-blur-sm shadow-blue-lg hover-lift">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                {t.mentors}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-blue-800 leading-relaxed whitespace-pre-line">
                  {language === "ru" ? (
                    <>
                      Также хочу поделиться чьи знания я впитал и теперь передаю своим ученикам. С 2017 года и по сей
                      день занимаюсь с{" "}
                      <Link
                        href="/shereshevsky"
                        className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                      >
                        Михаилом Израилевичем Шерешевским
                      </Link>
                      .
                      <br />
                      <br />
                      Мне посчастливилось поработать и с другими ведущими шахматными тренерами страны:{" "}
                      <strong>Сергеем Ивановым</strong>, <strong>Константином Сакаевым</strong>,{" "}
                      <strong>Владимиром Беликовым</strong> в Сочи на сменах в ОЦ "Сириус" для талантливых юниоров
                      России.
                    </>
                  ) : (
                    <>
                      I also want to share whose knowledge I have absorbed and now pass on to my students. Since 2017
                      and to this day I have been studying with{" "}
                      <Link
                        href="/shereshevsky"
                        className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                      >
                        Mikhail Israelievich Shereshevsky
                      </Link>
                      .
                      <br />
                      <br />I was fortunate to work with other leading chess coaches of the country:{" "}
                      <strong>Sergey Ivanov</strong>, <strong>Konstantin Sakaev</strong>,{" "}
                      <strong>Vladimir Belikov</strong> in Sochi at the "Sirius" Educational Center for talented juniors
                      of Russia.
                    </>
                  )}
                </p>
              </div>
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
            <Link href="/">{t.backBtn}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
