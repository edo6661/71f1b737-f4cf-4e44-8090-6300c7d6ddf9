import HydratedCategory from '../../../ui/category/HydratedCategory';

const page = ({ params }: { params: { category: string } }) => {
    return (
        <section className='baseContainer py-4'>
            <HydratedCategory category={params.category} />
        </section>
    )
}

export default page