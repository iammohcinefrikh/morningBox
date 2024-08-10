/**
 * v0 by Vercel.
 * @see https://v0.dev/t/s69hCOSZTSp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [orders, setOrders] = useState([
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
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleOrderStatusUpdate = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };
  useEffect(() => {
    const socket = new WebSocket("wss://example.com/orders");
    socket.onmessage = (event) => {
      const updatedOrders = JSON.parse(event.data);
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
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Delivery Dashboard</h1>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-background rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Delivery Orders</h2>
          <ul className="space-y-4">
            {deliveryOrders.map((order) => (
              <li
                key={order.id}
                className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/50"
                onClick={() => setSelectedOrder(order)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{order.customer.name}</h3>
                    <p className="text-muted-foreground">
                      {order.address.street}, {order.address.city},{" "}
                      {order.address.state} {order.address.zip}
                    </p>
                  </div>
                  <div>
                    {order.status === "Ready for Delivery" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrderStatusUpdate(order.id, "Out for Delivery");
                        }}
                      >
                        Out for Delivery
                      </Button>
                    )}
                    {order.status === "Out for Delivery" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrderStatusUpdate(order.id, "Delivered");
                          }}
                        >
                          Delivered
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrderStatusUpdate(
                              order.id,
                              "Ready for Delivery"
                            );
                          }}
                        >
                          Cancel Delivery
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {selectedOrder && (
          <div className="bg-background rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="font-bold">Customer</h3>
                <p>{selectedOrder.customer.name}</p>
                <p className="text-muted-foreground">
                  {selectedOrder.customer.phone}
                </p>
                <p className="text-muted-foreground">
                  {selectedOrder.customer.email}
                </p>
              </div>
              <div>
                <h3 className="font-bold">Delivery Address</h3>
                <p>{selectedOrder.address.street}</p>
                <p>
                  {selectedOrder.address.city}, {selectedOrder.address.state}{" "}
                  {selectedOrder.address.zip}
                </p>
              </div>
              <div>
                <h3 className="font-bold">Special Instructions</h3>
                <p>{selectedOrder.instructions}</p>
              </div>
              <div className="flex justify-end gap-2">
                {selectedOrder.status === "Ready for Delivery" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOrderStatusUpdate(
                        selectedOrder.id,
                        "Out for Delivery"
                      );
                    }}
                  >
                    Out for Delivery
                  </Button>
                )}
                {selectedOrder.status === "Out for Delivery" && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrderStatusUpdate(selectedOrder.id, "Delivered");
                      }}
                    >
                      Delivered
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrderStatusUpdate(
                          selectedOrder.id,
                          "Ready for Delivery"
                        );
                      }}
                    >
                      Cancel Delivery
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6">
        <h2 className="text-xl font-bold mb-4">Order History</h2>
        <div className="grid gap-4">
          <div>
            <h3 className="font-bold">Completed Orders</h3>
            <ul className="space-y-2">
              {completedOrders.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between items-center bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedOrder(order)}
                >
                  <div>
                    <p className="font-bold">{order.customer.name}</p>
                    <p className="text-muted-foreground">
                      {order.address.street}, {order.address.city},{" "}
                      {order.address.state} {order.address.zip}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{order.status}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
