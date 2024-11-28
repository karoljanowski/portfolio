import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface DetailBoxProps {
    children?: React.ReactNode
    className?: string
}

export const DetailBox = ({ children, className }: DetailBoxProps) => {
    const variants = {
        hidden: { opacity: 0, y: 70 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    }

    return (
        <motion.div 
            className={twMerge(`backdrop-blur rounded-lg border border-gray-900 bg-black/40 p-4 lg:p-8`, className)}
            variants={variants}
        >
            {children}
        </motion.div>
    )
} 