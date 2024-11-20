"use client"

import { useState, useEffect } from "react"
import Loading from "../Loading"
import { AnimatePresence } from "framer-motion"
import Provider from "./Provider"


const Preloader = ({ children }: { children: React.ReactNode }) => {
    const [initialLoad, setInitialLoad] = useState(true)

    useEffect(() => {
        setInitialLoad(false)
    }, [])

    return (
        <>
            <AnimatePresence mode="sync">
                {initialLoad ? (
                    <Loading key="loading" />
                ) : (
                    <Provider>{children}</Provider>
                )}
            </AnimatePresence>
        </>
    )
}

export default Preloader