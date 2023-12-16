import { useContextProvider } from "@/providers/ContextProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProductActions from './ProductActions';
import ProductDetails from "./ProductDetails";

const SingleProduct = ({ id, title, brand, description, rating, stock, price, discountPercentage, category, thumbnail }: Product) => {

    const { image } = useContextProvider()

    const pathName = usePathname()

    const productPath = pathName.includes("product")

    const src = productPath ? thumbnail : image && URL.createObjectURL(image)

    return (
        <div className="wrapperSingleProduct">
            <div className=" col-span-2 md:col-span-1">
                <Image priority src={src} alt={title} width={500} height={500} />
            </div>
            <ProductDetails
                title={title}
                brand={brand}
                category={category}
                stock={stock}
                discountPercentage={discountPercentage}
                price={price}
                description={description}
                productPath={productPath}
            />
            <ProductActions id={id?.toString() ?? ''} productPath={productPath} />
        </div >
    )
}

export default SingleProduct