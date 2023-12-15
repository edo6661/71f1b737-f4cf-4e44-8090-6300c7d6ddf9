
import { fetchProducts } from "@/api";
import getQueryClient from "@/utils/GetQueryClient";
import { dehydrate, useQuery } from "@tanstack/react-query";

const useProducts = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['Products'],
        queryFn: fetchProducts,
    })
    return { data, isLoading, isError, error }
}

export const productsQueryClient = async () => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['Products'],
        queryFn: fetchProducts,
    })
    return dehydrate(queryClient)

}

export default useProducts