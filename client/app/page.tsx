import Hero from "@/components/component/Hero";
import ProductCard from "@/components/component/ProductCard";
import Services from "@/components/component/Services";

const products = [
  {
    href: "#",
    imageSrc: "/placeholder.svg",
    altText: "Product 1",
    title: "Premium Coffee",
    description: "Start your day with a delicious cup of our specialty coffee.",
    price: "$19.99",
  },
  {
    href: "#",
    imageSrc: "/placeholder.svg",
    altText: "Product 2",
    title: "Organic Granola",
    description: "Fuel your day with our nutritious and delicious granola.",
    price: "$12.99",
  },
  {
    href: "#",
    imageSrc: "/placeholder.svg",
    altText: "Product 3",
    title: "Breakfast Mug Set",
    description:
      "Enjoy your morning beverages in style with our high-quality mugs.",
    price: "$24.99",
  },
  {
    href: "#",
    imageSrc: "/placeholder.svg",
    altText: "Product 4",
    title: "Oatmeal Variety Pack",
    description:
      "Explore our selection of delicious and nutritious oatmeal flavors.",
    price: "$14.99",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <Hero />
        <Services />
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
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  href={product.href}
                  imageSrc={product.imageSrc}
                  altText={product.altText}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
