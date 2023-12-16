import { fetchProducts } from "@/api";
import getQueryClient from "@/utils/GetQueryClient";
import { dehydrate, useQuery } from "@tanstack/react-query";

const useProducts = (skip: number) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['Products', skip],
        queryFn: () => fetchProducts(skip),
    })
    return { data, isLoading, isError, error }
}

export const productsQueryClient = async (skip: number) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['Products'],
        queryFn: () => fetchProducts(skip),
    })
    return dehydrate(queryClient)

}

export default useProducts