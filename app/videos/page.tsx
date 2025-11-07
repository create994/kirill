"use client"

import { useState, useMemo, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/useLanguage"
import ImageWithFallback from "@/components/image-with-fallback"

export default function VideosPage() {
  const { language, isLoaded } = useLanguage()
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)

  const content = useMemo(
    () => ({
      ru: {
        title: "Обучающие видео",
        subtitle:
          "Смотрите мои обучающие шахматные видео, охватывающие различные темы от базовых принципов до продвинутых стратегий",
        ctaTitle: "Хотите персональное обучение?",
        ctaText:
          "Эти видео — только начало. Запишитесь на индивидуальный урок для персонального коучинга, адаптированного к вашим конкретным потребностям и уровню навыков.",
        bookLesson: "Записаться на урок",
        watchVideo: "Смотреть видео",
        backHome: "← Назад на главную",
        closeVideo: "Закрыть видео",
        openInNewTab: "Открыть в новой вкладке",
        watchFullPodcast: "Посмотреть полный подкаст",
        videos: [
          {
            title: "Введение - почему люди любят шахматы?",
            description: "Узнайте, что делает шахматы такой увлекательной и популярной игрой!",
            level: "Для всех",
            url: "https://rutube.ru/video/d37a08b12b712a93a2205791eabc2f5c/",
            embedUrl: "https://rutube.ru/play/embed/d37a08b12b712a93a2205791eabc2f5c",
            duration: "02:31",
            thumbnail: "/images/video-thumbnail-1.jpg",
          },
          {
            title: "Основы: связка, двойной удар, расчет вариантов",
            description: "Изучите фундаментальные принципы шахматных дебютов",
            level: "Начинающий",
            url: "https://rutube.ru/video/private/d9254d2349550b86f5955c980e3d73b6/?p=jrjVTiRS_1tF42VQH7CWlA",
            embedUrl: "https://rutube.ru/play/embed/d9254d2349550b86f5955c980e3d73b6?p=jrjVTiRS_1tF42VQH7CWlA",
            duration: "25:59",
            thumbnail: "/images/video-thumbnail-2.jpg",
          },
          {
            title: "Комбинационное зрение, техника расчета вариантов",
            description: "Освойте основные тактические мотивы и комбинации",
            level: "Средний",
            url: "https://rutube.ru/video/private/ec2be85823ebe1da5be2088144b221b9/?p=99g5jPr-6x6xBhve48ERSw",
            embedUrl: "https://rutube.ru/play/embed/ec2be85823ebe1da5be2088144b221b9?p=99g5jPr-6x6xBhve48ERSw",
            duration: "11:06",
            thumbnail: "/images/video-thumbnail-3.jpg",
          },
          {
            title: "Стратегическое мышление и мастерство в эндшпиле",
            description: "Глубокое погружение в эндшпили",
            level: "Продвинутый",
            url: "https://rutube.ru/video/private/35d21a79341fbe0145153dd2f45c1930/?p=iwQOO1NrTr4n3FI6SlzF_g",
            embedUrl: "https://rutube.ru/play/embed/35d21a79341fbe0145153dd2f45c1930?p=iwQOO1NrTr4n3FI6SlzF_g",
            duration: "12:02",
            thumbnail: "/images/video-thumbnail-4.jpg",
          },
          {
            title: "Михаил Шерешевский о Кирилле Шошине",
            titleWithLink: true,
            description: "Отрывок из подкаста, где легендарный тренер рассказывает о своем ученике",
            level: null,
            url: "https://rutube.ru/video/private/4758b7d6d7e05418accae82302cd85c3/?p=EsAhrL4Nu7If_A_BQF8hOQ",
            embedUrl: "https://rutube.ru/play/embed/4758b7d6d7e05418accae82302cd85c3?p=EsAhrL4Nu7If_A_BQF8hOQ",
            duration: "05:40",
            thumbnail: "/images/video-thumbnail-5.jpg",
            fullPodcastUrl: "https://vkvideo.ru/video-193195542_456241487",
            isSpecial: true,
          },
        ],
      },
      en: {
        title: "Educational Videos",
        subtitle:
          "Watch my instructional chess videos covering various topics from basic principles to advanced strategies",
        ctaTitle: "Want Personalized Instruction?",
        ctaText:
          "These videos are just the beginning. Book a one-on-one lesson for personalized coaching tailored to your specific needs and skill level.",
        bookLesson: "Book a Lesson",
        watchVideo: "Watch Video",
        backHome: "← Back to Home",
        closeVideo: "Close Video",
        openInNewTab: "Open in New Tab",
        watchFullPodcast: "Watch Full Podcast",
        videos: [
          {
            title: "Introduction - Why Do People Love Chess?",
            description: "Discover what makes chess such a fascinating and popular game!",
            level: "For Everyone",
            url: "https://rutube.ru/video/d37a08b12b712a93a2205791eabc2f5c/",
            embedUrl: "https://rutube.ru/play/embed/d37a08b12b712a93a2205791eabc2f5c",
            duration: "02:31",
            thumbnail: "/images/video-thumbnail-1.jpg",
          },
          {
            title: "Basics: pin, fork, calculations",
            description: "Learn the fundamental principles of chess openings",
            level: "Beginner",
            url: "https://rutube.ru/video/private/d9254d2349550b86f5955c980e3d73b6/?p=jrjVTiRS_1tF42VQH7CWlA",
            embedUrl: "https://rutube.ru/play/embed/d9254d2349550b86f5955c980e3d73b6?p=jrjVTiRS_1tF42VQH7CWlA",
            duration: "26:00",
            thumbnail: "/images/video-thumbnail-2.jpg",
          },
          {
            title: "Combinational Vision and Calculation technique",
            description: "Master essential tactical motifs and combinations",
            level: "Intermediate",
            url: "https://rutube.ru/video/private/ec2be85823ebe1da5be2088144b221b9/?p=99g5jPr-6x6xBhve48ERSw",
            embedUrl: "https://rutube.ru/play/embed/ec2be85823ebe1da5be2088144b221b9?p=99g5jPr-6x6xBhve48ERSw",
            duration: "11:08",
            thumbnail: "/images/video-thumbnail-3.jpg",
          },
          {
            title: "Strategic Thinking and Endgame Mastery",
            description: "Deep dive into endgames",
            level: "Advanced",
            url: "https://rutube.ru/video/private/35d21a79341fbe0145153dd2f45c1930/?p=iwQOO1NrTr4n3FI6SlzF_g",
            embedUrl: "https://rutube.ru/play/embed/35d21a79341fbe0145153dd2f45c1930?p=iwQOO1NrTr4n3FI6SlzF_g",
            duration: "12:03",
            thumbnail: "/images/video-thumbnail-4.jpg",
          },
          {
            title: "Mikhail Shereshevsky about Kirill Shoshin",
            titleWithLink: true,
            description: "Excerpt from a podcast where the legenary coach talks about his student",
            level: null,
            url: "https://rutube.ru/video/private/4758b7d6d7e05418accae82302cd85c3/?p=EsAhrL4Nu7If_A_BQF8hOQ",
            embedUrl: "https://rutube.ru/play/embed/4758b7d6d7e05418accae82302cd85c3?p=EsAhrL4Nu7If_A_BQF8hOQ",
            duration: "05:43",
            thumbnail: "/images/video-thumbnail-5.jpg",
            fullPodcastUrl: "https://vkvideo.ru/video-193195542_456241487",
            isSpecial: true,
          },
        ],
      },
    }),
    [],
  )

  const getLevelColor = (level: string) => {
    const levelMap = {
      Начинающий: "bg-green-100 text-green-800 border-green-200",
      Средний: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Продвинутый: "bg-red-100 text-red-800 border-red-200",
      "Для всех": "bg-blue-100 text-blue-800 border-blue-200",
      Beginner: "bg-green-100 text-green-800 border-green-200",
      Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Advanced: "bg-red-100 text-red-800 border-red-200",
      "For Everyone": "bg-blue-100 text-blue-800 border-blue-200",
    }
    return levelMap[level as keyof typeof levelMap] || "bg-amber-100 text-amber-800 border-amber-200"
  }

  const handleVideoClick = useCallback(
    (video: any, index: number) => {
      if (video.embedUrl) {
        if (selectedVideoIndex === index) {
          // If clicking the same video, close it
          setSelectedVideo(null)
          setSelectedVideoIndex(null)
        } else {
          // Open the new video
          setSelectedVideo(video)
          setSelectedVideoIndex(index)
        }
      }
    },
    [selectedVideoIndex],
  )

  // Show loading state until language is loaded
  if (!isLoaded) {
    return null
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-chess py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">{t.title}</h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto px-2">{t.subtitle}</p>
        </div>

        {/* Videos Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {t.videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <Card className="border-blue-300 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={300}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                    fallback="/placeholder.svg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-t-lg">
                    <Button
                      size="lg"
                      className="bg-blue-800 hover:bg-blue-700 text-white rounded-full p-3 sm:p-4"
                      onClick={() => handleVideoClick(video, index)}
                      disabled={!video.embedUrl}
                    >
                      <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black bg-opacity-70 text-white text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div
                    className={`flex flex-col sm:flex-row items-start ${
                      video.isSpecial ? "sm:justify-center" : "sm:justify-between"
                    } gap-2`}
                  >
                    <CardTitle
                      className={`text-blue-900 text-base sm:text-lg leading-tight ${
                        video.isSpecial ? "text-center" : ""
                      }`}
                    >
                      {video.titleWithLink ? (
                        <>
                          <Link
                            href="/shereshevsky"
                            className="text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
                          >
                            {language === "ru" ? "Михаил Шерешевский" : "Mikhail Shereshevsky"}
                          </Link>
                          {language === "ru" ? " о Кирилле Шошине" : " about Kirill Shoshin"}
                        </>
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: video.title }} />
                      )}
                    </CardTitle>
                    {video.level && (
                      <Badge
                        variant="outline"
                        className={`${getLevelColor(video.level)} text-xs font-bold flex-shrink-0`}
                      >
                        {video.level}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className={`pt-0 ${video.isSpecial ? "text-center" : ""}`}>
                  <p
                    className="text-blue-800 mb-4 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: video.description }}
                  />
                  {video.fullPodcastUrl && (
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs sm:text-sm text-blue-700 mb-2">
                        {language === "ru" ? "Посмотрите полный подкаст по ссылке:" : "Watch the full podcast at:"}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 bg-transparent hover:bg-amber-50 text-xs sm:text-sm"
                      >
                        <a href={video.fullPodcastUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          {t.watchFullPodcast}
                        </a>
                      </Button>
                    </div>
                  )}
                  <Button
                    variant="primary"
                    className="w-full bg-blue-800 hover:bg-blue-700 text-white text-sm sm:text-base"
                    onClick={() => handleVideoClick(video, index)}
                  >
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {selectedVideoIndex === index ? (language === "ru" ? "Скрыть видео" : "Hide Video") : t.watchVideo}
                  </Button>
                </CardContent>
              </Card>

              {/* Inline Video Player */}
              {selectedVideoIndex === index && selectedVideo && (
                <Card className="border-blue-300 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 pr-2">
                        {selectedVideo.titleWithLink ? (
                          <>
                            <Link
                              href="/shereshevsky"
                              className="text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
                            >
                              {language === "ru" ? "Михаил Шерешевский" : "Mikhail Shereshevsky"}
                            </Link>
                            {language === "ru" ? " о Кирилле Шошине" : " about Kirill Shoshin"}
                          </>
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: selectedVideo.title }} />
                        )}
                      </h3>
                      <div className="flex gap-2 flex-shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-blue-600 text-blue-600 bg-transparent text-xs sm:text-sm"
                        >
                          <a href={selectedVideo.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="hidden sm:inline">{t.openInNewTab}</span>
                            <span className="sm:hidden">Открыть</span>
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedVideo(null)
                            setSelectedVideoIndex(null)
                          }}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Video Container - Responsive */}
                    <div className="relative bg-black" style={{ paddingBottom: "56.25%", height: 0 }}>
                      <iframe
                        src={selectedVideo.embedUrl}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title={selectedVideo.title}
                      />
                    </div>

                    {/* Video Info Footer */}
                    <div className="p-3 sm:p-4 bg-gray-50">
                      <p
                        className="text-gray-700 text-sm sm:text-base mb-3"
                        dangerouslySetInnerHTML={{ __html: selectedVideo.description }}
                      />
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                        {selectedVideo.level && (
                          <Badge variant="outline" className={`${getLevelColor(selectedVideo.level)} text-xs`}>
                            {selectedVideo.level}
                          </Badge>
                        )}
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          {selectedVideo.duration}
                        </div>
                      </div>
                      {selectedVideo.fullPodcastUrl && (
                        <div className="mt-3 sm:mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-xs sm:text-sm text-blue-700 mb-2">
                            {language === "ru" ? "Посмотрите полный подкаст:" : "Watch the full podcast:"}
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-blue-600 text-blue-600 bg-transparent hover:bg-amber-50 text-xs sm:text-sm"
                          >
                            <a href={selectedVideo.fullPodcastUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              {t.watchFullPodcast}
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center bg-white/90 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-blue-300 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">{t.ctaTitle}</h2>
          <p className="text-blue-800 mb-3 sm:mb-4 text-sm sm:text-base">{t.ctaText}</p>
          <p className="text-blue-700 text-xs sm:text-sm mb-4 sm:mb-6">
            {language === "ru" ? "Или свяжитесь со мной напрямую в " : "Or contact me directly on "}
            <a
              href="https://t.me/SHOSHIN_KIRILL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              @SHOSHIN_KIRILL
            </a>
          </p>
          <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-700 text-white text-sm sm:text-base">
            <Link href="/booking">
              <Users className="w-4 h-4 mr-2" />
              {t.bookLesson}
            </Link>
          </Button>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6 sm:mt-8">
          <Button
            asChild
            variant="outline"
            className="border-blue-200 text-white hover:bg-blue-800/30 bg-transparent text-sm sm:text-base"
          >
            <Link href="/">{t.backHome}</Link>
          </Button>
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
              <span className="text-blue-300">
                {language === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
