// components/ShippingDetails.tsx
import { FC } from "react";

interface ShippingDetailsProps {
  method: string;
  address: string;
}

const ShippingDetails: FC<ShippingDetailsProps> = ({ method, address }) => {
  return (
    <div>
      <h3 className="text-gray-700 font-medium mb-2">Shipping</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Shipping Method</span>
          <span className="text-gray-700 font-medium">{method}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Shipping Address</span>
          <span className="text-gray-700 font-medium">{address}</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
