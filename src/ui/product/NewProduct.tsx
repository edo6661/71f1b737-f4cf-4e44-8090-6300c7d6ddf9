import Image from 'next/image';


const NewProduct = ({ title, brand, category, description, discountPercentage, price, rating, stock, images, cover }: Product & { cover?: string }) => {
    return (
        <div>
            <p>{title}</p>
            <p>{brand}</p>
            <p>{category}</p>
            <p>{description}</p>
            <p>{discountPercentage}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{stock}</p>
            {cover && <Image src={cover} alt={title} width={200} height={200} />}
        </div>
    )
}

export default NewProduct