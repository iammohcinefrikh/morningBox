"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  const [orderStatus, setOrderStatus] = useState({
    status: "Pending",
    updatedAt: new Date().toLocaleString(),
    estimatedDelivery: "2023-06-15",
  });
  useEffect(() => {
    const socket = new WebSocket("wss://your-websocket-endpoint.com");
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOrderStatus(data);
    };
    return () => {
      socket.close();
    };
  }, []);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Order Tracking</h1>
          <div className="flex items-center gap-2">
            <PackageIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Order #12345</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Order Status</h2>
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full ${
                  orderStatus.status === "Pending"
                    ? "bg-yellow-500"
                    : orderStatus.status === "Shipped"
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
              />
              <span className="text-gray-700 font-medium">
                {orderStatus.status}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Last updated: {orderStatus.updatedAt}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Estimated Delivery</h2>
            <div className="flex items-center gap-2">
              <TruckIcon className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">
                {orderStatus.estimatedDelivery}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Based on current order status
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Order Details</h2>
          <Button variant="outline" size="sm">
            View Order
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Items</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={40}
                    height={40}
                    className="rounded-md"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <span className="text-gray-700">Acme Headphones</span>
                </div>
                <span className="text-gray-700 font-medium">$99.99</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={40}
                    height={40}
                    className="rounded-md"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <span className="text-gray-700">Acme Backpack</span>
                </div>
                <span className="text-gray-700 font-medium">$59.99</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Shipping</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Shipping Method</span>
                <span className="text-gray-700 font-medium">
                  Standard Delivery
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Shipping Address</span>
                <span className="text-gray-700 font-medium">
                  123 Main St, Anytown USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
