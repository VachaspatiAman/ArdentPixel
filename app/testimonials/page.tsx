import type { Metadata } from "next"
import TestimonialCard from "@/components/testimonial-card"

export const metadata: Metadata = {
  title: "Testimonials - Ardent Pixel",
  description: "See what our clients have to say about working with Ardent Pixel.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Ardent Pixel transformed our brand identity and helped us connect with our target audience in ways we never thought possible.",
      author: "Sarah Johnson",
      company: "Eco Living Co.",
    },
    {
      id: 2,
      quote:
        "The team's attention to detail and creative approach to problem-solving made all the difference in our website redesign project.",
      author: "Michael Chen",
      company: "Fusion Restaurants",
    },
    {
      id: 3,
      quote:
        "Working with Ardent Pixel was a game-changer for our startup. They delivered a mobile app that exceeded our expectations.",
      author: "Emma Rodriguez",
      company: "TravelNomad",
    },
    {
      id: 4,
      quote:
        "Their strategic approach to brand identity helped us stand out in a crowded market and connect with our ideal customers.",
      author: "David Kim",
      company: "Wellness Center",
    },
    {
      id: 5,
      quote:
        "The website Ardent Pixel created for us has significantly increased our conversion rates and improved user engagement.",
      author: "Jessica Martinez",
      company: "Tech Innovations",
    },
    {
      id: 6,
      quote:
        "From concept to execution, the Ardent Pixel team was professional, creative, and committed to our project's success.",
      author: "Robert Taylor",
      company: "Financial Services Inc.",
    },
  ]

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Client Testimonials</h1>
        <p className="text-lg text-muted-foreground">
          Don't just take our word for it. Here's what our clients have to say about working with us.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            author={testimonial.author}
            company={testimonial.company}
          />
        ))}
      </div>

      <div className="mt-20 rounded-lg bg-blue-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to work with us?</h2>
        <p className="mb-6 text-muted-foreground">
          Let's create something amazing together. Get in touch to discuss your project.
        </p>
        <a
          href="/contact"
          className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
