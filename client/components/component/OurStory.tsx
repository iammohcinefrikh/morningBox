import Image from "next/image";

const OurStory = () => {
  return (
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
              MorningBox was founded in 2018 with the mission of helping people
              start their day right. We believe that a great morning routine can
              set the tone for the entire day, which is why we&apos;re dedicated
              to creating products that make mornings more enjoyable and
              productive.
            </p>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experts has years of experience in the wellness and
              lifestyle industries, and we&apos;re constantly innovating to
              bring you the best possible products and services. From our
              premium coffee blends to our customizable meal kits, we&apos;re
              committed to helping you create a morning routine that works for
              you.
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
  );
};

export default OurStory;
