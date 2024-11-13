'use client'
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                className="p-3 order-1 ml-auto bg-gray-800 bg-opacity-50 backdrop-blur rounded-lg border border-gray-700 lg:hidden z-20"
                onClick={() => setIsOpen(!isOpen)}
            >
                <MenuIcon className="w-5 h-5 text-gray-300" />
            </button>

            <div className="hidden lg:flex items-center justify-center gap-10 py-2 px-4 sm:px-8 bg-gray-800 bg-opacity-50 backdrop-blur rounded-lg border border-gray-700 mx-auto">
                <Link className="text-gray-300 hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" href="#about">About</Link>
                <Link className="text-gray-300 hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" href="#projects">Projects</Link>
                <Link className="text-gray-300 hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" href="#contact">Contact</Link>
            </div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`lg:hidden fixed inset-0 h-screen bg-gray-800 bg-opacity-30 backdrop-blur`}
                >
                    <div className="container mx-auto flex flex-col items-end justify-center h-full gap-4 px-4">
                        <Link onClick={() => setIsOpen(false)} className="text-gray-300 text-lg py-1 px-4 rounded-md transition-all duration-300" href="#about">About</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-gray-300 text-lg py-1 px-4 rounded-md transition-all duration-300" href="#projects">Projects</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-gray-300 text-lg py-1 px-4 rounded-md transition-all duration-300" href="#contact">Contact</Link>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Menu;