import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PaymentMethodProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  cardExpiry: string;
  setCardExpiry: (value: string) => void;
  cardCvv: string;
  setCardCvv: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
  cardNumber,
  setCardNumber,
  cardExpiry,
  setCardExpiry,
  cardCvv,
  setCardCvv,
  onNext,
  onPrevious,
}: PaymentMethodProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label>Choose your payment method</Label>
            <div className="grid gap-2">
              <div>
                <Input
                  type="radio"
                  id="credit_card"
                  name="payment_method"
                  value="credit_card"
                  checked={paymentMethod === "credit_card"}
                  onChange={() => setPaymentMethod("credit_card")}
                />
                <Label htmlFor="credit_card" className="ml-2">
                  Credit Card
                </Label>
              </div>
              <div>
                <Input
                  type="radio"
                  id="paypal"
                  name="payment_method"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <Label htmlFor="paypal" className="ml-2">
                  PayPal
                </Label>
              </div>
            </div>
          </div>
          {paymentMethod === "credit_card" && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="card_number">Card Number</Label>
                <Input
                  id="card_number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter your card number"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="card_expiry">Expiry Date</Label>
                  <Input
                    id="card_expiry"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card_cvv">CVV</Label>
                  <Input
                    id="card_cvv"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    placeholder="Enter your CVV"
                  />
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={onPrevious}>
          Back to Delivery
        </Button>
        <Button onClick={onNext}>Review Order</Button>
      </div>
    </div>
  );
}
