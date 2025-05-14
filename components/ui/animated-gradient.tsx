"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className = "" }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const animate = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time) * 20}, 70%, 80%, 0.5)`)
      gradient.addColorStop(1, `hsl(${260 + Math.cos(time) * 20}, 70%, 80%, 0.5)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.5 + i * 1.5))
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.7 + i * 1.5))
        const radius = 50 + 30 * Math.sin(time * 0.3 + i)

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        circleGradient.addColorStop(0, `hsla(${(i * 60 + time * 50) % 360}, 100%, 70%, 0.2)`)
        circleGradient.addColorStop(1, `hsla(${(i * 60 + time * 50) % 360}, 100%, 70%, 0)`)

        ctx.fillStyle = circleGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
