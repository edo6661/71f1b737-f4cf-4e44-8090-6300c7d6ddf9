import useSearch from "@/hooks/useSearch"
import SingleProducts from "../products/SingleProducts"

const SearchProduct = ({ title }: { title: string }) => {

    const { data, isLoading } = useSearch(title)

    return (
        <article>
            <h2 className="title mt-4"><span className=" text-uniqueWord">{data?.products.length}</span> Results found</h2>
            <div className="wrapperProduct">
                {!isLoading && data?.products && data?.products.map(product =>
                    <SingleProducts key={product.id} {...product} />
                )}
            </div>
        </article>
    )
}

export default SearchProduct