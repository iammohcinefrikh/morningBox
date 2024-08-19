"use client";

import { useState, useEffect } from "react";
import { Order } from "@/types/order";
import { DeliveryOrderList } from "./DeliveryOrderList";
import { OrderDetails } from "./OrderDetails";
import { OrderHistory } from "./OrderHistory";

const initialOrders: Order[] = [
  {
    id: 1,
    customer: {
      name: "John Doe",
      phone: "+1 (555) 555-5555",
      email: "john@example.com",
    },
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    instructions: "Leave package at front door",
    status: "Ready for Delivery",
  },
  {
    id: 2,
    customer: {
      name: "Jane Smith",
      phone: "+1 (555) 555-5556",
      email: "jane@example.com",
    },
    address: {
      street: "456 Oak Rd",
      city: "Somewhere",
      state: "NY",
      zip: "54321",
    },
    instructions: "Ring doorbell and wait for response",
    status: "Ready for Delivery",
  },
  {
    id: 3,
    customer: {
      name: "Bob Johnson",
      phone: "+1 (555) 555-5557",
      email: "bob@example.com",
    },
    address: {
      street: "789 Elm St",
      city: "Elsewhere",
      state: "TX",
      zip: "98765",
    },
    instructions: "Leave package with neighbor if no one home",
    status: "Out for Delivery",
  },
  {
    id: 4,
    customer: {
      name: "Alice Williams",
      phone: "+1 (555) 555-5558",
      email: "alice@example.com",
    },
    address: {
      street: "321 Pine Rd",
      city: "Somewhere Else",
      state: "FL",
      zip: "54321",
    },
    instructions: "Signature required",
    status: "Delivered",
  },
];

export default function DeliveryDashboard() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderStatusUpdate = (
    orderId: number,
    newStatus: Order["status"]
  ) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  useEffect(() => {
    const socket = new WebSocket("wss://example.com/orders");
    socket.onmessage = (event) => {
      const updatedOrders: Order[] = JSON.parse(event.data);
      setOrders(updatedOrders);
    };
    return () => {
      socket.close();
    };
  }, []);

  const deliveryOrders = orders.filter((order) => order.status !== "Delivered");
  const completedOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className=" text-primary-foreground py-4 px-6">
        <h1 className="text-2xl text-primary font-bold">Delivery Dashboard</h1>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <DeliveryOrderList
          orders={deliveryOrders}
          onSelectOrder={setSelectedOrder}
          onUpdateOrderStatus={handleOrderStatusUpdate}
        />
        {selectedOrder && (
          <OrderDetails
            order={selectedOrder}
            onUpdateOrderStatus={handleOrderStatusUpdate}
          />
        )}
      </main>
      <OrderHistory
        completedOrders={completedOrders}
        onSelectOrder={setSelectedOrder}
      />
    </div>
  );
}
