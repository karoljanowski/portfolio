
import { AnimatePresence, motion } from "framer-motion";
import useNavigation from "../../../hooks/useNavigation";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
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
                onClick={() => setIsOpen(false)}
                className="lg:hidden fixed inset-0 h-screen bg-black bg-opacity-60"
            >
                <div className="container mx-auto flex flex-col items-end justify-center h-full gap-6 px-4">
                    <MenuItem path="/#about" setIsOpen={setIsOpen} index={0}>About</MenuItem>
                    <MenuItem path="/projects" setIsOpen={setIsOpen} index={1}>Projects</MenuItem>
                    <MenuItem path="/#contact" setIsOpen={setIsOpen} index={2}>Contact</MenuItem>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    );
  };

  const MenuItem = ({ path, children, index, setIsOpen }: { path: string, children: React.ReactNode, index: number, setIsOpen: (isOpen: boolean) => void }) => {
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
            onClick={(e) => {
                e.stopPropagation();
                handleRedirect(path);
                setIsOpen(false);
            }} 
            className="text-gray-300 text-2xl py-1 px-4 rounded-md uppercase font-semibold"
        >
            {children}
        </motion.button>
    )
  }

  export default MobileMenu;