import React from "react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-primary py-12 md:py-20 lg:py-28">
      <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Start Your Day Right with MorningBox
          </h1>
          <p className="text-primary-foreground/80 max-w-[600px] md:text-xl">
            MorningBox is your one-stop solution for a healthy and energizing
            start to your day. Discover our curated selection of premium
            breakfast products and accessories to kickstart your morning
            routine.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Explore the Catalog
          </Link>
        </div>
        <Image
          src="/placeholder.svg"
          width={600}
          height={400}
          alt="MorningBox Hero"
          className="mx-auto aspect-[3/2] rounded-lg object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
