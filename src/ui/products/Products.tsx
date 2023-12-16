'use client'

import useProducts from "@/hooks/useProducts";
import { useContextProvider } from "@/providers/ContextProvider";
import { useEffect, useState } from "react";
import Button from "../styles/Button";
import SingleProducts from "./SingleProducts";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])

    const { skip, setSkip, } = useContextProvider()
    const { data } = useProducts(skip)

    const nextPage = () => {
        setSkip(prev => prev + 20)
    }

    const endSkip = data?.skip === 80

    useEffect(() => {
        data && setProducts(prev => [...prev, ...data.products])
    }, [data])

    return (
        <article>
            <div className="wrapperProduct">
                {products && products.map((product, i) =>
                    <SingleProducts key={`${product.id}_${i}`} i={i} {...product} />
                )}
                <Button disabled={endSkip} onClick={nextPage} className=" col-span-full w-full rounded-xl">{endSkip ? 'No more data' : 'Show More'}</Button>
            </div>

        </article>
    )
}


export default Products