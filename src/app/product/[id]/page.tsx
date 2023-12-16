import HydratedProduct from "@/ui/product/HydratedProduct"

const ProductId = ({ params }: { params: { id: string } }) => {
    return (
        <section className="baseContainer">
            <HydratedProduct id={params.id} />
        </section>
    )
}



export default ProductId