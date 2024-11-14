'use client'
import { motion } from "framer-motion";
import Logo from "./Header/Logo"

const Loading = () => {

    return (
        <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className='h-[100svh] w-screen fixed top-0 left-0 bg-black z-50 glow-effect-right glow-effect-middle overflow-hidden'>
            <TextCircle />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Logo scale={true} />
            </div>
            <div className='text-gray-300 text-lg animate-pulse absolute w-full text-center bottom-14'>Loading...</div>
        </motion.div>
    )
}


const TextCircle = () => {
    const text = " KAROL JANOWSKI | FRONTEND DEVELOPER |";
    
    const getCharacterStyle = (index: number, totalChars: number) => ({
        transform: `
            translate(-50%, -50%)
            rotate(${index * (360 / totalChars)}deg)
            translateY(-150px)
        `
    });

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-[400px] h-[400px] animate-spin-slow">
                {text.split('').map((char, index) => (
                    <span
                    key={index}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                    style={getCharacterStyle(index, text.length)}
                >
                    {char}
                </span>
                ))}
            </div>
        </div>
    );
}

export default Loading