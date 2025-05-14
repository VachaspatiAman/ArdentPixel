"use client"

import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="h-full border-none bg-white/70 backdrop-blur-sm transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-2 w-fit">
            <QuoteIcon className="h-6 w-6 text-blue-500" />
          </div>
          <p className="mb-6 text-lg">{quote}</p>
          <div>
            <div className="font-bold">{author}</div>
            <div className="text-sm text-muted-foreground">{company}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
