import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderConfirmed() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
      <p className="text-lg mb-8">
        Thank you for your purchase. Your order is on its way.
      </p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
