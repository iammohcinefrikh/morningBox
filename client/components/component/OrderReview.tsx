import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem, DeliveryInfo } from "@/types";
import Image from "next/image";

interface OrderReviewProps {
  cart: CartItem[];
  deliveryInfo: DeliveryInfo;
  paymentMethod: string;
  cardNumber: string;
  cardExpiry: string;
  onNext: () => void;
  onPrevious: () => void;
}

export default function OrderReview({
  cart,
  deliveryInfo,
  paymentMethod,
  cardNumber,
  cardExpiry,
  onNext,
  onPrevious,
}: OrderReviewProps) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Review</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cart Summary</h3>
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
                    <h4 className="font-semibold">{item.name}</h4>
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
          <div>
            <h3 className="text-lg font-semibold mb-2">Delivery Information</h3>
            <div className="grid gap-2">
              <p>
                <span className="font-semibold">Name:</span> {deliveryInfo.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {deliveryInfo.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {deliveryInfo.phone}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {deliveryInfo.address}, {deliveryInfo.city},{" "}
                {deliveryInfo.state} {deliveryInfo.zip}, {deliveryInfo.country}
              </p>
              {deliveryInfo.notes && (
                <p>
                  <span className="font-semibold">Delivery Notes:</span>{" "}
                  {deliveryInfo.notes}
                </p>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="grid gap-2">
              <p>
                <span className="font-semibold">Payment Method:</span>{" "}
                {paymentMethod === "credit-card"
                  ? "Credit Card"
                  : paymentMethod === "paypal"
                  ? "PayPal"
                  : "Cash on Delivery"}
              </p>
              {paymentMethod === "credit-card" && (
                <>
                  <p>
                    <span className="font-semibold">Card Number:</span>{" "}
                    {cardNumber}
                  </p>
                  <p>
                    <span className="font-semibold">Expiry Date:</span>{" "}
                    {cardExpiry}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button onClick={onNext}>Place Order</Button>
      </div>
    </div>
  );
}
