'use client'
import { imagesCategories } from "@/app/helpers";
import useCategories from "@/hooks/useCategories";
import upperFirst from "@/utils/UpperFirst";
import Image from 'next/image';
import Link from "next/link";

const Categories = () => {

    const { data } = useCategories()
    return (
        <article className="scrollerWrapper ">
            {data?.map((cat) => {
                return (
                    <div key={cat}>
                        <Link href={`products/${cat}`} key={cat}  >
                            <Image src={imagesCategories[cat]} alt={cat} width={200} height={78} />
                            <span >{upperFirst(cat)}</span>
                        </Link>
                    </div>
                )
            })}
        </article>
    )
}

export default Categories