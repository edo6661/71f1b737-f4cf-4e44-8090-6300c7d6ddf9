import { useContextProvider } from '@/providers/ContextProvider';
import Image from 'next/image';


const NewProduct = ({ title, brand, category, description, discountPercentage, price, rating, stock, images, cover }: Product & { cover?: string }) => {

    const { image } = useContextProvider()

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
            {image && <Image src={URL.createObjectURL(image)} alt={title} width={200} height={200} />}
        </div>
    )
}

export default NewProduct