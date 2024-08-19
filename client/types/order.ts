// types/order.ts

export interface Customer {
  name: string;
  phone: string;
  email: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Order {
  id: number;
  customer: Customer;
  address: Address;
  instructions: string;
  status: "Ready for Delivery" | "Out for Delivery" | "Delivered";
}
