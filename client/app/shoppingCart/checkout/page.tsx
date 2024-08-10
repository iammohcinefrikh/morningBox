/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ll6YB9WLFJl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [radioValue, setRadioValue] = useState("credit-card");
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={64}
                  height={64}
                  className="rounded-md"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div>
                  <h3 className="font-semibold">Acme Circles T-Shirt</h3>
                  <p className="text-muted-foreground">
                    Color: Black | Size: M
                  </p>
                </div>
              </div>
              <p className="font-semibold">$49.99</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={64}
                  height={64}
                  className="rounded-md"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
                <div>
                  <h3 className="font-semibold">Acme Sunglasses</h3>
                  <p className="text-muted-foreground">Color: Black</p>
                </div>
              </div>
              <p className="font-semibold">$29.99</p>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">$79.98</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Shipping</p>
              <p className="font-semibold">$5.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Tax</p>
              <p className="font-semibold">$6.40</p>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">Total</p>
              <p className="font-bold text-lg">$91.38</p>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter your city" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Enter your state" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="zip">Zip Code</Label>
                <Input
                  id="zip"
                  type="number"
                  placeholder="Enter your zip code"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="instructions">Delivery Instructions</Label>
              <Textarea
                id="instructions"
                placeholder="Enter any delivery instructions"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
        <div className="space-y-4">
          <RadioGroup value={radioValue} onValueChange={setRadioValue}>
            <div className="flex items-center gap-4">
              <RadioGroupItem
                id="credit-card"
                value="credit-card"
                defaultChecked
              />
              <Label htmlFor="credit-card" className="flex items-center gap-2">
                <div className="h-6 w-6" />
                Credit Card
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <RadioGroupItem id="paypal" value="paypal" />
              <Label htmlFor="paypal" className="flex items-center gap-2">
                <div className="h-6 w-6" />
                PayPal
              </Label>
            </div>
            <div className="flex items-center gap-4">
              <RadioGroupItem id="cash" value="cash" />
              <Label htmlFor="cash" className="flex items-center gap-2">
                <div className="h-6 w-6" />
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
                  radioValue === "credit-card" ? "block" : "hidden"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="Enter your card number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiration-date">Expiration Date</Label>
                    <Input id="expiration-date" placeholder="MM/YY" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="CVV" />
                  </div>
                  <div>
                    <Label htmlFor="name-on-card">Name on Card</Label>
                    <Input id="name-on-card" placeholder="Enter name on card" />
                  </div>
                </div>
              </div>
              <div
                className={`${radioValue === "paypal" ? "block" : "hidden"}`}
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
              <div className={`${radioValue === "cash" ? "block" : "hidden"}`}>
                <div className="flex items-center gap-4">
                  <div className="h-6 w-6 text-primary" />
                  <p>You will pay with cash upon delivery.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button size="lg">Place Order</Button>
      </div>
    </div>
  );
}
