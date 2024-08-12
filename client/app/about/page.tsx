import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Crafting the Perfect Morning Experience
                </h2>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MorningBox was founded in 2018 with the mission of helping
                  people start their day right. We believe that a great morning
                  routine can set the tone for the entire day, which is why
                  we&apos;re dedicated to creating products that make mornings
                  more enjoyable and productive.
                </p>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experts has years of experience in the wellness
                  and lifestyle industries, and we&apos;re constantly innovating
                  to bring you the best possible products and services. From our
                  premium coffee blends to our customizable meal kits,
                  we&apos;re committed to helping you create a morning routine
                  that works for you.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="About Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <section className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-32 w-32">
                  <Image
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="John Doe"
                    className="rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary px-2 py-1 text-primary-foreground rounded-full">
                    CEO
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-muted-foreground">
                    Chief Executive Officer
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    John is the visionary behind MorningBox, with over 15 years
                    of experience in the food and beverage industry.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-32 w-32">
                  <Image
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Jane Smith"
                    className="rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary px-2 py-1 text-primary-foreground rounded-full">
                    CTO
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Jane Smith</h3>
                  <p className="text-muted-foreground">
                    Chief Technology Officer
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Jane is the tech mastermind behind MorningBox, ensuring our
                    platform and logistics run seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-32 w-32">
                  <Image
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Michael Johnson"
                    className="rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary px-2 py-1 text-primary-foreground rounded-full">
                    COO
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Michael Johnson</h3>
                  <p className="text-muted-foreground">
                    Chief Operating Officer
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Michael oversees the day-to-day operations of MorningBox,
                    ensuring our customers receive the best possible experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch with MorningBox
                </h2>
                <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you have a question about our products, want to learn
                  more about our company, or are interested in partnering with
                  us, we&apos;d love to hear from you. Fill out the form below
                  or by email at info@morningbox.com. and one of our team
                  members will be in touch with you shortly.
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
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="Contact Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
