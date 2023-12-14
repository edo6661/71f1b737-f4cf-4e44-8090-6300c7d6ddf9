import useSearch from "@/hooks/useSearch"

const SearchProduct = ({ title }: { title: string }) => {

    const { data } = useSearch(title)

    console.log(data)

    return (
        <div>SearchProduct</div>
    )
}

export default SearchProduct