import upperFirst from "@/utils/UpperFirst"
import Image from "next/image"
import Link from "next/link"

const SingleProducts = ({ title, id, thumbnail }: Product) => {

    const upperTitle = upperFirst(title)

    return (
        <div>
            <div>
                <span >New</span>
                <h3 >{title.length > 17 ? upperTitle.slice(0, 20) + '...' : upperTitle}</h3>
            </div>
            <Link href={`/product/${id}`}>
                <Image width={400} height={173} src={thumbnail ?? ''} alt={upperTitle} />
            </Link>
        </div>

    )
}

export default SingleProducts