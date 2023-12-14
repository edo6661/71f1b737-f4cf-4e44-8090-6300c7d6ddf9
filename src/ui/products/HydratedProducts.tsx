import { productsQueryClient } from "@/hooks/useProducts";
import { HydrationBoundary } from "@tanstack/react-query";
import Products from "./Products";

const HydratedProducts = async () => {

    return (
        <HydrationBoundary state={productsQueryClient()}>
            <Products />
        </HydrationBoundary>
    )
}

export default HydratedProducts