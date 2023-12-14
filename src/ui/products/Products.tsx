'use client'

import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import Link from 'next/link';

const Products = () => {

    const { data, isLoading } = useProducts()
    return (
        <article className="">
            {isLoading && <p>loading...</p>}

            {!isLoading && data?.products && data?.products.map(product =>
                <div key={product.id}>
                    <div>
                        <Link href={`product/${product.id}`}>
                            <Image className="rounded-xl "
                                width={500} height={300} src={product.thumbnail ?? ''} alt={product.title} />

                        </Link>
                    </div>
                    <p>{product.title}</p>
                </div>
            )}
        </article>
    )
}


export default Products