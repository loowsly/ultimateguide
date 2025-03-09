"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"
import { IntroScreen } from "@/components/intro-screen"
import { useState, useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showIntro, setShowIntro] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("hasVisitedDemonology")
    if (visited) {
      setHasVisited(true)
      setShowIntro(false)
      setShowLoading(false)
    } else {
      setHasVisited(false)
      setShowIntro(true)
    }
  }, [])

  const handleIntroContinue = () => {
    setShowIntro(false)
    setShowLoading(true)
  }

  const handleLoadingComplete = () => {
    setShowLoading(false)
    localStorage.setItem("hasVisitedDemonology", "true")
  }

  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-gonzaga relative bg-game-overlay">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {!hasVisited && showIntro && <IntroScreen onContinue={handleIntroContinue} />}
          {!hasVisited && showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
