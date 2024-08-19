import { FC } from "react";
import Image from "next/image";

interface OrderDetailsProps {
  items: { name: string; price: string; imageUrl: string }[];
  shippingMethod: string;
  shippingAddress: string;
}

const OrderDetails: FC<OrderDetailsProps> = ({
  items,
  shippingMethod,
  shippingAddress,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div>
        <h3 className="text-gray-700 font-medium mb-2">Items</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                  style={{ aspectRatio: "40/40", objectFit: "cover" }}
                />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="text-gray-700 font-medium">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-gray-700 font-medium mb-2">Shipping</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Shipping Method</span>
            <span className="text-gray-700 font-medium">{shippingMethod}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Shipping Address</span>
            <span className="text-gray-700 font-medium">{shippingAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
