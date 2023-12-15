// ! Children
interface ChildrenType {
  children: React.ReactNode;
}

// ! Context
type ImageState<T> = T;

interface ContextType {
  image: ImageState;
  setImage: React.Dispatch<React.SetStateAction<ImageState>>;
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
