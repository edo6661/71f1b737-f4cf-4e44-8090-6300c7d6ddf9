import upperFirst from "@/utils/UpperFirst";
import { AiOutlineStock } from 'react-icons/ai';
import { IoMdPricetags } from "react-icons/io";
import { MdBrandingWatermark, MdCategory, MdOutlineTitle } from "react-icons/md";

interface ProductDetailsProps {
    title: string;
    brand: string;
    category: string;
    stock: number;
    discountPercentage?: number;
    price: number;
    description: string;
    productPath?: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, brand, category, stock, discountPercentage, price, description, productPath }) => {
    return (
        <div className="wrapperDetailsSingleProduct">
            <div className=" col-span-2 relative ">
                <span className="self-start"><MdOutlineTitle /></span>
                <h2 className="title">{upperFirst(title)}</h2>
            </div>
            <div>
                <span><MdBrandingWatermark /> </span>
                <h2 className=" text-uniqueWord">{brand}</h2>
            </div>
            <div>
                <span><MdCategory /> </span>
                <h2>{upperFirst(category)}</h2>
            </div>
            <div>
                <span><AiOutlineStock /> </span>
                <h2>{stock}</h2>
            </div>
            <div>
                <span><IoMdPricetags /> </span>
                <p className=" line-through text-xs opacity-50">{discountPercentage}</p>
                <h2 className=" text-red-200">${price}</h2>
            </div>
            <div className=" col-span-2 pt-1">
                <h2>{description}</h2>
            </div>
        </div >
    );
};

export default ProductDetails;
