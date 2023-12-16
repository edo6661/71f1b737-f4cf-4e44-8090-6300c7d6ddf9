// ! Children
interface ChildrenType {
  children: React.ReactNode;
}

// ! Context
type ImageState<T> = T;

interface ContextType {
  image: ImageState;
  setImage: React.Dispatch<React.SetStateAction<ImageState>>;
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  queryClient: QueryClient;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
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

interface ProductWithDeletion extends Product {
  isDeleted: boolean;
  deletedOn: string;
}
