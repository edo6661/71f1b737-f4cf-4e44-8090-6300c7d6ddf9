'use client'
import useProductCategory from "@/hooks/useProductCategory"
import SingleProducts from "../products/SingleProducts"

const ProductCategory = ({ category }: { category: string }) => {

    const { data, isLoading } = useProductCategory(category)
    return (
        <article>
            <div className="wrapperProduct">
                {!isLoading && data?.products && data?.products.map(product =>
                    <SingleProducts key={product.id} {...product} />
                )}
            </div>
        </article>
    )
}

export default ProductCategory