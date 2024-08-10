"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Component() {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      quantity: 2,
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
    },
  ]);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleSubmit = () => {
    console.log("Order submitted:", {
      cart,
      deliveryInfo,
      paymentMethod,
      cardNumber,
      cardExpiry,
      cardCvv,
    });
    setStep(5);
  };
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="container mx-auto my-12 px-4 md:px-6 lg:px-8">
      <div className="grid gap-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid gap-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                  >
                    <img
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
              <Button onClick={handleNext}>Continue to Delivery</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={deliveryInfo.name}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={deliveryInfo.email}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={deliveryInfo.phone}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={deliveryInfo.address}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          address: e.target.value,
                        })
                      }
                      placeholder="Enter your address"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={deliveryInfo.city}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          city: e.target.value,
                        })
                      }
                      placeholder="Enter your city"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={deliveryInfo.state}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          state: e.target.value,
                        })
                      }
                      placeholder="Enter your state"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="zip">Zip</Label>
                    <Input
                      id="zip"
                      value={deliveryInfo.zip}
                      onChange={(e) =>
                        setDeliveryInfo({
                          ...deliveryInfo,
                          zip: e.target.value,
                        })
                      }
                      placeholder="Enter your zip code"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={deliveryInfo.country}
                    onChange={(e) =>
                      setDeliveryInfo({
                        ...deliveryInfo,
                        country: e.target.value,
                      })
                    }
                    placeholder="Enter your country"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Delivery Notes</Label>
                  <Textarea
                    id="notes"
                    value={deliveryInfo.notes}
                    onChange={(e) =>
                      setDeliveryInfo({
                        ...deliveryInfo,
                        notes: e.target.value,
                      })
                    }
                    placeholder="Enter any delivery notes"
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleNext}>Continue to Payment</Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="grid gap-4"
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="credit_card" id="credit_card" />
                  <Label
                    htmlFor="credit_card"
                    className="flex items-center gap-2"
                  >
                    <CreditCardIcon className="w-5 h-5" />
                    Credit Card
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex items-center gap-2">
                    <WalletCardsIcon className="w-5 h-5" />
                    PayPal
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="apple_pay" id="apple_pay" />
                  <Label
                    htmlFor="apple_pay"
                    className="flex items-center gap-2"
                  >
                    <DollarSignIcon className="w-5 h-5" />
                    Apple Pay
                  </Label>
                </div>
              </RadioGroup>
              {paymentMethod === "credit_card" && (
                <div className="grid gap-4 mt-6">
                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Enter your card number"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="card-expiry">Expiry Date</Label>
                      <Input
                        id="card-expiry"
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="card-cvv">CVV</Label>
                      <Input
                        id="card-cvv"
                        type="text"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleNext}>Continue to Review</Button>
            </div>
          </div>
        )}
        {step === 4 && (
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
                        <img
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
                  <h3 className="text-lg font-semibold mb-2">
                    Delivery Information
                  </h3>
                  <div className="grid gap-2">
                    <p>
                      <span className="font-semibold">Name:</span>{" "}
                      {deliveryInfo.name}
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
                      {deliveryInfo.state} {deliveryInfo.zip},{" "}
                      {deliveryInfo.country}
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
                      {paymentMethod === "credit_card"
                        ? "Credit Card"
                        : paymentMethod === "paypal"
                        ? "PayPal"
                        : "Apple Pay"}
                    </p>
                    {paymentMethod === "credit_card" && (
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
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleSubmit}>Place Order</Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <CircleCheckIcon className="text-green-500 size-12" />
              <h2 className="text-2xl font-bold">Order Confirmed</h2>
              <p className="text-muted-foreground" />
            </div>
          </div>
        )}
      </div>
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
