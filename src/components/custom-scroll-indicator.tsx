"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function CustomScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollingElement = document.scrollingElement || document.documentElement

      const docHeight = scrollingElement.scrollHeight - window.innerHeight
      const scrollTop = scrollingElement.scrollTop
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(progress, 100))
    }

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    updateScrollProgress()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle click on scroll indicator
  const handleScrollClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    let percentage = 0

    if (isMobile) {
      const clickX = e.clientX - rect.left
      percentage = clickX / rect.width
    } else {
      const clickY = e.clientY - rect.top
      percentage = clickY / rect.height
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const targetScroll = percentage * docHeight

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  return (
    <div className="custom-scroll-indicator cursor-pointer" onClick={handleScrollClick}>
      <div
        className="custom-scroll-thumb"
        style={
          isMobile
            ? { width: `${Math.max(scrollProgress, 5)}%`, height: "100%" }
            : { height: `${Math.max(scrollProgress, 5)}%`, width: "100%" }
        }
      />
    </div>
  )
}
