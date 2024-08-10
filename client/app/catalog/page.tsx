/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5IYLdwyIgie
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    rating: "all",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const products = [
    {
      id: 1,
      name: "Premium Coffee",
      description:
        "Start your day with a delicious cup of our specialty coffee. Sourced from the finest beans and roasted to perfection, our premium coffee is the perfect way to kickstart your morning.",
      price: 19.99,
      rating: 4.5,
      category: "beverages",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Organic Granola",
      description:
        "Fuel your day with our nutritious and delicious granola. Made with wholesome ingredients like oats, nuts, and dried fruit, this granola is a satisfying and healthy breakfast option.",
      price: 12.99,
      rating: 4.7,
      category: "breakfast",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Breakfast Mug Set",
      description:
        "Enjoy your morning beverages in style with our high-quality mugs. This set includes four mugs in a variety of colors, perfect for sipping your coffee, tea, or hot chocolate.",
      price: 24.99,
      rating: 4.3,
      category: "accessories",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Oatmeal Variety Pack",
      description:
        "Explore our selection of delicious and nutritious oatmeal flavors. This variety pack includes five different flavors, from classic to creative, to keep your breakfast routine exciting.",
      price: 14.99,
      rating: 4.6,
      category: "breakfast",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Breakfast Smoothie Mix",
      description:
        "Blend up a nutritious and delicious breakfast smoothie with our convenient smoothie mix. Just add your favorite milk or yogurt and enjoy a quick and easy breakfast on the go.",
      price: 9.99,
      rating: 4.4,
      category: "beverages",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Breakfast Bowl Set",
      description:
        "Enjoy your morning oatmeal or yogurt in these stylish bowls. The set includes four bowls in a variety of colors, perfect for creating a beautiful and functional breakfast display.",
      price: 29.99,
      rating: 4.8,
      category: "accessories",
      image: "/placeholder.svg",
    },
  ];
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.price !== "all") {
      if (filters.price === "low") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (filters.price === "high") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }
    }
    if (filters.rating !== "all") {
      if (filters.rating === "high") {
        filtered = filtered.filter((product) => product.rating >= 4);
      } else if (filters.rating === "low") {
        filtered = filtered.filter((product) => product.rating < 4);
      }
    }
    return filtered;
  }, [searchTerm, filters]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };
  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of "${selectedProduct.name}" to the cart.`);
  };
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
        <Button variant="outline" className="hidden md:inline-flex">
          Sign In
        </Button>
      </header>
      <main className="flex-1">
        {selectedProduct ? (
          <section className="bg-muted py-12 md:py-20 lg:py-28">
            <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img
                  src="/placeholder.svg"
                  alt={selectedProduct.name}
                  width={600}
                  height={600}
                  className="w-full rounded-lg"
                  style={{ aspectRatio: "600/600", objectFit: "cover" }}
                />
              </div>
              <div className="grid gap-6">
                <div>
                  <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
                  <p className="text-muted-foreground">
                    {selectedProduct.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <span className="text-lg font-medium">
                      {selectedProduct.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-3xl font-bold">
                    ${selectedProduct.price}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Select
                      id="quantity"
                      value={quantity}
                      onValueChange={setQuantity}
                      className="w-24"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={1}>1</SelectItem>
                        <SelectItem value={2}>2</SelectItem>
                        <SelectItem value={3}>3</SelectItem>
                        <SelectItem value={4}>4</SelectItem>
                        <SelectItem value={5}>5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size="lg" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ) : (
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
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full max-w-md"
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Filter <ChevronDownIcon className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                          checked={filters.category === "all"}
                          onCheckedChange={() =>
                            handleFilterChange("category", "all")
                          }
                        >
                          All Categories
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          checked={filters.category === "beverages"}
                          onCheckedChange={() =>
                            handleFilterChange("category", "beverages")
                          }
                        >
                          Beverages
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          checked={filters.category === "breakfast"}
                          onCheckedChange={() =>
                            handleFilterChange("category", "breakfast")
                          }
                        >
                          Breakfast
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          checked={filters.category === "accessories"}
                          onCheckedChange={() =>
                            handleFilterChange("category", "accessories")
                          }
                        >
                          Accessories
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={filters.price}
                          onValueChange={(value) =>
                            handleFilterChange("price", value)
                          }
                        >
                          <DropdownMenuRadioItem value="all">
                            All Prices
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="low">
                            Low to High
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="high">
                            High to Low
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={filters.rating}
                          onValueChange={(value) =>
                            handleFilterChange("rating", value)
                          }
                        >
                          <DropdownMenuRadioItem value="all">
                            All Ratings
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="high">
                            4 Stars & Up
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="low">
                            Under 4 Stars
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer"
                      onClick={() => handleProductSelect(product)}
                    >
                      <img
                        src="/placeholder.svg"
                        alt={product.name}
                        width={500}
                        height={400}
                        className="object-cover w-full h-64"
                        style={{ aspectRatio: "500/400", objectFit: "cover" }}
                      />
                      <div className="p-4 bg-background">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold md:text-xl">
                            ${product.price}
                          </h4>
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 fill-primary" />
                            <span className="text-sm font-medium">
                              {product.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
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

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
