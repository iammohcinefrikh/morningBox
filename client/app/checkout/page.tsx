"use client";

import { useState } from "react";

import { CartItem, DeliveryInfo } from "@/types";
import DeliveryInformation from "@/components/component/DeliveryInformation";
import CartSummary from "@/components/component/CardSummary";
import PaymentMethod from "@/components/component/PaymentMethod";
import OrderReview from "@/components/component/OrderReview";
import OrderConfirmed from "@/components/component/OrderConfirmed";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Cozy Blanket", price: 29.99, quantity: 1 },
    { id: 2, name: "Autumn Mug", price: 12.99, quantity: 2 },
    { id: 3, name: "Fall Fragrance Candle", price: 16.99, quantity: 1 },
  ]);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
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

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

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

  return (
    <div className="container mx-auto my-12 px-4 md:px-6 lg:px-8">
      <div className="grid gap-8">
        {step === 1 && <CartSummary cart={cart} onNext={handleNext} />}
        {step === 2 && (
          <DeliveryInformation
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {step === 3 && (
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cardExpiry={cardExpiry}
            setCardExpiry={setCardExpiry}
            cardCvv={cardCvv}
            setCardCvv={setCardCvv}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {step === 4 && (
          <OrderReview
            cart={cart}
            deliveryInfo={deliveryInfo}
            paymentMethod={paymentMethod}
            cardNumber={cardNumber}
            cardExpiry={cardExpiry}
            onNext={handleSubmit}
            onPrevious={handlePrevious}
          />
        )}
        {step === 5 && <OrderConfirmed />}
      </div>
    </div>
  );
}
