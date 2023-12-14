'use client'
import { createContext, useContext, useState } from "react"

const Context = createContext({} as ContextType)

const ContextProvider = ({ children }: ChildrenType) => {

    const [test] = useState("test")

    return (
        <Context.Provider value={{ test }}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider = () => useContext(Context)


export default ContextProvider