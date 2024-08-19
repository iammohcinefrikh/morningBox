// components/EstimatedDelivery.tsx
import { FC } from "react";

interface EstimatedDeliveryProps {
  estimatedDelivery: string;
}

const EstimatedDelivery: FC<EstimatedDeliveryProps> = ({
  estimatedDelivery,
}) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Estimated Delivery</h2>
      <div className="flex items-center gap-2">
        <TruckIcon className="w-5 h-5 text-gray-500" />
        <span className="text-gray-700 font-medium">{estimatedDelivery}</span>
      </div>
      <p className="text-gray-500 text-sm mt-1">
        Based on current order status
      </p>
    </div>
  );
};

export default EstimatedDelivery;

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
