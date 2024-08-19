import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderConfirmed() {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <CircleCheckIcon className="text-green-500 size-12" />
        <h2 className="text-2xl font-bold">Order Confirmed</h2>
        <p className="text-muted-foreground" />
      </div>
      <p className="text-lg mb-8">
        Thank you for your purchase. Your order is on its way.
      </p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
