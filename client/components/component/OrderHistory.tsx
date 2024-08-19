import { Order } from "@/types/order";

interface OrderHistoryProps {
  completedOrders: Order[];
  onSelectOrder: (order: Order) => void;
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({
  completedOrders,
  onSelectOrder,
}) => {
  return (
    <section className="bg-muted text-muted-foreground py-4 px-6">
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      <div className="grid gap-4">
        <div>
          <h3 className="font-bold">Completed Orders</h3>
          <ul className="space-y-2">
            {completedOrders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/50"
                onClick={() => onSelectOrder(order)}
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
    </section>
  );
};
