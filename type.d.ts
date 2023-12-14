// ! Children
interface ChildrenType {
  children: React.ReactNode;
}

// ! Context
interface ContextType {
  test: string;
}

interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail?: string;
  images?: string[];
}

interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
