"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Contact, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full transition-all duration-300
        rounded-b-[35px] bg-white/5 
        shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[7.5px]
        flex justify-center items-center mx-auto max-w-[1540px]
        border-[2px] border-[#AB4FFD] overflow-hidden"
      style={{
        borderImage: "linear-gradient(to right, #E20B6F, #AB4FFD) 1 round-b-[30px]",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD] rounded-b-[35px]"></div>
      <div className="flex h-16 w-full items-center justify-between px-6 md:px-12 lg:px-[120px]">
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image
              src="/images/logo.png"
              alt="Ardent Pixels Logo"
              width={48}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/work", label: "Our Work" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-purple-400 group ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-block"
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
             className="bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
             onClick={() => router.push("/contact")}
             >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-1 border-t border-gray-800 px-2 pb-3 pt-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/work", label: "Our Work" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-gray-800 hover:text-white ${
                    pathname === link.href ? "text-white" : "text-gray-400"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="mt-4 px-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
               <Link href="/contact" >
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-800">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
