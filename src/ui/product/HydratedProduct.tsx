'use client'

import { productQueryClient } from "@/hooks/useProduct";
import { HydrationBoundary } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Product from "./Product";
import EditProduct from "./edit/EditProduct";

const HydratedProduct = ({ id }: { id: string }) => {

    const pathname = usePathname()

    const optionalComponent = pathname.includes('edit') ? <EditProduct id={id} /> : <Product id={id} />

    return (
        <HydrationBoundary state={productQueryClient(id)}>
            {optionalComponent}
        </HydrationBoundary>
    )
}

export default HydratedProduct