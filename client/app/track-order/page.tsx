"use client";

import { useState, useEffect } from "react";
import OrderStatus from "@/components/component/OrderStatus";
import OrderDetails from "@/components/component/OrderDetails";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const TrackOrderPage = () => {
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

  const orderItems = [
    { name: "Acme Headphones", price: "$99.99", imageUrl: "/placeholder.svg" },
    { name: "Acme Backpack", price: "$59.99", imageUrl: "/placeholder.svg" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Order Tracking</h1>
          <div className="flex items-center gap-2">
            <span className="text-primary font-medium">Order #12345</span>
          </div>
        </div>
        <OrderStatus {...orderStatus} />
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Order Details</h2>
          <Button variant="outline" size="sm">
            View Order
          </Button>
        </div>
        <OrderDetails
          items={orderItems}
          shippingMethod="Standard Delivery"
          shippingAddress="123 Main St, Anytown USA"
        />
      </div>
    </div>
  );
};

export default TrackOrderPage;
