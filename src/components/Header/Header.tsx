'use client'
import Menu from "./Menu";
import Socials from "./Socials";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Header = ({ loaded }: { loaded: boolean }) => {
    return (
        <motion.div className="absolute top-0 z-20 left-0 w-full" initial={{ opacity: 0, transform: 'translateY(-100%)' }} animate={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(-100%)' }} transition={{ duration: 0.5 }}>
            <div className='px-4 py-4 md:py-8 grid grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_2fr_1fr] items-center container mx-auto gap-2'>
                <Logo />
                <Menu />
                <Socials /> 
            </div>
        </motion.div>
    )
}

export default Header