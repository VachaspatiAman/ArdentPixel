import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About - Ardent Pixel",
  description: "Learn more about Ardent Pixel and our mission to create stunning designs for brands.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Us</h1>
        <p className="text-lg text-muted-foreground">
           help you to build website company that is modern, user friendly, good CEO, and Clean design
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Who we are</h2>
          <p className="mb-4 text-muted-foreground">
          At Ardent Pixels, we are more than just a company — we are a dynamic force driven by passion, innovation, and a relentless pursuit of excellence.
          Our journey is not just about creating products or offering services; it's about telling a story. 
          A story of bold ideas, fearless creativity, and a shared commitment to shaping the future. 
          We don't settle for mediocrity — we strive for the extraordinary.
          </p>
          <p className="mb-4 text-muted-foreground">
            We're a creative team that loves helping businesses and individuals bring their ideas to life through design. 
            Whether you need a striking advertising poster, a unique logo, or a full branding makeover, we’ve got you covered. 
            Our services include designing apps, websites, and magazines, as well as creating custom promotional materials like t-shirts, ID cards, banners, invitations, business cards, and certificates.
          </p>
          <p className="text-muted-foreground">
          But that’s not all – we also offer professional photography to capture the essence of your brand or special event. 
          Our goal is to provide you with tailored design solutions that match your vision, whether it's for a business, a personal event, or a creative project. 
          We pride ourselves on delivering high-quality, fresh designs that will help you stand out and leave a lasting impression. 
          Your satisfaction is our top priority, and we’re here to make your ideas come to life!
          </p>
        </div>
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full bg-blue-500 opacity-20 blur-3xl" />
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Our team at work"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 text-xl font-bold">Innovation</h3>
            <p className="text-muted-foreground">
              We embrace new technologies and approaches to solve complex design challenges and create forward-thinking
              solutions.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 text-xl font-bold">Collaboration</h3>
            <p className="text-muted-foreground">
              We believe the best work happens when clients and designers work together as partners throughout the
              creative process.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 text-xl font-bold">Excellence</h3>
            <p className="text-muted-foreground">
              We're committed to delivering exceptional quality in everything we do, from concept to execution.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={`/placeholder.svg?height=160&width=160&text=Team Member ${i}`}
                  alt={`Team member ${i}`}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">Team Member {i}</h3>
              <p className="text-sm text-muted-foreground">Creative Director</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
