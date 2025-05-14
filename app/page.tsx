"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import WorkCard from "@/components/work-card"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { Reveal } from "@/components/ui/reveal"
import { Parallax } from "@/components/ui/parallax"
import { FloatingElement } from "@/components/ui/floating-element"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <AnimatedGradient className="opacity-30" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-blue-300 opacity-20 blur-3xl" />
          <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-purple-300 opacity-20 blur-3xl" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <TextReveal
                text="Creating stunning designs for your brand"
                className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              />
              <Reveal direction="up" delay={0.2}>
                <p className="text-lg text-muted-foreground">
                  We transform your ideas into exceptional digital experiences that captivate your audience and drive
                  results.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/works" className="group">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="relative">
              <FloatingElement amplitude={15} duration={6}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10" />
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Creative design work"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </FloatingElement>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-70" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 blur-xl opacity-70" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowRight className="h-8 w-8 rotate-90 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={targetRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <motion.div style={{ opacity, scale }} className="container relative">
          <Reveal direction="up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer a comprehensive range of design services to help your brand stand out in the digital landscape.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "UI/UX Design",
                description:
                  "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
                icon: "Palette",
                delay: 0.1,
              },
              {
                title: "Brand Identity",
                description:
                  "Develop a cohesive and memorable brand identity that resonates with your target audience.",
                icon: "Brush",
                delay: 0.2,
              },
              {
                title: "Web Development",
                description: "Build responsive and performant websites that showcase your brand and engage your users.",
                icon: "Code",
                delay: 0.3,
              },
              {
                title: "Mobile Apps",
                description: "Design and develop mobile applications that provide value and enhance user engagement.",
                icon: "Smartphone",
                delay: 0.4,
              },
              {
                title: "Digital Marketing",
                description: "Create compelling digital marketing campaigns that drive traffic and generate leads.",
                icon: "BarChart",
                delay: 0.5,
              },
              {
                title: "Content Creation",
                description:
                  "Produce high-quality content that tells your brand story and connects with your audience.",
                icon: "FileText",
                delay: 0.6,
              },
            ].map((service, index) => (
              <Reveal key={index} direction="up" delay={service.delay}>
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={0.7} className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/services" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </motion.div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="container relative">
          <Reveal direction="up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of successful projects that have helped our clients achieve their business goals.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Eco Lifestyle App",
                category: "Mobile App Design",
                imageSrc: "/placeholder.svg?height=400&width=600",
                delay: 0.1,
              },
              {
                title: "Fusion Restaurant",
                category: "Brand Identity",
                imageSrc: "/placeholder.svg?height=400&width=600",
                delay: 0.2,
              },
              {
                title: "Nomad Travel Blog",
                category: "Web Development",
                imageSrc: "/placeholder.svg?height=400&width=600",
                delay: 0.3,
              },
            ].map((work, index) => (
              <Reveal key={index} direction="up" delay={work.delay}>
                <WorkCard title={work.title} category={work.category} imageSrc={work.imageSrc} />
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={0.4} className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/works" className="group">
                View All Works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <Parallax className="absolute inset-0" speed={-0.2}>
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-blue-300 opacity-10 blur-3xl" />
          <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-purple-300 opacity-10 blur-3xl" />
        </Parallax>
        <div className="container relative">
          <Reveal direction="up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Ardent Pixel transformed our brand identity and helped us connect with our target audience in ways we never thought possible.",
                author: "Sarah Johnson",
                company: "Eco Living Co.",
                delay: 0.1,
              },
              {
                quote:
                  "The team's attention to detail and creative approach to problem-solving made all the difference in our website redesign project.",
                author: "Michael Chen",
                company: "Fusion Restaurants",
                delay: 0.2,
              },
              {
                quote:
                  "Working with Ardent Pixel was a game-changer for our startup. They delivered a mobile app that exceeded our expectations.",
                author: "Emma Rodriguez",
                company: "TravelNomad",
                delay: 0.3,
              },
            ].map((testimonial, index) => (
              <Reveal key={index} direction="up" delay={testimonial.delay}>
                <TestimonialCard quote={testimonial.quote} author={testimonial.author} company={testimonial.company} />
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={0.4} className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/testimonials" className="group">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-blue-300 opacity-10 blur-3xl" />
          <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-purple-300 opacity-10 blur-3xl" />
        </div>
        <div className="container relative">
          <Reveal direction="up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to transform your brand with stunning design? Get in touch with us today.
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="mx-auto max-w-2xl">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
