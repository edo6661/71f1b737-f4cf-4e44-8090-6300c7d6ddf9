import HydratedCategory from '../../../ui/category/HydratedCategory';

const page = ({ params }: { params: { category: string } }) => {
    return (
        <section>
            <HydratedCategory category={params.category} />
        </section>
    )
}

export default page