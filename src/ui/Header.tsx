/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useContextProvider } from '@/providers/ContextProvider';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import SearchBar from './search/SearchBar';
const Header = () => {

    const pathName = usePathname()

    const { isSearch, setIsSearch } = useContextProvider()


    const toggleSearch = () => setIsSearch(prev => !prev)

    const rightNavElement = (
        <>
            <button onClick={toggleSearch}><GoSearch size={25} /></button>
            <Link href={'/addProduct'}>
                <IoMdAdd size={30} />
            </Link>
        </>
    )

    useEffect(() => {
        setIsSearch(false)
    }, [pathName])


    return (
        <>
            <nav>
                <div className="baseContainer flex justify-between items-center gap-8">
                    <div>
                        <Link href="/">
                            <Image className='hovered' src="/logo.png" alt="logo" width={200} height={150} />
                        </Link>
                    </div>
                    <div className='innerNav'>
                        {rightNavElement}
                    </div>
                </div>
                <AnimatePresence>
                    {isSearch && (
                        <SearchBar />
                    )}
                </AnimatePresence>
            </nav>

        </>

    )
}

export default Header