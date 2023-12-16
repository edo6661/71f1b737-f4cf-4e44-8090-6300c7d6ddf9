
import { axiosAku } from "@/config";

// ! GET

export const fetchProducts = async (skip: number): Promise<Products> => {
  try {
    const { data } = await axiosAku.get(`?limit=20&skip=${skip}`);
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const { data } = await axiosAku.get(id);
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const fetchProductByTitle = async (title: string): Promise<Products> => {
  try {
    const { data } = await axiosAku.get(`search?q=${title}`);
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const fetchProductCategories = async (): Promise<string[]> => {
  try {
    const { data } = await axiosAku.get("categories");
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export const fetchProductByCategory = async (
  category: string,
): Promise<Products> => {
  try {
    const { data } = await axiosAku.get(`category/${category}`);
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

// ! POST

export const addProduct = async (newProduct: Product) => {
  try {
    const { data } = await axiosAku.post("/add", { ...newProduct });
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

// ! UPDATE
export const editProduct = async ({
  id,
  newProduct,
}: {
  id: string;
  newProduct: Product;
}) => {
  try {
    const { data } = await axiosAku.put(id, { ...newProduct });
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

// ! Delete

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axiosAku.delete(id);
    return data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};
