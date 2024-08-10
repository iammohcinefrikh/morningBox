import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BoxIcon className="h-8 w-8" />
          <span className="text-xl font-bold">MorningBox</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex text-gray-600"
        >
          Sign In
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h1 className="text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Start Your Day Right with MorningBox
              </h1>
              <p className="text-primary-foreground/80 max-w-[600px] md:text-xl">
                MorningBox is your one-stop solution for a healthy and
                energizing start to your day. Discover our curated selection of
                premium breakfast products and accessories to kickstart your
                morning routine.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore the Catalog
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="MorningBox Hero"
              className="mx-auto aspect-[3/2] rounded-lg object-cover"
            />
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <MouseIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Premium Beverages</h3>
              <p className="text-muted-foreground">
                Indulge in our selection of high-quality coffee, tea, and other
                beverages to kickstart your day with a burst of energy and
                flavor.
              </p>
            </div>
            <div className="space-y-4">
              <AlarmClockIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Healthy Breakfast</h3>
              <p className="text-muted-foreground">
                Fuel your body with our nutritious and delicious breakfast
                options, including oatmeal, granola, and more, to power you
                through your day.
              </p>
            </div>
            <div className="space-y-4">
              <AccessibilityIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Breakfast Accessories</h3>
              <p className="text-muted-foreground">
                Enhance your morning routine with our curated selection of
                breakfast accessories, from stylish mugs to practical storage
                solutions.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 grid gap-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Our Product Catalog
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto md:text-xl">
                Browse our wide selection of premium breakfast products and
                accessories to find the perfect items to start your day off
                right.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Product 1"
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Premium Coffee</h3>
                    <p className="text-sm text-muted-foreground">
                      Start your day with a delicious cup of our specialty
                      coffee.
                    </p>
                    <h4 className="text-lg font-semibold md:text-xl">$19.99</h4>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Product 2"
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Organic Granola</h3>
                    <p className="text-sm text-muted-foreground">
                      Fuel your day with our nutritious and delicious granola.
                    </p>
                    <h4 className="text-lg font-semibold md:text-xl">$12.99</h4>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Product 3"
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Breakfast Mug Set</h3>
                    <p className="text-sm text-muted-foreground">
                      Enjoy your morning beverages in style with our
                      high-quality mugs.
                    </p>
                    <h4 className="text-lg font-semibold md:text-xl">$24.99</h4>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Product 4"
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Oatmeal Variety Pack</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore our selection of delicious and nutritious oatmeal
                      flavors.
                    </p>
                    <h4 className="text-lg font-semibold md:text-xl">$14.99</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <BoxIcon className="h-6 w-6" />
            <span className="text-lg font-bold">MorningBox</span>
          </div>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function AlarmClockIcon(props) {
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
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  );
}

function BoxIcon(props) {
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function MouseIcon(props) {
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
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  );
}
