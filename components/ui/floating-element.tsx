"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  delay?: number
  className?: string
  amplitude?: number
}

export function FloatingElement({
  children,
  duration = 4,
  delay = 0,
  className = "",
  amplitude = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -amplitude, 0, amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
