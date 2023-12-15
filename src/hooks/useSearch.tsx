import { fetchProductByTitle } from "@/api"
import getQueryClient from "@/utils/GetQueryClient"
import { dehydrate, useQuery } from "@tanstack/react-query"

const useSearch = (title: string) => {
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ['Search', title],
        queryFn: () => fetchProductByTitle(title)
    })
    return { data, isError, error, isLoading }
}

export const searchQueryClient = async (title: string) => {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['Search', title],
        queryFn: () => fetchProductByTitle(title)
    })
    return dehydrate(queryClient);

}

export default useSearch