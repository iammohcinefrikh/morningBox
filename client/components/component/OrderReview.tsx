import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItem, DeliveryInfo } from "@/types";

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
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Review</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold">Cart Items</h3>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center my-2"
              >
                <p>{item.name}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold">Delivery Information</h3>
            <p>{deliveryInfo.name}</p>
            <p>{deliveryInfo.email}</p>
            <p>{deliveryInfo.phone}</p>
            <p>{deliveryInfo.address}</p>
            <p>
              {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.zip},{" "}
              {deliveryInfo.country}
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold">Payment Information</h3>
            <p>
              Method:{" "}
              {paymentMethod === "credit_card" ? "Credit Card" : "PayPal"}
            </p>
            {paymentMethod === "credit_card" && (
              <>
                <p>Card Number: **** **** **** {cardNumber.slice(-4)}</p>
                <p>Expiry: {cardExpiry}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={onPrevious}>
          Back to Payment
        </Button>
        <Button onClick={onNext}>Submit Order</Button>
      </div>
    </div>
  );
}
