'use client'
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";


const SearchBar = () => {

    const [title, setTitle] = useState("");

    const router = useRouter()
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        title.length && router.push(`search?query=${title}`)
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button>submit</button>
        </form>
    )
}

export default SearchBar