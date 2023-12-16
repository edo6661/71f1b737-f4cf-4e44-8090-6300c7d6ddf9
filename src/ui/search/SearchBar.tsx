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

    const router = useRouter()
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        title.length && router.push(`search?query=${title}`)
        setTitle('')
        setIsSearch(false)
    }

    return (
        <form action="" onSubmit={onSubmit} onMouseLeave={() => setIsSearch(false)}>
            <motion.div variants={searchVars}
                className=' w-full absolute z-10 -bottom-9 flex items-center '
                initial="initial" animate="animate" exit="exit">
                <input type="text" className='w-full p-3' placeholder='Search...' onChange={(e) => setTitle(e.target.value)} value={title} />
                <button type="submit" className='absolute right-0'><GoSearch color="black" size={25} />
                </button>

            </motion.div>
        </form>
    )
}

export default SearchBar