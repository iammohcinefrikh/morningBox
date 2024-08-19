import { Order } from "@/types/order";
import { Button } from "@/components/ui/button";

interface DeliveryOrderListProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
  onUpdateOrderStatus: (orderId: number, newStatus: Order["status"]) => void;
}

export const DeliveryOrderList: React.FC<DeliveryOrderListProps> = ({
  orders,
  onSelectOrder,
  onUpdateOrderStatus,
}) => {
  return (
    <div className="bg-background rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Delivery Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/50"
            onClick={() => onSelectOrder(order)}
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
                      onUpdateOrderStatus(order.id, "Out for Delivery");
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
                        onUpdateOrderStatus(order.id, "Delivered");
                      }}
                    >
                      Delivered
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateOrderStatus(order.id, "Ready for Delivery");
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
  );
};
