import Hero from "@/components/component/Hero";
import ProductCard from "@/components/component/ProductCard";
import Services from "@/components/component/Services";
import { products } from "@/lib/utils";
const topProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 4);

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
              {topProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  imageSrc={product.imageSrc}
                  altText={product.altText}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
