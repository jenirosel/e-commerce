export interface User {
  id: string;
  email: string;
  displayName: string;
}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number
}