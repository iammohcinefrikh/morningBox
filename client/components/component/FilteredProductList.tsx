"use client";

import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
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
import ProductCard from "@/components/component/ProductCard";

// TypeScript types for better type checking
type Product = {
  id: number;
  name: string;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
};

type FilteredProductListProps = {
  products: Product[];
};

export default function FilteredProductList({
  products,
}: FilteredProductListProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    rating: "all",
  });

  // Helper function to apply filtering based on search term
  const filterBySearchTerm = useCallback(
    (product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    [searchTerm]
  );

  // Helper function to apply category filter
  const filterByCategory = useCallback(
    (product: Product) =>
      filters.category === "all" || product.category === filters.category,
    [filters.category]
  );

  // Helper function to apply rating filter
  const filterByRating = useCallback(
    (product: Product) =>
      filters.rating === "all" ||
      (filters.rating === "high" ? product.rating >= 4 : product.rating < 4),
    [filters.rating]
  );

  // Helper function to apply price sorting
  const sortProductsByPrice = useCallback(
    (a: Product, b: Product) => {
      if (filters.price === "low") return a.price - b.price;
      if (filters.price === "high") return b.price - a.price;
      return 0; // No sorting if "all" is selected
    },
    [filters.price]
  );

  // Compute filtered products
  const filteredProducts = useMemo(() => {
    return products
      .filter(filterBySearchTerm)
      .filter(filterByCategory)
      .filter(filterByRating)
      .sort(sortProductsByPrice);
  }, [
    products,
    filterBySearchTerm,
    filterByCategory,
    filterByRating,
    sortProductsByPrice,
  ]);

  // Handlers wrapped in useCallback for optimization
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }, []);

  return (
    <>
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search products"
          className="w-full max-w-md"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" aria-haspopup="true">
              Filter{" "}
              <ChevronDownIcon className="h-4 w-4 ml-2" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={filters.category === "all"}
              onCheckedChange={() => handleFilterChange("category", "all")}
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
              onValueChange={(value) => handleFilterChange("price", value)}
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
              onValueChange={(value) => handleFilterChange("rating", value)}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
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
    </>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
