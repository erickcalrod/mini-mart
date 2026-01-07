const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not defined");
}

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE_URL}/api/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
