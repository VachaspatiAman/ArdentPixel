import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Works - Ardent Pixel",
  description:
    "Explore our portfolio of successful projects that have helped our clients achieve their business goals.",
}

export default function WorksPage() {
  const projects = [
    {
      id: 1,
      title: "Eco Lifestyle App",
      category: "Mobile App Design",
      description:
        "A mobile application that helps users track and reduce their carbon footprint through daily activities.",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Fusion Restaurant",
      category: "Brand Identity",
      description: "Complete brand identity design for a modern fusion restaurant, including logo, menu, and website.",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Nomad Travel Blog",
      category: "Web Development",
      description: "A responsive travel blog with custom CMS integration for a popular travel influencer.",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Wellness Center",
      category: "UI/UX Design",
      description: "User interface and experience design for a wellness center booking platform.",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Tech Startup",
      category: "Brand Identity",
      description: "Brand identity and marketing materials for a tech startup in the AI space.",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Custom e-commerce platform for a boutique fashion retailer with inventory management.",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Works</h1>
        <p className="text-lg text-muted-foreground">
          Explore our portfolio of successful projects that have helped our clients achieve their business goals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-2 text-sm font-medium text-blue-500">{project.category}</div>
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/works/${project.id}`}>View Project</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
