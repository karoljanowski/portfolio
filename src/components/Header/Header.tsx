'use client'
import Menu from "./Menu";
import Socials from "./Socials";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname()
    const variants = {
        initial: { opacity: 0, transform: 'translateY(-100%)' },
        animate: { opacity: 1, transform: 'translateY(0)' }
    }
    return (
        <motion.div className={`${pathname === '/' ? 'fixed' : 'sticky'} top-0 z-20 left-0 w-full`} initial={'initial'} variants={variants} animate="animate" transition={{ duration: 0.5 }}>
            <div className='px-4 py-4 md:py-8 grid grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_2fr_1fr] items-center container mx-auto gap-2'>
                <Logo />
                <Menu />
                <Socials /> 
            </div>
        </motion.div>
    )
}

export default Header