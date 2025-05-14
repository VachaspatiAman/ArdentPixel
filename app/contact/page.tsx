import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact - Ardent Pixel",
  description: "Get in touch with Ardent Pixel to discuss your project.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Ready to transform your brand with stunning design? Get in touch with us today.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
          <p className="mb-8 text-muted-foreground">
            Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your
            project!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="mr-4 h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-muted-foreground">hello@ardentpixel.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-4 h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="mr-4 h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-bold">Office</h3>
                <p className="text-muted-foreground">123 Design Street, Creative City</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
