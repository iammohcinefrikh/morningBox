import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { redirect } from "next/navigation";

interface CartSummaryProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  onNext: () => void;
}

export default function CartSummary({
  cart,
  setCart,
  onNext,
}: CartSummaryProps) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleQuantityChange = (id, quantity) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">Shopping Cart</h1>
          <p className="text-muted-foreground">
            Review your items and complete your purchase.
          </p>
        </div>
        <Link href="/catalog" className="ml-auto shrink-0" prefetch={false}>
          <Button size="lg" variant="outline">
            Continue Shopping
          </Button>
        </Link>
      </div>
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
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                >
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="text-center font-medium">{item.quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Remove item</span>
                </Button>
                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
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

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
