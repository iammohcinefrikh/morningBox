import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
      <div className="bg-background rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
        <div className="space-y-4">
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center gap-4">
              <RadioGroupItem id="credit-card" value="credit-card" />
              <Label htmlFor="credit-card" className="flex items-center gap-2">
                <CreditCardIcon className="w-5 h-5" />
                Credit Card
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <RadioGroupItem id="paypal" value="paypal" />
              <Label htmlFor="paypal" className="flex items-center gap-2">
                <WalletCardsIcon className="w-5 h-5" />
                PayPal
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <RadioGroupItem id="cash" value="cash" />
              <Label htmlFor="cash" className="flex items-center gap-2">
                <DollarSignIcon className="w-5 h-5" />
                Cash
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-8">
          <div className="bg-background rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <form className="space-y-4">
              <div
                className={`${
                  paymentMethod === "credit-card" ? "block" : "hidden"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Enter your card number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiration-date">Expiration Date</Label>
                    <Input
                      id="card-expiry"
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="card-cvv"
                      type="text"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="CVV"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name-on-card">Name on Card</Label>
                    <Input id="name-on-card" placeholder="Enter name on card" />
                  </div>
                </div>
              </div>
              <div
                className={`${paymentMethod === "paypal" ? "block" : "hidden"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="paypal-email">PayPal Email</Label>
                    <Input
                      id="paypal-email"
                      type="email"
                      placeholder="Enter your PayPal email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="paypal-password">PayPal Password</Label>
                    <Input
                      id="paypal-password"
                      type="password"
                      placeholder="Enter your PayPal password"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${paymentMethod === "cash" ? "block" : "hidden"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-6 w-6 text-primary" />
                  <p>You will pay with cash upon delivery.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
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

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}
