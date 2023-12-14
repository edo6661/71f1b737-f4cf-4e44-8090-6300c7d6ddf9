import { fetchProductCategories } from "@/api"
import getQueryClient from "@/utils/GetQueryClient"
import { dehydrate, useQuery } from "@tanstack/react-query"

const useCategories = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['Categories'],
        queryFn: fetchProductCategories,
    })
    return { data, isLoading, isError, error }
}

export const categoriesQueryClient = async () => {
    const queryClient = getQueryClient();
    queryClient.prefetchQuery({
        queryKey: ['Categories'],
        queryFn: fetchProductCategories,
    })
    return dehydrate(queryClient)
}

export default useCategories