// components/OrderItems.tsx
import { FC } from "react";
import Image from "next/image";

interface OrderItem {
  name: string;
  price: string;
  imageUrl: string;
}

interface OrderItemsProps {
  items: OrderItem[];
}

const OrderItems: FC<OrderItemsProps> = ({ items }) => {
  return (
    <div>
      <h3 className="text-gray-700 font-medium mb-2">Items</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={item.imageUrl}
                alt="Product Image"
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
  );
};

export default OrderItems;
