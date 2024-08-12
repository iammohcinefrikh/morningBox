import FilteredProductList from "@/components/component/FilteredProductList";
import { products } from "@/lib/utils";
export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
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
            <FilteredProductList products={products} />
          </div>
        </section>
      </main>
    </div>
  );
}
