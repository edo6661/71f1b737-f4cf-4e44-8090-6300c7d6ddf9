import HydratedProduct from '@/ui/product/HydratedProduct';

const EditProduct = ({ params }: { params: { id: string } }) => {

    const { id } = params


    return (
        <section>
            <HydratedProduct id={id} />
        </section>
    )
}

export default EditProduct