import { fetchProductById } from "@/api"
import getQueryClient from "@/utils/GetQueryClient"
import { dehydrate, useQuery } from "@tanstack/react-query"

const useProduct = (id: string) => {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['Product', id],
        queryFn: () => fetchProductById(id)
    })
    return { data, isLoading, isSuccess }
}

export const productQueryClient = async (id: string) => {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['Product', id],
        queryFn: () => fetchProductById(id)
    })
    return dehydrate(queryClient);

}

export default useProduct