import { fetchProductByTitle } from "@/api"
import getQueryClient from "@/utils/GetQueryClient"
import { dehydrate, useQuery } from "@tanstack/react-query"

const useSearch = (title: string) => {
    const { data } = useQuery({
        queryKey: ['Search', title],
        queryFn: () => fetchProductByTitle(title)
    })
    return { data }
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