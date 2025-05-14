"use client"

import type { LucideIcon } from "lucide-react"
import { Palette, Brush, Code, Smartphone, BarChart, FileText } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const icons: Record<string, LucideIcon> = {
      Palette,
      Brush,
      Code,
      Smartphone,
      BarChart,
      FileText,
    }

    const Icon = icons[iconName] || Palette
    return <Icon className="h-10 w-10" />
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden border-none bg-white/70 backdrop-blur-sm transition-all hover:shadow-lg">
        <CardHeader className="pb-2">
          <div className="mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3 w-fit text-white">
            {getIcon(icon)}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
