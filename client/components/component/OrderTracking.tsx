// components/OrderTracking.tsx
import { FC } from "react";
import OrderStatus from "@/components/component/OrderStatus";
import EstimatedDelivery from "@/components/component/EstimatedDelivery";
import OrderItems from "@/components/component/OrderItems";
import ShippingDetails from "@/components/component/ShippingDetails";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface OrderTrackingProps {
  orderId: string;
  orderStatus: {
    status: string;
    updatedAt: string;
    estimatedDelivery: string;
  };
  items: {
    name: string;
    price: string;
    imageUrl: string;
  }[];
  shipping: {
    method: string;
    address: string;
  };
}

const OrderTracking: FC<OrderTrackingProps> = ({
  orderId,
  orderStatus,
  items,
  shipping,
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Order Tracking</h1>
          <div className="flex items-center gap-2">
            <PackageIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Order #{orderId}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OrderStatus
            status={orderStatus.status}
            updatedAt={orderStatus.updatedAt}
          />
          <EstimatedDelivery
            estimatedDelivery={orderStatus.estimatedDelivery}
          />
        </div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Order Details</h2>
          <Button variant="outline" size="sm">
            View Order
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <OrderItems items={items} />
          <ShippingDetails
            method={shipping.method}
            address={shipping.address}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;

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
