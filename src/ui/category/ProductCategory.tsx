'use client'
import useProductCategory from "@/hooks/useProductCategory"

const ProductCategory = ({ category }: { category: string }) => {

    const { data } = useProductCategory(category)
    console.log(data)
    return (
        <div>ProductCategory</div>
    )
}

export default ProductCategory