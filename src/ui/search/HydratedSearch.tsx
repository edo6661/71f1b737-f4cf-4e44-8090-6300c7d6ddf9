import { searchQueryClient } from "@/hooks/useSearch";
import { HydrationBoundary } from "@tanstack/react-query";
import SearchProduct from './SearchProduct';

const HydratedSearch = ({ title }: { title: string }) => {

    return (
        <HydrationBoundary state={searchQueryClient(title)}>
            <SearchProduct title={title} />
        </HydrationBoundary>
    )
}

export default HydratedSearch