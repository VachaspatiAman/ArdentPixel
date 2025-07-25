"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function WorkPage() {
  const router = useRouter();
  // Animation variants for the card
  // Sample project data with new categories
  const projects = [
    // {
    //   id: 1,
    //   title: "Social Media Campaign",
    //   category: "Advertisement Post",
    //   image: "/placeholder.svg?height=600&width=800&text=Social+Media+Ad+1",
    //   description: "Engaging social media advertisement for product launch.",
    // },
    {
      id: 2,
      category: "Advertisement Post",
      image: "/images/AddRight.png? height=600&width=800&text=College+Event+Ad",
    },
    {
      id: 3,
      category: "Advertisement Post",
      image: "/images/Add.png? height=600&width=800&text=Event+Ad",
    },
    {
      id: 4,
      category: "Advertisement Post",
      image: "/images/AddLeft.png?height=600&width=800&text=Product+Ad",
    },
    // {
    //   id: 5,
    //   title: "Service Promotion",
    //   category: "Advertisement Post",
    //   image: "/placeholder.svg?height=600&width=800&text=Service+Ad",
    //   description: "Advertisement for professional services.",
    // },
    // Removed 6th Advertisement Post
    // {
    //   id: 7,
    //   title: "Brand Awareness",
    //   category: "Advertisement Post",
    //   image: "/placeholder.svg?height=600&width=800&text=Brand+Ad",
    //   description: "Advertisement to increase brand awareness.",
    // },
    // {
    //   id: 8,
    //   title: "Recruitment Ad",
    //   category: "Advertisement Post",
    //   image: "/placeholder.svg?height=600&width=800&text=Recruitment+Ad",
    //   description: "Advertisement for job openings and recruitment.",
    // },

    // Logo Work
    {
      id: 9,
      category: "Logo Work",
      image: "/images/1.png?height=600&width=800&text=Tech+Logo",
    },
    {
      id: 10,
      category: "Logo Work",
      image: "/images/2.png?height=600&width=800&text=Restaurant+Logo",
    },
    {
      id: 11,
      category: "Logo Work",
      image: "/images/3.png?height=600&width=800&text=Fitness+Logo",
    },
    // {
    //   id: 12,
    //   title: "E-commerce Logo",
    //   category: "Logo Work",
    //   image: "/placeholder.svg?height=600&width=800&text=E-commerce+Logo",
    //   description: "Modern logo for online retail platform.",
    // },
    // {
    //   id: 13,
    //   title: "Education Institute",
    //   category: "Logo Work",
    //   image: "/placeholder.svg?height=600&width=800&text=Education+Logo",
    //   description: "Professional logo for educational institution.",
    // },
    // // Removed 6th Logo Work
    // {
    //   id: 15,
    //   title: "Entertainment Company",
    //   category: "Logo Work",
    //   image: "/placeholder.svg?height=600&width=800&text=Entertainment+Logo",
    //   description: "Creative logo for entertainment business.",
    // },
    // {
    //   id: 16,
    //   title: "Real Estate Brand",
    //   category: "Logo Work",
    //   image: "/placeholder.svg?height=600&width=800&text=Real+Estate+Logo",
    //   description: "Trustworthy logo for real estate agency.",
    // },

    // APP Design
    {
      id: 17,
      category: "APP Design",
      image: "/images/app1.png?height=600&width=800&text=Ecommerce+App",
    },
    {
      id: 18,
      category: "APP Design",
      image: "/images/App23.png?height=600&width=800&text=Fitness+App",
    },
    {
      id: 19,
      category: "APP Design",
      image: "/images/App2.png?height=600&width=800&text=Food+App",
    },
    // {
    //   id: 20,
    //   title: "Travel Companion",
    //   category: "APP Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Travel+App",
    //   description: "Travel planning and booking application.",
    // },
    // {
    //   id: 21,
    //   title: "E-learning Platform",
    //   category: "APP Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Learning+App",
    //   description: "Educational application for online courses.",
    // },
    // // Removed 6th APP Design
    // {
    //   id: 23,
    //   title: "Social Network",
    //   category: "APP Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Social+App",
    //   description: "Social media application with interactive features.",
    // },
    // {
    //   id: 24,
    //   title: "Healthcare Monitor",
    //   category: "APP Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Healthcare+App",
    //   description: "Health monitoring and medical appointment application.",
    // },

    // Website Design
    {
      id: 25,
      category: "Website Design",
      image: "/images/web1.png?height=600&width=800&text=Corporate+Website",
    },
    {
      id: 26,
      category: "Website Design",
      image: "/images/web.png?height=600&width=800&text=E-commerce+Website",
    },
    {
      id: 27,
      category: "Website Design",
      image: "/images/web25.png?height=600&width=800&text=Portfolio+Website",
    },
    // {
    //   id: 28,
    //   title: "Educational Platform",
    //   category: "Website Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Education+Website",
    //   description: "Learning management system for educational institution.",
    // },
    // {
    //   id: 29,
    //   title: "News Portal",
    //   category: "Website Design",
    //   image: "/placeholder.svg?height=600&width=800&text=News+Website",
    //   description: "News and media website with content management system.",
    // },
    // // Removed 6th Website Design
    // {
    //   id: 31,
    //   title: "Travel Agency",
    //   category: "Website Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Travel+Website",
    //   description: "Travel agency website with booking features.",
    // },
    // {
    //   id: 32,
    //   title: "Healthcare Provider",
    //   category: "Website Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Healthcare+Website",
    //   description: "Healthcare provider website with patient portal.",
    // },

    // Banner Design
    {
      id: 33,
      category: "Banner Design",
      image: "/images/banner1.png?height=600&width=800&text=Conference+Banner",
    },
    {
      id: 34,
      category: "Banner Design",
      image: "/images/banner2.png?height=600&width=800&text=Product+Launch+Banner",
    },
    {
      id: 35,
      category: "Banner Design",
      image: "/images/banner3.png?height=600&width=800&text=Sale+Banner",
    },
    // {
    //   id: 36,
    //   title: "Web Banner",
    //   category: "Banner Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Web+Banner",
    //   description: "Digital banner for website header.",
    // },
    // {
    //   id: 37,
    //   title: "Exhibition Banner",
    //   category: "Banner Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Exhibition+Banner",
    //   description: "Large format banner for exhibition display.",
    // },
    // // Removed 6th Banner Design
    // {
    //   id: 39,
    //   title: "Event Promotion",
    //   category: "Banner Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Event+Banner",
    //   description: "Banner for promoting upcoming event.",
    // },
    // {
    //   id: 40,
    //   title: "Holiday Banner",
    //   category: "Banner Design",
    //   image: "/placeholder.svg?height=600&width=800&text=Holiday+Banner",
    //   description: "Festive banner for holiday season promotion.",
    // },

    // T-Shirt Design
    {
      id: 41,
      title: "Corporate T-Shirt",
      category: "T-Shirt Design",
      image: "/images/tshirt2.png?height=600&width=800&text=Corporate+T-Shirt",
    },
    {
      id: 42,
      title: "Event Merchandise",
      category: "T-Shirt Design",
      image: "/images/tshirt1.png?height=600&width=800&text=Event+T-Shirt",
    },
    {
      id: 43,
      title: "Brand Apparel",
      category: "T-Shirt Design",
      image: "/images/tshirt3.png?height=600&width=800&text=Brand+T-Shirt",
    },
    {
      id: 44,
      title: "Certificate",
      category: "Certificate Design",
      image: "/images/certificate1.png?height=600&width=800&text=Art+certificate",
    },
    {
      id: 45,
      title: "Invitation Card",
      category: "Card Design",
      image: "/images/card2.png?height=600&width=800&text=card+design",
    },
    // Removed 6th T-Shirt Design
    {
      id: 47,
      category: "Card Design",
      image: "/images/card1.png?height=600&width=800&text=Visiting+Card",
    },
    {
      id: 48,
      category: "Card Design",
      image: "/images/card3.png?height=600&width=800&text=Business+Card",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black to-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ 
          backgroundImage: "url('/images/background.png')",
          backgroundBlendMode: "overlay" 
          }}></div>
        <AnimatedSection className="container relative z-10 mx-auto px-4 text-center min-h-[250px]">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Explore our portfolio of creative projects and digital solutions.
          </p>
        </AnimatedSection>
      </section>

      {/* Custom Portfolio Sections by Category */}
      {/* Advertisement Post */}
      <section className="py-12 bg-black border-t-4 border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          Advertising <span className="text-pink-400">Post</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "Advertisement Post").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Work */}
      <section className="py-12 bg-black border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          Logos <span className="text-pink-400">Work</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "Logo Work").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* APP Design */}
      <section className="py-12 bg-black border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          App <span className="text-pink-400">Design</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "APP Design").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Website Design */}
      <section className="py-12 bg-black border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          Website <span className="text-pink-400">Design</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "Website Design").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      {/* Banner Design */}
      <section className="py-12 bg-black border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          Banner <span className="text-pink-400">Design</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "Banner Design").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* T-Shirt Design */}
      <section className="py-12 bg-black border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          T-Shirt <span className="text-pink-400">Design</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "T-Shirt Design").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Card Design */}
      <section className="py-12 bg-black border-b-4 border-purple-400/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-300">
          Card <span className="text-pink-400">Design</span>
        </h2>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.category === "Card Design").map((project, idx) => (
              <AnimatedCard key={project.id} delay={0.1 * (idx + 1)}>
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-16">
        <AnimatedSection className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-purple-100">
            Let's bring your vision to life. Our team is ready to help you create something amazing.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Start a Project
          </Button>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-16">
        <AnimatedSection className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-purple-100">
            Let's bring your vision to life. Our team is ready to help you create something amazing.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Start a Project
          </Button>
        </AnimatedSection>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  // Animation variants for the image container
  const imageContainerVariants = {
    initial: {
      boxShadow: "0 0 0 rgba(127, 76, 254, 0)",
    },
    hover: {
      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
    },
  }

  // Animation variants for the image
  const imageVariants = {
    initial: {
      scale: 1,
      filter: "brightness(1)",
    },
    hover: {
      scale: 1.1,
      filter: "brightness(1.1)",
      transition: {
        scale: { duration: 0.6, ease: "easeOut" },
        filter: { duration: 0.4 },
      },
    },
  }

  // Animation variants for the overlay
  const overlayVariants = {
    initial: {
      opacity: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 transition-all duration-300 hover:from-purple-900 hover:to-purple-800">
      <div className="h-full rounded-lg bg-gray-900 overflow-hidden">
        <motion.div
          className={`relative h-96 overflow-hidden`}
          initial="initial"
          whileHover="hover"
          variants={imageContainerVariants}
        >
          <motion.div className="absolute inset-0" variants={imageVariants}>
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </motion.div>

          <motion.div className="absolute inset-0" variants={overlayVariants} />

          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>

        {project.description && (
          <div className="px-4 pb-4 pt-2">
            <p className="text-gray-400 text-center text-sm">{project.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
