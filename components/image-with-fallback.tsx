"use client"

import type React from "react"

import { useState, useCallback } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallback?: string
  priority?: boolean
  style?: React.CSSProperties
  onClick?: () => void
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fallback = "/placeholder.svg?height=200&width=300&text=Chess+Image",
  priority = false,
  style,
  onClick,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = useCallback(() => {
    if (imgSrc !== fallback) {
      setImgSrc(fallback)
    }
  }, [imgSrc, fallback])

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className={`relative ${className || ""}`} style={style} onClick={onClick}>
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" style={{ width, height }} />}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`${className || ""} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        style={style}
      />
    </div>
  )
}
