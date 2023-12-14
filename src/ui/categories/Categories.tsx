'use client'
import useCategories from "@/hooks/useCategories"
import Link from "next/link"

const Categories = () => {

    const { data } = useCategories()
    console.log(data)
    return (
        <article>
            {data?.map((cat) => {
                return (
                    <Link href={`products/${cat}`} key={cat}>{cat}</Link>
                )
            })}
        </article>
    )
}

export default Categories