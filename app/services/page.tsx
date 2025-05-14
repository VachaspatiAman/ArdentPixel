import type { Metadata } from "next"
import ServiceCard from "@/components/service-card"

export const metadata: Metadata = {
  title: "Services - Ardent Pixel",
  description: "Explore our comprehensive range of design and development services.",
}

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          We offer a comprehensive range of design services to help your brand stand out in the digital landscape.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="UI/UX Design"
          description="Create intuitive and engaging user experiences that delight your customers and drive conversions."
          icon="Palette"
        />
        <ServiceCard
          title="Brand Identity"
          description="Develop a cohesive and memorable brand identity that resonates with your target audience."
          icon="Brush"
        />
        <ServiceCard
          title="Web Development"
          description="Build responsive and performant websites that showcase your brand and engage your users."
          icon="Code"
        />
        <ServiceCard
          title="Mobile Apps"
          description="Design and develop mobile applications that provide value and enhance user engagement."
          icon="Smartphone"
        />
        <ServiceCard
          title="Digital Marketing"
          description="Create compelling digital marketing campaigns that drive traffic and generate leads."
          icon="BarChart"
        />
        <ServiceCard
          title="Content Creation"
          description="Produce high-quality content that tells your brand story and connects with your audience."
          icon="FileText"
        />
      </div>

      <div className="mt-16 space-y-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">UI/UX Design Process</h2>
            <p className="mb-4 text-muted-foreground">
              Our user-centered design process ensures that we create intuitive and engaging experiences that meet both
              user needs and business goals.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>User Research and Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Information Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Wireframing and Prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Visual Design and UI Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Usability Testing and Iteration</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Web Development Expertise</h2>
            <p className="mb-4 text-muted-foreground">
              We build modern, responsive websites using the latest technologies and best practices to ensure optimal
              performance and user experience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Responsive Web Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Frontend Development (React, Next.js)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>Backend Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>E-commerce Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>CMS Integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
