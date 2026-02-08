export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  title: string;
  price: number;
  duration: number;
};
export type CartItem = Product;

export type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPrice: number;
};
