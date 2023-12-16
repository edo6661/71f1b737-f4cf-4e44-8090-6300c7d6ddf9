'use client'
import { useSearchParams } from "next/navigation";
import HydratedSearch from '../../ui/search/HydratedSearch';

const Search = () => {

    const searchParams = useSearchParams()

    return (
        <section className="baseContainer">
            <HydratedSearch title={searchParams.get('query') ?? ''} />
        </section>
    )
}

export default Search