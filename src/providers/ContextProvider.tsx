'use client'
import { createContext, useContext, useState } from "react"

const Context = createContext({} as ContextType)

const ContextProvider = ({ children }: ChildrenType) => {

    const [image, setImage] = useState('')

    return (
        <Context.Provider value={{ image, setImage }}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider = () => useContext(Context)


export default ContextProvider