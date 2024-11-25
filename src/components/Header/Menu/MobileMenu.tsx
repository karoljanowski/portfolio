
import { AnimatePresence, motion } from "framer-motion";
import useNavigation from "./useNavigation";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
    const menuVariants = {
        hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
        visible: { opacity: 1, backdropFilter: 'blur(8px)' },
    };
  
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
            <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="lg:hidden fixed inset-0 h-screen bg-black bg-opacity-60"
            >
                <div className="container mx-auto flex flex-col items-end justify-center h-full gap-6 px-4">
                    <MenuItem path="/#about" index={0}>About</MenuItem>
                    <MenuItem path="/projects" index={1}>Projects</MenuItem>
                    <MenuItem path="/#contact" index={2}>Contact</MenuItem>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    );
  };

  const MenuItem = ({ path, children, index }: { path: string, children: React.ReactNode, index: number }) => {
    const { handleRedirect } = useNavigation();

    const itemVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.1 * index } },
    };

    return (
        <motion.button 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => handleRedirect(path)} 
            className="text-gray-300 text-2xl py-1 px-4 rounded-md uppercase font-semibold"
        >
            {children}
        </motion.button>
    )
  }

  export default MobileMenu;