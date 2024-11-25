import { MenuIcon } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

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

            <DesktopMenu />
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default Menu;


