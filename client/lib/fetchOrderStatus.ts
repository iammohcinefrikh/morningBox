// lib/fetchOrderStatus.ts
export async function fetchOrderStatus(orderId: string) {
  const response = await fetch(
    `https://your-api-endpoint.com/orders/${orderId}`
  );
  const data = await response.json();
  return data;
}
