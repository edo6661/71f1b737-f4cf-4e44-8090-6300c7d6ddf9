import HydratedProduct from '@/ui/product/HydratedProduct';

const EditProduct = ({ params }: { params: { id: string } }) => {

    const { id } = params


    return (
        <section className='baseContainer'>
            <HydratedProduct id={id} />
        </section>
    )
}

export default EditProduct