import { categoriesQueryClient } from "@/hooks/useCategories";
import { HydrationBoundary } from "@tanstack/react-query";
import Categories from './Categories';

const HydratedCategories = () => {
    return (
        <HydrationBoundary state={categoriesQueryClient()}>
            <Categories />
        </HydrationBoundary>
    )
}

export default HydratedCategories