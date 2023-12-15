'use client'
import { useSearchParams } from "next/navigation";
import HydratedSearch from '../../ui/search/HydratedSearch';

const Search = () => {

    const searchParams = useSearchParams()

    return (
        <section>
            <h1>search page</h1>
            <HydratedSearch title={searchParams.get('query') ?? ''} />
        </section>
    )
}

export default Search