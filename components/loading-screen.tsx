"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [hasDrawn, setHasDrawn] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [quote, setQuote] = useState("")

  const quotes = [
    "Demons are always watchers, but sometimes...",
    "In the darkness, they wait for those who seek them...",
    "Not all entities want to be found. Some hunt the hunters...",
    "The veil between worlds is thinner than you think...",
    "Some doors, once opened, can never be closed again...",
  ]

  useEffect(() => {
    // Set a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)

    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = 350
    canvas.height = 60

    const context = canvas.getContext("2d")
    if (!context) return

    context.strokeStyle = "#ff0000"
    context.lineWidth = 2
    context.lineCap = "round"
    contextRef.current = context
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(onLoadingComplete, 1000)
      }, 500)
    }
  }, [progress, onLoadingComplete])

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    setHasDrawn(true)

    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return

    let x, y
    if ("touches" in event) {
      const rect = canvas.getBoundingClientRect()
      x = event.touches[0].clientX - rect.left
      y = event.touches[0].clientY - rect.top
    } else {
      x = event.nativeEvent.offsetX
      y = event.nativeEvent.offsetY
    }

    context.beginPath()
    context.moveTo(x, y)
  }

  const draw = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return

    let x, y
    if ("touches" in event) {
      const rect = canvas.getBoundingClientRect()
      x = event.touches[0].clientX - rect.left
      y = event.touches[0].clientY - rect.top
    } else {
      x = event.nativeEvent.offsetX
      y = event.nativeEvent.offsetY
    }

    context.lineTo(x, y)
    context.stroke()

    // Increment progress based on drawing
    setProgress((prev) => Math.min(prev + 0.5, 100))
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const context = contextRef.current
    if (!context) return
    context.closePath()

    // Fill the loading bar when drawing stops
    setProgress(100)
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center space-y-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-removebg-preview-dfsEndePFQrTqQFwG6qqO2p1gaE3DG.png"
          alt="Demonology Logo"
          className="w-32 h-32 mx-auto mb-8"
        />

        <h1 className="text-2xl md:text-4xl font-bold text-red-600 font-gonzaga mb-12">
          Demonology Solutions
          <span className="block text-lg md:text-xl text-white mt-2">Research Corporation</span>
        </h1>

        <div className="w-full h-4 bg-red-950/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-600"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>

        <div className="mt-8 relative">
          <canvas
            ref={canvasRef}
            className="border-2 border-red-600/20 rounded-lg bg-white/90 cursor-crosshair mx-auto"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          {!hasDrawn && (
            <div className="absolute inset-0 flex items-center justify-center text-red-900/70 pointer-events-none">
              Sign here to continue...
            </div>
          )}
        </div>

        <div className="mt-16">
          <p className="text-white/80 text-sm md:text-base italic">"{quote}"</p>
        </div>
      </div>
    </motion.div>
  )
}

