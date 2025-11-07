import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Кирилл Шошин - Преподаватель шахмат и Мастер ФИДЕ",
  description:
    "Профессиональные уроки шахмат с Мастером ФИДЕ Кириллом Шошиным. Улучшите свою шахматную игру с персональным обучением и проверенными методами преподавания.",
  keywords: "шахматы, преподаватель шахмат, FIDE мастер, уроки шахмат, обучение шахматам",
  authors: [{ name: "Кирилл Шошин" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://rutube.ru" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
