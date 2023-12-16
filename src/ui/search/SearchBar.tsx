'use client'
import { searchVars } from "@/app/helpers";
import { useContextProvider } from "@/providers/ContextProvider";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { GoSearch } from "react-icons/go";


const SearchBar = () => {

    const { setIsSearch } = useContextProvider()

    const [title, setTitle] = useState("");

    const close = () => setIsSearch(false)

    const router = useRouter()
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        title.length && router.push(`/search?query=${title}`)
        setTitle('')
    }

    return (
        <form action="clickable" onSubmit={onSubmit} onMouseLeave={close}>
            <motion.div variants={searchVars}
                className=' searchBarNav clickable '
                initial="initial" animate="animate" exit="exit">
                <input type="text" className='w-full p-3 ' placeholder='Search...' onChange={(e) => setTitle(e.target.value)} value={title} />
                <button type="submit" className='absolute right-4 clickable'><GoSearch color="black" size={25} />
                </button>
            </motion.div>
        </form>
    )
}

export default SearchBar