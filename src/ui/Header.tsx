'use client'
import useWidth from "@/hooks/useWidth"
import Link from "next/link"

const Header = () => {

    const width = useWidth()


    return (
        <nav className="bg-red-500">
            <Link href="/">home</Link>
            <Link href="/addProduct">add product</Link>
            {width > 1000 && <p>lebih dari serebu</p>}
        </nav>
    )
}

export default Header