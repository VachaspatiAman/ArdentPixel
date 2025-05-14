"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      submenu: [
        {
          name: "Digital Marketing",
          children: [
            { name: "Social Media", href: "/services/digital-marketing/social-media" },
            { name: "SEO", href: "/services/digital-marketing/seo" },
            { name: "SEO Services", href: "/services/digital-marketing/seo-services" },
          ],
        },
        {
          name: "Graphic Design",
          children: [
            { name: "Logos", href: "/services/graphic-design/logos" },
            { name: "Flyers", href: "/services/graphic-design/flyers" },
            { name: "Profile Banners", href: "/services/graphic-design/profile-banners" },
            { name: "Visiting Card", href: "/services/graphic-design/visiting-card" },
            { name: "T-Shirts", href: "/services/graphic-design/t-shirts" },
            { name: "Magazine & Book Covers", href: "/services/graphic-design/magazine-covers" },
            { name: "Certificates", href: "/services/graphic-design/certificates" },
            { name: "Invitations", href: "/services/graphic-design/invitations" },
            { name: "Letter Head", href: "/services/graphic-design/letter-head" },
            { name: "Brochures", href: "/services/graphic-design/brochures" },
            { name: "Merchandise", href: "/services/graphic-design/merchandise" },
          ],
        },
        {
          name: "Website Development",
          children: [
            { name: "UI/UX", href: "/services/development/ui-ux" },
            { name: "Front-End", href: "/services/development/front-end" },
            { name: "Back-End", href: "/services/development/back-end" },
          ],
        },
        {
          name: "Video Editing",
          children: [
            { name: "Thumbnails", href: "/services/video-editing/thumbnails" },
            { name: "Photography & Shoots", href: "/services/video-editing/photography" },
          ],
        },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm supports-[backdrop-filter]:bg-white/60" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.span
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ardent
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pixel</span>
          </motion.span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                href={item.href || "#"}
                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-blue-500"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-50 bg-white/90 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-blue-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
