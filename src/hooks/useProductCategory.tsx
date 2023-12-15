
import { fetchProductByCategory } from "@/api";
import getQueryClient from "@/utils/GetQueryClient";
import { dehydrate, useQuery } from "@tanstack/react-query";

const useProductCategory = (category: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['Category', category],
        queryFn: () => fetchProductByCategory(category),
    })
    return { data, isLoading, isError, error }
}

export const categoryQueryClient = async (category: string) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['Category', category],
        queryFn: () => fetchProductByCategory(category),
    })
    return dehydrate(queryClient)

}

export default useProductCategory