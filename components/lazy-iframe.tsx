"use client"

import { useState, useRef, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface LazyIframeProps {
  src: string
  width?: string | number
  height?: string | number
  className?: string
  title?: string
  allow?: string
}

export default function LazyIframe({
  src,
  width = "100%",
  height = "700",
  className = "",
  title = "",
  allow = "camera; microphone; fullscreen; display-capture; autoplay",
}: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg"
          style={{ width, height }}
        >
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      )}
      {isInView && (
        <iframe
          ref={iframeRef}
          src={src}
          width={width}
          height={height}
          className={`border-0 rounded-lg shadow-md ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          title={title}
          allow={allow}
          onLoad={handleLoad}
        />
      )}
    </div>
  )
}
