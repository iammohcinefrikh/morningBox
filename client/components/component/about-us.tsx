/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/CeZlpiJZ1qh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function about-us() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">MorningBox</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Crafting the Perfect Morning Experience
                </h2>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MorningBox was founded in 2018 with the mission of helping people start their day right. We believe
                  that a great morning routine can set the tone for the entire day, which is why we're dedicated to
                  creating products that make mornings more enjoyable and productive.
                </p>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experts has years of experience in the wellness and lifestyle industries, and we're
                  constantly innovating to bring you the best possible products and services. From our premium coffee
                  blends to our customizable meal kits, we're committed to helping you create a morning routine that
                  works for you.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="About Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet the Experts Behind MorningBox
                </h2>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is made up of passionate individuals who are dedicated to helping you start your day off
                  right. From our co-founders to our product developers, each member of our team brings a unique set of
                  skills and experiences to the table.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-muted-foreground">Co-Founder</p>
                    <p className="text-sm text-muted-foreground">
                      John has over 10 years of experience in the wellness industry, and is passionate about helping
                      people achieve their health and fitness goals.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">Jane Appleseed</h4>
                    <p className="text-muted-foreground">Head of Product</p>
                    <p className="text-sm text-muted-foreground">
                      Jane has a background in design and user experience, and is dedicated to creating products that
                      are both beautiful and functional.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">Sarah Miller</h4>
                    <p className="text-muted-foreground">Head of Marketing</p>
                    <p className="text-sm text-muted-foreground">
                      Sarah has a wealth of experience in the marketing industry, and is passionate about helping
                      MorningBox reach new customers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">Tom Wilson</h4>
                    <p className="text-muted-foreground">Head of Operations</p>
                    <p className="text-sm text-muted-foreground">
                      Tom has a background in logistics and supply chain management, and is responsible for ensuring
                      that MorningBox's products are delivered to customers quickly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch with MorningBox
                </h2>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you have a question about our products, want to learn more about our company, or are
                  interested in partnering with us, we'd love to hear from you. Fill out the form below and one of our
                  team members will be in touch with you shortly.
                </p>
                <form className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Contact Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 MorningBox. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
