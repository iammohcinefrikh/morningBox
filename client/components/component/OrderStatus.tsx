import { FC } from "react";

interface OrderStatusProps {
  status: string;
  updatedAt: string;
  estimatedDelivery: string;
}

const OrderStatus: FC<OrderStatusProps> = ({
  status,
  updatedAt,
  estimatedDelivery,
}) => {
  const statusColor =
    status === "Pending"
      ? "bg-yellow-500"
      : status === "Shipped"
      ? "bg-blue-500"
      : "bg-green-500";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-lg font-medium mb-2">Order Status</h2>
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full ${statusColor}`} />
          <span className="text-gray-700 font-medium">{status}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">Last updated: {updatedAt}</p>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Estimated Delivery</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">{estimatedDelivery}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          Based on current order status
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
