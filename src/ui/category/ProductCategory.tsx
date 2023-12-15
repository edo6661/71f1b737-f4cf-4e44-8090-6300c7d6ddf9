'use client'
import useProductCategory from "@/hooks/useProductCategory"

const ProductCategory = ({ category }: { category: string }) => {

    const { data } = useProductCategory(category)
    return (
        <div>ProductCategory</div>
    )
}

export default ProductCategory