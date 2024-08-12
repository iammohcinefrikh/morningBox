// /types/index.ts
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface DeliveryInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  notes?: string;
}
