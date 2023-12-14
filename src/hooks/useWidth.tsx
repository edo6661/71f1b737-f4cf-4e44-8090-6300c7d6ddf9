'use client'
import { useEffect, useState } from "react"

const useWidth = () => {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)

            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowWidth
}

export default useWidth 