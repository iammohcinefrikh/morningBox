"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of "${product.name}" to the cart.`);
  };

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <StarIcon className="w-5 h-5 fill-primary" />
          <span className="text-lg font-medium">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="text-3xl font-bold">${product.price}</div>
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
