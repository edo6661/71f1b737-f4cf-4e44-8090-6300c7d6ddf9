import HydratedProduct from "@/ui/product/HydratedProduct"

const ProductId = ({ params }: { params: { id: string } }) => {
    return (
        <section>
            <HydratedProduct id={params.id} />
        </section>
    )
}



export default ProductId