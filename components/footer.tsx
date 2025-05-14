"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t bg-gradient-to-b from-white to-slate-50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Ardent
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Pixel
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              We transform your ideas into exceptional digital experiences that captivate your audience and drive
              results.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">hello@ardentpixel.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-muted-foreground">123 Design Street, Creative City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="mb-4 text-sm text-muted-foreground md:mb-0">
            © {new Date().getFullYear()} Ardent Pixel. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              aria-label="Back to top"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
