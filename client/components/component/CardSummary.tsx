import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface CartSummaryProps {
  cart: CartItem[];
  onNext: () => void;
}

export default function CartSummary({ cart, onNext }: CartSummaryProps) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
            >
              <Image
                src="/placeholder.svg"
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-muted-foreground">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-semibold">
            ${calculateTotal().toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button onClick={onNext}>Continue to Delivery</Button>
      </div>
    </div>
  );
}
