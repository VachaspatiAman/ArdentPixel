"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface WorkCardProps {
  title: string
  category: string
  imageSrc: string
}

export default function WorkCard({ title, category, imageSrc }: WorkCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link href="/works" className="group block">
        <Card className="overflow-hidden border-none bg-white/70 backdrop-blur-sm transition-all hover:shadow-lg">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
          <CardContent className="p-4">
            <div className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {category}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
