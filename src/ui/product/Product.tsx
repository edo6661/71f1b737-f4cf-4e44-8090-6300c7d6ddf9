'use client'
import useProduct from "@/hooks/useProduct";
import SingleProduct from './SingleProduct';

const Product = ({ id }: { id: string }) => {

    const { data } = useProduct(id)

    return (
        <article className="">
            {data && <SingleProduct {...data} />}
        </article>
    )
}

export default Product