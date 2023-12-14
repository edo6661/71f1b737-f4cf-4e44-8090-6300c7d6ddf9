import { categoryQueryClient } from "@/hooks/useProductCategory";
import { HydrationBoundary } from "@tanstack/react-query";
import ProductCategory from './ProductCategory';

const HydratedCategory = ({ category }: { category: string }) => {
    return (
        <HydrationBoundary state={categoryQueryClient(category)}>
            <ProductCategory category={category} />
        </HydrationBoundary>
    )
}

export default HydratedCategory