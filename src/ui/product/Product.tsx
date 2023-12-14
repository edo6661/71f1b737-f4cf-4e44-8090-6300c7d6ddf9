'use client'
import useProduct from "@/hooks/useProduct";
import Link from 'next/link';

const Product = ({ id }: { id: string }) => {

    const { data } = useProduct(id)
    console.log(data)
    return (
        <article>
            <div>
                <Link href={`edit/${id}`}>Edit</Link>
                <p>{data?.title}</p>
            </div>
        </article>
    )
}

export default Product