'use client'
import { useQueryClient } from "@tanstack/react-query"
import { createContext, useContext, useState } from "react"

const Context = createContext({} as ContextType)

const ContextProvider = ({ children }: ChildrenType) => {

    const [image, setImage] = useState(undefined)
    const [skip, setSkip] = useState(0)
    const queryClient = useQueryClient()
    const [isSearch, setIsSearch] = useState(false)



    return (
        <Context.Provider value={{
            image, setImage, skip, setSkip, queryClient, isSearch, setIsSearch
            // products, setProducts
        }}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider = () => useContext(Context)


export default ContextProvider