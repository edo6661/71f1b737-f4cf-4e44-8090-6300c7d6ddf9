import Products from "./Products";


const HydratedProducts = () => {
    // const { skip } = useContextProvider()
    return (
        // <HydrationBoundary state={productsQueryClient(skip)}>
        <Products />
        // </HydrationBoundary>
    )
}

export default HydratedProducts