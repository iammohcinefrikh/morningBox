import ProductDetail from "@/components/component/ProductDetail";
import { products } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
type Props = {
  params: { id: number };
};
export default function Component({ params: { id } }: Props) {
  const selectedProduct = products.find((product) => product.id == id);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-start">
            {(selectedProduct && (
              <>
                <div>
                  <Image
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.name}
                    width={600}
                    height={600}
                    className="w-full rounded-lg"
                    style={{ aspectRatio: "600/600", objectFit: "cover" }}
                  />
                </div>
                <ProductDetail product={selectedProduct} />
              </>
            )) ||
              redirect("/404")}
          </div>
        </section>
      </main>
    </div>
  );
}
